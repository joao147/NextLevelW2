import React from 'react';

import logoImg from '../../assets/img/logo.svg'
import landingImg from '../../assets/img/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

function Landing(){
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href={studyIcon} className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
        </div>

        <div className="buttons-container">
          <a href={giveClassesIcon} className="give-classes">
            <img src={studyIcon} alt="Estudar"/>
            Dar aula
          </a>
        </div>

        <span className="total-conections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>

      </div>
    </div>
  )
}

export default Landing;
