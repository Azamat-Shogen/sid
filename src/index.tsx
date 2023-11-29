import { BrowserRouter } from "react-router-dom";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import { I18nextProvider } from "react-i18next";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css"

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// ReactDOM.render(<App />, document.getElementById("root"));

