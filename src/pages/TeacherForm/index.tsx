import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const handleScheduleItems = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome Completo" id="name" type="text" />
          <Input label="Avatar" id="avatar" type="text" />
          <Input label="Whatsapp" id="whatsapp" type="text" />
          <TextArea id="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            label="Matéria"
            id="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Literatura', label: 'Literatura' },
            ]}
          />
          <Input label="Custo da sua hora por aula" id="cost" type="number" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={handleScheduleItems} type="button">
              + Novo Horário
            </button>
          </legend>
          {scheduleItems.map(scheduleItem => (
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select
                label="Dia da Semana"
                id="week-day"
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3 Física', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input id="from" label="Das" type="time" />
              <Input id="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
