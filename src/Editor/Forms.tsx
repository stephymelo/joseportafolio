import { onValue, push, ref, set } from '@firebase/database';
import * as React from 'react';
import { db, database, firebase, todosRef } from '../Utils/ApiFirebase';
import { ProjectElemProp } from '../Utils/ProjectElem';




interface Forms {
    onCreate: (newProject: { title: string, url: string, description: string, cover: string }) => void;
    onCreateImg: (newImg: { img: string }) => void;
}

export const Forms: React.FC<Forms> = ({ onCreate, onCreateImg }) => {

    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const [title, setTitle] = React.useState('');
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    }

    const [description, setDescription] = React.useState('');
    const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setDescription(event.target.value);
    }
    const [descripSpanish, setDescripSpanish] = React.useState('');
    const handleDescripSpanishChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setDescripSpanish(event.target.value);
    }

    const [url, setUrl] = React.useState('');
    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUrl(event.target.value);
    }

    const [cover, setCover] = React.useState('');
    const handleCoverChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCover(event.target.value);
    }
    const [img, setImg] = React.useState('');
    const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setImg(event.target.value);
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
            cover: cover,
        });

        onCreate({
            title: title,
            description: description,
            url: url,
            cover: cover,

        });


    }

    const handleSubmitImg: React.FormEventHandler<HTMLFormElement> = (event: any) => {
        event.preventDefault();


        const projectList = ref(db, 'images');
        const newProjectRef2 = push(projectList);

        set(newProjectRef2, {
            img: img,

        });

        onCreateImg({
            img: img,


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

                <label>Description Spanish</label>
                <textarea className="descripInput" rows={4} cols={50}
                    onChange={handleDescripSpanishChange}
                    value={description} />


                <label>URL</label>
                <input type="text"
                    onChange={handleUrlChange}
                    value={url} />

                <label>COVER</label>
                <input type="text"
                    onChange={handleCoverChange}
                    value={cover} />

                <button>Upload Project</button>
            </form>


            {/* Form images */}

            <form onSubmit={handleSubmitImg}>
                <label>Agregar Foto URL</label>

                <input type="text"
                    onChange={handleImgChange}
                    value={img} />

                <button>Upload Image</button>

            </form>
        </section >
    );
}

export default Forms;
