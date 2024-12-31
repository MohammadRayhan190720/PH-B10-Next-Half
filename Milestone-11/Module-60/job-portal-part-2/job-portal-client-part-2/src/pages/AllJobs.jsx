import useJobs from "../hooks/useJobs";
import HotJobsCard from "../components/HotJobsCard";
import { useState } from "react";

const AllJobs = () => {
  const [sort,setSort] = useState(false)
  const [search,setSearch] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const {jobs,loading} = useJobs(sort,search, minSalary, maxSalary);

  if(loading){
    return <p>Jobs is Loading...</p>
  }
  console.log(sort)


  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold ">All Jobs</h2>
      <div className="flex gap-5 mt-8 items-center justify-center">
        <button
          onClick={() => {
            setSort(!sort);
          }}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort == true ? "sorted by salary" : "sort by Salary"}
        </button>
        <div className="input input-bordered flex items-center gap-2 max-w-xl w-full">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            className="grow"
            placeholder="Search job By Location"
          />
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
        </div>
        <div className="space-y-5">
          <input
            onChange={(e) => {
              setMinSalary(e.target.value);
            }}
            type="text"
            placeholder="Min Salary"
            className="input input-bordered input-primary w-full max-w-xl"
          />
          <input
            onChange={(e) => {
              setMaxSalary(e.target.value);
            }}
            type="text"
            placeholder="Max Salary"
            className="input input-bordered input-primary w-full max-w-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8 lg:mt-12">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;