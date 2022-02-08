import React from 'react';
import { FotosProp } from './FotosProp';



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