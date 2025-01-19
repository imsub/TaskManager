import { useState,useEffect } from "react";
import { Container, Button } from "@mui/material";
//import { Container, Button, List, ListItem, ListItemText } from "@mui/material";
import Table from "../components/Table";


const Home = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "Cupcake", description: "First project" },
    { id: 2, title: "Donut", description: "Second project" },
    { id: 3, title: "Eclair", description: "Second project" },
    { id: 4, title: 'Frozen yoghurt', description: "Donut" },
    { id: 5, title: "Gingerbread", description: "Second project" },
    { id: 6, title: "Honeycomb", description: "Second project" },
    { id: 7, title: "Ice cream sandwich", description: "Second project" },
    { id: 8, title: "Jelly Bean", description: "Second project" },
    { id: 9, title: "KitKat", description: "Second project" },
    { id: 10, title: "Lollipop", description: "Second project" },
    { id: 11, title: "Marshmallow", description: "Second project" },
    { id: 12, title: "Nougat", description: "Second project" },
    { id: 13, title: "Oreo", description: "Second project" },
  ]);
  useEffect(()=>{
    setProjects([...projects,],{ id: 3, title: "Project Test", description: "Third project" });
  },[]);
  return (
    <Container fixed>
      <h2>Projects</h2>
      <Button variant="contained" color="primary">Create Project</Button>
      {/* <List>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <ListItemText primary={project.title} secondary={project.description} />
          </ListItem>
        ))}
      </List> */}
      < Table cols={["id","title","description"]} payload={projects} />
    </Container>
  );
};


export default Home;
