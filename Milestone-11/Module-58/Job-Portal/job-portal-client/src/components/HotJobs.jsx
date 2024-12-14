import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {

  const [jobs,setJobs] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:5000/jobs")
    .then(res => res.json())
    .then(data => {
      setJobs(data);
    })

  },[])


  return (
    <div>
      <h3 className="text-center text-4xl lg:text-5xl font-bold mt-5">Jobs Of The Day</h3>
      <p className="text-center w-1/2 mx-auto">
        Discover the latest job opportunities of the day, curated for you. Stay
        updated with trending openings across industries and find the perfect
        role to kickstart or elevate your career.
      </p>

      <div>
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;