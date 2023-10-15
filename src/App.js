import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import Header from "./components/organism/Header";
import LeftMenu from "./components/organism/LeftMenu";
import Content from "./components/organism/Content";
import Footer from "./components/organism/Footer";

import BasicPolicy from "./components/templetes/pages/basicPolicy/BasicPolicy";

import RulesGuide from "./components/templetes/pages/rulesGuide/RulesGuide";
import Naming from "./components/templetes/pages/rulesGuide/NamingRulse";
import Html from "./components/templetes/pages/rulesGuide/Html";
import Css from "./components/templetes/pages/rulesGuide/Css";
import JavaScript from "./components/templetes/pages/rulesGuide/JavaScript";

import ReactRules from "./components/templetes/pages/reactRules/ReactRules";
import Component from "./components/templetes/pages/reactRules/Component";
import EmotionStyled from "./components/templetes/pages/reactRules/EmotionStyled";
import Hook from "./components/templetes/pages/reactRules/Hook";

import WebAccessibility from "./components/templetes/pages/webAccessibility/WebAccessibility";
import Accessibility from "./components/templetes/pages/webAccessibility/Accessibility";
import WaiAria from "./components/templetes/pages/webAccessibility/WaiAria";

import Main from "./components/templetes/pages/Main";

function App() {
  let persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <LeftMenu />
          <Content>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/basicPolicy" element={<BasicPolicy />}></Route>
              <Route path="/rulesGuide" element={<RulesGuide />}>
                <Route path="/rulesGuide/naming" element={<Naming />} />
                <Route path="/rulesGuide/html" element={<Html />} />
                <Route path="/rulesGuide/css" element={<Css />} />
                <Route path="/rulesGuide/javaScript" element={<JavaScript />} />
              </Route>
              <Route path="/reactRulse" element={<ReactRules />}>
                <Route path="/reactRulse/component" element={<Component />} />
                <Route
                  path="/reactRulse/emotionStyled"
                  element={<EmotionStyled />}
                />
                <Route path="/reactRulse/hook" element={<Hook />} />
              </Route>
              <Route path="/webAccessibility" element={<WebAccessibility />}>
                <Route
                  path="/webAccessibility/accessibility"
                  element={<Accessibility />}
                />
                <Route path="/webAccessibility/waiAria" element={<WaiAria />} />
              </Route>
            </Routes>
            <Footer />
          </Content>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
