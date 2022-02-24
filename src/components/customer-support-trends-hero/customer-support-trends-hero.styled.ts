import { Link } from "gatsby"
import styled from "styled-components"
import media from "../../styles/media"

export const StyledSection = styled.section`
  padding: 115px 15px;
  color: #ffffff;
  background-color: #291e45;
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0% 100%);

  .TEI-player-wrapper {
    position: relative;
    padding-top: 56.25%;
  }

  .TEI-react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  .react-player > div {
    position: absolute;
  }

  ${media.lessThan("lg")`
    padding-bottom: 90px;
    padding-top: 90px;
  `}
  ${media.lessThan("sm")`
    text-align: center;
    padding-top: 50px;
  `}
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 60px;

  ${media.lessThan("lg")`
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  `}
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 10px 0 20px 0;
  width: 75%;
  font-weight: 300;

  ${media.lessThan("sm")`
    margin: 10px auto 20px auto;
  `}
`

export const Button = styled(Link)`
  background: #dff500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #291e45;
  border: none;
  border-radius: 21px;
  outline: none;
  width: max-content;
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;

  ${media.lessThan("sm")`
      margin: 0 auto;
      margin-bottom: 6rem;
    `}
`
