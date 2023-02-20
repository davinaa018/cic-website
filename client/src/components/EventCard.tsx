import React from "react";

interface Event {
  id: number;
  name: string;
  description: string;
  dateOfEvent: string;
}

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="p-4 w-full md:w-2/4 lg:w-1/4 h-screen">
      <div className="block max-w-sm p-6 border border-black rounded-lg shadow bg-[url('../src/assets/capy.png')] bg-cover bg-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {event.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {event.description}
        </p>
        <p className="font-normal pb-4">{event.dateOfEvent}</p>
        <a
          className="bg-blue-500 hover:bg-blue-400 rounded-md px-3 py-2 text-white "
          href={`/events/${event.id}`}
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default EventCard;
