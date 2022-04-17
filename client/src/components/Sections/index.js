import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './Serviceelements';
import Icon1 from '../../images/png-5.png';
import Icon2 from '../../images/png-6.png';
import Icon3 from '../../images/png-7.png';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and Increase your revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Create Transparency</ServicesH2>
                <ServicesP>We help create a trustworthy environment for you and the client.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Save on Paperwork</ServicesH2>
                <ServicesP>We help issue transactions through Smart contracts.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
