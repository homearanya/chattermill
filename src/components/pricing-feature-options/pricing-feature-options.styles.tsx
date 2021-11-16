import styled from "styled-components";
import media from "../../styles/media";
import { $white, $colorPrimary } from "../../styles/variables";
import ReactTooltip from "react-tooltip";
import UniversalLink from "../universal-link";

export const StyledTooltip = styled(ReactTooltip)`
  max-width: 300px;
  background-color: #000000 !important;
  color: white !important;
`;

export const StyledDivGap = styled.div`
  padding: 4.5rem;

  ${media.lessThan("md")`
    padding: 0rem;
  `}

  ${media.lessThan("sm")`
    padding: 0rem;
    display: none;
  `}
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  overflow-y: auto;

  ${media.lessThan("sm")`
    display: block;
    


  `}
`;

export const StyledSpan = styled.span`
  width: 200px;
  padding: 1rem;
  overflow: auto ${media.lessThan("md")`
    display: none;
    padding: 0rem;
    width: 0px;


  `};
`;

export const StyledThead = styled.thead`
  border-bottom: 1px solid rgb(227, 236, 240);
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  overflow-y: auto;

  ${media.lessThan("sm")`
  overflow-y: auto;
  display: block;

  `}
`;

export const StyledTR1 = styled.tr`
  background-color: rgb(246, 251, 253);
  display: table-row;
  width: 100%;
  vertical-align: inherit;
  border-color: inherit;
`;

export const StyledTR2 = styled.tr`
  background-color: #ffff;
  display: table-row;
  width: 100%;
  vertical-align: inherit;
  border-color: inherit;
`;

export const StyledRow = styled.td`
  position: relative;
  font-size: 1.4rem;
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid rgb(227, 236, 240);
  border-left 1px solid rgb(227, 236, 240);
  overflow: auto;
`;

export const StyledRowHeader = styled.th`
  border-left: 1px solid rgb(227, 236, 240);
  border-bottom: 1px solid rgb(227, 236, 240);
  font-size: 1.6rem;
  text-align: left;
  margin: 0 auto;

  ${media.lessThan("md")`
  text-align: center;
  width: 100px;

  `}
`;

export const StyledRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const StyledColHeader = styled.th`
  border: 1px solid rgb(227, 236, 240);
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0;
`;

interface StyledButtonProps {
  submitting?: boolean;
}

export const StyledLink = styled(UniversalLink)<StyledButtonProps>`
  position: relative;
  border-radius: 5px !important;
  padding: 1rem 2rem;
  width: 200px;
  margin: 0.5rem;
  text-align: center;
  text-decoration: none;

  &&,
  &&:link,
  &&:visited {
    font-size: 1.5rem;
    background-color: ${$colorPrimary};
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `${$white}`};
    border: 1px solid ${$colorPrimary};
    padding: 1rem 2rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: ${$colorPrimary};
  }

  ${media.lessThan("md")`
  text-align: center;
  width: 100px;

  `}

  ${media.lessThan("sm")`
  text-align: center;
  width: 100px;

  `}
`;

export const StyledMediumHeader = styled.h2`
  font-size: 26px;
  padding: 0.5rem 0;
  text-align: center !important;
  margin: 1rem;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;

  ${media.lessThan("sm")`
  text-align: center !important

  `}
`;

export const StyledMainHeader = styled.h2`
  font-size: 26px;
  text-align: left;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;
  margin: 0;

  ${media.lessThan("sm")`
  text-align: center !important

  `}
`;

export const StyledAlternateMainHeader = styled.h2`
  font-size: 24px;
  text-align: left;
  font-family: "Euclid Square", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 500;
  margin: 0;

  ${media.lessThan("sm")`
  text-align: center !important

  `}
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const StyledWideContainer = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  ${media.lessThan("md")`
    align-item: center;
    justify-content: center;
    padding-bottom: 6rem;
  `}

  ${media.lessThan("sm")`
    align-item: center;
    padding-left: 1rem;
    padding-right: 1rem;
    
    
    
  `}
`;
