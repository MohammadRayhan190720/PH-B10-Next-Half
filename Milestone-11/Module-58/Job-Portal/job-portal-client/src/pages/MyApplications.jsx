import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const MyApplications = () => {

  const{user} = UseAuth();

  const [appliedJob,setAppliedJob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
      setAppliedJob(data);
      console.log(data);
    })

  },[user.email]);
  return (
    <div className="my-10">
      <h3 className="text-center text-4xl lg:text-5xl font-bold font-mono my-5">My Application : {appliedJob.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company_logo</th>
              <th>Company</th>
              <th>Title</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {appliedJob.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{job.title}</td>
                <th>
                 {job.location}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;