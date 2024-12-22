import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applicationData = useLoaderData();
  console.log(applicationData);

  const handleChangeStatus = (e, id) => {
    // console.log(e.target.value,id);
    const data = {
      status: e.target.value,
    };

    fetch(
      `https://job-portal-server-part-2.vercel.app/job-applications/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "status updated successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-5">
      <p className="text-4xl font-bold text-center my-10">
        Application for this job :{applicationData.length}{" "}
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>serial</th>
              <th>Applicant Email</th>
              <th>Phone</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applicationData.map((data, index) => (
              <tr key={data._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{data.applicant_email}</td>
                <td>{data.phone}</td>
                <td>
                  <select
                    onChange={(e) => handleChangeStatus(e, data._id)}
                    defaultValue={data.status || "change status"}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option disabled value="change status">
                      Change Status
                    </option>
                    <option value="Under Review">Under Review</option>
                    <option value="Interview">Interview</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
