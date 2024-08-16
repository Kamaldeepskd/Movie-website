// // import React from 'react';
// // import ReactPlayer from 'react-player';

// // const VideoPlayer = ({ videoUrl }) => {
// //   return (
// //     <div>
// //       <ReactPlayer
// //         url={videoUrl}
// //         playing={true}
// //         controls={true}
// //         width="100%"
// //         height="500"
// //       />
// //     </div>
// //   );
// // };

// // export { VideoPlayer};

// import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
// import axios from 'axios';

// const VideoPlayer = ({ imdbID }) => {
//   const [videoUrl, setVideoUrl] = useState('');

//   useEffect(() => {
//     const fetchVideoUrl = async () => {
//       const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_API_KEY`);
//       const videoUrl = response.data.Trailer;
//       setVideoUrl(videoUrl);
//     };
//     fetchVideoUrl();
//   }, [imdbID]);

//   return (
//     <div>
//       {videoUrl && (
//         <ReactPlayer
//           url={videoUrl}
//           playing={true}
//           controls={true}
//           width="100%"
//           height="500"
//         />
//       )}
//     </div>
//   );
// };

// export { VideoPlayer };