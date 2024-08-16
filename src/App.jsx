// import React, { useState } from "react";
// import axios from "axios";
// import {Search} from "./components/Search";
// import { Detail } from "./components/Details";
// import "./App.css";

// function App() {
//     const [state, setState] = useState({
//         s: "sherlock",
//         results: [],
//         selected: {},
//     });

//     const apiurl ='http://www.omdbapi.com/?i=tt3896198&apikey=af2b92d7'
        

//     const searchInput = (e) => {
//         let s = e.target.value;

//         setState((prevState) => {
//             return { ...prevState, s: s };
//         });
//     };

//     const search = (e) => {
//         if (e.key === "Enter") {
//             axios(apiurl + "&s=" + state.s).then(
//                 ({ data }) => {
//                     let results = data.Search;

//                     console.log(results);

//                     setState((prevState) => {
//                         return {
//                             ...prevState,
//                             results: results,
//                         };
//                     });
//                 }
//             );
//         }
//     };

//     const openDetail = (id) => {
//         axios(apiurl + "&i=" + id).then(({ data }) => {
//             let result = data;

//             setState((prevState) => {
//                 return { ...prevState, selected: result };
//             });
//         });
//     };

//     const closeDetail = () => {
//         setState((prevState) => {
//             return { ...prevState, selected: {} };
//         });
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Movie </h1>
//             </header>
//             <main>
//                 <Search
//                     searchInput={searchInput}
//                     search={search}
//                 />

//                 <div className="container">
//                     {state.results.map((e) => (
//                         <div
//                             className="item"
//                             onClick={() =>
//                                 openDetail(e.imdbID)
//                             }
//                         >
//                             <img
//                                 style={{ width: "200px" }}
//                                 src={e.Poster}
//                             />
//                             <h3 style={{ color: "white" }}>
//                                 {e.Title}
//                             </h3>
//                         </div>
//                     ))}
//                 </div>

//                 {typeof state.selected.Title !=
//                 "undefined" ? (
//                     <Detail
//                         selected={state.selected}
//                         closeDetail={closeDetail}
//                     />
//                 ) : (
//                     false
//                 )}
//             </main>
//         </div>
//     );
// }s

// export default App;

// // 

// import React, { useState } from "react";
// import axios from "axios";
// import { Search } from "./components/Search";
// import { Detail } from "./components/Details";
// import "./App.css";

// const API_KEY = '8d0f777349mshcc23121e67fd80dp14944ejsn87b19c7c0d17';
// const API_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';

// function App() {
//   const [state, setState] = useState({
//     s: "sherlock",
//     results: [],
//     selected: {},
//     loading: false,
//     error: null,
//   });

//   const searchInput = (e) => {
//     let s = e.target.value;

//     setState((prevState) => {
//       return { ...prevState, s: s };
//     });
//   };

//   const search = (e) => {
//     if (e.key === "Enter") {
//       setState((prevState) => {
//         return { ...prevState, loading: true };
//       });

//       axios.get(`${API_URL}?s=${state.s}`, {
//         headers: {
//           'x-rapidapi-key': API_KEY,
//           'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//         }
//       })
//         .then(({ data }) => {
//           let results = data.Search;

//           setState((prevState) => {
//             return {
//               ...prevState,
//               results: results,
//               loading: false,
//             };
//           });
//         })
//         .catch((error) => {
//           setState((prevState) => {
//             return {
//               ...prevState,
//               error: error.message,
//               loading: false,
//             };
//           });
//         });
//     }
//   };

//   const openDetail = (id) => {
//     setState((prevState) => {
//       return { ...prevState, loading: true };
//     });

//     axios.get(`${API_URL}?i=${id}`, {
//       headers: {
//         'x-rapidapi-key': API_KEY,
//         'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//       }
//     })
//       .then(({ data }) => {
//         let result = data;

//         setState((prevState) => {
//           return {
//             ...prevState,
//             selected: result,
//             loading: false,
//           };
//         });
//       })
//       .catch((error) => {
//         setState((prevState) => {
//           return {
//             ...prevState,
//             error: error.message,
//             loading: false,
//           };
//         });
//       });
//   };

//   const closeDetail = () => {
//     setState((prevState) => {
//       return { ...prevState, selected: {} };
//     });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Movie </h1>
//       </header>
//       <main>
//         <Search
//           searchInput={searchInput}
//           search={search}
//         />

//         {state.loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="container">
//             {state.results.map((e) => (
//               <div
//                 className="item"
//                 onClick={() =>
//                   openDetail(e.imdbID)
//                 }
//               >
//                 <img
//                   style={{ width: "200px" }}
//                   src={e.Poster}
//                 />
//                 <h3 style={{ color: "white" }}>
//                   {e.Title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         )}

//         {state.error ? (
//           <p>Error: {state.error}</p>
//         ) : null}

//         {typeof state.selected.Title !=
//         "undefined" ? (
//           <Detail
//             selected={state.selected}
//             closeDetail={closeDetail}
//           />
//         ) : (
//           false
//         )}
//       </main>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Search } from './components/Search';
// import { Detail } from './components/Details';
// import './App.css';

// const API_KEY = 'af2b92d7';
// const API_URL = 'http://www.omdbapi.com/';

