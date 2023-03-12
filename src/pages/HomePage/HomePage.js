import styled from "styled-components";
import Movies from "./Movies";

export default function HomePage({url, setIsHome}) {

    

    return (
        <PageContainer>
            Selecione o filme

            <Movies url={url} setIsHome={setIsHome}/>

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
    padding-top: 70px;
`
