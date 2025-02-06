import { FiArrowUpRight } from "react-icons/fi";
import particles from "../assets/images/abs-particles.png";
import latestNews from "../assets/images/latest-news.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      <div className="lg:flex bg-[#141414]">
        <div className="lg:w-[70%]">
          <div className="lg:p-14 md:p-5 p-4">
            <h2 className="text-[#666] md:text-3xl text-2xl font-medium">
              Your Journey to Tomorrow Begins Here
            </h2>
            <h1 className="md:text-5xl text-3xl mt-4 text-white">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#7E7E81] mt-4">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="md:flex mt-4">
            <div className="border-gray-600 border h-[200px] w-full">
              <div className="p-5">
                <h1 className="text-white text-[40px] font-semibold">
                  <CountUp start={0} end={300} duration={2.75} />
                  <span className="text-[#FFD11A]">+</span>
                </h1>
                <p className="text-[#98989A] text-xl">Resources available</p>
              </div>
            </div>
            <div className="border-gray-600 border h-[200px] w-full">
            <div className="p-5">
                <h1 className="text-white text-[40px] font-semibold">
                  <CountUp start={0} end={12} duration={1.75} />
                  <span className="text-[#FFD11A]">K+</span>
                </h1>
                <p className="text-[#98989A] text-xl">Resources available</p>
              </div>
            </div>
            <div className="border-gray-600 border h-[200px] w-full">
            <div className="p-5">
                <h1 className="text-white text-[40px] font-semibold">
                  <CountUp start={0} end={10} duration={1.75} />
                  <span className="text-[#FFD11A]">K+</span>
                </h1>
                <p className="text-[#98989A] text-xl">Resources available</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[50%] bg-contain  bg-no-repeat h-[400px] md:h-[500px] sm:h-[300px]"
          style={{ backgroundImage: `url(${particles})` }}
        >
          {/* The background image is now applied here */}
        </div>
      </div>
      <div className="border-y border-gray-600 w-full bg-[#141414]">
        <div className="w-11/12 mx-auto md:flex justify-between">
          <div className="py-12">
            <div>
              <img className="w-10" src={latestNews} alt="" />
            </div>
            <div className="flex justify-between items-center gap-10">
              <div>
                <h3 className="text-white font-medium mt-4">
                  Latest News Updates
                </h3>
                <h5 className="text-[#7E7E81]">Stay Currrent</h5>
              </div>
              <div className="p-2 bg-amber-400 rounded-full">
                <FiArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
          <div className="py-12">
            <div>
              <img className="w-10" src={latestNews} alt="" />
            </div>
            <div className="flex justify-between items-center gap-10">
              <div>
                <h3 className="text-white font-medium mt-4">
                  Latest News Updates
                </h3>
                <h5 className="text-[#7E7E81]">Stay Currrent</h5>
              </div>
              <div className="p-2 bg-amber-400 rounded-full">
                <FiArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
          <div className="py-12">
            <div>
              <img className="w-10" src={latestNews} alt="" />
            </div>
            <div className="flex justify-between items-center gap-10">
              <div>
                <h3 className="text-white font-medium mt-4">
                  Latest News Updates
                </h3>
                <h5 className="text-[#7E7E81]">Stay Currrent</h5>
              </div>
              <div className="p-2 bg-amber-400 rounded-full">
                <FiArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
