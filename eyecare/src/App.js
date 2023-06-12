import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";
import Page4 from "./component/page4";
import Page5 from "./component/page5";
import Page6 from "./component/page6";
import Page7 from "./component/page7";
function App() {
  return (
    <>
 <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
            <Route path="/page4" element={<Page4/>} />
            <Route path="/page5" element={<Page5/>} />
            <Route path="/page6" element={<Page6/>} />
            <Route path="/page7" element={<Page7/>} />
        </Routes>
      </BrowserRouter>
  </>
  
  );
}

export default App;
