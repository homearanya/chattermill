import { generateMedia } from "styled-media-query"

interface Breakpoints {
  [key: string]: number
}

// in rem => 1 rem = 16px
export const $breakpoints: Breakpoints = {
  xs: 1, // 16px
  sm: 48, // 768px
  md: 64, // 1024px
  lg: 90, // 1440px
  xl: 120, // 1920px
}

const media = generateMedia({
  sm: "47.999em", // 768px
  md: "63.999em", // 1024px
  lg: "89.999em", // 1440px
  xl: "119.999em", // 1920px
})

export default media
