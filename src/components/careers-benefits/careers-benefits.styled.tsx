import styled from "styled-components";
import {
  Section,
  MediumHeading,
  SmallHeading
} from "../../styles/common.styled";
import { Container } from "react-awesome-styled-grid";
import { $colorPrimary } from "../../styles/variables";
import media from "../../styles/media";
import { $greyLight } from "../../styles/variables";

interface StyledSectionProps {
  withBorder?: boolean;
}
export const StyledSection = styled(Section)<StyledSectionProps>`
  padding: 4rem 0;
  width: 100%;
  border-top: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  border-bottom: ${({ withBorder }) =>
    withBorder ? `1px solid ${$greyLight}` : 0};
  ${media.lessThan("sm")`
      padding: 3rem 0 0;
    `}
`;

export const StyledSmallHeading = styled(SmallHeading)`
  text-align: left;
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
  background-color: #fff;
`;

export const Item = styled.div`
  text-align: center;
  border-radius: 5px;
  margin: 20px;
  background-color: #f5f5f5;
  padding: 2rem;
  max-width: 600px;
  border-radius: 10px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-size: 1.5rem;
  margin-top: 10px;
  padding-left: 10px;
  margin-right: 0 auto;
  list-style-position: inside;
  list-style-type: none;
  text-indent: -1rem;
`;

export const StyledMediumHeading = styled(MediumHeading)`
  text-align: center;
`;
