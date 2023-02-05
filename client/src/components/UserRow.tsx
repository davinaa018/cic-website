import React from "react";

interface Props {
  user: User;
}

interface User {
  id: number;
  fullName: string;
  email: string;
  schoolId: string;
  attendanceCount: number;
}

const UserRow: React.FC<Props> = ({ user }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.fullName}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.email}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.schoolId}
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {user.attendanceCount}
      </td>
    </tr>
  );
};

export default UserRow;
