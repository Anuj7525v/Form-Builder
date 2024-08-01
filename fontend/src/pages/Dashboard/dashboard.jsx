
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./dashboard.module.css";
import CreateFolderModel from './Createfolder/createModel';
import ConfirmDeleteModel from './Delete/deleteModel';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { createfolder, allfolder, deletefolder } from '../../Service/folder';
import Navbar from "../../components/Navbar/navbar";


function Dashboard() {
  const [username] = useState("John Doe");
  const [folders, setFolders] = useState([]);
  const [showCreateFolderModel, setShowCreateFolderModel] = useState(false);
  const [showConfirmDeleteModel, setShowConfirmDeleteModel] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const response = await allfolder();
      setFolders(response.data);

    }
    catch (error) {
      console.log(error)
    };
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
      setFolders(folders.filter(folder => folder.id !== id));
      setShowConfirmDeleteModel(false);
      setFolderToDelete(null);
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <>

      <div className={styles.page}>
        <div className={styles.Header}>
          <div className={styles.title}> <Navbar /></div>

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
            <button onClick={() => setShowCreateFolderModel(true)}><MdOutlineCreateNewFolder />
              Create a folder</button>
            {folders.map((folder, index) => (
              <div key={index} className={styles.folder}>
                {folder.name} <button onClick={() => handleDeleteFolder(folder._id)}>Delete</button>
              </div>
            ))}
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

  );
};


export default Dashboard;
