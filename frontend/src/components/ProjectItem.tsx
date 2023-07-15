import { useNavigate } from "react-router-dom";
import { ProjectItem } from "../helpers/ProjectList";

<<<<<<< HEAD
function ProjectItem({ image, name, slug }: ProjectItem) {
=======
function ProjectItem({ image, name, skills , slug, url }: ProjectItem) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
>>>>>>> main
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
