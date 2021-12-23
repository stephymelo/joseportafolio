import React, { Fragment, useState } from 'react';
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
import { onValue, ref } from '@firebase/database';
import { db } from './Utils/ApiFirebase';
import { ProjectProp } from './Utils/ProjectProp';


function App() {


  const [newArray, setNewArray] = useState<ProjectProp[]>([]);



  const projectsRef = ref(db, '/project');
  let list: ProjectProp[] = [];

  onValue(projectsRef, (snapshot) => {


    snapshot.forEach(function (data) {
      const item = {
        id: data.key, // id del objeto
        // id:Math.random().toString(),
        title: data.val().title as string,
        description: data.val().description as string,
        url: data.val().url as string,
      }
      
      list.push(item);
      console.log(list);
      /*  if(data.key != item.id){
         list.push(item);
        }  */

    });

  }, { onlyOnce: true });



  



  //setNewArray(list)
  // const [projectElems, setProjectElems] = React.useState<ProjectElemProp[]>([

  //   {
  //     id: "0",
  //     title: 'titulo',
  //     url: 'https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata',
  //     description: 'yeahwatever',

  //   },
  // ])


  const [projectElems, setProjectElems] = React.useState(newArray);

  // const [projectElems, setProjectElems] = useState<ProjectProp[]>(newArray) ;











  // const starCountRef = ref(db,'/project');
  // onValue(starCountRef, (snapshot) => {
  //     const title = snapshot.val().key;
  //     console.log("titleproject"+title);

  //   });






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

              {projectElems.map((elem) => {
                return <ProjectElem key={elem.id} {...elem}
                />;
              })}


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
