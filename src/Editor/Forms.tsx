import { onValue, push, ref, set } from '@firebase/database';
import * as React from 'react';
import { db,database, firebase, todosRef } from '../Utils/ApiFirebase';
import { ProjectElemProp } from '../Utils/ProjectElem';




interface Forms {
    onCreate: (newProject: { title: string, url: string, description: string, }) => void;
}

export const Forms: React.FC<Forms> = ({onCreate}) => {

    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const [description, setDescription] = React.useState('');
    const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setDescription(event.target.value);
    }

    const [url, setUrl] = React.useState('');
    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUrl(event.target.value);
    }



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);

          const projectListRef = ref(db, 'project');
          const newProjectRef = push(projectListRef);
          
          set(newProjectRef, {
            title: title,
            description: description,
            url: url,
        });
      
        onCreate({
            title: title,
            description: description,
            url: url,

        });


    }





return (
        <section className='Forms'>

            <form onSubmit={handleSubmit}>

                <h2>Agregar Proyecto</h2>

                <label>Title</label>
                <input type="text"
                onChange={handleTitleChange}
                value={title} />

                
                <label>Description</label>
                <textarea className="descripInput" rows={4} cols={50}
                onChange={handleDescriptionChange}
                value={description} />


                <label>URL</label>
                <input type="text"
                onChange={handleUrlChange}
                value={url} />

                <button>Upload</button>
            </form>

            <form>
                <h2>Agregar Foto</h2>
                
            </form>
        </section >
    );
}

export default Forms;
