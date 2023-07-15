import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { slug } = useParams();
  const project = ProjectList.find((project) => project.slug === slug)!;

  return project ? (
    <a href={project.url}><div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="my project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div></a>
  ) : null;
};
