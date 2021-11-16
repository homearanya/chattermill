import { Link } from 'gatsby';
import styled from 'styled-components';
import media from '../../styles/media';

export const StyledSection = styled.section`
  text-align: center;
`;
export const Title = styled.h1`
  max-width: 750px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 62px;
  margin: 0 auto;
  padding-top: 50px;

  ${media.lessThan("lg")`
    max-width: 50%;
    font-size: 2.8rem;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  `}
  ${media.lessThan("sm")`
    max-width: 80%;
  `}
`;
export const Button = styled(Link)`
  width: max-content;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  color: #291E45;
  background-color: #DFF500;
  border-radius: 21px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;

  ${media.lessThan("lg")`
    font-size: 1.8rem;
  `}
  ${media.lessThan("sm")`
    font-size: 1.6rem;
  `}
`;
