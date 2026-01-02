import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const navigation = useNavigate();
  const usersList = [
    {
      no: 1,
      name: "Vishal Sharma",
      email: "vishal@gmail.com",
      phone: "9876543210",
      message: "hey"
    },
    {
      no: 2,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      phone: "9123456780",
      message: "hii"
    },
    {
      no: 3,
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      phone: "9988776655",
      message: "hello"
    },
    {
      no: 4,
      name: "Priya Gupta",
      email: "priya@gmail.com",
      phone: "9090909090",
      message: "heyyyy"
    },
    {
      no: 5,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "9012345678",
      message:"heloooo"
    },
    {
      no: 6,
      name: "Neha Yadav",
      email: "neha@gmail.com",
      phone: "9345678123",
      message:"hahaha"
    },
    {
      no: 7,
      name: "Rohit Meena",
      email: "rohit@gmail.com",
      phone: "8887766554",
      message:"ram ram"
    },
    {
      no: 8,
      name: "Kajal Jain",
      email: "kajal@gmail.com",
      phone: "9876123456",
      message:"majak se hatke"
    },
    {
      no: 9,
      name: "Suresh Patel",
      email: "suresh@gmail.com",
      phone: "9998887776",
      message:"yooo"
    },
    {
      no: 10,
      name: "Pooja Malhotra",
      email: "pooja@gmail.com",
      phone: "9786543210",
      message:"ya boi"
    },
  ];
  return (
    <>
      {/* Header 2 */}
      <div className="bg-black w-full py-4">
        <div className="grid grid-cols-5 text-white font-bold text-center">
          <h1>No</h1>
          <h1>fullName</h1>
          <h1>Email</h1>
          <h1>Phone Number</h1>
          <h1>Message</h1>
        </div>
      </div>

      {/* content */}
      <div className="w-full h-[81vh] overflow-y-auto py-2">
        {usersList.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-5 items-center text-black text-center border-2 border-l-0 border-r-0 border-b-neutral-300 border-t-0 pb-4 pt-4"
            >
              <div>
                <h1> {elem.no} </h1>
              </div>
              <div>
                <h1> {elem.name} </h1>
              </div>
              <div>
                <h1> {elem.email} </h1>
              </div>
              <div>
                <h1> {elem.phone}</h1>
              </div>
              <div>
                <h1> {elem.message} </h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
