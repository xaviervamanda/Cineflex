import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const url = "https://mock-api.driven.com.br/api/v8/cineflex/";
    const [seatsReserved, setSeatsReserved] = useState([]);

    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage url={url}/>} />
                    <Route path="/sessoes/:idFilme" element={<SessionsPage url={url}/>} />
                    <Route path="/assentos/:idSessao" element={<SeatsPage 
                    url={url}
                    seatsReserved={seatsReserved}
                    setSeatsReserved={setSeatsReserved}
                    />} />
                    <Route path="/sucesso" element={<SuccessPage url={url}
                    seatsReserved={seatsReserved}
                    />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
