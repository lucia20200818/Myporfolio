import React from 'react';
import styles from './HeroStyles.module.css'; 
import heroImg from "../../assets/avatarbest.png";

import sun from "../../assets/sun.svg"; 
import moon from "../../assets/moon.svg"; 

import twitterLight from "../../assets/twitter-light.svg"; 
import githubLight from "../../assets/github-light.svg"; 
import linkdlnLight from "../../assets/linkedin-light.svg"; 
import twitterDark from "../../assets/twitter-dark.svg"; 
import githubDark from "../../assets/github-dark.svg"; 
import linkdlnDark from "../../assets/linkedin-dark.svg"; 
import CV from "../../assets/Lu_Chin_Chen_CV.pdf"; 
import { useTheme} from "../../common/ThemeContext"; 

function Hero() {
    const {theme , toggleTheme} = useTheme();
    const themeIcon = theme ==='light'? sun:moon;
    const twitterIcon = theme ==='light'? twitterLight:twitterDark;
    const githubIcon = theme ==='light'? githubLight:githubDark;
    const linkdlnIcon = theme ==='light'? linkdlnLight:linkdlnDark;
  return <section id = "hero" className = {styles.container}>
  <div className = {styles.colorModeContainer}>
    
    <img className = {styles.hero}
   src = {heroImg} 
   alt = "Profile Picture of Lu"/>
   
   <img 
   className = {styles.colorMode} 
   src = {themeIcon}
   alt = "Color mode icon"
   onClick = {toggleTheme}
   
   />
   </div>
   <div className =  {styles.info}>


<h1>Lu Chin

    <br/>
    Chen
</h1>
<h2>Web Developer</h2>
<span>
    <a href = "https://www.x.com/" target = "_blank">
        <img src = {twitterIcon} alt = "twitterIcon"/>
    </a>
    <a href = "https://www.github.com/" target = "_blank">
        <img src = {githubIcon} alt = "githubIcon"/>
    </a>
    <a href = "https://www.linkedin.com/in/lucia-c-988084130/" target = "_blank">
        <img src = {linkdlnIcon} alt = "linkdlnIcon"/>
    </a>
</span>
<p className =  {styles.description}>

Hello, I am Lu Chin. 
<br/>

当然，以下是一段翻译成英文的文字，描述你是一名热情的 IT 专业人员：

I am a passionate IT professional with a deep enthusiasm for technology and innovation. With extensive experience in the field, I thrive on solving complex problems and implementing effective solutions. My expertise spans across various domains, including software development, system administration, and cybersecurity.  
</p>
<a href = {CV}  download>

    <button className = "hover">
        Resume
    </button>
</a>
   </div>
  </section>;
    
}

export default Hero
