import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/organism/Header";
import LeftMenu from "./components/organism/LeftMenu";
import Content from "./components/organism/Content";
import Footer from "./components/organism/Footer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <LeftMenu />
        <Content>
          <Routes>
            <Route path="/" element={<>라우터 셋팅 화면 메인</>} />
            <Route path="/0" element={<>라우터 셋팅 화면 0-1</>} />
            <Route path="/0/2" element={<>라우터 셋팅 화면 0-2</>} />
            <Route path="/0/3" element={<>라우터 셋팅 화면 0-3</>} />
            <Route path="/0/4" element={<>라우터 셋팅 화면 0-4</>} />
            <Route path="/1" element={<>라우터 셋팅 화면 1-1</>} />
            <Route path="/1/2" element={<>라우터 셋팅 화면 1-2</>} />
            <Route path="/1/3" element={<>라우터 셋팅 화면 1-3</>} />
            <Route path="/1/4" element={<>라우터 셋팅 화면 1-4</>} />
            <Route path="/2" element={<>라우터 셋팅 화면 2-1</>} />
            <Route path="/2/2" element={<>라우터 셋팅 화면 2-2</>} />
            <Route path="/2/3" element={<>라우터 셋팅 화면 2-3</>} />
            <Route path="/2/4" element={<>라우터 셋팅 화면 2-4</>} />
            <Route path="/3" element={<>라우터 셋팅 화면 3-1</>} />
            <Route path="/3/2" element={<>라우터 셋팅 화면 3-2</>} />
            <Route path="/3/3" element={<>라우터 셋팅 화면 3-3</>} />
            <Route path="/3/4" element={<>라우터 셋팅 화면 3-4</>} />
          </Routes>
          <Footer />
        </Content>
      </Provider>
    </div>
  );
}

export default App;
