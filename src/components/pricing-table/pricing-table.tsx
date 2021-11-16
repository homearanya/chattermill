import React from "react"
import { Row } from "react-awesome-styled-grid"

import {
	StyledText,
	StyledWideContainer,
	StyledMediumHeader,
	StyledSmallHeader,
	StyledLink,
	StyledList,
	StyledListItem,
	StyledWrapper,
	StyledColWrapper,
	StyledColContainer,
} from "./pricing-table.styles"

export interface PricingTableData {
	readonly pricingTable: {
		smallHeading: string
		text: string
		pricingTerms: string
		CmLiteItems: {
			Liteitem: string
		}[]
		CmEnterpriseItems: {
			Enterpriseitem: string
		}[]
	}
}

export interface PricingTableProps {
	readonly data: PricingTableData
}

export const PricingTable = ({ data }: PricingTableProps) => {
	return (
		<StyledWideContainer>
			<Row justify="space-around" align="center">
				<StyledColContainer>
					<StyledColWrapper
						style={{
							borderTop: "10px solid #10c2ed",
						}}
					>
						<StyledMediumHeader>Community</StyledMediumHeader>
						<StyledText>
							Sign up and start analysing. Ideal for individuals working on
							personal or philanthropic projects.
            </StyledText>
						<StyledWrapper>
							<StyledSmallHeader>Free</StyledSmallHeader>
							<StyledText>Forever</StyledText>
							<StyledLink href="https://app.chattermill.com/signup/">
								Start For Free
              </StyledLink>
							<StyledList>
								<StyledListItem>
									Fully featured unified customer experience analytics platform
									access.
                </StyledListItem>
								<StyledListItem>
									Get started in minutes with our CSV uploader.
                </StyledListItem>
								<StyledListItem>
									Access to our CX Knowledge base and resources.
                </StyledListItem>
							</StyledList>
						</StyledWrapper>
					</StyledColWrapper>

					<StyledColWrapper
						style={{
							borderTop: "10px solid #332e5e",
						}}
					>
						<StyledMediumHeader>Teams</StyledMediumHeader>
						<StyledText>
							Start for free, then upgrade based on your needs. Ideal for a team
							with more than one source of customer feedback.
            </StyledText>
						<StyledWrapper>
							<StyledSmallHeader>£990</StyledSmallHeader>
							<StyledText>/month</StyledText>
							<StyledLink href="https://app.chattermill.com/signup/">
								Explore Product
              </StyledLink>
							<StyledList>
								<StyledListItem>
									Perfect for existing sources of customer feedback such as NPS
									or CSAT, App Store Reviews or online reviews sites such as
									Trustpilot.
                </StyledListItem>
								<StyledListItem>
									Support via email or in-app messaging.
                </StyledListItem>
								<StyledListItem>Easy payment via credit card.</StyledListItem>
							</StyledList>
						</StyledWrapper>
					</StyledColWrapper>

					<StyledColWrapper
						style={{
							borderTop: "10px solid #def200",
						}}
					>
						<StyledMediumHeader>Enterprise</StyledMediumHeader>
						<StyledText>
							Unify your customer experience analytics in one place to discover
							insights across the customer journey.
            </StyledText>
						<StyledWrapper>
							<StyledSmallHeader>Custom</StyledSmallHeader>
							<StyledText>to your needs</StyledText>
							<StyledLink href="/book-demo/">
								Contact Us
              </StyledLink>
							<StyledList>
								<StyledListItem>
									A single platform for all your customer feedback analytics.
                </StyledListItem>
								<StyledListItem>
									Infrastructure designed to power the most advanced customer
									analytics.
                </StyledListItem>
								<StyledListItem>
									Advanced features access to scale granular insights and
									workflows.
                </StyledListItem>
								<StyledListItem>
									SSO, user management and API access to manage large
									organisations.
                </StyledListItem>
								<StyledListItem>
									Access to Customer Success Managers, Insight Analysts and
									professional services offerings.
                </StyledListItem>
							</StyledList>
						</StyledWrapper>
					</StyledColWrapper>
				</StyledColContainer>
				{/* </StyledCol> */}
			</Row>
		</StyledWideContainer>
	)
}

export default PricingTable
