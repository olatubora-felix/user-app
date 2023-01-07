import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { fetchApi } from '../fetchApi';

const UserContext = createContext({
  users: [],
  user: {},
  status: "idle",
  error: "",
  getUser: () => { },
  handleChange: () => { },
  search: "",
  handleResult: () => {}
});


export const UserContextProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [status, setStatus] = useState("idle")
  const [error, setErorr] = useState("")
  const [search, setSearch] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleResult = (e) => {
    e.preventDefault()
    if (search && search.trim() !== "") {
      setResult(search)
      setSearch("")
    }
  }
console.log(result)
  setTimeout(() => {
    if (result) {
    setResult("")
  }
}, 10000)

  // Get All users
  useEffect(() => {
    const getUsers = async () => {
      
      try {
        setStatus("loading")
        const {data} = await axios.get(result ? fetchApi(`users/search?q=${result}`) : fetchApi("users"))
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
  }, [result])


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
  return <UserContext.Provider value={{users, error, status, user, getUser, handleChange, search, handleResult}}>
      {children}
  </UserContext.Provider>;
}


export default UserContext

