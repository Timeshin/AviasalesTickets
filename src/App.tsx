import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getTickets, getSearchId } from './services/services'
import StopsList from './components/StopsList/StopsList'
import useFilter from './hooks/useFilter'
import ShowAnotherTicketsBtn from './components/ShowAnotherTicketsBtn/ShowAnotherTicketsBtn'
import logo from "./assets/Logo.png"

import "./app.sass"
import TicketsList from './components/TicketsList/TicketsList'

const App: FC = () => {
  const { searchId, stop } = useAppSelector(state => state.ticketsState)
  const { tickets, filteredTickets } = useFilter()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getSearchId())
  }, [dispatch])
  
  useEffect(() => {
    if(searchId && !stop && filteredTickets.length - tickets.length <= 0) {
      dispatch(getTickets(searchId))
    }
  }, [filteredTickets, tickets, searchId, stop, dispatch])

  return (
    <div className="container">
      <div className="logo">
        <img src={ logo } alt="aviasalesLogo" />
      </div>
      <div className="wrapper">
        <StopsList/>
        <div className="wrapper__content">
          <TicketsList tickets={ tickets } />
          <ShowAnotherTicketsBtn />
        </div>
      </div>
    </div>
  )
}

export default App
