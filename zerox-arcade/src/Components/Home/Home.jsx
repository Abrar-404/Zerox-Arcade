import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const card = useLoaderData();

  console.log(card);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 grid-cols-1">
      {card?.map(allCard => (
        <Cards key={allCard.id} allCard={allCard}></Cards>
      ))}
    </div>
  );
};

export default Home;
