const Dashboard = () => {
  return (
    <div>
      <img
        className="w-[300px] h-[300px] rounded-full mx-auto justify-center mt-9"
        src="https://i.ibb.co/85zxjZR/Xin-Final-Paid-Revised.webp"
        alt=""
      />
      <h1 className="mx-auto text-center font-bold text-3xl mt-10 text-white">
        Event Join Pogression
      </h1>

      <div className="mt-10">
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range mx-auto text-center range-primary"
          step="25"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span className="text-white">|</span>
          <span className="text-white">|</span>
          <span className="text-white">|</span>
          <span className="text-white">|</span>
          <span className="text-white">|</span>
        </div>
      </div>

      <h1 className="mx-auto text-center font-bold text-3xl mt-10 text-white">
        User Condition
      </h1>
      <div className="mx-auto text-center font-bold text-3xl mt-10">
        <div className="rating gap-1">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
