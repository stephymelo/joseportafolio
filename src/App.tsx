import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Link,
  Outlet,
  useNavigate,
  useLocation
} from "react-router-dom";
import { About } from './Components/About';
import { Banner } from './Components/Banner';
import { Navigation } from './Components/Navigation';
import { Forms } from './Editor/Forms';
import Login from './Editor/Login';
import './Styles/styles.css';
import { UserObj } from './Utils/UserObj';

function App() {
  // const [users, setUsers] = useState<UserObj>();



  const handleAdmin = () => {


  }





  return (
    <section className="app">




      <HashRouter>
        {/* <button onClick={handleAdmin}></button> */}
        <Link className='hiddenLogin' to={"login"}><button className='hiddenLoginBtn'>Login</button></Link>
      
       

        <Routes>
          

          <Route path='' element={
            <>

              <Navigation />
              <Banner />
              <About />
             






            </>
          }></Route>

          <Route path='login' element={<><Login user={{
            id: 0,
            username: '',
            password: ''
          }} />
          <Link to={"/"}><button>Home</button></Link>
          </>
          } />



          <Route path='forms' element={<>
          <Forms/> 
          <Link to={"/"}><button>Home</button></Link>
          </>}></Route>

        </Routes>
      </HashRouter>






    </section>
  );
}

export default App;
