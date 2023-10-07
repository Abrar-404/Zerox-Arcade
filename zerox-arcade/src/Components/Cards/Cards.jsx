import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Cards = ({ allCard }) => {
  const { event_name, id, image } = allCard || {};

  return (
    <div>
      <div className="card bg-blue-900 bg-opacity-60 bg-transparent shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[500px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-red-700">{event_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to={`/cardsDetails/${id}`}>See Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
