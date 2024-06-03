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
          link="https://github.com/lucia20200818/NodeJS_FS_Backend"
          h3="Fresh Burger"
          p="FreshBurger App"
        />
        <ProjectCard
          src={fitlift}
          link="https://github.com/lucia20200818/NodeJS_FS_Backend"
          h3="FitLift"
          p="Fitness App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/lucia20200818/NodeJS_FS_Backend"
          h3="Hipsster"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
