import { useState } from "react";
import styled from "styled-components";

export default function Seats ({seatsList, seatsReserved, setSeatsReserved, seatsNumber, setSeatsNumber}){

    const [selected, setSelected] = useState(Array(seatsList.seats.length).fill(false));

    function reserveSeats (isAvailable, index, seat, numberSeat){
        if (!isAvailable){
            alert ("Esse assento não está disponível.")
        }
        else {
            if (selected[index]){
                const newSelected = [...selected];
                newSelected[index] = false;
                setSelected(newSelected);
                // tirar assentos da reserva
                const newSeatsReserved = [...seatsReserved];
                const elementIndex = seatsReserved.indexOf(seat);
                newSeatsReserved.splice(elementIndex, 1);
                setSeatsReserved(newSeatsReserved);

                const newSeatsNumber = [...seatsNumber];
                const elementNumberIndex = seatsNumber.indexOf(numberSeat);
                newSeatsNumber.splice(elementNumberIndex, 1);
                setSeatsNumber(newSeatsNumber);
                 
            } else {
                const newSelected = [...selected];
                newSelected[index] = true;
                setSelected(newSelected);
                // reservar assentos
                const reserve = [...seatsReserved, seat]
                setSeatsReserved(reserve);
                
                const reserveNumber = [...seatsNumber, numberSeat]
                setSeatsNumber(reserveNumber);
            }
            
        }
    }

    console.log(seatsReserved)

    return (
        <SeatsContainer>
            {seatsList.seats.map ((seat, index) => {
                return (
                    <SeatItem data-test="seat" key={index} isAvailable={seat.isAvailable} selected={selected[index]} onClick={() => reserveSeats(seat.isAvailable, index, seat.id, seat.name)}>{seat.name}</SeatItem>
                )
            })}
        </SeatsContainer>
        
    );
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const SeatItem = styled.div`
    border: 1px solid ${props => (props.isAvailable && props.selected) ? "#0E7D71" : props.isAvailable ? "#7B8B99" : "#FAD76B"};         // Essa cor deve mudar
    background-color: ${props => (props.isAvailable && props.selected) ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`