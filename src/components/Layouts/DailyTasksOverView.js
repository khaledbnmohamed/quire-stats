import React, { useState, useEffect} from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Doughnut } from 'react-chartjs-2';
import { getCompletedTasks } from "../../actions/tasks";
import { useParams } from "react-router-dom";
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

let data = {
  labels: ['Remaining tasks', 'Completed tasks'],
  datasets: [
    {
      label: '# of Votes',
      data: [0 , 0],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
}


const DailyTasksOverView = () => {

  const [tasks, setTasks] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { project_id } = useParams();

  useEffect(() => {
    async function getProjects()  {
      const response = await getCompletedTasks({project_id})
      console.log("response", response)
      data.datasets[0].data = [response.data.today_tasks_count-response.data.today_completed_tasks_count,response.data.today_completed_tasks_count ]
      setTasks({completed_tasks: response.data.today_completed_tasks, total_tasks:response.data.today_tasks })
      setIsLoading(false)
    }
    getProjects()
  }, []);

return (
  <div className='myForm'>
          <Doughnut data={data} />
          {!isLoading &&
          tasks.total_tasks.map((task) => (
                <Card variant="outlined" key={task.id}>
                  <CardContent>
                        {task.name}
                        <br />
                        {task.due}
                        <br />
                        {task.status?.name}
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
          ))}
      </div>
    )
}

export default DailyTasksOverView
