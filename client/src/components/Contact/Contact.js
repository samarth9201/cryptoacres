import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 800px;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    
    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height:1200px;
    }
    
`;

export const ContactWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
align-items: center;
grid-gap: 20px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`;


export const HeadingH5 = styled.h5`
            font-size: 1.3rem;
            color: #000;
            margin-bottom: -10px;
            margin-top: 80px;
            text-align: center;
            font-weight:800;
            
            @media screen and (max-width: 480px){
                font-size: 1rem;
            }
        `;

        export const HeadingH2 = styled.h2`
        font-size: 2.5rem;
        color: #0D6EFD;
        text-align: center;
        margin-bottom: 30px;
        text-transform: uppercase;
        font-weight:800;
        
        @media screen and (max-width: 480px){
            font-size: 2rem;
        }
    `;


    export const ContactDetails = styled.h4`
    font-size: 1rem;
    color: #000;
    font-weight:900;
    text-align: center;
    
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`;

export const ContactDetails1 = styled.h5`
font-size: 0.9rem;
color: #000;
font-weight:900;
text-align: center;

@media screen and (max-width: 480px){
    font-size: 1rem;
}
`;