import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Viberr}
          link="https://github.com/lucia20200818/NodeJS_FS_Backend"
          h3="MyBookStore"
          p="BookStore App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/lucia20200818/python-apps"
          h3="Python mini games"
          p="Python mini games"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/lucia20200818/NodeJS_FS_Backend"
          h3="Hi lo Card"
          p="Hi lo Card"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/lucia20200818/HiLo-Card"
          h3="Covid Map"
          p="Real Time Covide Map"
        />
      </div>
    </section>
  );
}

export default Projects;
