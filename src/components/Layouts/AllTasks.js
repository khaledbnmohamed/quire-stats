import React, { useEffect } from "react";
import {getTasksOfProject} from "../../actions/requests";

const AllTasks = () => {

  useEffect(() => {
    async function getTasks()  {
      const response = await getTasksOfProject({ id: "Khaled_Mohamed-27"})
      console.log("resoinse", response)
    }
    getTasks()
  }, []);

  return <p />;

}

export default AllTasks;
