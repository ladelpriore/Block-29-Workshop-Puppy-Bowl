
import { useState } from 'react';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import { Route, Routes} from 'react-router-dom';    //confirm what is Route/Routes or delete




function App() {
  const [puppies, setPuppies] = useState(puppyList); 

  return (
    <>
      <h1>Vite + React</h1>
      <Routes>
        <Route path="/" element={<AllPlayers searchQuery={searchQuery} />} /> 
        <Route path="/newplayer" element={<NewPlayerForm />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>
  );
};

export default App
