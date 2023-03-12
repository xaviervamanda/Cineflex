import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const url = "https://mock-api.driven.com.br/api/v8/cineflex/";
    const [seatsList, setSeatsList] = useState(null);
    const [seatsNumber, setSeatsNumber] = useState([]);
    const [seatsReserved, setSeatsReserved] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage url={url}/>} />
                    <Route path="/sessoes/:idFilme" element={<SessionsPage url={url}/>} />
                    <Route path="/assentos/:idSessao" element={<SeatsPage 
                    url={url}
                    seatsList={seatsList}
                    setSeatsList={setSeatsList}
                    seatsNumber={seatsNumber}
                    setSeatsNumber={setSeatsNumber}
                    name={name}
                    setName={setName}
                    cpf={cpf}
                    setCpf={setCpf}
                    seatsReserved={seatsReserved}
                    setSeatsReserved={setSeatsReserved}
                    />} />
                    <Route path="/sucesso" element={<SuccessPage
                    seatsList={seatsList}
                    seatsNumber={seatsNumber}
                    setSeatsNumber={setSeatsNumber}
                    name={name}
                    setName={setName}
                    cpf={cpf}
                    setCpf={setCpf}
                    seatsReserved={seatsReserved}
                    setSeatsReserved={setSeatsReserved}
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
