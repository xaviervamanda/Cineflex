import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Movies ({url, setIsHome}){

    const [movieList, setMovieList] = useState(null);
    

    useEffect(() => {
        const request = axios.get(`${url}/movies`);

        request.then(response => {
            setMovieList(response.data)
        });

        request.catch(error => alert("Não foi possível carregar a lista de filmes. Recarregue a página."))
    }, []);

    if (movieList === null){
        return (
            <Loading />
        );
    }

    return (
        <ListContainer>
            {movieList.map ((movie) => {
                return ( 
                    <Link to={`/sessoes/${movie.id}`}  key={movie.id}>
                        <MovieContainer data-test="movie">
                            <img src={movie.posterURL} alt="poster"/>
                        </MovieContainer>
                    </Link>
            )})}
        </ListContainer>
    );
}

const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`
