import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_EVENT } from "../mutations/eventMutations";
import { GET_EVENTS } from "../queries/eventQueries";

interface FormData {
  name: string;
  description: string;
  dateOfEvent: string;
}

const initialFormData: FormData = {
  name: "",
  description: "",
  dateOfEvent: "",
};

const AttendanceModal: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(true);
  const [addEvent] = useMutation(ADD_EVENT, {
    variables: {
      name: formData.name,
      description: formData.description,
      dateOfEvent: formData.dateOfEvent,
    },
    update(cache, { data: { addEvent } }) {
      const { events }: any = cache.readQuery({ query: GET_EVENTS });

      cache.writeQuery({
        query: GET_EVENTS,
        data: { events: [...events], addEvent },
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
      formData.name === "" ||
      formData.description === "" ||
      formData.dateOfEvent === ""
    ) {
      return alert("Please fill in all fields");
    }

    addEvent();

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
            className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold text-2xl text-center text-gray-700">
              Create an Event
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border p-2 w-full"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  Description:
                </label>
                <input
                  type="description"
                  name="description"
                  id="description"
                  className="border p-2 w-full"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-700">
                  Date of Event:
                </label>
                <input
                  type="text"
                  name="dateOfEvent"
                  id="dateOfEvent"
                  className="border p-2 w-full"
                  value={formData.dateOfEvent}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border border-gray-500 text-black py-2 px-4 rounded hover:bg-gray-200"
                >
                  Create
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
