import { useQuery } from 'react-query';
import axios from 'axios';
import Dog from './Dog';
import { IDog } from '../models/DogInterface';

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
