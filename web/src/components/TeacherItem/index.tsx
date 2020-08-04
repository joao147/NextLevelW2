import React from 'react';

import whatsaapIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/50873876?s=460&v=4" alt="João"/>
        <div>
          <strong>João</strong>
          <span>prog 1</span>
        </div>
      </header>

      <p>
        Gosta de programar estruturadamente
        <br/>
        Vamos aprender juntos!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsaapIcon} alt="WhatsaapIcon"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
