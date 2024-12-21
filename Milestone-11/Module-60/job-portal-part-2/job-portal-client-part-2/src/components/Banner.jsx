import { motion } from "motion/react";
import Team1 from '../assets/images/team-1.jpg'
import Team2 from '../assets/images/team-2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
           animate={{ y:[0,50,0] }}
           transition={{duration:10,repeat:Infinity}}
            src={Team1}
            className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
          <motion.img
           animate={{ x:[100,150,100] }}
           transition={{duration:10,delay:5, repeat:Infinity}}
            src={Team2}
            className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ y: -20,opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">Latest Job For You!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mt-5">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <button className="btn btn-primary mt-5">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
