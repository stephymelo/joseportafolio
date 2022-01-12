import * as React from 'react';

interface Language {
    type: 'english' | 'spanish';
    onEditLan?: (lan: string) => void;
}

export const Language: React.FC<Language> = ({type, onEditLan}) => {


    const handleLanguageSpanish: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (type === "english" && onEditLan) {
            type = "spanish";
            onEditLan(type);
            
        }
        
    }
    const handleLanguageEnglish: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (type === "spanish" && onEditLan) {
            type = "english";
            onEditLan(type);
        }
        

    }
    return (
        <section className='language'>
            {type==='english'&&<button className='language__button' onClick={handleLanguageSpanish}>ENG</button>}
            {type==='spanish'&&<button className='language__button2' onClick={handleLanguageEnglish}>ESP</button>}
        </section>
    );
}