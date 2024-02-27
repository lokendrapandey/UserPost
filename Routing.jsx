import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Feed from './Feed';
import Home from './Home';
import Login from './Login';
import './routing.css'
// import './Routing.css'; // Import CSS file for styling

const Routing = () => {
  return (
    <div className='container '>
      <Router>
    <div className='route'> 
        <NavLink to="/" className="nav-link ">User</NavLink>
        <NavLink to="/posts" className="nav-link">Posts Of User</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
    </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Feed />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;






















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Feed from './Feed';
// import Home from './Home';

// const Routing = () => {
//   return (
//     <div className='navbar'>
//       <Router>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/posts">Posts</NavLink>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/posts" element={<Feed />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default Routing;











