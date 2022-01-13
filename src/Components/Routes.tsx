import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
  Link,
} from "react-router-dom";
import { About } from './About';
import { Banner } from './Banner';
import { Navigation } from './Navigation';
import { Forms } from '../Editor/Forms';
import Login from '../Editor/Login';
import { Gallery } from './Gallery';
import Database from '../Utils/Database';
import { Work } from './Work';
import { Contact } from './Contact';
import { Language } from './Language';


interface Routes {
    
}

export const Routess: React.FC<Routes> = () => {

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
<section className='routes'>

<HashRouter>
        {/* <button onClick={handleAdmin}></button> */}
        <Link className='hiddenLogin' to={"login"}><button className='hiddenLoginBtn'>Login</button></Link>
        <Routes>
          <Route path='' element={
            <>
             
              <Navigation type={languageType} />
              <Language onEditLan={handleLanguage} type={languageType}></Language>
              <Banner />
              <About type={languageType}/>
              <Work type={languageType}  />
              <Gallery type={languageType} />
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
