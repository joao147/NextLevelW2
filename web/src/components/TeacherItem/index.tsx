import React from 'react';

import whatsaapIcon from '../../assets/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api';

export interface Teacher {
  id: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number
}

interface TeachItemProps{
  teacher: Teacher
}

const TeacherItem: React.FC<TeachItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections', {user_id: teacher.id})
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a onClick={createNewConnection} href={`https:/wa.me/${teacher.whatsapp}`}>
          <img src={whatsaapIcon} alt="WhatsaapIcon"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
