import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigation = useNavigate();
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
      {/* Header 2 */}
      <div className="bg-black w-full py-4">
        <div className="grid grid-cols-7 text-white font-bold text-center">
          <h1>No</h1>
          <h1>Profile</h1>
          <h1>Name</h1>
          <h1>Email</h1>
          <h1> Gender</h1>
          <h1>Phone Number</h1>
          <h1>Action</h1>
        </div>
      </div>

      {/* content */}
      <div className="w-full h-[81vh] overflow-y-auto py-2">
        {usersList.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-7 items-center text-black text-center border-2 border-l-0 border-r-0 border-b-neutral-300 border-t-0 pb-4 pt-4"
            >
              <div>
                <h1> {elem.no} </h1>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="size-10 rounded-full cursor-pointer"
                  src={elem.profile}
                  alt="sparks logo"
                />
              </div>
              <div>
                <h1> {elem.name} </h1>
              </div>
              <div>
                <h1> {elem.email} </h1>
              </div>
              <div>
                <h1> {elem.gender} </h1>
              </div>
              <div>
                <h1> {elem.phone}</h1>
              </div>
              <div>
                <button className="bg-green-900 active:scale-95 text-white text-sm font-bold px-4 py-3 rounded-md">
                  {" "}
                  Unblock{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
