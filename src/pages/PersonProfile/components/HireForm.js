import { useState } from "react"
import { useNavigate } from "react-router"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { person, hiredPeople, setHiredPeople } = props
  const navigate = useNavigate()

  function personAlreadyHired() {
    const hasHired = hiredPeople.some(p => p.login.username === person.login.username)
    return hasHired
  }

  function hiredPersonByIndex() {
    const index = hiredPeople.findIndex(p => p.login.username === person.login.username)
    return index
  }

  function handleSubmit(event) {
    event.preventDefault()
    const hiredIndex = hiredPersonByIndex()
    let newHiredPeople = [...hiredPeople]
    if (!personAlreadyHired()) {
      const hiredPerson = {...person, hired: true, wage: wage}
      newHiredPeople = [...hiredPeople, hiredPerson]
    } else {
      const updatedHiredPerson = {...newHiredPeople[hiredIndex], wage: wage}
      newHiredPeople.splice(hiredIndex, 1, updatedHiredPerson)
    }
    setHiredPeople(newHiredPeople)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
