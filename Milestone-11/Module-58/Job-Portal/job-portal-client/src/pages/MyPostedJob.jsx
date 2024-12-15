import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyPostedJob = () => {

  const [postedJob,setPostedJob] = useState([])
  // console.log(postedJob)
  const {user} = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setPostedJob(data);
    })
  },[user.email])


  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <p className="text-center font-bold text-4xl my-8">My Posted Job :{postedJob.length} </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Job Title</th>
              <th>Localtion</th>
              <th>Application Deadline</th>
              <th>Applicant</th>

            </tr>
          </thead>
          <tbody>
            {postedJob.map((job, index) => (
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job?.applicant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;