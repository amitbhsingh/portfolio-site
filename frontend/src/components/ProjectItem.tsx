import { useNavigate } from "react-router-dom";
import { ProjectItem } from "../helpers/ProjectList";

function ProjectItem({ image, name, slug }: ProjectItem) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + slug);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
