import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";

import { Provider } from "react-redux";
import configureStore from "../src/redux/reducer/store";

const store = configureStore();

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
// const masterKey = process.env.MORALIS_API_MASTERKEY;
// const xAPIKey = process.env.MORALIS_XAPI_KEY;
// const api_url = process.env.MORAILS_API_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Provider store={store}> 
          <App isServerInfo />
        </Provider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
    <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
