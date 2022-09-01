import { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const request = await fetch(process.env.REACT_APP_API_URL)
    const response = await request.json()

    setUser(response)
  }

  if (!user) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </div>
  )
}

export default App
