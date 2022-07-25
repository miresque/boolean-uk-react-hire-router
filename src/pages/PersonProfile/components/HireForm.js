import { useState } from "react"
import { useNavigate } from "react-router"

function HireForm(props) {
  const [wage, setWage] = useState(0)
  const { person, hiredPeople, setHiredPeople } = props
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const hiredPerson = {...person, hired: true, wage: wage}
    const newHiredPeople = [...hiredPeople, hiredPerson]
    console.log(hiredPeople)
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
