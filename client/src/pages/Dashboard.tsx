import React, { useState } from "react";
import Users from "../components/Users";
import EventModal from "../components/EventModal";

interface Props {
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<Props> = ({ setShowLink }) => {
  const [toggleEvent, setToggleEvent] = useState<boolean>(false);

  const handleClick = () => {
    setShowLink((prev) => !prev);
  };

  const showEventModal = () => {
    setToggleEvent((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className="p-4 flex gap-4">
          {/* Right Side */}
          <button
            className="border border-black px-3 py-2 transition ease-in-out hover:bg-black hover:text-white  "
            onClick={handleClick}
          >
            Open Attendance
          </button>

          <button
            className="border border-black px-3 py-2 transition ease-in-out hover:bg-black hover:text-white"
            onClick={showEventModal}
          >
            Create Event
          </button>
        </div>
        <div className="text-center flex flex-col items-center pb-4">
          <h1 className="font-bold text-xl underline pb-5 xl:pr-12">
            Leaderboard
          </h1>
          <Users />
        </div>
        {toggleEvent && <EventModal />}
      </div>
    </>
  );
};

export default Dashboard;
