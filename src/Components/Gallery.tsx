import * as React from 'react';
import ProjectElem from '../Utils/ProjectElem';
import { ProjectProp } from '../Utils/ProjectProp';

interface GalleryProps {
    list: ProjectProp[];
}


export const Gallery: React.FC<GalleryProps> = ({ list }) => {
    // const id = useIdParam();
    // const elem = useGetElemByIdParam(list);
    
    return (
        <div>

            {/* <ProjectElem id={id} title={title} url={url} description={description}>
                
            </ProjectElem> */}

        </div>
    );
}