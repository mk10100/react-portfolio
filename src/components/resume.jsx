// Resume.js
import React from "react";

const Resume = () => {
  // Replace 'your-google-drive-link' with the actual shareable link to your Google Drive resume file.
  const googleDriveResumeLink =
    "https://drive.google.com/file/d/1aYLXV2CzoFhrWC85kV1CjxLg8RESKjj2/view";

  return (
    <div>
      <h2>Resume</h2>
      <p>This is a placeholder for my resume information.</p>
      {/* Add a link to your Google Drive resume */}
      <a href={googleDriveResumeLink} target="_blank" rel="noopener noreferrer">
        View Resume
      </a>
    </div>
  );
};

export default Resume;
