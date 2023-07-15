import { useNavigate } from "react-router-dom";
import { ProjectItem } from "../helpers/ProjectList";

function ProjectItem({ image, name, skills , slug, url }: ProjectItem) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        navigate("/project/" + slug);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
