


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePlayer = () => {      
    const [selectedPlayer, setSelectedPlayer] = useState({});   
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPlayer = async() => {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}');    
            const playerData = await response.json();
            setSelectedPlayer(player);     
        }

        getPlayer();
    }, []);



    const deletePlayer = async() => {
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players/${id}', {
                method: 'DELETE',
            });
        
            navigate('/players');     
        
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>
        {selectedPlayer.imagesUrl (
            <img 
                src={selectedPlayer.imageUrl} 
                alt={selectedPlayer.name}
                height="300"
                width="300" 
            /> 
            )}  

            <h2>{selectedPlayer.name}</h2>
            <h2>{selectedPlayer.breed}</h2>
            <p>{selectedPlayer.status}</p>

        
            <button onClick={ deletePlayer }>Puppy be Gone!</button> 
        
        <Link to='/players'>Back To All Puppies</Link>
        </>
    );
    };
  
  
export default SinglePlayer;