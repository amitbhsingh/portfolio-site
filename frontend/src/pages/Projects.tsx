import "../styles/Projects.css";
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        {ProjectList.map(({ slug, name, image, skills, url }) => {
          return (
            <ProjectItem
              slug={slug}
              name={name}
              image={image}
              skills={skills}
              url={url}
            />
          );
        })}
      </div>

      {/* <ProjectItem name="Social Media Website" image={Proj01task}/> */}
      {/* <ProjectItem /> */}

    </div>
  );
};

export default Projects;
