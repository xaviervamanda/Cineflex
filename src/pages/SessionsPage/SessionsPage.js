import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Loading from "../../components/Loading";
import Sessions from "./Sessions";

export default function SessionsPage({url}) {

    const [sessionsList, setSessionsList] = useState(null);

    const params = useParams();

    useEffect(() => {
        const request = axios.get(`${url}/movies/${params.idFilme}/showtimes`);

        request.then((response) => {
           setSessionsList(response.data);
           console.log(response.data);
        });

        request.catch((error) => alert(`${error.response.message}`));
    }, []);

    if (sessionsList === null){
        return (
            <Loading />
        );
    }


    console.log(sessionsList)

    return (
        <PageContainer>
            Selecione o horário
            <Sessions sessionsList={sessionsList}/>

            <FooterContainer data-test="footer">
                <div>
                    <img src={sessionsList.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessionsList.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
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