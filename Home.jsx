
import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error));
    // setLoading(false);
  }, []);

  // Calculate index of the last user
  const indexOfLastUser = currentPage * usersPerPage;
  // Calculate index of the first user
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Slice the array of users to get the current users to display
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-2">
      <table className="table border-dark table-bordered table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination component */}
      <Pagination>
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(users.length / usersPerPage)} />
      </Pagination>
    </div>
  );
}

export default Home;




// import React, { useEffect, useState,usePagination } from 'react';
// import Pagination from 'react-bootstrap/Pagination';
// function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching users:', error));
//   }, []);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [userPerPage]= useState(5);
  
//   const indexOfLastuser = currentPage * userPerPage;
//   const indexOfFirstuser = indexOfLastuser-userPerPage;		
//   const currentUser= users.slice(indexOfFirstuser, indexOfLastuser);
//   return (
//     <div className="mt-2">
//     {/* <h1>Table Example</h1> */}
//     <table className="table border-dark table-bordered table-light">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Company</th>
//           {/* Add more table headers as needed */}
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(item => (
          
//           <Pagination{currentUser()}>
//           <tr key={item.id}>

//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.username}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td>{item.company.name}</td>
//             {/* Add more table cells as needed */}
//           </tr>
//           </Pagination>
       
//         ))}
//       </tbody>
//     </table>
//   </div>
//   );
// }

// export default Home;




