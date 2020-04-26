import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../routes/App'
import '../assets/styles/Admin.scss'

const APIUsers = 'https://fathomless-thicket-73962.herokuapp.com/api/users'

const Admin = () => {
    const [state, dispatch] = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(APIUsers, {
            headers: { Authorization: `Bearer ${state.token}` },
        })
        .then((response) => response.json())
        .then((data) => setData(data.data));
      }, [state.token]);
      let userData = data;
      let hasData = (data === undefined) ? 'Loading' : userData;
      console.log(userData)
     
      const tableRows = () => {
       return hasData ?     
        userData.map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin.toString()}</td> 
                    <td>Delete</td>
                </tr>
                )
        }) : 'Loading' 

    }

    return (
        <section className="Admin__Container">
            <div>
            <h1>Manage Your Users Here</h1>
            </div>
            <div className="Admin__UserPanel">
            <table className="UserPanel__Table">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>isAdmin</th>
                    <th>Delete User</th>
                </tr>             
                {tableRows()}
                </tbody>
            </table>
            </div>
        </section>
    )
}

export default Admin
