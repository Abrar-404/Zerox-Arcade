import { Link } from 'react-router-dom';
import Button from '../Button/Button';

/* eslint-disable react/prop-types */
const Cards = ({ allCard }) => {
  const { event_name, id, image, short_description } = allCard || {};

  return (
    <div>
      <div className="card bg-gray-900 bg-opacity-60 bg-transparent shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[500px] h-[300px]"
          />
        </figure>
        <div className="card-body items-start text-left">
          <div className="text-start">
            <h2 className="card-title text-white mx-auto text-start">
              {event_name}
            </h2>
          </div>
          <p className="text-white text-xs mt-4">{short_description}</p>
          <div className="card-actions">
            <Button className="py-2 border border-blue-500 px-2 rounded-lg hover:bg">
              <Link to={`/cardsDetails/${id}`}>See Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
