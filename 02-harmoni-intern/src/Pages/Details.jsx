import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <div className="max-w-7xl mx-auto pt-5">
      <div className="mb-10">
        <img
          src="https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D"
          alt="Cricket Image"
          className="w-full object-cover h-150"
        />
        <div className="flex justify-between pt-5">
          <h1 className="text-5xl font-bold tracking-tight uppercase">
            {" "}
            Indian Premier league
          </h1>
          <button className="bg-blue-900 text-lg active:scale-95 text-white font-bold rounded-md px-3 align-middle">
            {" "}
            Book Ticket{" "}
          </button>
        </div>
        <div className="flex justify-between flex-col gap-3 pt-3">
          <h1 className="font-extrabold"> ₹1499 </h1>
          <h3 className="text-lg"> Indian Premier league </h3>
          <h1 className="font-extrabold text-lg text-black">
            {" "}
            When and Where{" "}
          </h1>
        </div>
        <div className=" flex justify-between pt-18">
          <div className="flex gap-2">
            <div className="text-lg flex justify-center flex-col">
              {" "}
              <FontAwesomeIcon icon={faCalendar} />{" "}
            </div>
            <div>
              <h1 className="text-lg font-extrabold mb-2"> Date and Time </h1>
              <h1> Start Date: 2025-03-15 </h1>
              <h1> Start Time: 19:32 </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-lg flex justify-center flex-col">
              {" "}
              <FontAwesomeIcon icon={faCalendar} />{" "}
            </div>
            <div>
              <h1 className="text-lg font-extrabold mb-2"> Date and Time </h1>
              <h1> Start Date: 2024-05-09 </h1>
              <h1> Start Time: 11:11 </h1>
            </div>
          </div>
        </div>
         <div className="flex gap-2 pt-10">
            <div className="text-lg flex justify-center flex-col">
              {" "}
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <div>
              <h1 className="text-lg font-extrabold mb-2"> Location  </h1>
              <h1> Motera Stadium Ahmedabad  </h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Details;
