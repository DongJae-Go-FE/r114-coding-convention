import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
       <Link to="/">링크 셋팅</Link>
      <Routes>
        <Route path="/">라우터 셋팅 화면</Route>
        {/* <Route path="/" element={<Layout />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
