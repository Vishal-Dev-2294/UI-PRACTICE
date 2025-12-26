import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  return (
    <div className="bg-black h-screen w-full">
      <div className="bg-blue-900 max-w-4xl h-screen mx-auto text-white">
        <div className="flex items-center gap-2 p-4 border border-t-0 border-l-0 border-r-0">
          <div className="text-orange-600 flex justify-center flex-col text-lg ">
            {" "}
            <FontAwesomeIcon icon={faFire} />
          </div>
          <div className="font-bold text-xl"> Account Details </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex gap-2 items-center">
            <div className="flex justify-center flex-col">
              {" "}
              <FontAwesomeIcon icon={faHouse} />{" "}
            </div>
            <div className="text-xl font-bold"> Home </div>
          </div>
          <div className="text-xl font-bold">Change Password</div>
        </div>
        <div className="bg-blue-600 h-[50vh] p-2">
          <div className="font-bold text-xl">Change Account Details</div>
          <div className="flex justify-center items-center pt-5">
            <div className="relative">
              <img
                className="size-20 rounded-full border-5 border-black"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ1Vm9DCt3CaDGvAII2F_I7HiG6r71giIqA&s"
                alt="sparks logo"
              />

              <div className="absolute text-sm flex justify-center items-center bottom-0 right-0 bg-black p-1.5 rounded-full border-2 border-black cursor-pointer">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="text-white text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-5">
            <div className="p-2 flex justify-between">
              <div className=" flex gap-2">
                <div className="flex justify-center items-center text-lg font-bold">
                  {" "}
                  <FontAwesomeIcon icon={faUserInjured} />{" "}
                </div>
                <div className="text-lg font-bold"> Spark User </div>
              </div>
              <div className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="p-2 flex justify-between">
              <div className=" flex gap-2">
                <div className="flex justify-center items-center text-lg font-bold">
                  {" "}
                  <FontAwesomeIcon icon={faMessage} />{" "}
                </div>
                <div className="text-lg font-bold"> SparkUser@gmail.com</div>
              </div>
              <div className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="p-2 flex justify-between">
              <div className=" flex gap-2">
                <div className="flex justify-center items-center text-lg font-bold">
                  {" "}
                  <FontAwesomeIcon icon={faPerson} />{" "}
                </div>
                <div className="text-lg font-bold"> Purush </div>
              </div>
              <div className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className="p-2 flex justify-between">
              <div className=" flex gap-2">
                <div className="flex justify-center items-center text-lg font-bold">
                  {" "}
                  <FontAwesomeIcon icon={faMobile} />{" "}
                </div>
                <div className="text-lg font-bold"> 898989898 </div>
              </div>
              <div className="text-lg cursor-pointer">
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
