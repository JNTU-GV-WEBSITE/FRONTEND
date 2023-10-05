// import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

// const ExamResults = () => {
//   const examResultsAvailable = false;

//   useEffect(() => {
//     if (!examResultsAvailable) {
//       window.location.href = 'https://results.jntugv.edu.in/';
//     }
//   }, [examResultsAvailable]);

//   return (
//     <div>
//       {examResultsAvailable ? (
//         <div>
//           <h1>Your exam results:</h1>
//         </div>
//       ) : (
//         <div>Loading exam results...</div>
//       )}
//     </div>
//   );
// };

// export default ExamResults;


import React, { useEffect } from 'react';

const ExamResults = () => {
  useEffect(() => {
    // Save the current page URL to session storage
    sessionStorage.setItem('originalPageUrl', window.location.href);

    // Open the external page in a new tab
    window.open('https://results.jntugv.edu.in/', '_blank');

    // Replace the current history entry with the desired URL
    const desiredUrl = `${window.location.origin}/ExaminationMain`;
    window.history.replaceState({}, null, desiredUrl);
  }, []);

  return null;
};

export default ExamResults;
