import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./CardGenerator";

function Star() {

    const [intel,setIntel] = useState([]);
    const [count,setCount] = useState(1);

    useEffect(()=>{
        axios
        .get(`https://swapi.co/api/people/${count}/`)
        .then(response =>{
            
            setIntel([...intel,response.data]);
            setCount(count + 1);
            
        })
        .catch(error =>{
            console.log("ERROR",error);
        });
    },[count]);


    return(
        <div className = "container">

            <div className = "character">


                {intel.map((char, index)=>{
                    
                    
                    return(
                        
                        <Card  key={index} name={char.name} height={char.height} mass={char.mass} hc={char.hair_color} sc={char.skin_color} ec={char.eye_color} dob={char.birth_year} gen={char.gender}/>
                    );
                    
                }, [2] )};
                
            </div>
        </div>
    );
}

export default Star;