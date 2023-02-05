import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../mutations/userMutations";
import { GET_USERS } from "../queries/userQueries";

interface FormData {
  fullName: string;
  email: string;
  schoolId: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  schoolId: "",
};

const AttendanceModal: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(true);

  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      fullName: formData.fullName,
      email: formData.email,
      schoolId: formData.schoolId,
    },
    update(cache, { data: { createUser } }) {
      const { users }: any = cache.readQuery({ query: GET_USERS });

      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...users], createUser },
      });
    },
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setShowModal(false);

    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.schoolId === ""
    ) {
      return alert("Please fill in all fields");
    }

    createUser();

    setFormData(initialFormData);
  };

  return (
    <div className="relative">
      {showModal && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold text-2xl text-center text-gray-700">
              Attendance!!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="border p-2 w-full"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border p-2 w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  School ID:
                </label>
                <input
                  type="text"
                  name="schoolId"
                  id="schoolId"
                  className="border p-2 w-full"
                  value={formData.schoolId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border border-gray-500 text-black py-2 px-4 rounded hover:bg-gray-200"
                >
                  Submit
                </button>
                <button
                  className="bg-black text-white py-2 px-4 rounded ml-4 hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceModal;
