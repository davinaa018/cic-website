import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/userQueries";
import Spinner from "./Spinner";
import UserRow from "./UserRow";

interface User {
  id: number;
  fullName: string;
  email: string;
  schoolId: string;
  attendanceCount: number;
}

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong..</p>;

  return (
    <>
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                School ID
              </th>
              <th scope="col" className="px-6 py-3">
                Attendance Count
              </th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user: User) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
