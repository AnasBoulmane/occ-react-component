const REACT_VERSION = "16.6.3";
const COMPONENT_NAME = "occReactComponent";

exports.reactVersion = REACT_VERSION;
module.exports = {
  publicPath: `file/widget/${COMPONENT_NAME}/js/`,
  componentName: COMPONENT_NAME,
  dependencies: {
    // "styled-components": {
    //   commonjs: "styled-components",
    //   commonjs2: "styled-components",
    //   amd: "styled-components"
    // },
    knockout: "knockout",
    jquery: "jquery",
    pubsub: "pubsub",
    ccConstants: "ccConstants",
    ccRestClient: "ccRestClient",
    navigation: "navigation",
    notifier: "notifier",
    ccLogger: "ccLogger",
    CCi18n: "CCi18n",
    ccNumber: "ccNumber",
    currencyHelper: "currencyHelper",
    numberFormatHelper: "numberFormatHelper",
    "pageLayout/product": "pageLayout/product",
    "ojs/ojcore": "ojs/ojcore",
    "ojs/ojvalidation": "ojs/ojvalidation",
    // "react":"react",
    // "react-dom":"react-dom"
    // react: `https://unpkg.com/react@${REACT_VERSION}/umd/react.production.min`,
    // "react-dom":
    //   `https://unpkg.com/react-dom@${REACT_VERSION}/umd/react-dom.production.min`,
    // redux: "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min"
  }
};
