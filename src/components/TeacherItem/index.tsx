import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem = ({ data }: any) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={data.avatar} alt="Foto do Professor" />
        <div>
          <strong>{data.name}</strong>
          <span>{data.subject}</span>
        </div>
      </header>
      <p>{data.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {data.cost},00</strong>
        </p>
        <a
          href={`https://wa.me/${data.whatsapp}?text=Olá Gostaria de Saber mais sobre suas aulas`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Entrar em Contato" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
