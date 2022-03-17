import { useQuery } from 'react-query';
import axios from 'axios';
import { Dog } from 'components/Dog';
import { IDog } from 'models/DogInterface';

const fetchDogs = () => {
  return axios.get<IDog[]>('http://localhost:4000/api/dogs/');
};

export const DogList = () => {
  const { isLoading, data, isError } = useQuery('dogs', fetchDogs, {
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error fetching data...</h1>;
  }
  return (
    <>
      {data?.data.map((dog: IDog) => (
        <Dog dog={dog} />
      ))}
    </>
  );
};
