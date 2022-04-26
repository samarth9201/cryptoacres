import React from "react";
import { Button } from "../Buttonelement";
import {
  SectionContainer,
  SectionWrapper,
  SectionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./Aboutuselements";
import { useNavigate } from "react-router-dom";

const Aboutsection = ({
  lightBg,
  id,
  buttonlink,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate(buttonlink);
  }
  return (
    <>
      <SectionContainer lightBg={lightBg} id={id}>
        <SectionWrapper>
          <SectionRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    onClick={handleButtonClick}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Aboutsection;
