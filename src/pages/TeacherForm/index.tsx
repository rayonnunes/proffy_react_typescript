import React, { useCallback, useEffect, useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useDispatch, useSelector } from 'react-redux'

import { StoreState } from '../../store/createStore'
import { createNewClass } from '../../store/modules/classes/actions'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

const TeacherForm: React.FC = () => {
  const { newClass, loading, status, message } = useSelector(
    (state: StoreState) => state.classes,
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const [inputFields, setInputFields] = useState({
    name: newClass.name,
    avatar: newClass.avatar,
    whatsapp: newClass.whatsapp,
    bio: newClass.bio,
    subject: newClass.subject,
    cost: newClass.cost,
    schedule: newClass.schedule,
  })

  const handleChanges = (
    stateKey: string,
    stateValue: string | StoreState['classes']['newClass']['schedule'],
  ) => {
    setInputFields(previousState => ({
      ...previousState,
      [stateKey]: stateValue,
    }))
  }

  const handleScheduleItems = () => {
    handleChanges('schedule', [
      ...inputFields.schedule,
      { week_day: '0', from: '', to: '' },
    ])
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault()
    dispatch(createNewClass(inputFields))
  }

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string,
  ) => {
    const updatedScheduleItems = inputFields.schedule.map(
      (scheduleItem, index) => {
        if (index === position) {
          return {
            ...scheduleItem,
            [field]: value,
          }
        }
        return scheduleItem
      },
    )
    handleChanges('schedule', updatedScheduleItems)
  }

  const Alert = withReactContent(Swal)
  const ShowAlert = useCallback(() => {
    if (status !== null) {
      Alert.fire({
        title: message?.title,
        text: message?.content,
        icon: status,
        confirmButtonText: 'Voltar ao Início',
        customClass: {
          confirmButton: 'confirm-button',
        },
      }).then(result => {
        if (result.isConfirmed) {
          history.push('/')
        }
      })
    }
  }, [Alert, message, status, history])
  useEffect(() => {
    ShowAlert()
  }, [ShowAlert])

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              id="name"
              type="text"
              value={inputFields.name}
              onChange={e => handleChanges('name', e.target.value)}
            />
            <Input
              label="Avatar"
              id="avatar"
              type="text"
              value={inputFields.avatar}
              onChange={e => handleChanges('avatar', e.target.value)}
            />
            <Input
              label="Whatsapp"
              id="whatsapp"
              type="text"
              value={inputFields.whatsapp}
              onChange={e => handleChanges('whatsapp', e.target.value)}
            />
            <TextArea
              id="bio"
              label="Biografia"
              value={inputFields.bio}
              onChange={e => handleChanges('bio', e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              id="subject"
              value={inputFields.subject}
              onChange={e => handleChanges('subject', e.target.value)}
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
            <Input
              label="Custo da sua hora por aula"
              id="cost"
              type="number"
              value={inputFields.cost}
              onChange={e => handleChanges('cost', e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button onClick={handleScheduleItems} type="button">
                + Novo Horário
              </button>
            </legend>
            {inputFields.schedule.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  label="Dia da Semana"
                  id="week-day"
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input
                  id="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  id="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>
            {loading ? (
              <button type="button">
                <div className="loader">
                  <div></div>
                  <div></div>
                </div>
              </button>
            ) : (
              <button type="submit">Salvar Cadastro</button>
            )}
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
