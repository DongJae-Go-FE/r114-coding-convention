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
            <Route path="/">라우터 셋팅 화면</Route>
            {/* <Route path="/" element={<Layout />}></Route> */}
          </Routes>
          <Footer />
        </Content>
      </Provider>
    </div>
  );
}

export default App;
