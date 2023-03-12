import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessions ({ sessionsList}){
    
    return (
        <div>
            {sessionsList.days.map ((day, index) => {
                return (
                    <SessionContainer key={index} data-test="movie-day">
                        {day.weekday} - {day.date}
                        <ButtonsContainer>
                            {day.showtimes.map ((time, index) => {
                                return (
                                    <Link to={`/assentos/${time.id}`} key={index}data-test="showtime"><button >{time.name}</button></Link> 
                                )
                            })}
                        </ButtonsContainer>
                    </SessionContainer> 
                )
            })}
        </div>
);
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`