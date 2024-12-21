import { button } from "motion/react-client";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { Link } from "react-router-dom";


const HotJobsCard = ({ job }) => {
  // console.log(job)
  const {
    _id,
    title,
    status,
    salaryRange,
    responsibilities,
    requirements,
    location,
    jobType,
    hr_name,
    hr_email,
    description,
    company_logo,
    company,
    category,
    applicationDeadline,
  } = job;
  return (
    <div className="card bg-base-100  shadow-xl p-6 space-y-4">
      <div className="flex items-center gap-5 ">
        <div>
          <img className="w-16 h-16" src={company_logo} alt={title} />
        </div>
        <div>
          <p className="text-2xl font-bold">{company}</p>
          <p className="flex items-center">
            <CiLocationOn />

            {location}
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold">{title}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center">
          <MdOutlineTypeSpecimen />
          {jobType}
        </p>
        <p className="flex items-center">
          <IoMdTime />

          {applicationDeadline}
        </p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap gap-1 flex-grow">
        {
          requirements.map((skill,index)=> <button className="btn" key={index}>{skill}</button>)
        }
      </div>
      <div>
        {
          <p> Salary: $ {salaryRange.min} to $ {salaryRange.max} / <span className="text-xl font-bold">{salaryRange.currency}</span></p>
        }
      </div>
      <div className="text-center">
        <Link to={`/jobDetails/${_id}`} className="px-5 py-3 rounded-xl bg-green-600 text-white">Apply Now</Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
