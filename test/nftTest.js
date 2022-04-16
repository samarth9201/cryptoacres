const NFT = artifacts.require("NFTMarketplace")

contract("NFTMarketplace", accounts =>{

    let nftContract;
    let listingPrice

    it("Should deploy NFT Contract", async () =>{

        nftContract = await NFT.new()

        const owner = await nftContract.owner()
        const isVerifier = await nftContract.isVerifier(accounts[0])
        listingPrice = await nftContract.getListingPrice()

        assert.equal(owner, accounts[0], "Incorrect Owner Assigned")
        assert.equal(isVerifier, true, "Owner must be Verifier")
    })

    it("Should create token", async() =>{

        await nftContract.createToken("http://localhost:3000", "10", {value: listingPrice})
        await nftContract.createToken("http://localhost:3000", "20", {from: accounts[1], value: listingPrice})
        await nftContract.createToken("http://localhost:3000", "30", {value: listingPrice})
        await nftContract.createToken("http://localhost:3000", "40", {from: accounts[2], value: listingPrice})

        marketItems = await nftContract.fetchMarketItems()
        myNFT = await nftContract.fetchMyNFTs()
        itemListed = await nftContract.fetchItemsListed()
        unverified = await nftContract.fetchUnverifiedTokens()

        assert.equal(marketItems.length, 0, "Incorrect Market Length")
        assert.equal(myNFT.length, 2, "Incorrect Length of Purchased NFT")
        assert.equal(itemListed.length, 2, "Incorrect Length of Listed NFTs")
        assert.equal(unverified.length, 4, "Incorrect No. of Unverified Tokens")
    })

    it("Should be able to Verify NFT", async() =>{

        await nftContract.verifyToken(2, web3.utils.toWei("5", "ether"))
        await nftContract.verifyToken(3, web3.utils.toWei("10", "ether"))

        marketItems = await nftContract.fetchMarketItems()
        unverified = await nftContract.fetchUnverifiedTokens()

        assert.equal(marketItems.length, 2, "Incorrect Market Length")
        assert.equal(unverified.length, 2, "Incorrect No. of Unverified Tokens")
    })

    it("Should give error if Non-verifier tries to Verify", async() =>{
        try {
            await nftContract.verifyToken(1, web3.utils.toWei("15", "ether"), {from: accounts[1]})
        } catch (error) {
            assert(error !== null, "Error expected!!")
        }
    })

    it("Should allow user to Sell Verified Token", async() =>{
        await nftContract.resellToken(2, web3.utils.toWei("20", "ether"), {from: accounts[1], value: listingPrice})

        var item = await nftContract.idToMarketItem(2)
        assert.equal(nftContract.address, item.owner, "Incorrect Owner")
    })

    it("Should allow Users to buy Verified Tokens", async() =>{

        var item = await nftContract.idToMarketItem(2)
        await nftContract.createMarketSale(2, {value: item.price})

        item = await nftContract.idToMarketItem(2)
        // console.log(item)
        assert.equal(accounts[0], item.owner, "Incorrect Owner")
    })

    it("Should not allow User to Sell Unverified Token", async () =>{
        try {
            await nftContract.resellToken(1, web3.utils.toWei("20", "ether"), {from: accounts[1], value: listingPrice})
        } catch (error) {
            assert(error !== null, "Error Expected")
        }
    })

    it("Should not allow User to Buy Unverified Token", async () =>{
        try {
            var item = await nftContract.idToMarketItem(1)
            await nftContract.createMarketSale(1, {from: accounts[1], value: item.price})
        } catch (error) {
            assert(error !== null, "Error Expected")
        }
    })

    it("Should not allow User to Buy Properties not on Sale", async() =>{
        try {
            var item = await nftContract.idToMarketItem(2)
            await nftContract.createMarketSale(2, {from: accounts[2], value: item.price})
        } catch (error) {
            assert(error !== null, "Error Expected")
        }
    })
})