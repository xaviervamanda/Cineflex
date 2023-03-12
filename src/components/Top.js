import styled from "styled-components";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useLocation, useNavigate } from "react-router-dom";

export default function Top ({setSeatsNumber, setSeatsReserved}){

    const navigate = useNavigate();
    const location = useLocation();

    function isHome (){
        if (location.pathname === "/" || location.pathname === "/sucesso"){
            return "none";
        } 
        else {
            return "initial";
        }
    }

    return (
        <>
            <NavContainer>CINEFLEX</NavContainer>
            <ReturnIcon data-test="go-home-header-btn" isHome={isHome} onClick={() => navigate(-1)}/>
        </>
    );
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
const ReturnIcon = styled(AiOutlineArrowLeft)`
    width: 40px;
    height: 70px;
    position: fixed;
    top:0px;
    left:0px;
    display: ${props => props.isHome()};
`
