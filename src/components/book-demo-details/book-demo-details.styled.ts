import styled from 'styled-components';
import media from "../../styles/media";

export const Container = styled.div`
  padding: 60px 33px 65px 123px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  a {
    max-width: 270px;
    max-height: 40px;
    width: 100%;
    
    ${media.lessThan("md")`
    max-width: 140px;
    margin-bottom: 70px;
    `};
  }
  
  img {
    width: 100%;
  }

  ${media.lessThan("lg")`
    padding: 60px 33px 65px 70px;
  `};
  ${media.lessThan("md")`
    padding: 60px 33px 65px 30px;
  `};
  ${media.lessThan("sm")`
    padding: 20px 15px 0;
    height: auto;
  `};
`;

export const InnerContainer = styled.div`
  max-height: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  ${media.lessThan("sm")`
      max-height: unset;
  `};
`

export const Details = styled.div`
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  h1 {
    font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: var(--text);
    font-weight: 600;
    font-size: 42px;
    line-height: 53px;
    margin: 10px 0 35px 0;
    max-width: 600px;
    
    ${media.lessThan("lg")`
      font-size: 37px;
    `};
    ${media.lessThan("md")`
      font-size: 30px;
      line-height: 39px;
      margin: 5px 0 20px 0;
      width: 100%;
  `};
  }
  h3 {
    color: var(--links);
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    
    ${media.lessThan("lg")`
      font-size: 20px;
      line-height: 25px;
    `};
    ${media.lessThan("md")`
      font-size: 15px;
      line-height: 20px;
    `};
  }
  h5 {
    color: var(--text);
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    ${media.lessThan("md")`
      font-size: 15px;
      line-height: 16px;
      width: 100%;
    `};
  }
`
export const Brands = styled.div`
    color: var(--text);
  h2 {
    font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 25px;
  }
  div {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(45px, 1fr) );
    grid-gap: 20px;
    align-items: center;

    img {
      margin-bottom: 0;
      max-height: 36px;
      min-width: 45px;
    }
    
    ${media.lessThan("sm")`
        margin-bottom: 70px;
    `};
  }
  ${media.lessThan("md")`
      margin-top: 70px;
  `};

`
