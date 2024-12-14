
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {

  const {id} = useParams();

  const{user} = UseAuth();
  console.log(user);


  console.log(id);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Form Data:", data);
    const job_id = id;
    const applicant_email = user?.email;
   const jobApplication ={...data,job_id,applicant_email}


   //send data to database

   fetch("http://localhost:5000/job-applications", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(jobApplication),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       if (data.insertedId) {
         Swal.fire({
           title: "Good job!",
           text: "Successfully Submit You Apply Form",
           icon: "success",
         });
       }
     });

   
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must contain only numbers",
              },
            })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        {/* LinkedIn Profile URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            {...register("linkedin", { required: "LinkedIn URL is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.linkedin && (
            <span className="text-red-500 text-sm">
              {errors.linkedin.message}
            </span>
          )}
        </div>

        {/* GitHub Profile URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            GitHub Profile URL
          </label>
          <input
            type="url"
            {...register("github", { required: "GitHub URL is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.github && (
            <span className="text-red-500 text-sm">
              {errors.github.message}
            </span>
          )}
        </div>

        {/* Resume URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Resume URL</label>
          <input
            type="url"
            {...register("resume", { required: "Resume URL is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.resume && (
            <span className="text-red-500 text-sm">
              {errors.resume.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
