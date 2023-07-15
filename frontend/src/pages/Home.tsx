import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, This is Amit</h2>
        <div className='prompt'><p>A web developer with a passion for helping fellow humans, learning and creating</p>
          <Link to="https://www.linkedin.com/in/amitbhsingh/" target='_blank' rel='noreferrer'><LinkedInIcon /></Link>
          <Link to="https://github.com/amitbhsingh" target='_blank' rel='noreferrer'><GithubIcon /></Link>
          <Link to="mailto:amit.bh.singh@gmail.com" target='_blank' rel='noreferrer'><EmailIcon /></Link>
        </div>

      </div>
      <div className='skills'>


        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, Javascript & ReactJS</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>MongoDB, MySQL, AWS, GCP, MS SQL  </span>
          </li>
          <li className='item'>
            <h2>Developer Tools</h2>
            <span>Github, Bash, GIT</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, R, Python, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
