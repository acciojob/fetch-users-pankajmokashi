
import React from "react";
import './../styles/App.css';
import Axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    Axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  
  return (
    <div className="container">
      <div className="header">
        <p>Blue Whales</p>
        <button onClick={getData}>Get Users List</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name.split(" ")[0]}</td>
                <td>{item.name.split(" ")[1]}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {data.length == 0 && <div className="no-data">No data found to display.</div>}
    </div>
  )
}

export default App
