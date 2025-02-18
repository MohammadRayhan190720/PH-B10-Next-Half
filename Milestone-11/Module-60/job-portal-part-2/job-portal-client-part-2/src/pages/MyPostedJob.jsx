import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";

const MyPostedJob = () => {
  const [postedJob, setPostedJob] = useState([]);
  // console.log(postedJob)
  const { user } = UseAuth();

  useEffect(() => {
    fetch(
      `https://job-portal-server-part-2.vercel.app/jobs?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostedJob(data);
      });
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <p className="text-center font-bold text-4xl my-8">
        My Posted Job :{postedJob.length}{" "}
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Job Title</th>
              <th>Localtion</th>
              <th>Application Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postedJob.map((job, index) => (
              <tr key={job._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  <Link
                    className="flex items-center border px-5 py-3 w-fit border-green-600"
                    to={`/viewApplications/${job._id}`}
                  >
                    <CiViewList />
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
