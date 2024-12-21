import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";


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
    // axios
    //   .get(`http://localhost:5000/job-applications?email=${user.email}`,{
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setAppliedJob(res.data);
    //   });

  },[user.email]);

  const handleDelete = id =>{
    // console.log('please delete this job',id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
            fetch(`http://localhost:5000/job-applications/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if(data.deleteCount > 0){
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your Job has been deleted.",
                            icon: "success",
                          });
                }
                const remainingJob = appliedJob.filter(job => job._id !== id)
                      setAppliedJob(remainingJob)
              });
      }
    });




  }



  return (
    <div className="my-10">
      <h3 className="text-center text-4xl lg:text-5xl font-bold font-mono my-5">
        My Application : {appliedJob.length}
      </h3>

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
              <th>Action</th>
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
                <th>{job.location}</th>
                <th>
                  <button onClick={()=>{handleDelete(job._id)}} className="px-3 py-1 bg-lime-500 text-red-500 text-2xl ">
                   
                    <AiFillDelete />
                  </button>
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