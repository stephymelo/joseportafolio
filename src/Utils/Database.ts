import { onValue, ref } from '@firebase/database';
import { db } from './ApiFirebase';
import { ProjectProp } from './ProjectProp';


  const projectsRef = ref(db, '/project');
  let list: ProjectProp[] = [];

  onValue(projectsRef, (snapshot) => {


    snapshot.forEach(function (data) {
      const item = {
        id: data.key, // id del objeto
        // id:Math.random().toString(),
        title: data.val().title as string,
        description: data.val().description as string,
        url: data.val().url as string,
      }
      
      list.push(item);
      console.log(list);
      /*  if(data.key != item.id){
         list.push(item);
        }  */

    });

  }, { onlyOnce: true });

  

  export default list;



