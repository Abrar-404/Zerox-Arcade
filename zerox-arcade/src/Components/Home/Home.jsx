import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Hero from './../Hero/Hero';
import Personalities from '../Personalities/Personalities';

const Home = () => {
  const card = useLoaderData();

  console.log(card);
  return (
    <>
      <Hero></Hero>
      <Banner></Banner>
      <Personalities></Personalities>
      <h1 className="mx-auto text-center text-4xl font-bold text-white mt-20">
        Our <span className="text-rose-700">Services</span>
      </h1>
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
