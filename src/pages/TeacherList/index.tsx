import React, { useState, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StoreState } from '../../store/createStore'
import { getTeachers } from '../../store/modules/classes/actions'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import './styles.css'

const TeacherList: React.FC = () => {
  const dispatch = useDispatch()

  const { classesList } = useSelector((state: StoreState) => state.classes)

  const [filters, setFilters] = useState({
    subject: '',
    week_day: '',
    time: '',
  })

  const handleChanges = (stateKey: string, stateValue: string) => {
    setFilters(previousState => ({
      ...previousState,
      [stateKey]: stateValue,
    }))
  }

  const searchTeachers = (e: FormEvent) => {
    e.preventDefault()
    console.log(filters)
    dispatch(getTeachers(filters))
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            id="subject"
            value={filters.subject}
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
          <Select
            label="Dia da Semana"
            id="week-day"
            value={filters.week_day}
            onChange={e => handleChanges('week_day', e.target.value)}
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
          <Input
            label="Horário"
            id="time"
            type="time"
            value={filters.time}
            onChange={e => {
              handleChanges('time', e.target.value)
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {classesList &&
          classesList.map(classItem => (
            <TeacherItem key={classItem.user_id} data={classItem} />
          ))}
      </main>
    </div>
  )
}
export default TeacherList
