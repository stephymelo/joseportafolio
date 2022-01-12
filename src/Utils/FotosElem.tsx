import React, { Fragment, useEffect, useState, CSSProperties } from 'react';
import { FotosProp } from './FotosProp';
import { render } from 'react-dom';
import { onValue, ref } from '@firebase/database';
import { db } from '../Utils/ApiFirebase';





export type FotosElemProp = FotosProp & {
}



const FotosElem: React.FC<FotosElemProp> = ({ id, img }) => {

   




    return (
        
            <article className='fotosElem'>
                <div className ='image'style={{backgroundImage:`url(${img})`}} ></div>
                {/* <img src={img}/> */}
            </article>




   

    );
}

export default FotosElem;