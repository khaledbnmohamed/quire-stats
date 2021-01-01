import React, { useEffect, useState } from "react";
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {getTasksOfProject} from "../../actions/requests";
import { makeStyles } from '@material-ui/core/styles';
import Col from "react-bootstrap/Col";
const AllTasks = () => {

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  const [tasks,setTasks] = useState([])

  useEffect(() => {
    async function getTasks()  {
      const response = await getTasksOfProject({ project_id: "Khaled_Mohamed-27"})
      console.log("resoinse", response)
      setTasks(response.data)
    }
    getTasks()
  }, []);

  return (
    <>
    {tasks.map((task) => (
        <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Card className={classes.root} variant="outlined" key={task.id}>
            <CardContent>
                  {task.name}
                  <br />
                  {task.due}
                  <br />
                  {task.status.name}
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>

          </Card>
        </ Col>
    ))}
    </>
  );
  }
export default AllTasks;
