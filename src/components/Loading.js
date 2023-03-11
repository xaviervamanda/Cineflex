import styled from "styled-components";
import loading from "../assets/loading.gif";

export default function Loading (){
    return (
        <LoadingGif>
            <img src={loading} alt="loading" />
        </LoadingGif>
    );
}

const LoadingGif = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 200px;
    img{
        width: 50px;
        height: 50px;
    }
`