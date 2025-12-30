import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  return (
    <>
      <div className="h-screen bg-black w-full">
        {/* left Content */}
        <div className="h-full max-w-[200px] bg-white border-4 border-t-0 border-l-0 border-r-neutral-400">
          <div className="pt-15 w-full">
            <div className=" flex flex-col gap-2 border-3 p-3 border-t-neutral-300 border-l-0 border-r-0 border-l-0 border-b-0">
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <h3 className="text-sm"> User List </h3>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <h3 className="text-sm"> Event Post </h3>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <h3 className="text-sm"> Post Category </h3>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <h3 className="text-sm"> Add Gallery </h3>
                </div>
              </div>
              <div className="flex item-center gap-2 font-bold">
                <div className="text-xs font-extrabold flex items-center">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <h3 className="text-sm"> User List </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
