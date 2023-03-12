import styled from "styled-components";

export default function SeatsOptions(){
    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircleSelected />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircleAvailable />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircleUnavailable />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    );
}

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircleSelected = styled.div`
    border: 1px solid #0E7D71;         // Essa cor deve mudar
    background-color: #1AAE9E;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleAvailable = styled.div`
    border: 1px solid #7B8B99;         // Essa cor deve mudar
    background-color: #C3CFD9;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleUnavailable = styled.div`
    border: 1px solid #FAD76B;         // Essa cor deve mudar
    background-color: #FBE192;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`