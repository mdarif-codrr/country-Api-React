import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Country from "./components/Country";
import Home from "./components/Home";
import CountryShimmer from "./components/CountryShimmer";


const root = createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} >
        <Route index  element={<Home/>} />
        <Route path='/:country' element={ <Country/> } ></Route>
        </Route>

        <Route path="/shimmer" element={<CountryShimmer/>}/>
      </Routes>
  </BrowserRouter>)
 
 //  <Route path="/ok" element='You rocked it bro'/>
 {/* <App/> */}
 
    // <Routes>
      
    //   <Route index element={<Home/>} />
    //   <Route path="/country" element={<Country/>}/>
    //   </Route>
    // </Routes>