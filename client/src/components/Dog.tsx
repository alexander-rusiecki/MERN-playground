import { IDog } from '../models/DogInterface';

type DogProps = {
  dog: IDog;
};

function Dog({ dog }: DogProps) {
  return (
    <div key={dog._id} className="dog-card">
      <img src={dog.imageUrl} alt={dog.breed} />
      <h1>{dog.breed}</h1>
      <p>{dog.countryOfOrigin}</p>
    </div>
  );
}

export default Dog;
