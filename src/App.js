import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

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
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople}/>}></Route>
        <Route path='/view/:id' element={<PersonProfile />}></Route>
      </Routes>
    </>
  )
}