// function App() {
//   const [state, setState] = useState({
//     s: 'sherlock',
//     results: [],
//     selected: {},
//     loading: false,
//     error: null,
//     recentMovies: [],
//   });

//   const searchInput = (e) => {
//     let s = e.target.value;

//     setState((prevState) => {
//       return { ...prevState, s: s };
//     });
//   };

//   const search = (e) => {
//     if (e.key === 'Enter') {
//       setState((prevState) => {
//         return { ...prevState, loading: true };
//       });

//       axios.get(`${API_URL}?s=${state.s}&apikey=${API_KEY}`)
//         .then(({ data }) => {
//           let results = data.Search;

//           setState((prevState) => {
//             return {
//               ...prevState,
//               results: results,
//               loading: false,
//             };
//           });
//         })
//         .catch((error) => {
//           setState((prevState) => {
//             return {
//               ...prevState,
//               error: error.message,
//               loading: false,
//             };
//           });
//         });
//     }
//   };

//   const openDetail = (id) => {
//     setState((prevState) => {
//       return { ...prevState, loading: true };
//     });

//     axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`)
//       .then(({ data }) => {
//         let result = data;

//         setState((prevState) => {
//           return {
//             ...prevState,
//             selected: result,
//             loading: false,
//           };
//         });
//       })
//       .catch((error) => {
//         setState((prevState) => {
//           return {
//             ...prevState,
//             error: error.message,
//             loading: false,
//           };
//         });
//       });
//   };

//   const closeDetail = () => {
//     setState((prevState) => {
//       return { ...prevState, selected: {} };
//     });
//   };

//   const fetchRecentMovies = () => {
//     axios.get(`${API_URL}?type=movie&y=2022&apikey=${API_KEY}`)
//       .then(({ data }) => {
//         let recentMovies = data.Search;

//         setState((prevState) => {
//           return {
//             ...prevState,
//             recentMovies: recentMovies,
//           };
//         });
//       })
//       .catch((error) => {
//         setState((prevState) => {
//           return {
//             ...prevState,
//             error: error.message,
//           };
//         });
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Movie Database</h1>
//         <nav className="navbar">
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Movies</a></li>
//             <li><a href="RECENT" onClick={fetchRecentMovies}>Recent</a></li>
//             <li><a href="#">About</a></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <Search
//           searchInput={searchInput}
//           search={search}
//         />

//         {state.loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="container">
//             {state.results.map((e) => (
//               <div
//                 className="item"
//                 onClick={() => openDetail(e.imdbID)}
//               >
//                 <img
//                   style={{ width: '200px' }}
//                   src={e.Poster}
//                 />
//                 <h3 style={{ color: 'white' }}>
//                   {e.Title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         )}

//         {state.error ? (
//           <p>Error: {state.error}</p>
//         ) : null}

//         {typeof state.selected.Title !== 'undefined' ? (
//           <Detail
//             selected={state.selected}
//             closeDetail={closeDetail}
//           />
//         ) : (
//           false
//         )}

//         {state.recentMovies.length > 0 ? (
//           <div className="container">
//             <h2>Recent Movies</h2>
//             {state.recentMovies.map((e) => (
//               <div
//                 className="item"
//                 onClick={() => openDetail(e.imdbID)}
//               >
//                 <img
//                   style={{ width: '200px' }}
//                   src={e.Poster}
//                 />
//                 <h3 style={{ color: 'white' }}>
//                   {e.Title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         ) : null}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search';
import { Detail } from './components/Details';
import './App.css';

const API_KEY = 'af2b92d7';
const API_URL = 'http://www.omdbapi.com/';

function App() {
  const [state, setState] = useState({
    s: 'sherlock',
    results: [],
    selected: {},
    loading: false,
    error: null,
  });

  const searchInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      setState((prevState) => {
        return { ...prevState, loading: true };
      });

      axios.get(`${API_URL}?s=${state.s}&apikey=${API_KEY}`)
        .then(({ data }) => {
          let results = data.Search;

          setState((prevState) => {
            return {
              ...prevState,
              results: results,
              loading: false,
            };
          });
        })
        .catch((error) => {
          setState((prevState) => {
            return {
              ...prevState,
              error: error.message,
              loading: false,
            };
          });
        });
    }
  };

  const openDetail = (id) => {
    setState((prevState) => {
      return { ...prevState, loading: true };
    });

    axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`)
      .then(({ data }) => {
        let result = data;

        setState((prevState) => {
          return {
            ...prevState,
            selected: result,
            loading: false,
          };
        });
      })
      .catch((error) => {
        setState((prevState) => {
          return {
            ...prevState,
            error: error.message,
            loading: false,
          };
        });
      });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie </h1>
      </header>
      <main>
        <Search
          searchInput={searchInput}
          search={search}
        />

        {state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="container">
            {state.results.map((e) => (
              <div
                className="item"
                onClick={() => openDetail(e.imdbID)}
              >
                <img
                  style={{ width: '200px' }}
                  src={e.Poster}
                />
                <h3 style={{ color: 'white' }}>
                  {e.Title}
                </h3>
              </div>
            ))}
          </div>
        )}

        {state.error ? (
          <p>Error: {state.error}</p>
        ) : null}

        {typeof state.selected.Title !== 'undefined' ? (
          <Detail
            selected={state.selected}
            closeDetail={closeDetail}
          />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

 export default App;