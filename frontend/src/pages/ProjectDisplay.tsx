import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
  const { id: slug } = useParams();

  const project = ProjectList.find((project) => project.slug === slug);

  return (
    project ? (
      <a href={project.url} target="_blank" rel="noreferrer"><div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="my project" />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <GitHubIcon />
      </div></a>
    )
      : null
  );
};
