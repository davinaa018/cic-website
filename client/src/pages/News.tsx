import { useQuery } from "@apollo/client";
import React from "react";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";
import { GET_EVENTS } from "../queries/eventQueries";

interface Event {
  id: number;
  name: string;
  description: string;
  dateOfEvent: string;
}

const News: React.FC = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data.events.length === 0 && (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="font-bold text-xl ">
            There are currently no events...
          </h1>
          <p className="text-lg pt-5">Check back later</p>
        </div>
      )}
      {!loading && !error && (
        <div className="flex flex-wrap items-center justify-center ">
          {data.events.map((event: Event) => (
            <EventCard event={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
