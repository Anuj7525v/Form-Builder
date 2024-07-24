
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./dashboard.module.css";
import CreateFolderModel from './Createfolder/createModel';
import ConfirmDeleteModel from './Delete/deleteModel';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { createfolder, allfolder, deletefolder } from '../../Service/folder';



function Dashboard() {
  const [username, setUsername] = useState("");
  const [folders, setFolders] = useState([]);
  const [showCreateFolderModel, setShowCreateFolderModel] = useState(false);
  const [showConfirmDeleteModel, setShowConfirmDeleteModel] = useState(false);
  const [folderToDelete,setFolderToDelete] = useState(null);
  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try{
      const response = await allfolder();
      setFolders(response.data);

    }
    catch(error){
      console.log(error)
    }
  };
   



  const handleCreateFolder = async (name) => {
    try {
      const newFolder = await createfolder(name);
      setFolders([...folders, newFolder]);
      setShowCreateFolderModel(false);

    }
    catch (error) {
      console.log(error);
    }
  };







  const handleDeleteFolder = async (id) => {
    try {
      const response = await deletefolder(id);
      setFolders(folders.filter(folder => folder.id !== id));
      setShowConfirmDeleteModel(false);
      setFolderToDelete(null);

    }
    catch (error) {
      console.log(error);
    }

  };







  // await Deletefolder();
  // setFolders(folders.filter(folder => folder._id !== id));


  return (
    <>

      <div className={styles.page}>
        <div className={styles.Header}>
          <p className={styles.title}>Welcome {username}</p>
        </div>
        <div className={styles.Middle}>
          <div className={styles.folderbox}>
            <button onClick={() => setShowCreateFolderModel(true)}><MdOutlineCreateNewFolder />
              Create a folder</button>
            {folders.map((folder, index) => (
              <div key={index} className={styles.folder}>
                {folder.name} <button onClick={() => handleDeleteFolder(folder._id)}>Delete</button>
              </div>
            ))}
          </div>
          <div className={styles.formbox}>
            <button>+<span>Create a typebot</span></button>
          </div>
        </div>
        <div className={styles.createbox}>
          {showCreateFolderModel && <CreateFolderModel onCreate={handleCreateFolder} onClose={() => setShowCreateFolderModel(false)} />}
        </div>
        <div className={styles.deletebox}>
          {showConfirmDeleteModel && <ConfirmDeleteModel onConfirm={() => { }} onClose={() => setShowConfirmDeleteModel(false)} />}
        </div>

      </div>


    </>
    /* <div className={styles.page}>
       <div className={styles.toolbar}>
         <button onClick={() => setShowCreateFolderPopup(true)}>Create a folder</button>
         {folders.map((folder, index) => (
           <div key={index} className={styles.folder}>
             {folder.name} <button onClick={() => handleDeleteFolder(folder._id)}>Delete</button>
           </div>
         ))}
       </div>
       <div className={styles.main}>
         <button className={styles.createtypebot} onClick={() => setShowConfirmDeletePopup(true)}>Create a typebot</button>
         <div className={styles.form}>
           <p>New form</p>
         </div>
         <div className={styles.form}>
           <p>New form</p>
         </div>
       </div>
       {showCreateFolderPopup && <CreateFolderPopup onCreate={handleCreateFolder} onClose={() => setShowCreateFolderPopup(false)} />}
       {showConfirmDeletePopup && <ConfirmDeletePopup onConfirm={() => {}} onClose={() => setShowConfirmDeletePopup(false)} />}
     </div> */
  );
}

export default Dashboard;
