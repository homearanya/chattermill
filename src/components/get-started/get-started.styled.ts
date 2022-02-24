import styled from "styled-components"
import media from "../../styles/media"

export const StyledSection = styled.section`
  padding: 200px 50px;
  color: #291e45;
  background-color: #dff500;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  margin: 90px 0;
  text-align: center;

  ${media.lessThan("lg")`
    padding: 150px 15px;
    `}
`
export const Title = styled.h1`
  max-width: 800px;
  font-style: normal;
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 6rem;
  margin: 0 auto;
  margin-bottom: 5rem;

  ${media.lessThan("lg")`
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
  `}
  ${media.lessThan("sm")`
    margin-bottom: 2rem;
  `}
`
export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 2.9rem;
  line-height: 3.4rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 300;

  ${media.lessThan("lg")`
    font-size: 2rem;
    line-height: 3rem;
    max-width: 600px;
  `}
  ${media.lessThan("sm")`
    font-size: 1.6rem;
    line-height: 2.5rem;
  `}
`
export const Button = styled.a`
  text-decoration: none;
  display: block;
  width: max-content;
  font-size: 2rem;
  padding: 1.5rem 4rem;
  color: #fff;
  background-color: #0fc2ed;
  border-radius: 21px;
  border: none;
  margin: 5rem auto 2rem auto;
  cursor: pointer;
  font-weight: 300;

  ${media.lessThan("lg")`
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  `}
  ${media.lessThan("sm")`
    font-size: 1.6rem;
    max-width: 75%;
    margin-top: 2rem;
  `}
`
