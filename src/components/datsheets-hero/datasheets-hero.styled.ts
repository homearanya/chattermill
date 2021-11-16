import styled from 'styled-components';
import media from '../../styles/media';

export const StyledSection = styled.section`
  padding: 115px 15px;
  color: #FFFFFF;
  background-color: #291E45;
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0% 100%);
  text-align: center;

  ${media.lessThan("lg")`
    padding-bottom: 90px;
    padding-top: 90px;
  `}
  ${media.lessThan("sm")`
    text-align: center;
    padding-top: 50px;
  `}
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 6rem;
  line-height: 10rem;
  width: 75%;
  margin: 0 auto;

  ${media.lessThan("lg")`
    font-size: 3.8rem;
    line-height: 4.2rem;
    margin-bottom: 1.5rem;
  `}
  ${media.lessThan("sm")`
    font-size: 3rem;
    line-height: 3.4rem;
    width: 90%;
  `}
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 21px auto 20px auto;
  width: 75%;
  font-weight: 300;

  ${media.lessThan("sm")`
    width: 90%;
  `}
`;
