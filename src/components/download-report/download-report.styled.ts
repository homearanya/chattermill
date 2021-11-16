import { Link } from "gatsby"
import { Container } from "react-awesome-styled-grid"
import styled from "styled-components"
import media from "../../styles/media"
import { $colorSecondary } from "../../styles/variables"
import CXCTA from "../../images/CX-CTA.svg"

export const StyledContainer = styled(Container)`
  padding-top: 103px;
  padding-bottom: 223px;

  ${media.lessThan("md")`
    padding-bottom: 123px;
  `};
`

export const HeaderLogo = styled.img`
  max-width: 216px;
`

export const Heading = styled.h1`
  font-size: 30px;
  line-height: 39px;
  margin: 27px 0;
`

export const SubHeading = styled.h2`
  font-size: 15px;
  line-height: 20px;
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-top: 17px;
`

export const FormContainer = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;

  border: 1px solid #979797;
  width: 100%;
  height: 100%;
  padding: 23px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    position: relative;
    margin-bottom: 33px;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 18%;
      height: 3px;
      background-color: #ddf22f;
    }
  }
`

export const StyledInput = styled.input`
  && {
    display: block;
    font-size: 1.6rem;
    color: #434c5e;
    width: calc(100% - 23px);
    margin: 0 auto;
    padding: 1rem 0 1rem 1rem;
    border: solid 1px #979797;
    box-shadow: 0px 2px 4px #d5daf0;
    background-color: transparent !important;
    text-align: left;
    outline: 0;
    transition: border-color 200ms cubic-bezier(0.325, 0.09, 0, 1.28),
      color 200ms cubic-bezier(0.325, 0.09, 0, 1.28);
    :focus {
      outline: 0;
    }
    ::placeholder {
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
      color: #9b9b9b;
    }
  }
`

export const ControlFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: "1fr";
  grid-gap: 2rem;

  ${media.lessThan("sm")`
  grid-template-columns: repeat(1,1fr);
`}
`

export const CheckboxArea = styled.div`
  /* max-width: 40rem; */
  margin: 1rem auto 1rem;
  width: calc(100% - 23px);
  padding-left: 1rem;

  .checkbox {
    width: 85%;
    margin-bottom: 0;
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    display: grid;
    grid-template-columns: 1fr max-content;
  }

  ${media.lessThan("sm")`
    margin: 1rem 0 2rem;
  `};
`

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  width: 11px;
  height: 11px;
  margin-left: 1.5rem;
  border: solid 1px #2f3945;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 2px;
    left: 3px;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 5px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    -webkit-transform: rotate(45deg);
  }

  &:checked {
    background: #327dff;
    outline: none;
    border: 1px solid rgba(50, 125, 255, 1);
  }
`

export const StyledBoxLabel = styled.label`
  color: ${$colorSecondary};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.3rem;

  strong {
    font-weight: 700;
  }
`

export const LogosGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(120px, 1fr) );
  justify-items: center;
  width: 100%;
  gap: 25px 45px;

  svg,
  img {
    max-height: 28px;
    width: 100%;
    object-fit: contain;
    align-self: center;
  }

  ${media.lessThan("md")`
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 5rem;
    gap: 15px;
  `};
`

export const Button = styled(Link)`
  background: #31295c;
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  padding: 10px 65px;
  text-decoration: none;
  border-radius: 10px;
  display: inline-block;
  width: max-content;
  margin: 40px auto;
`

export const CTACX = styled.div`
  background-image: url(${CXCTA});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  padding: 71px 0 91px;

  display: flex;
  flex-direction: column;

  ${media.lessThan("md")`
      background-size: cover;
  `};

  h2 {
    font-family: Raisonne;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    text-align: center;

    ${media.lessThan("md")`
      font-size: 2.5rem;
    `};
  }
`

export const CxButton = styled(Link)`
  font-family: Euclid Square;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background: #0fc2ee;
  text-decoration: none;
  padding: 16px 37px;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 35px;
`
