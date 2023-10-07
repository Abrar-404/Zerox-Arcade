import AOS from 'aos';

const Hero = () => {
  return (
    <div className="">
      {/* 1 */}

      <div data-aos="fade-up-right" className="hero mt-5 bg-transparent">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/fp7MCdG/Build-Game-Watch-It-Die-Hyper-Scape-Games.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl text-white font-bold">Hyper Scape</h1>
            <div className="flex items-center gap-5">
              <img
                className="w-[60px] mt-5 mb-5 rounded-full h-[60px]"
                src="https://i.ibb.co/qyrg0mp/Basic-Editing-Of-Free-Gaming-Logo.gif"
                alt=""
              />
              <div
                className="radial-progress text-primary"
                style={{ '--value': 70 }}
              >
                70%
              </div>
            </div>
            <progress className="progress progress-secondary w-56"></progress>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div data-aos="fade-up-left" className="hero mt-5 bg-transparent">
        <div className="hero">
          <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/khvWkrn/642878e8d22cb6adc5c52e74fdf1e6aa.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-white font-bold">Battlefield!</h1>
              <div className="flex gap-5 items-center">
                <img
                  className="w-[60px] mt-5 mb-5 h-[60px] rounded-full"
                  src="https://i.ibb.co/Z2qB6Sx/ibn.gif"
                  alt=""
                />
                <div
                  className="radial-progress text-primary"
                  style={{ '--value': 60 }}
                >
                  60%
                </div>
              </div>
              <progress className="progress progress-secondary w-56"></progress>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}

      <div data-aos="fade-up-right" className="hero mt-5 bg-transparent">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/k2hz5cf/stalker-2.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl text-white font-bold">Stalker</h1>
            <div className="flex gap-5 items-center">
              <img
                className="w-[60px] rounded-full mb-5 mt-5 h-[60px]"
                src="https://i.ibb.co/qyrg0mp/Basic-Editing-Of-Free-Gaming-Logo.gif"
                alt=""
              />
              <div
                className="radial-progress text-primary"
                style={{ '--value': 80 }}
              >
                80%
              </div>
            </div>
            <progress className="progress progress-secondary w-56"></progress>
          </div>
        </div>
      </div>

      {/* 4 */}

      <div data-aos="fade-up-left" className="hero mt-5 bg-transparent">
        <div className="hero">
          <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/ryZHnfL/INSIDE-BT-66.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-white font-bold">Delta Force</h1>
              <div className="gap-5 flex items-center">
                <img
                  className="w-[60px] rounded-full mb-5 mt-5 h-[60px]"
                  src="https://i.ibb.co/SsPHkt3/Advanced-Editing-Of-Free-Gaming-Logo.gif"
                  alt=""
                />
                <div
                  className="radial-progress text-primary"
                  style={{ '--value': 50 }}
                >
                  50%
                </div>
              </div>
              <progress className="progress progress-secondary w-56"></progress>
            </div>
          </div>
        </div>
      </div>

      {/* 5 */}

      <div data-aos="fade-up-right" className="hero mt-5 bg-transparent">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/PsyX94F/intro-1592581131.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl text-white font-bold">Vikings</h1>
            <div className="flex items-center gap-5">
              <img
                className="w-[60px] rounded-full mb-5 mt-5 h-[60px]"
                src="https://i.ibb.co/qyrg0mp/Basic-Editing-Of-Free-Gaming-Logo.gif"
                alt=""
              />
              <div
                className="radial-progress text-primary"
                style={{ '--value': 67 }}
              >
                67%
              </div>
            </div>
            <progress className="progress progress-secondary w-56"></progress>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div data-aos="fade-up-left" className="hero mt-5 bg-transparent">
        <div className="hero">
          <div className="hero-content gap-20 flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/qdBbGv2/digitalfoundry-2014-watch-dogs-performance-analysis-1401221185844.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-white font-bold">Watch Dogs</h1>
              <div className="flex gap-5 items-center">
                <img
                  className="w-[60px] mt-5 mb-5 h-[60px] rounded-full"
                  src="https://i.ibb.co/Z2qB6Sx/ibn.gif"
                  alt=""
                />
                <div
                  className="radial-progress text-primary"
                  style={{ '--value': 90 }}
                >
                  90%
                </div>
              </div>
              <progress className="progress progress-secondary w-56"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
