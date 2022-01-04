import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getTickets, getSearchId } from './services/services'
import StopsList from './components/StopsList/StopsList'
import useFilter from './hooks/useFilter'
import logo from "./assets/Logo.png"

import "./app.sass"
import TicketsList from './components/TicketsList/TicketsList'

const App: FC = () => {
  const { searchId } = useAppSelector(state => state.ticketsState)
  const tickets = useFilter()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])
  
  useEffect(() => {
    if(searchId) {
      dispatch(getTickets(searchId))
    }
  }, [dispatch, searchId])

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="aviasalesLogo" />
      </div>
      <div className="wrapper">
        <StopsList/>
        <div className="wrapper__content">
          <TicketsList tickets={tickets} />
        </div>
      </div>
    </div>
  )
}

export default App

