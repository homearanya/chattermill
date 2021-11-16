import * as React from "react"
import {
  Title,
  Button,
  StyledSection,
  StyledSlider,
  Testimonial,
  StyledImage,
} from "./carousel.styled"
import CarouselArrow from "../carousel-arrow"
import { Settings } from "react-slick"
import { $breakpoints } from "../../styles/media"

export interface CarouselData {
  button?: {
    text: string
    link: string
  }
  testimonials: {
    heading: string
    content: string
    background?: GatsbyTypes.File
    bgColor?: string
  }[]
}
export interface CarouselProps {
  data: CarouselData
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const { button, testimonials } = data
  const [index, setIndex] = React.useState(0)
  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CarouselArrow bg="#fff" fill="#291E45" right={false} />,
    nextArrow: <CarouselArrow bg="#fff" fill="#291E45" />,
    beforeChange: (current, next) => setIndex(next),
    responsive: [
      {
        breakpoint: $breakpoints.sm * 16,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <StyledSection>
      <StyledImage image={testimonials[index].background} />
      <StyledSlider {...settings}>
        {testimonials &&
          testimonials.map((testimonial, index) => {
            return (
              <>
                <Title>{testimonial.heading}</Title>
                <Testimonial>{testimonial.content}</Testimonial>
              </>
            )
          })}
      </StyledSlider>
      {button ? <Button to={button.link}>{button.text}</Button> : null}
    </StyledSection>
  )
}

export default Carousel
