import * as React from 'react';

interface Navigation {
}

export const Navigation: React.FC<Navigation> = () => {
    return (
<div className='Navigation'>
    <h2>si buenas</h2>
    <ul>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
    </ul>
  
</div>
);
}