import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AddAdsPage from "./components/AddAdsPage/AddAdsPage";
import AdList from "./components/AdList/AdList";
import AdForm from "./components/AdForm/AdForm";
import Filter from "./components/Filter/Filter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Free Ads Board</h1>
        </header>
        <nav>
          <NavLink to="/add-ads" className="app-catalog">
            Catalogue Ads
          </NavLink>
          <NavLink to="/" className="app-catalog">
            Add Ad
          </NavLink>
        </nav>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-ads" element={<AddAds />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Компонент для пути '/'
function Home() {
  return (
    <>
      <div className="app-left-column">
        <AdForm />
      </div>
      <div className="app-right-column">
        <AdList />
      </div>
    </>
  );
}

// Компонент для пути '/add-books'
function AddAds() {
  return (
    <>
      <div className="app-left-column">
        <AddAdsPage />
      </div>
      <div className="app-right-column">
        <Filter />
        <AdList />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <header className="app-header">
//           <h1>Book Library App</h1>
//         </header>
//         <NavLink to="/add-books" className="app-catalog">
//           Book Catalogue
//         </NavLink>
//         <NavLink to="/" className="app-catalog">
//           Add Book
//         </NavLink>
//         <main className="app-main">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div className="app-left-column">
//                   <BookForm />
//                 </div>
//               }
//             />
//             <Route path="/add-books" element={<AddBooksPage />} />
//           </Routes>
//           <div className="app-right-column">
//             <Filter />
//             <BookList />
//           </div>
//         </main>
//       </div>
//     </Router>
//   );
// }

export default App;
