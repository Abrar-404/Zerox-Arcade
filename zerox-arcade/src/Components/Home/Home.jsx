import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
  const card = useLoaderData();

  console.log(card);
  return (
    <>
      <Banner></Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 grid-cols-1">
        {card?.map(allCard => (
          <Cards key={allCard.id} allCard={allCard}></Cards>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
