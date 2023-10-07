import join from '../../assets/join.svg';

const CardDetails = ({ load }) => {
  const { image, event_name, description } = load || {};

  return (
    <div>
      <div className="card h-[100vh] justify-center flex items-center bg-gray-900 bg-opacity-60 bg-transparent shadow-xl">
        <figure className="px-10 pt-10">
          <div className="flex  gap-5">
            <img
              src={image}
              className="rounded-xl lg:w-[500px] lg:h-[300px] md:w-[300px] md:h-[200px] w-[200px] h-[100px]"
            />
            <div className="">
              <p className="text-white text-base font-bold uppercase">
                {event_name}
              </p>
              <p className="text-white lg:mt-6 md:mt-4 mt-1 text-[7px] md:text-[10px] lg:text-base max-w-sm">
                {description}
              </p>

              <div className="flex-row md:flex-col lg:flex-col">
                <div>
                  <div className="badge lg:mt-4 md:mt-4 mt-2 text-[5px] md:text-base lg:text-lg badge-secondary">
                    {event_name}
                  </div>
                </div>
                <img
                  className="lg:w-[200px] md:w[80px] md:h-[50px] w-[100px] h-[20px]  mt-2 lg:h-[100px]"
                  src={join}
                  alt=""
                />
              </div>
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
