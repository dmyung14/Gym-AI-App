import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

function Home() {
  const { user, isLoading } = useAuth()

  if (user && !isLoading) {
    return <Navigate to='/profile' replace />
  }
  return (
    <div>Home</div>
  )
}

export default Home