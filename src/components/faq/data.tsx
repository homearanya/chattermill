import styled from "styled-components";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: `What's the difference between Free, Team and Enterprise plans? `,
      content: `</br>Each organisation belongs to a Free, Teams or Enterprise tier. Our free plan includes platform access and applies when the organisations only this free tier in their account</br></br>Customers on paid plans through self-service are on the Teams tier. Teams tier provide a wide range of setup and volume limits and require credit card signups.</br></br>The Enterprise plan includes advanced features and professional services, training and fewer limitations with customised pricing based on your requirements. You can upgrade to the Enterprise tier by getting in touch with our sales team.</br></br>Each tier has different limits and support, please get in touch if you need any more information.</br>`
    },
    {
      title: "How is Chattermill different from alternative solutions?",
      content: `</br>Chattermill’s competitive advantage lies in having built our platform around deep learning, the latest generation of machine learning models. This allows us to offer deeper insights than our more established competitors. </br></br> Further detail below: </br></br> <li>Human level accuracy: Our Aspect-based Sentiment Analysis (ABSA) automatically extracts several salient aspects/themes from a single comment and identifies its sentiment. This is a more nuanced way of performing NLP and allows for deeper insights.</br></li><li>Faster Insights: Our AI tackles the challenge of surfacing insights in a data-driven fashion, so that we reveal what actually matters to customers based on their feedback, instead of any preconceptions we might have about the data.</li><li>Advanced Reporting: Powerful, flexible and easy to use analytics for entire teams. Our built-in models help you unlock the key drivers of CX and automatically alerts clients about significant trend shifts in specific metrics of interest.</li><li>Flexible Integrations: Seemlessly and holistically integrate with all your tools and workflows.</li>`
    },
    {
      title: "What size companies does Chattermill work with?",
      content: `</br>We aim to help companies at all different stages in their CX journey, from smaller companies like Freetrade and Cleo who are just beginning to collect feedback, to those with quite sophisticated systems in place like Uber and Transferwise. </br></br> For startups, usually companies (10-50 people), we have a CX for Scale Ups plan that aims to help smaller companies equip themselves with a real time view of what customers are thinking and feeling as they grow.</br></br> To learn more about if and how you qualify, book a <a href="/book-demo/">demo</a> with one of our sales representatives.`
    },
    {
      title:
        "What does Chattermill integrate with? And from what sources does Chattermill collect data from?",
      content: `</br>We integrate with most systems where you are collecting open-text feedback from customers, including: </br> <li>App Store and Google Play reviews</li> <li>Customer support tickets: from Zendesk, Intercom, Freshdesk and more.</li> <li>Online reviews: from Trustpilot, Google Reviews etc.</li> <li>Customer surveys: from Survey Monkey, Usabilla, Typeform, Hotjar etc.</li> <li>Social: from Sprinklr, Sprout Social etc.</li></br>Our flexible data handling enables real-time CX data sharing across your company. To read more about our integrations click <a href="/integrations/trustpilot/">here.</a>`
    },
    {
      title: "How secure will my data be with Chattermill?",
      content: `</br>We are GDPR compliant, we can redact all personally identifiable information which means it won't be stored in our database or displayed on the platform. View our security documents <a href="/vulnerability-disclosure-policy/">here.</a></br>`
    },
    {
      title: "How does Chattermill support remote work?",
      content: `</br>Chattermill’s CX analytics platform is designed to break down silos and geographical barriers.</br></br>By collecting all of your customer feedback - across different sources, formats and languages, all in real-time, and arraying it all in one place - we help your company understand core drivers of your customers’ experiences across each touchpoint, and share all that customer feedback with powerful integrations, workflows or report sharing for a holistic customer understanding experience.</br></br>To learn more about how we support Remote Teams, please read more <a href="/solution/remote/">here</a></br></br>`
    }
  ]
};

export default data;

export const Content = styled.p`
  font-size: 2rem;
`;
