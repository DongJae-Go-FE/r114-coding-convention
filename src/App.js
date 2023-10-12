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
import Page0101 from "./components/templetes/pages/rulesGuide/Page01_02";
import Page0102 from "./components/templetes/pages/rulesGuide/Page01_03";
import Page0103 from "./components/templetes/pages/rulesGuide/Page01_04";
import Page0104 from "./components/templetes/pages/rulesGuide/Page01_05";

import Library from "./components/templetes/pages/library/Library";
import Page0201 from "./components/templetes/pages/library/Page02_02";
import Page0202 from "./components/templetes/pages/library/Page02_03";
import Page0203 from "./components/templetes/pages/library/Page02_04";

import WebAccessibility from "./components/templetes/pages/webAccessibility/WebAccessibility";
import Page0301 from "./components/templetes/pages/webAccessibility/Page03_02";
import Page0302 from "./components/templetes/pages/webAccessibility/Page03_03";
import Page0303 from "./components/templetes/pages/webAccessibility/Page03_04";

import Main from "./components/templetes/pages/Main";

export let persistor = persistStore(store);

function App() {
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
                <Route path="/rulesGuide/naming" element={<Page0101 />} />
                <Route path="/rulesGuide/html" element={<Page0102 />} />
                <Route path="/rulesGuide/css" element={<Page0103 />} />
                <Route path="/rulesGuide/javaScript" element={<Page0104 />} />
              </Route>
              <Route path="/library" element={<Library />} />
              <Route path="/2/2" element={<Page0201 />} />
              <Route path="/2/3" element={<Page0202 />} />
              <Route path="/2/4" element={<Page0203 />} />
              <Route path="/webAccessibility" element={<WebAccessibility />} />
              <Route path="/3/2" element={<Page0301 />} />
              <Route path="/3/3" element={<Page0302 />} />
              <Route path="/3/4" element={<Page0303 />} />
            </Routes>
            <Footer />
          </Content>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
