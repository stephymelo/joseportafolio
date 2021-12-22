import * as React from 'react';


interface Forms {
}

export const Forms: React.FC<Forms> = () => {




    return (
        <section className='Forms'>

            <form>
                <h2>Agregar Proyecto</h2>
                <label>Title</label>
                <input className='titleinput'></input>
                <label>Description</label>
                <input className='descriptioninput'></input>
                <label>URL</label>
                <input className='urlinput'></input>
            </form>

            <form>
                <h2>Agregar Foto</h2>
                
            </form>
        </section>
    );
}