import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_EVENT } from "../queries/eventQueries";

const Project: React.FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT, { variables: { id } });
  return <div>Project</div>;
};

export default Project;
