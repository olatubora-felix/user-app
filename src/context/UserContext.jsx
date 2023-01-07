import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { fetchApi } from '../fetchApi';

const UserContext = createContext({
  users: [],
  user: {},
  status: "idle",
  error: "",
  getUser: () => {}
});


export const UserContextProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [status, setStatus] = useState("idle")
  const [error, setErorr] = useState("")

  // Get All users
  useEffect(() => {
    const getUsers = async () => {
      setStatus("loading")
      try {
        const {data} = await axios.get(fetchApi("users"))
        if (data) {
          setUsers(data.users)
          setStatus("success")
        }
      } catch (error) {
        setStatus('failed')
        setErorr(error.message)

      }
    }

    getUsers()
  }, [])


  // Get Single user
  const getUser = async (userId) => {
    setStatus("loading")
   try {
     const { data } = await axios.get(fetchApi(`users/${userId}`))
     if (data) {
       setUser(data)
       setStatus("success")
     }
   } catch (error) {
     setErorr(error.message)
     setStatus("failed")

   }
    
  }
  return <UserContext.Provider value={{users, error, status, user, getUser}}>
      {children}
  </UserContext.Provider>;
}


export default UserContext

