import React, { useState, useEffect } from "react";
import { storage, db, timestamp } from "../Fire";

const UsePost = (createBlog,image,title,body,author) => {
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (createBlog) {
        alert(image.name);
        const storageRef = storage.ref(image.name);
        const collectionRef = db.collection('post');
        storageRef.put(image).on("State_change", (snapshot) => {
            let progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        },
        (err) => setError(err.message),
        async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();     
                setUrl(url);
                // Store To Database
                if(url) {
                    collectionRef.add({
                        image:url,
                        title,
                        body,
                        author,
                        createdAt
                    })
                    .then((res) => {
                        console.log("Blog Created");
                        setSucess("Blog has been created");
                        setProgress(null);
                    })
                    .catch(err => {
                        console.log("DB catch",err.message);
                        setError(err.message);
                    } )
                }
                //  Store Database end
        }
        )} 
  }, [createBlog]);

  return { progress, url, error, sucess, setSucess, setUrl };
};

export default UsePost;
