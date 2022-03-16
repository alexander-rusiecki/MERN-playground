import { useQuery } from 'react-query';
import axios from 'axios';
import { IDog } from '../models/DogInterface';
import Dog from './Dog';

function DogList() {
  const { isLoading, data } = useQuery('dogs', () => {
    return axios.get<IDog[]>('http://localhost:4000/api/dogs/');
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {data?.data.map((dog: IDog) => (
        <Dog dog={dog} />
      ))}
    </>
  );
}

export default DogList;
