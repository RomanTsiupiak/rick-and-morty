import React from 'react';

type CharactersCardProps = {
  name: string;
  status: string;
  species: string;
  gender: 'Male' | 'Female';
  image: string;
};

export const CharactersCard = ({ name, status, species, gender, image }: CharactersCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-[300px] h-[356px] rounded-xl flex flex-col items-center relative bg-center bg-cover overflow-hidden"
    >
      <div className="w-full h-full absolute rounded-xl z-10" />
      <div className="absolute z-20 bg-[#000000]/50 w-full h-[300px] bottom-[-200px] rounded-xl hover:bottom-0 duration-[1s] ease-out">
        <p className="text-4xl text-center text-[#FFFFFF] p-[16px]">{name}</p>
        <div className="w-full flex gap-[8px] justify-around">
          <p className="text-xl text-center text-[#FFFFFF]">{status}</p>
          <p className="text-xl text-center text-[#FFFFFF]">{gender}</p>
          <p className="text-xl text-center text-[#FFFFFF]">{species}</p>
        </div>
      </div>
    </div>
  );
};
