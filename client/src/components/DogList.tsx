import { useQuery } from 'react-query';
import axios from 'axios';
import { IDog } from '../models/DogInterface';

function DogList() {
  const { isLoading, data } = useQuery('dogs', () => {
    return axios.get('http://localhost:4000/api/dogs/');
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Dogs:</h1>
      {data?.data.map((dog: IDog) => (
        <h1 key={dog._id}>{dog.breed}</h1>
      ))}
    </>
  );
}

export default DogList;
