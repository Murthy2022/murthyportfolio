import React from "react";

const Youtube = ( props ) => {
    const videoId = props.id; // Example YouTube video ID
  
    return (
      <div>
        <h2>Embedded YouTube Video</h2>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default Youtube;