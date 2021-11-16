import styled from "styled-components"
import media from "../../styles/media"
import { Row } from "react-awesome-styled-grid"
import { $white, $colorPrimary } from "../../styles/variables"
import UniversalLink from "../universal-link"

// Font & Typograpphy

export const StyledColContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  -webkit-box-align: stretch;
  align-items: stretch;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1200px;
  padding: 5rem 5rem;

  ${media.lessThan("md")`
   justify-content: center;
   flex-direction: column;
   padding: 3rem 1rem;

   
 `}
`

export const StyledColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  flex-basis: 33.3333%;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin: 1rem;
  max-width: 33.3333%;
  align-items: center;

  ${media.lessThan("md")`
   align-items: center;
   max-width: 100%;
   margin: 1rem 4rem;
   
 `}

  ${media.lessThan("sm")`
   align-items: center;
   max-width: 100%;
   margin: 1rem 2rem;

   

   
 `}
`

// export const StyledCol = styled(Col)`
//   border-radius: 5px;
//   vertical-align: middle;
//   box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   margin: 2rem 0rem;
//   height: 800px;

//   ${media.lessThan("md")`
//     height: 900px;

//   `}

//   ${media.lessThan("sm")`
//   padding 2rem  0rem;
//   margin: 2rem 0;
// `}
// `;

export const StyledRow = styled(Row)`
  width: calc(100% + 16px) ${media.lessThan("sm")`
  display: none
`};
`

export const StyledText = styled.p`
  font-size: 14px;

  text-align: center;
  min-height: 75px;
  max-width: 450px;
`

interface StyledButtonProps {
  submitting?: boolean
}

export const StyledLink = styled(UniversalLink)<StyledButtonProps>`
  position: relative;
  border-radius: 5px !important;
  padding: 1rem 3rem;
  max-width: 200px;
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
`

export const StyledLinkEnteprise = styled(UniversalLink)<StyledButtonProps>`
  position: relative;
  border-radius: 2px !important;
  width: 70%;
  margin: 0 auto;
  height: 50px;
  text-align: center;
  text-decoration: none;

  &&,
  &&:link,
  &&:visited {
    font-size: 2rem;
    background-color: #50e3c2;
    color: ${({ submitting }) =>
      submitting ? `${$colorPrimary}` : `${$white}`};
    border: 1px solid #50e3c2;
    padding: 1rem 2rem;
  }

  &&:hover,
  &&:active {
    background-color: ${$white};
    color: #50e3c2;
  }
`

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
`

export const StyledSmallHeader = styled.h2`
  font-size: 28px;
  text-align: center !important;
  font-family: "Raisonne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 400;

  ${media.lessThan("sm")`
  text-align: center !important

  `}
`

export const StyledList = styled.ul`
  font-size: 1.6rem;
  list-style-type: disc;
  list-style-position: outside;
  padding: 3rem 2rem;
  margin: 1rem 1rem;
`

export const StyledListItem = styled.li`
  position: relative;
  margin-bottom: 8px;
  margin-left: 25px;
`

export const StyledLineBreak = styled.hr`
  margin-top: 3rem;
  margin-bottom: 1rem;
  border: 2px solid #f7f8fc;
`

// Containers

export const StyledWideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3rem;
  `}
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;
`

export const StyledImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  margin: 0 auto;
`
