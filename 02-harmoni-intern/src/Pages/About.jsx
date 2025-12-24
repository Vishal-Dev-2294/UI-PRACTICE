import React from "react";

function About() {
  let cardContent = [
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
    {
      title: "Study with me",
      content:
        "Visit our world class facility for south african scientist and specturm",
    },
  ];

  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1607267212311-cbf1b39f7825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[50vh] flex justify-center items-center w-full bg-cover bg-bottom bg-no-repeat text-amber-50">
        <div className=" h-50 w-40 flex justify-between items-center flex-col">
          <h1 className="text-lg"> ALL YOU NEED TO</h1>
          <h1>KNOW</h1>
          <h1 className="text-3xl text-yellow-500 font-bold"> ABOUT</h1>
          <h1 className="text-4xl font-bold"> HARMONI </h1>
          <div className="flex justify-between gap-5">
            <h1> Home </h1>
            <h1 className="font-bold"> | </h1>
            <h1> About Us</h1>
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-100 p-10">
        <div className=" px-9 h-120">
          <div className="h-full w-full flex text-white justify-between">
            <div className=" flex flex-col flex-start w-80">
              <h3 className="text-xs"> We are harmoni </h3>
              <h1 className="font-bold text-2xl"> No.1 Events </h1>
              <h1 className="font-bold text-2xl"> Management</h1>
              <p className="text-sm"> Get Started</p>
            </div>
            <div className="flex flex-col gap-3 pr-10 w-90">
              <h1 className="font-bold text-lg"> our mission </h1>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                iure dolores provident ullam perspiciatis obcaecati ex,
                aspernatur modi fugiat, aliquid enim corporis unde dolor
                delectus aperiam, quaerat nisi quo. perspiciatis obcaecati ex,
                aspernatur modi fugiat, aliquid enim corporis unde dolor
                delectus aperiam, quaerat nisi quo. Corporis.
              </p>
              <p className="font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                amet eligendi alias! Fuga laudantium saepe assumenda ea.?
              </p>
            </div>
            <div className="flex flex-col gap-2 pr-7 pl-10 w-95">
              <h1 className="font-bold text-lg"> our vision </h1>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                iure dolores provident ullam perspiciatis obcaecati ex,
                aspernatur modi fugiat, aliquid enim corporis unde dolor
                delectus aperiam, quaerat nisi quo. perspiciatis obcaecati ex,
                aspernatur modi fugiat, aliquid enim corporis unde dolor
                delectus aperiam, quaerat nisi quo. Corporis.
              </p>
              <p className="font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                amet eligendi alias! Fuga laudantium saepe assumenda ea.?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black h-[5vh] w-full p-4 px-8">
        <div className="h-full mt-10 w-full">
          <div className="grid grid-cols-3 gap-9">
            {cardContent.map((elem, idx) => {
              return (
                <div className="bg-white rounded-md">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-lg"> {elem.title} </h1>
                    <p className="text-[15px] px-37"> {elem.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
