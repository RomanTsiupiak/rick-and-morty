import React from 'react';
import { CharactersCard } from '../Components/CharactersCard';

const Characters = () => {
  return (
    <div>
      <div className="text-center text-2xl text-[#5368ED]">Rick and Morty</div>
      <CharactersCard
        name="Rick"
        status="Alive"
        species="Human"
        gender="Male"
        image="https://i.pinimg.com/564x/a1/c3/f8/a1c3f877ad61933212d7f161ea92708c.jpg"
      />
    </div>
  );
};

export default Characters;
