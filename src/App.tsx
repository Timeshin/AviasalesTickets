import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getTickets, getSearchId } from './services/services'
import Stops from './components/Stops/Stops'
import logo from "./assets/Logo.png"

import "./app.sass"

const App: FC = () => {
  const { searchId, error } = useAppSelector(state => state.ticketsState)
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
    <div className='container'>
      <div className="logo">
        <img src={logo} alt="aviasalesLogo" />
      </div>
      {
        error && <h1 className='error'>{error}</h1>
      }
      <Stops/>
    </div>
  )
}

export default App

