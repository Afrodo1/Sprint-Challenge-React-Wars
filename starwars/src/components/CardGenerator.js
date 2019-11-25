import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    display:flex;
    justify-content: center;
    
    background-color: white;
    width: 40%;
    margin-left: 30%;
    `;

const Cardfiller = styled.div`

    display:flex;
    flex-direction: column;
    text-align: center;

`


const Card = props =>{
    return(
      <Cards>
        <Cardfiller>
            <h1>{props.name}</h1>
            <h3>Suspect Intel</h3>
            <ul>
                <p>Height: {props.height}cm</p>
                <p>Weight: {props.mass}kg</p>
                <p>Hair Color: {props.hc}</p>
                <p>Skin Color: {props.sc}</p>
                <p>Eye Color: {props.ec}</p>
                <p>DOB: {props.dob}</p>
                <p>Gender: {props.gen}</p>
            </ul>
        </Cardfiller>
      </Cards>        

    );
};

export default Card;