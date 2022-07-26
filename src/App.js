import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import "./styles.css"
const apiURL = "https://randomuser.me/api/?results=50"

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])
  
  useEffect(() => {
    fetch(apiURL)
     .then(res => res.json())
     .then(data => {
        const { results } = data
        setPeople(results)
      })
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople} />}></Route>
        <Route path='/view/:id' element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}></Route>
      </Routes>
    </>
  )
}
