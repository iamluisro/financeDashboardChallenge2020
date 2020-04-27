import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../routes/App';
import '../assets/styles/Admin.scss';

const APIUsers = 'https://fathomless-thicket-73962.herokuapp.com/api/users';

const Admin = (props) => {
  const [state] = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(APIUsers, {
      headers: { Authorization: `Bearer ${state.token}` },
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, [state.token]);
  const userData = data;
  const hasData = (data === undefined) ? 'Loading' : userData;
  console.log(userData);

  const deleteUser = (userId) => {
    console.log(userId);
    axios({
      url: `https://fathomless-thicket-73962.herokuapp.com/api/users/${userId}`,
      headers: { Authorization: `Bearer ${state.token}` },
      params: {
        'userId': userId,
      },
      method: 'delete',
    })
      .then(
        fetch(APIUsers, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
          .then((response) => response.json())
          .then((data) => setData(data.data)),
      )
      .then((res) => console.log(res))
      .catch((err) => new Error(err));
  };

  const tableRows = () => {
    return hasData ?
      userData.map((user) => {
        return (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin.toString()}</td>
            <td onClick={() => deleteUser(user._id)}>Delete</td>
          </tr>
        );
      }) : 'Loading';

  };

  return (
    <section className='Admin__Container'>
      <div>
        <h1>Manage Your Users Here</h1>
      </div>
      <div className='Admin__UserPanel'>
        <table className='UserPanel__Table'>
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
  );
};

export default Admin;
