import { Outlet } from "react-router-dom";
import Header from "./Header.js";

const Root=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  );
};

export default Root;