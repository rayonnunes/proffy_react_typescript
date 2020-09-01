import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { getConnection } from '../../store/modules/connections/actions'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing: React.FC = () => {
  const { total } = useSelector((state: StoreState) => state.connection)
  console.log(total)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConnection())
  }, [dispatch])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="imagem plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Ensinar
          </Link>
        </div>
        <span className="total-connections">
          Total de {total} conexões já realizadas
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  )
}
export default Landing
