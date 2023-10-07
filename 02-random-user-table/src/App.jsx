import { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const USERS_API = 'https://randomuser.me/api/?results=100';

  const OriginalUsers = useRef([]);
  const PreviousUsers = useRef([]);
  const [Users, setUsers] = useState([]);
  const [orderedUser, setOrderedUsers] = useState([]);

  const [orderedByCountry, setOrderedByCountry] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.results);
        OriginalUsers.current = users.results;
      });
  }, []);

  function colorizing() {
    setColor(!color);
  }

  function removingUser(email) {
    const NewUsers = Users.filter((User) => {
      if (User.email !== email) {
        return User;
      }
    });
    setUsers(NewUsers);
  }

  function resetUsers() {
    setUsers(OriginalUsers.current);
  }

  function newOrder() {
    if (!orderedByCountry) {
      PreviousUsers.current = Users;
      const newOrderedUsers = [...Users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      });
      setUsers(newOrderedUsers);
      setOrderedByCountry(!orderedByCountry);
      return;
    }
    setUsers(PreviousUsers.current);
    setOrderedByCountry(!orderedByCountry);
  }

  return (
    <>
      <h1>Random User Table</h1>
      {/* ----- FILTER ------ */}

      <button onClick={colorizing}>colorize</button>
      <button onClick={newOrder}>
        {orderedByCountry ? 'unorder list' : 'order by Country'}
      </button>
      <button onClick={resetUsers}>reset state</button>
      <input placeholder="filter by countryname"></input>

      {/* ------ TABLECONTENT ------ */}

      <div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((User) => {
              return (
                <tr
                  key={User.login.uuid}
                  className={color ? 'colorizing' : 'colorless'}
                >
                  <td>
                    <img
                      src={User.picture.thumbnail}
                      alt={`Photo of ${User.name.first}`}
                    />
                  </td>
                  <td>{User.name.first}</td>
                  <td>{User.name.last}</td>
                  <td>{User.location.country}</td>
                  <td>
                    <button onClick={() => removingUser(User.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
