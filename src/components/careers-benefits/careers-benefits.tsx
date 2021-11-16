import React from "react";
import {
  GridWrapper,
  StyledSection,
  Item,
  List,
  StyledBigHeading,
  StyledSmallHeading
} from "./careers-benefits.styled";
import { Container } from "react-awesome-styled-grid";

const BenefitsOverview = () => {
  return (
    <StyledSection id="benefits-overview">
      <Container>
        <StyledBigHeading>At Chattermill you'll...</StyledBigHeading>
        <GridWrapper>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Bank"
              >
                🚀
              </span>
              Grow With Us
            </StyledSmallHeading>

            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>
              Fantastic progression opportunities
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>
              The ability to share in the company’s success through stock
              options
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Graduation Cap"
              >
                🎓
              </span>{" "}
              Learn & Develop{" "}
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              A learning & development budget of £500 (€550)
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Monthly breakfast and learn sessions
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              A fully stocked library (open to requests!)
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Beach With Umbrella"
              >
                🌴
              </span>{" "}
              Enjoy Your Holidays
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              25 days holiday in addition to public holidays
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Get an extra day for every year you’re with us!
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Birthday Cake"
              >
                🎂
              </span>{" "}
              Celebrate Your Birthday
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Take the day off!
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="House"
              >
                🏠
              </span>{" "}
              Work Flexibly
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Have the opportunity to work from home — even more than normal, these days!
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Growing Heart"
              >
                💗
              </span>{" "}
              Take Care
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Monday Mindfulness
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Free yoga classes
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Flying Money"
              >
                💸
              </span>{" "}
              Enjoy Perks
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Including discounts on cinema tickets, utilities and more
            </List>
          </Item>
          <Item>
            <StyledSmallHeading>
              <span
                style={{ fontSize: "30px", paddingRight: "10px" }}
                role="img"
                aria-label="Party Popper"
              >
                🎉
              </span>{" "}
              Have Fun!
            </StyledSmallHeading>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Plenty of fun (and currently remote) socials planned by our great
              colleagues.
            </List>
            <List>
              {" "}
              <p
                style={{
                  fontSize: "5px",
                  padding: "10px 15px 10px 0px"
                }}
              >
                {"\u2B24"}
              </p>{" "}
              Social clubs (including book, gaming, crafting and more!)
            </List>
          </Item>
        </GridWrapper>
      </Container>
    </StyledSection>
  );
};

export default BenefitsOverview;
