import styled from "styled-components";
import { BigHeading, SmallHeading } from "../../styles/common.styled";
import { Container } from "react-awesome-styled-grid";
import { $colorPrimary } from "../../styles/variables";
import media from "../../styles/media";

interface StyledSectionProps {
  withBorder?: boolean;
}
export const StyledSection = styled.section<StyledSectionProps>`
  padding: 10rem 10rem 10rem 10rem;
  width: 100%;
  height: 100%;
  background-color: #332e5e;
  text-align: center;
  ${media.lessThan("sm")`
    min-height: 420px;
    padding: 5rem 1rem 5rem 1rem;
  `}
`;

export const StyledSmallHeading = styled(SmallHeading)`
  text-align: left;
  font-weight: bold;

  ${media.lessThan("sm")`
    text-align: center;
    font-size: 1.8rem;
  `}
`;

export const StyledContainer = styled(Container)`
  background-color: ${$colorPrimary};
`;

export const linkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 35px;
  padding: 0rem 10rem 0rem 10rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  background-color: #332e5e;

  ${media.lessThan("sm")`
    padding: 5rem 1rem 5rem 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  `}
`;

export const Item = styled.div`
  text-align: left;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 1rem;
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 1.5rem;
  margin-top: 10px;
  padding-left: 10px;
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan("sm")`
    text-align: left;
    font-size: 1.5rem;
    padding-top: 1rem;
  `}
`;

export const StyledBigHeading = styled(BigHeading)`
  color: white;
  padding-bottom: 6rem;
  padding-top: 2rem;

  ${media.lessThan("sm")`
    text-align: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
  `}
`;
