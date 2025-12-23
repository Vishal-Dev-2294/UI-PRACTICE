import React from "react";

const Events = () => {
  const eventsData = [
    {
      title: "Wedding Ceremony",
      image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac",
    },
    {
      title: "Birthday Party",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    },
    {
      title: "Corporate Event",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    },
    {
      title: "Music Concert",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      title: "Festival Celebration",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Sports Event",
      image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    },
  ];

  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1607267212311-cbf1b39f7825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[40vh] flex justify-center items-center w-full bg-cover bg-bottom bg-no-repeat text-amber-50"></div>

      <div className="h-screen bg-black p-10">
        <div className="flex items-center gap-5 felx-wrap">
          {eventsData.map((elem, idx) => {
            return (
              <div className="w-80 h-50 overflow-hidden rounded-lg">
                <img
                sizes="90"
                  className="w-full h-full object-cover"
                  src={elem.image}
                  alt="Events Images"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
