import React, { useEffect } from "react";
import web from "../../src/images/crypto.png";
import "./Home.css";

function Home() {
    return <>
        <section id="header" className=" ">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mt-lg-5 pt-3 pt-lg-0 order-1 order-lg-1">
                                <h6 className="Marketplace my-4">
                                    Explore NFT Marketplace
                                </h6>
                                <h1 className="Header">
                                    <strong>DISCOVER YOUR NEW HOME <span style={{color: "blue"}}>NFTS</span></strong>
                                </h1>
                                <h6 className="Description my-4">
                                    Your very own real estate digital
                                    marketplace for crytpo-collectibles
                                    and non-fungible tokens (NFTs)
                                </h6>
                                <div className="mt-5">
                                    <a href=" " className="btn-place-bid">PLACE YOUR BID</a>
                                </div>
                                <div className="mt-5">
                                    <a href=" " className="btn-get-started">GET STARTED</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-2 order-lg-2 header-img">
                                <img src={web} className="container avatar" alt="homepage"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Home;