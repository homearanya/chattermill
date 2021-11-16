import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
				  (function(){var a=window.mutiny=window.mutiny||{};if(!window.mutiny.client){a.client={_queue:{}};var b=["identify","trackConversion"];var c=[].concat(b,["defaultOptOut","optOut","optIn"]);var d=function factory(c){return function(){for(var d=arguments.length,e=new Array(d),f=0;f<d;f++){e[f]=arguments[f]}a.client._queue[c]=a.client._queue[c]||[];if(b.includes(c)){return new Promise(function(b,d){a.client._queue[c].push({args:e,resolve:b,reject:d});setTimeout(d,500)})}else{a.client._queue[c].push({args:e})}}};c.forEach(function(b){a.client[b]=d(b)})}})();`
          }}
        ></script>
        <script
          defer
          type="text/javascript"
          src="https://client-registry.mutinycdn.com/personalize/client/812698a70cf9d5e4.js"
        ></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        <script
          type="text/javascript"
          src="https://boards.greenhouse.io/embed/job_board/js?for=chattermill"
        ></script>
        {/* linkedin pixel */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            _linkedin_partner_id = "3156226";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `
          }}
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(){var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})();`
          }}
        ></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <img
            height="1"
            width="1"
            style="display:none;"
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=3156226&fmt=gif"
          />`
          }}
        ></noscript>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
