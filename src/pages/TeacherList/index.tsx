import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">

      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia da Semana</label>
            <input id="subject" type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Horario</label>
            <input id="subject" type="text"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}
export default TeacherList;
