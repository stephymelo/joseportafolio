import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Link,
} from "react-router-dom";
import { About } from './Components/About';
import { Banner } from './Components/Banner';
import { Navigation } from './Components/Navigation';
import { Forms } from './Editor/Forms';
import Login from './Editor/Login';
import './Styles/styles.css';
import ProjectElem from './Utils/ProjectElem';
import { Gallery } from './Components/Gallery';
import { ProjectProp } from './Utils/ProjectProp';
import Database from './Utils/Database';
import { onValue, ref } from '@firebase/database';
import { db } from './Utils/ApiFirebase';
import { Work } from './Components/Work';
import { Contact } from './Components/Contact';



function App() {

  console.log(Database);





  //setNewArray(list)
  // const [projectElems, setProjectElems] = React.useState<ProjectElemProp[]>([

  //   {
  //     id: "0",
  //     title: 'titulo',
  //     url: 'https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata',
  //     description: 'yeahwatever',

  //   },
  // ])



  // const [projectElems, setProjectElems] = useState<ProjectProp[]>(newArray) ;



  const handleCreate = (newProjectElem: { title: string, url: string, description: string }) => {
    // const newProjects = [
    //   ...projectElems,
    //   {
    //     id: Math.random().toString(),
    //     title: newProjectElem.title,
    //     url: newProjectElem.url,
    //     description: newProjectElem.description,

    //   }
    // ];
    // setProjectElems(newProjects);
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
              <Work />
              <Contact/>




              {/* <Gallery
                list={ProjectElem}
              /> */}








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
            <Forms onCreate={handleCreate} />
            <Link to={"/"}><button>Home</button></Link>
          </>}></Route>

        </Routes>
      </HashRouter>






    </section>
  );
}

export default App;
