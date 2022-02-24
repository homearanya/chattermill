exports.customGraphqlSchema = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    `
      type ContentfulLink implements Node{
        name: String
        displayText: String
        path: String
        externalUrl: String
      }
      type ContentfulIntegration implements Node {
        link: ContentfulLink @link(by: "id", from: "link___NODE")
      }
      type ContentfulBrand implements Node {
        title: String
        website:String
        logo: ContentfulAsset @link(by: "id", from: "logo___NODE")
        logo: ContentfulAsset @link(by: "id", from: "logo___NODE")
        logoHover: ContentfulAsset @link(by: "id", from: "logoHover___NODE")
      }
      type ContentfulBrand implements Node {
        title: String
        url: String
        logo: ContentfulAsset @link(by: "id", from: "logo___NODE")
        logoHover: ContentfulAsset @link(by: "id", from: "logoHover___NODE")
      }

      type contentfulIndustryHeaderTextTextNode implements Node {
        headerText: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustryFeature1TextTextNode implements Node {
        feature1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustryFeature2TextTextNode implements Node {
        feature2Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustryFeature3TextTextNode implements Node {
        feature3Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustrySection1TextTextNode implements Node {
        section1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustrySection2TextTextNode implements Node {
        section2Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustrySection3TextTextNode implements Node {
        section3Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulIndustryCaseStudyTextTextNode implements Node {
        caseStudyText: String
        childMarkdownRemark: MarkdownRemark
      }
      type ContentfulIndustry implements Node {
        slug: String
        title: String
        headerHeading: String
        headerSubheading: String
        headerText: contentfulIndustryHeaderTextTextNode @link(by: "id", from: "headerText___NODE")
        headerButtonText: String
        headerButtonLink: String
        headerImage: ContentfulAsset @link(by: "id", from: "headerImage___NODE")
        brands: [ContentfulBrand] @link(by: "id", from: "brands___NODE")
        feature1Image: ContentfulAsset @link(by: "id", from: "feature1Image___NODE")        feature1Title: String
        feature1Text: contentfulIndustryFeature1TextTextNode @link(by: "id", from: "feature1Text___NODE")
        feature2Image: ContentfulAsset @link(by: "id", from: "feature2Image___NODE")        feature2Title: String
        feature2Text: contentfulIndustryFeature2TextTextNode @link(by: "id", from: "feature2Text___NODE")
        feature3Image: ContentfulAsset @link(by: "id", from: "feature3Image___NODE")        feature3Title: String
        ffeature3Text: contentfulIndustryFeature3TextTextNode @link(by: "id", from: "feature3Text___NODE")
        section1Image: ContentfulAsset @link(by: "id", from: "section1Image___NODE")
        section1Heading: String
        section1Text: contentfulIndustrySection1TextTextNode @link(by: "id", from: "section1Text___NODE")
        section2Image: ContentfulAsset @link(by: "id", from: "section2Image___NODE")
        section2Heading: String
        section2Text: contentfulIndustrySection2TextTextNode @link(by: "id", from: "section2Text___NODE")
        section3Image: ContentfulAsset @link(by: "id", from: "section3Image___NODE")
        section3Heading: String
        section3Text: contentfulIndustrySection3TextTextNode @link(by: "id", from: "section3Text___NODE")
        brands2: [ContentfulBrand] @link(by: "id", from: "brands2___NODE")
        caseStudyHeading: String
        caseStudyText: contentfulIndustryCaseStudyTextTextNode @link(by: "id", from: "caseStudyText___NODE")
        caseStudyCardImage: ContentfulAsset @link(by: "id", from: "caseStudyCardImage___NODE")
        caseStudyBackgroundImage: ContentfulAsset @link(by: "id", from: "caseStudyBackgroundImage___NODE")
        caseStudyDownloadLink: String
        ctaHeading: String
        ctaButtonText: String
        ctaColor: String
      }
      type contentfulInvestorHeaderTextTextNode implements Node {
        headerText: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorFeature1TextTextNode implements Node {
        feature1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorFeature2TextTextNode implements Node {
        feature1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorFeature3TextTextNode implements Node {
        feature1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorSection1TextTextNode implements Node {
        section1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorSection2TextTextNode implements Node {
        section1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorSection3TextTextNode implements Node {
        section1Text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulInvestorCaseStudyTextTextNode implements Node {
        caseStudyText: String
        childMarkdownRemark: MarkdownRemark
      }
      type ContentfulInvestor implements Node {
        slug: String
        title: String
        headerHeading: String
        headerSubheading: String
        headerText: contentfulInvestorHeaderTextTextNode @link(by: "id", from: "headerText___NODE")
        headerButtonText: String
        headerButtonLink: String
        headerImage: ContentfulAsset @link(by: "id", from: "headerImage___NODE")
        brands: [ContentfulBrand] @link(by: "id", from: "brands___NODE")
        feature1Image: ContentfulAsset @link(by: "id", from: "feature1Image___NODE")
        feature1Title: String
        feature1Text: contentfulInvestorFeature1TextTextNode @link(by: "id", from: "feature1Text___NODE")
        feature2Image: ContentfulAsset @link(by: "id", from: "feature2Image___NODE")
        feature2Title: String
        feature2Text: contentfulInvestorFeature2TextTextNode @link(by: "id", from: "feature2Text___NODE")
        feature3Image: ContentfulAsset @link(by: "id", from: "feature3Image___NODE")
        feature3Title: String
        feature3Text: contentfulInvestorFeature3TextTextNode @link(by: "id", from: "feature3Text___NODE")
        section1Image: ContentfulAsset @link(by: "id", from: "section1Image___NODE")
        section1Heading: String
        section1Text: contentfulInvestorSection1TextTextNode @link(by: "id", from: "section1Text___NODE")
        section2Image: ContentfulAsset @link(by: "id", from: "section2Image___NODE")
        section2Heading: String
        section2Text: contentfulInvestorSection2TextTextNode @link(by: "id", from: "section2Text___NODE")
        section3Image: ContentfulAsset @link(by: "id", from: "section3Image___NODE")
        section3Heading: String
        section3Text: contentfulInvestorSection3TextTextNode @link(by: "id", from: "section3Text___NODE")
        brands2: [ContentfulBrand] @link(by: "id", from: "brands2___NODE")
        caseStudyHeading: String
        caseStudyText: contentfulInvestorCaseStudyTextTextNode @link(by: "id", from: "caseStudyText___NODE")
        caseStudyCardImage: ContentfulAsset @link(by: "id", from: "caseStudyCardImage___NODE")
        caseStudyBackgroundImage: ContentfulAsset @link(by: "id", from: "caseStudyBackgroundImage___NODE")
        caseStudyDownloadLink: String
        ctaHeading: String
        ctaButtonText: String
        ctaColor: String
      }
  
      type contentfulRolesHeaderTextTextNode implements Node {
        headerText: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesFeature1TextTextNode implements Node {
        feature1text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesFeature2TextTextNode implements Node {
        feature2text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesFeature3TextTextNode implements Node {
        feature3text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesSection1TextTextNode implements Node {
        section1text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesSection2TextTextNode implements Node {
        section2text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesSection3TextTextNode implements Node {
        section3text: String
        childMarkdownRemark: MarkdownRemark
      }
      type contentfulRolesCaseStudyTextTextNode implements Node {
        caseStudyText: String
        childMarkdownRemark: MarkdownRemark
      }
   
      type ContentfulRoles implements Node {
        title: String
        slug: String
        headerHeading: String
        headerSubheading: String
        headerButtonText: String
        headerButtonLink: String
        buttonLink: String
        feature1Title: String
        feature2Title: String
        feature3Title: String
        section1Heading: String
        section2Heading: String
        section3Heading: String
        caseStudyHeading: String
        caseStudyDownloadLink: String
        ctaHeading: String
        ctaButtonText: String
        ctaColor: String
        headerImage: ContentfulAsset @link(by: "id", from: "headerImage___NODE")
        brands: [ContentfulBrand] @link(by: "id", from: "brands___NODE")
        feature1Image: ContentfulAsset @link(by: "id", from: "feature1Image___NODE")
        feature2Image: ContentfulAsset @link(by: "id", from: "feature2Image___NODE")
        feature3Image: ContentfulAsset @link(by: "id", from: "feature3Image___NODE")
        section1Image: ContentfulAsset @link(by: "id", from: "section1Image___NODE")
        section2Image: ContentfulAsset @link(by: "id", from: "section2Image___NODE")
        section3Image: ContentfulAsset @link(by: "id", from: "section3Image___NODE")
        brands2: [ContentfulBrand] @link(by: "id", from: "brands2___NODE")
        caseStudyCardImage: ContentfulAsset @link(by: "id", from: "caseStudyCardImage___NODE")
        caseStudyBackgroundImage: ContentfulAsset @link(by: "id", from: "caseStudyBackgroundImage___NODE")
        headerText: contentfulRolesHeaderTextTextNode @link(by: "id", from: "headerText___NODE")
        feature1Text: contentfulRolesFeature1TextTextNode @link(by: "id", from: "feature1Text___NODE")
        feature2Text: contentfulRolesFeature2TextTextNode @link(by: "id", from: "feature2Text___NODE")
        feature3Text: contentfulRolesFeature3TextTextNode @link(by: "id", from: "feature3Text___NODE")
        section1text: contentfulRolesSection1TextTextNode
        section2Text: contentfulRolesSection2TextTextNode @link(by: "id", from: "section2Text___NODE")
        section3Text: contentfulRolesSection3TextTextNode @link(by: "id", from: "section3Text___NODE")
        caseStudyText: contentfulRolesCaseStudyTextTextNode @link(by: "id", from: "caseStudyText___NODE")
      }

      type MarkdownRemarkFrontmatterCTASection {
        subText: String
      }
     `,
  ]
  createTypes(typeDefs)
}
