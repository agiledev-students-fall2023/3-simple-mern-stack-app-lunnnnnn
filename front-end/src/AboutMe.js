import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutMe() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5002/about') // make a GET request to the server
      .then((response) => {
        setAboutData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{aboutData.name}</h1>
      <p>{aboutData.description}</p>
      <img src={aboutData.imageUrl} alt={aboutData.name} height={400}/>
      <p>
        Connect with me on{' '}
        <a href={aboutData.linkedinUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}

export default AboutMe;
