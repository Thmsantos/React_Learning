import React from "react";
import BarChart from "../../Components/BarChart";
import Pizza from "../../Components/DonutChart";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import './style.css'


const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="background-novos">
                <div className="container d-flex justify-content-center">
                    <h1 className="text-primary py-3">Dashboard Carros Novos</h1>
                </div>

                <div className=" display-graphic justify-content-center">
                    <div className="display-graphic mb-3">
                        <Pizza url="https://api.sheety.co/420515c812a2351068ded5d810e31e36/theAutocar/página1" />
                    </div>
                    <div className="display-graphic mb-3">
                        <BarChart url="https://api.sheety.co/420515c812a2351068ded5d810e31e36/theAutocar/página1"/>
                    </div>
                </div>
            </div>







            <div className="background-novos">
                <div className="container d-flex justify-content-center">
                    <h1 className="text-primary py-3">Dashboard Carros Usados</h1>
                </div>

                <div className=" display-graphic justify-content-center">
                    <div className="display-graphic mb-3">
                        <Pizza url="https://api.sheety.co/420515c812a2351068ded5d810e31e36/seminovos/página1"/>
                    </div>
                    <div className="display-graphic mb-3">
                        <BarChart url="https://api.sheety.co/420515c812a2351068ded5d810e31e36/seminovos/página1"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;