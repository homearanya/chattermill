import styled from "styled-components";
import media from "../../styles/media";
import Collapsible from "react-collapsible";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledSection = styled.section`
  padding: 2rem;
  font-size: 1.75rem;
  line-height: 3.25rem;
  background-color: #ffff;

  ${media.lessThan("sm")`
    padding: 4rem;
    font-size: 1rem;
  `};
`;

export const StyledText = styled.p`
  font-size: 1.7rem;
  line-height: 3.25rem;
  padding: 1rem;
`;

export const StyledCollapsible = styled(Collapsible)`
  padding: 2rem;
  font-size: 2rem;
  background-color: #ffff;
  cursor: pointer;
  margin: 3rem 0rem;
  border-bottom: 1px solid #d3d3d3;
`;
