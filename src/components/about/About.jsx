import "./about.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="glass">
        <div className="left">
          <div className="content">
            <img src="assets/aboutme.png" alt="" />
            <span>
              Hi, I'm Mert. <br /> <br /> I was born in 2001 in Izmir. I am a
              3rd year Computer Engineering student at Ege University.
              <br /> <br />I am interested in web design. I improve myself by
              learning new things every day. I add every new work to{" "}
              <a href="https://github.com/mertalikocak"> my GitHub </a>
              account and <a href="#portfolio">my Portfolio</a> . <br /> <br />
              You can contact me for your recommendations. Don't forget to
              follow on social media :) <br /> <br />
              <p>Would you like to have a website like this?</p> <br />
              <br />
              <a href="#contact"> Contact Me.</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <span>
              <MailOutlineIcon className="icon" />
              mertalikocakk@gmail.com
            </span>
            <span>
              <LinkedInIcon className="icon" />
              https://www.linkedin.com/in/mertalikocak
            </span>
            <span>
              <GitHubIcon className="icon" />
              https://github.com/mertalikocak
            </span>
            <span>
              <InstagramIcon className="icon" />
              @mertali_kocak
            </span>
            <span>
              <HomeIcon className="icon" />
              Bornova/İzmir
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
