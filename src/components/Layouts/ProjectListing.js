import React, { useEffect, useState } from "react";
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {getUserProjects} from "../../actions/projects";
import { makeStyles } from '@material-ui/core/styles';
import Col from "react-bootstrap/Col";

const ProjectListing = () => {

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

  const [projects,setProjects] = useState([])

  useEffect(() => {
    async function getProjects()  {
      const response = await getUserProjects()
      setProjects(response.data.projects)
    }
    getProjects()
  }, []);

  return (
    <>
    {projects.map((project) => (
        <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Card className={classes.root} variant="outlined" key={project.id}>
            <CardContent>
                  {project.name}
                  <br />
                  {project.quire_id}
                  <br />
              </CardContent>
              <CardActions>
                <Button size="small" href={`/tasks/${project.quire_id}`}>Learn More</Button>
              </CardActions>

          </Card>
        </ Col>
    ))}
    </>
  );
  }
export default ProjectListing;
