//Create dummy component

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async() => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players');
      const allPlayers = await response.json();
      // console.log(allPlayers);
      setPlayers(allPlayers);
    }

    getPlayers();
  }, []);

  return (             
    <section id="all-players">
        {players.map((singlePlayer) => (
            <section onClick={() => { navigate(`/playerss/${singlePlayer.id}`) }} key={singlePlayer.id}>
              
              <img 
                src={singlePlayer.images[0].slice(2, -2)} // {singlePlayer.images[0]} 
                alt={`A beautiful ${singlePlayer.title}`}
                height="250"
                width="250"
              />
              <h2>{singlePlayer.title}</h2>
            </section>
          ))}
    </section>
  );
};

export default AllPlayers;