import join from '../../assets/join.svg';

const CardDetails = ({ load }) => {
  const { image, event_name, description } = load || {};

  return (
    <div>
      <div className="card h-[100vh] justify-center flex items-center bg-gray-900 bg-opacity-60 bg-transparent shadow-xl">
        <figure className="px-10 pt-10">
          <div className="flex md:flex-col-reverse lg:flex-row flex-col-reverse gap-5">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-[500px] h-[300px]"
            />
            <div className="">
              <p className="text-white text-base font-bold uppercase">
                {event_name}
              </p>
              <p className="text-white mt-6 max-w-sm">{description}</p>

              <div className="badge mt-4 badge-secondary">{event_name}</div>
              <img className="w-[250px] mt-2 h-[100px]" src={join} alt="" />
            </div>
          </div>
        </figure>
        <div className="card-body items-start text-left">
          <div className="text-start">
            <h2 className="card-title text-white mx-auto text-start"></h2>
          </div>
          <p className="text-white text-xs mt-4"></p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
