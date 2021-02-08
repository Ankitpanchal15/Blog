import React,{useState,useEffect} from 'react';
import {db} from '../Fire';

const UseFetch = (collection) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [doc,setDoc] = useState(null);

    useEffect(()=> {

      db.collection(collection).get()
      .then((snapshot) => {
          let docsList = [];
         snapshot.forEach(doc => {
             let docArr = doc.data();
             // console.log();
             docsList.push({...docArr, id:doc.id});
         })
     
         setDoc(docsList);
         setLoading(false)
     
      }).catch((error) => {
         console.log("Error getting documents: ", error);
         setError(error.message);
         setLoading(false);
     });
       
      },[collection])

      return {loading,error,doc}
}

export default UseFetch;