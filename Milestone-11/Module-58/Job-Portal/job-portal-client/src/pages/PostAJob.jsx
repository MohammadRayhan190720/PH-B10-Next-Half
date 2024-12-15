import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";

const PostAJob = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const {
    fields: requirementsFields,
    append: addRequirement,
    remove: removeRequirement,
  } = useFieldArray({
    control,
    name: "requirements",
  });

  const {
    fields: responsibilitiesFields,
    append: addResponsibility,
    remove: removeResponsibility,
  } = useFieldArray({
    control,
    name: "responsibilities",
  });

  const onSubmit = (data) => {
    // const { requirements, responsibilities, ...data } = data;

    data.requirements = data.requirements
      .map((item) => item.value.split(","))
      .flat();
    data.responsibilities = data.responsibilities
      .map((item) => item.value.split(","))
      .flat();
    console.log("Job Post Data:", data);

    //send data to database

    fetch("http://localhost:5000/jobs",{
      method: "POST",
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "Job added successfully",
          icon: "success",
        });
      }
    })



    // reset();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-5xl font-bold mb-4 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block font-medium mb-2">Job Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Location</label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Job Type</label>
          <select
            {...register("jobType", { required: "Job type is required" })}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select a job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.jobType && (
            <p className="text-red-500 text-sm">{errors.jobType.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Application Deadline</label>
          <input
            type="date"
            {...register("applicationDeadline", {
              required: "Deadline is required",
            })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.applicationDeadline && (
            <p className="text-red-500 text-sm">
              {errors.applicationDeadline.message}
            </p>
          )}
        </div>

        {/* Salary Range Field */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Salary Range</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              {...register("salaryRange.min", {
                required: "Minimum salary is required",
              })}
              placeholder="Min"
              className="w-1/3 border rounded px-3 py-2"
            />
            <input
              type="number"
              {...register("salaryRange.max", {
                required: "Maximum salary is required",
              })}
              placeholder="Max"
              className="w-1/3 border rounded px-3 py-2"
            />
            <select
              {...register("salaryRange.currency", {
                required: "Currency is required",
              })}
              className="w-1/3 border rounded px-3 py-2"
            >
              <option value="">Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="BDT">BDT</option>
            </select>
          </div>
          {errors.salaryRange?.min && (
            <p className="text-red-500 text-sm">
              {errors.salaryRange.min.message}
            </p>
          )}
          {errors.salaryRange?.max && (
            <p className="text-red-500 text-sm">
              {errors.salaryRange.max.message}
            </p>
          )}
          {errors.salaryRange?.currency && (
            <p className="text-red-500 text-sm">
              {errors.salaryRange.currency.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border rounded px-3 py-2"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Company</label>
          <input
            type="text"
            {...register("company", { required: "Company is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Requirements</label>
          {requirementsFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`requirements.${index}.value`, {
                  required: "Required",
                })}
                className="w-full border rounded px-3 py-2 mr-2"
              />
              <button
                type="button"
                onClick={() => removeRequirement(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addRequirement({ value: "" })}
            className="text-blue-500"
          >
            Add Requirement
          </button>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Responsibilities</label>
          {responsibilitiesFields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`responsibilities.${index}.value`, {
                  required: "Required",
                })}
                className="w-full border rounded px-3 py-2 mr-2"
              />
              <button
                type="button"
                onClick={() => removeResponsibility(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addResponsibility({ value: "" })}
            className="text-blue-500"
          >
            Add Responsibility
          </button>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">HR Email</label>
          <input
            type="email"
            {...register("hr_email", { required: "HR Email is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.hr_email && (
            <p className="text-red-500 text-sm">{errors.hr_email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">HR Name</label>
          <input
            type="text"
            {...register("hr_name", { required: "HR Name is required" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.hr_name && (
            <p className="text-red-500 text-sm">{errors.hr_name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Company Logo URL</label>
          <input
            type="text"
            {...register("company_logo", {
              required: "Company Logo URL is required",
            })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.company_logo && (
            <p className="text-red-500 text-sm">
              {errors.company_logo.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostAJob;
