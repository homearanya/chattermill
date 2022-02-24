export { wrapRootElement } from "./wrap-root-element"
export const onRouteUpdate = ({ prevLocation }) => {
  window.analytics && window.analytics.page()
}
