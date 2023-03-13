import axios from "axios";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../components/Loading";
import Seats from "./Seats";
import SeatsOptions from "./SeatsOptions";

export default function SeatsPage({url, seatsList, setSeatsList, 
    seatsNumber, setSeatsNumber, name, setName,
    cpf, setCpf, seatsReserved, setSeatsReserved}) {

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const request = axios.get(`${url}/showtimes/${params.idSessao}/seats`);

        request.then((response) => {
           setSeatsList(response.data);
           setSeatsNumber([]);
           setSeatsReserved([]);
           console.log(response.data);
        });

        request.catch((error) => {
            if (error.response.message !== undefined){
                alert(`${error.response.message}`)
            }  
        });
    }, []);

    if (seatsList === null){
        return (
            <Loading />
        );
    }

    function sendOrder (e){
        e.preventDefault();
        if (seatsReserved.length === 0){
            alert ("Você não escolheu nenhum assento para reservar.")
        } else {
            const newUrl = `${url}/seats/book-many`;
            const object = {ids: seatsReserved, name: name, cpf: cpf};
            console.log(newUrl);
            console.log(object)
            const request = axios.post(newUrl, object);
            request.then (response => navigate("/sucesso"));
            request.catch (error => alert(`Ocorreu o seguinte erro: ${error.response.message}`))   
        }
        
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Seats seatsList={seatsList} 
            seatsReserved={seatsReserved} 
            setSeatsReserved={setSeatsReserved}
            seatsNumber={seatsNumber}
            setSeatsNumber={setSeatsNumber}
            />

            <SeatsOptions seatsList={seatsList}/>

            <FormContainer>
                <form onSubmit={sendOrder}>
                    Nome do Comprador:
                    <input data-test="client-name" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Digite seu nome..." 
                    required/>

                    CPF do Comprador:
                    <InputMask data-test="client-cpf"
                    mask={"999.999.999-99"}
                    type="text"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    placeholder="Digite seu CPF..." 
                    required/>

                    <button>Reservar Assento(s)</button>
                </form>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={seatsList.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{seatsList.movie.title}</p>
                    <p>{seatsList.day.weekday} - {seatsList.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`