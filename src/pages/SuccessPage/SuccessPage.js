
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function SuccessPage({seatsNumber, seatsList, name, cpf, 
    setName, setCpf, setSeatsReserved, setSeatsNumber}) {

    const navigate = useNavigate();

    function backToHome (){
        setName("");
        setCpf("");
        setSeatsNumber([]);
        setSeatsReserved([]);
        navigate("/");
    }

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{seatsList.movie.title}</p>
                <p>{seatsList.day.date} - {seatsList.name}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {seatsNumber.map ((number, index) => {
                    return (
                        <p key={index}>Assento {number}</p>  
                    )
                })}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Compradores</p></strong>
                {name.map ((n, index) => {
                    return (
                        <>
                            <p key={index}>Nome: {n}</p>
                            <p>CPF: {cpf[index]}</p>
                        </>
                    );
                })}
            </TextContainer>

            <button data-test="go-home-btn" onClick={backToHome}>Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 5px;
    }
`