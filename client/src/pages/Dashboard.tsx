import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import Users from "../components/Users";
import { GET_USERS } from "../queries/userQueries";

interface Props {
  setShowLink: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  fullName: string;
  email: string;
  schoolId: string;
  attendanceCount: number;
}

const Dashboard: React.FC<Props> = ({ setShowLink }) => {
  const [toggleLeaderboard, setToggleLeaderboard] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <Spinner />;
  if (error) return <p>Error...</p>;

  const handleClick = () => {
    setShowLink((prev) => !prev);
  };

  const showLeaderboard = () => {
    setToggleLeaderboard((prev) => !prev);
  };

  return (
    <>
      {!loading && !error && (
        <div>
          <div className="p-4">
            {/* Right Side */}
            <button
              className="border border-black px-3 py-2 "
              onClick={handleClick}
            >
              Open Attendance
            </button>

            <button
              className="border border-black px-3 py-2"
              onClick={showLeaderboard}
            >
              Show Leaderboard
            </button>
          </div>
          {toggleLeaderboard && <Users />}
        </div>
      )}
    </>
  );
};

export default Dashboard;
