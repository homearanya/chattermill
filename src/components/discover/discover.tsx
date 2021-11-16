import * as React from "react"
import FeatureSectionProduct from "../features-section-product"
import { Title, Button, StyledSection } from "./discover.styled"

export type DiscoverData = Partial<
  GatsbyTypes.TEIPageQuery["TEI"]["frontmatter"]["discover"] &
    GatsbyTypes.DataSheetsPageQuery["Datasheets"]["frontmatter"]["discover"]
>

export interface DiscoverProps {
  data: DiscoverData
  boldLabel?: boolean
  fullHeight?: boolean
}

const Discover: React.FC<DiscoverProps> = ({ data, boldLabel, fullHeight }) => {
  const { title, reports, button } = data
  return (
    <StyledSection>
      <Title>{title}</Title>
      <FeatureSectionProduct
        boldLabel={boldLabel}
        fullHeight={fullHeight}
        data={reports}
        cols={3}
      />
      {button ? <Button to={button.link}>{button.text}</Button> : null}
    </StyledSection>
  )
}

export default Discover
