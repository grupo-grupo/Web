import React from "react";
import MenuEstablishment from "../MenuEstablishment/MenuEstablishment";
import { Outlet } from "react-router-dom";

const PerformanceRender = () => {
    return (
        <>
            <MenuEstablishment height="88.8rem"/>
            <Outlet />
        </>
    )
}
export default PerformanceRender;