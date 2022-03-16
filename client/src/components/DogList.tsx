import { useEffect, useState } from 'react';
import { IDog } from '../models/DogInterface';

function DogList() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const getDogs = async () => {
      const response = await fetch('http://localhost:4000/api/dogs/');
      setDogs(await response.json());
    };
    getDogs();
  }, []);
  return (
    <div>
      <h1>Dogs:</h1>
      {dogs
        ? dogs.map((dog: IDog) => <h1 key={dog._id}>{dog.breed}</h1>)
        : null}
    </div>
  );
}

export default DogList;
