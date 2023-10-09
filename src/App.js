import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/organism/Header";
import LeftMenu from "./components/organism/LeftMenu";
import Content from "./components/organism/Content";
import Footer from "./components/organism/Footer";

import Page0000 from "./components/templetes/pages/basicPolicy/Page00_01";
import Page0001 from "./components/templetes/pages/basicPolicy/Page00_02";
import Page0002 from "./components/templetes/pages/basicPolicy/Page00_03";
import Page0003 from "./components/templetes/pages/basicPolicy/Page00_04";

import Page0100 from "./components/templetes/pages/rulesGuide/Page01_01";
import Page0101 from "./components/templetes/pages/rulesGuide/Page01_02";
import Page0102 from "./components/templetes/pages/rulesGuide/Page01_03";
import Page0103 from "./components/templetes/pages/rulesGuide/Page01_04";

import Page0200 from "./components/templetes/pages/library/Page02_01";
import Page0201 from "./components/templetes/pages/library/Page02_02";
import Page0202 from "./components/templetes/pages/library/Page02_03";
import Page0203 from "./components/templetes/pages/library/Page02_04";

import Page0300 from "./components/templetes/pages/webAccessibility/Page03_01";
import Page0301 from "./components/templetes/pages/webAccessibility/Page03_02";
import Page0302 from "./components/templetes/pages/webAccessibility/Page03_03";
import Page0303 from "./components/templetes/pages/webAccessibility/Page03_04";

import Main from "./components/templetes/pages/Main";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <LeftMenu />
        <Content>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/0" element={<Page0000 />} />
            <Route path="/0/2" element={<Page0001 />} />
            <Route path="/0/3" element={<Page0002 />} />
            <Route path="/0/4" element={<Page0003 />} />
            <Route path="/1" element={<Page0100 />} />
            <Route path="/1/2" element={<Page0101 />} />
            <Route path="/1/3" element={<Page0102 />} />
            <Route path="/1/4" element={<Page0103 />} />
            <Route path="/2" element={<Page0200 />} />
            <Route path="/2/2" element={<Page0201 />} />
            <Route path="/2/3" element={<Page0202 />} />
            <Route path="/2/4" element={<Page0203 />} />
            <Route path="/3" element={<Page0300 />} />
            <Route path="/3/2" element={<Page0301 />} />
            <Route path="/3/3" element={<Page0302 />} />
            <Route path="/3/4" element={<Page0303 />} />
          </Routes>
          <Footer />
        </Content>
      </Provider>
    </div>
  );
}

export default App;
