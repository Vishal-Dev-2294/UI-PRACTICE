import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserList from "./UserList";
import AddEvent from "./AddEvent";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  const usersList = [
    {
      no: 1,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", // male cartoon
      name: "Vishal Sharma",
      email: "vishal@gmail.com",
      gender: "Male",
      phone: "9876543210",
    },
    {
      no: 2,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png", // female cartoon
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      gender: "Female",
      phone: "9123456780",
    },
    {
      no: 3,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      gender: "Male",
      phone: "9988776655",
    },
    {
      no: 4,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
      name: "Priya Gupta",
      email: "priya@gmail.com",
      gender: "Female",
      phone: "9090909090",
    },
    {
      no: 5,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Amit Kumar",
      email: "amit@gmail.com",
      gender: "Male",
      phone: "9012345678",
    },
    {
      no: 6,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
      name: "Neha Yadav",
      email: "neha@gmail.com",
      gender: "Female",
      phone: "9345678123",
    },
    {
      no: 7,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Rohit Meena",
      email: "rohit@gmail.com",
      gender: "Male",
      phone: "8887766554",
    },
    {
      no: 8,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
      name: "Kajal Jain",
      email: "kajal@gmail.com",
      gender: "Female",
      phone: "9876123456",
    },
    {
      no: 9,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      name: "Suresh Patel",
      email: "suresh@gmail.com",
      gender: "Male",
      phone: "9998887776",
    },
    {
      no: 10,
      profile: "https://cdn-icons-png.flaticon.com/512/4140/4140057.png",
      name: "Pooja Malhotra",
      email: "pooja@gmail.com",
      gender: "Female",
      phone: "9786543210",
    },
  ];

  return (
    <>
      <div className="h-screen w-full flex">
        {/* left Content */}
        <div className="h-full min-w-40 bg-white border-4 border-t-0 border-l-0 border-r-neutral-400 border-b-0">
          <div className="pt-15 w-full">
            <div className=" flex flex-col gap-6 border-3 p-4 border-t-neutral-300 border-l-0 border-r-0 border-b-neutral-300">
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <Link to=".">
                    <h3 className="text-sm"> User List </h3>
                  </Link>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div>
                  <Link to="AddEvent">
                    <h3 className="text-sm cursor-pointer"> Event Post </h3>
                  </Link>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>

                <div>
                  <Link to="Category">
                    <h3 className="text-sm"> Post Category </h3>
                  </Link>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div>
                  <Link to="AddGallery">
                    <h3 className="text-sm"> Add Gallery </h3>
                  </Link>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                  <Link to="ContactList">
                    <h3 className="text-sm"> Contact List </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-4">
              <div className="flex justify-center ">
                {" "}
                <h3 className="text-sm"> Authentiation </h3>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-sm font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </div>
                <div>
                  <h3 className="text-sm"> Log Out </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Header 1 */}
          <div className="flex justify-between items-center p-7 bg-blue-600 w-full text-white h-22">
            <div>
              {" "}
              <h1 className="text-lg font-bold "> Admin </h1>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="size-10 rounded-full cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ1Vm9DCt3CaDGvAII2F_I7HiG6r71giIqA&s"
                  alt="sparks logo"
                />
              </div>
              <div className="font-bold "> Event Management Admin </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
