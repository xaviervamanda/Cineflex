import styled from "styled-components";

export default function Sessions ({params, sessionsList}){
    console.log(sessionsList)
    return (
        <div>
            {sessionsList.days.map ((day, index) => {
                return (
                    <SessionContainer key={index} data-test="movie-day">
                        {day.weekday} - {day.date}
                        <ButtonsContainer>
                            {day.showtimes.map ((time, index) => {
                                return (
                                    <button key={index} data-test="showtime">{time.name}</button> 
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