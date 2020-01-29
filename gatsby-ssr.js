/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";

function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      type="text/javascript"
      src="https://boards.greenhouse.io/embed/job_board/js?for=chattermill"
    ></script>
  ]);
}

export default onRenderBody;
