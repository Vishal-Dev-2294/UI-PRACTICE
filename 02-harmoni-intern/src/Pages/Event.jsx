import { useNavigate } from "react-router-dom";

const Event = () => {
    const navigation = useNavigate();
  const matchesData = [
    {
      image:
        "https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
      title: "INDIAN PREMIER LEAGUE",
      location: "Narendra Modi Stadium, Motera",
      price: "₹1,499",
      datetime: "2025-03-15 , 19:32",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596807996038-612df413be5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyaWNrZXRlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww",
      title: "Gokuldham PREMIER LEAGUE",
      location: "Wankhede Stadium, Mumbai",
      price: "₹1,999",
      datetime: "2025-03-16 , 15:30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
      title: "INDIAN PREMIER LEAGUE",
      location: "M. Chinnaswamy Stadium, Bengaluru",
      price: "₹1,799",
      datetime: "2025-03-18 , 19:30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596807996038-612df413be5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyaWNrZXRlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww",
      title: "Gokuldham PREMIER LEAGUE",
      location: "Eden Gardens, Kolkata",
      price: "₹1,299",
      datetime: "2025-03-20 , 15:30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMHN0YWRpdW18ZW58MHx8MHx8fDA%3D",
      title: "INDIAN PREMIER LEAGUE",
      location: "MA Chidambaram Stadium, Chennai",
      price: "₹1,599",
      datetime: "2025-03-22 , 19:30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596807996038-612df413be5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyaWNrZXRlcnMlMjBpbiUyMGdyb3VwfGVufDB8fDB8fHww",
      title: "Gokuldham PREMIER LEAGUE",
      location: "Arun Jaitley Stadium, Delhi",
      price: "₹1,399",
      datetime: "2025-03-24 , 15:30",
    },
  ];
  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1607267212311-cbf1b39f7825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[40vh] flex justify-center items-center w-full bg-cover bg-bottom bg-no-repeat text-amber-50"></div>

      <div className="h-[112vh] text-white">
        <div className="bg-white h-full w-full flex justify-center gap-20 p-10 flex-wrap">
          {matchesData.map((elem, idx) => {
            return (
              <div key={idx} className="bg-neutral-300 relative h-110 w-85 rounded-md">
                <div className="h-67 rounded-md bg-black">
                  <img
                    className="object-cover rounded-md w-full"
                    src={elem.image}
                    alt=""
                  />{" "}
                  <div className="mt-2 px-2"> {elem.datetime} </div>
                </div>
                <div className="p-2 flex justify-between flex-col">
                  <h1 className="uppercase text-black font-bold text-lg">
                    {" "}
                    {elem.title}{" "}
                  </h1>
                  <div className="mt-3  text-orange-500">
                    {" "}
                    Location: <br />{" "}
                    <span className="text-sm tracking-tight">
                      {" "}
                      {elem.location}{" "}
                    </span>
                    <span className="text-lg absolute right-2">
                      {" "}
                      {elem.price}
                    </span>{" "}
                  </div>
                  <div className="flex items-center justify-center">
                    <button onClick={() => navigation("/Details") } className=" absolute bottom-1 active:scale-95 text-center px-3 py-2 rounded-md bg-orange-500 font-bold text-white">
                      {" "}
                      Book Ticket {"->"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
