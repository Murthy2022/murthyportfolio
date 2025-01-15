import React, { useContext } from "react";
import Youtube from "./Youtube";
import { DataContext } from "./Contexts";

const Memories = () => {
    const videoId = '71ueQc0hWkM'; // Example YouTube video ID

    const { auth } = useContext(DataContext)
  
    return (
      auth ? 
      <div>
        <Youtube id="71ueQc0hWkM" />
        <Youtube id="YDGcciakcIY" />
     </div>
     :
     <div>
      <p>Plese login to view this page</p>
      <a href="https://murthyproject.vercel.app/">Click here</a>
    </div>
    );
  };
  
  export default Memories;