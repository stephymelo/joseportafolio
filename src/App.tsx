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
import { Gallery } from './Components/Gallery';
import Database from './Utils/Database';
import { Work } from './Components/Work';
import { Contact } from './Components/Contact';
import { Language } from './Components/Language';



function App() {
  const [ languageType, setLanguageType ] = React.useState<'english' | 'spanish'>('english');

  const handleLanguage = (onEditLan: string) => {
    if(onEditLan === 'spanish'){
      setLanguageType('spanish');
   
    }else{
      setLanguageType('english');

    }
  }


// console.log(Database);

  const handleCreate = (newProjectElem: { title: string, url: string, description: string }) => {
  
  }

  const handleCreateImg = (newImgElem:{img:string})=>{
    
  }




  return (
    <section className="app">

      <HashRouter>
        {/* <button onClick={handleAdmin}></button> */}
        <Link className='hiddenLogin' to={"login"}><button className='hiddenLoginBtn'>Login</button></Link>
        <Routes>
          <Route path='' element={
            <>
              <Language onEditLan={handleLanguage} type={languageType}></Language>
              <Navigation />
              <Banner />
             
              <About type={languageType}/>
              <Work />
              <Gallery/>
              <Contact/>
              
     
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
            <Forms onCreate={handleCreate} onCreateImg={handleCreateImg} />
            <Link to={"/"}><button>Home</button></Link>
          </>}></Route>

        </Routes>
      </HashRouter>






    </section>
  );
}

export default App;
