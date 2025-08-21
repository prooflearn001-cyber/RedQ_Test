// import React, { useState } from "react";
// import "./Navebar.css";

// // Logo component
// const Logo = () => (
//   <div
//     className="flex items-center"
//     style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "20px" }}
//   >
//     <div className="flex-shrink-0 flex items-center">
//       <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center mr-3">
//         <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
//           <div className="w-3 h-2 bg-red-600 rounded-sm"></div>
//         </div>
//       </div>
//       <span className="logo-text text-2xl font-bold no-underline">RedQ</span>
//     </div>
//   </div>
// );

// // Dummy courses for search results
// const COURSES = [
//   { id: 1, title: "React for Beginners" },
//   { id: 2, title: "Advanced React" },
//   { id: 3, title: "Python for Data Science" },
//   { id: 4, title: "Intro to AI" },
//   { id: 5, title: "Mobile App Development with Flutter" },
//   { id: 6, title: "Cloud Fundamentals" },
//   { id: 7, title: "Cybersecurity Basics" },
// ];

// // Explore categories (Udemy-like)
// const EXPLORE_CATEGORIES = [
//   "Development",
//   "Business",
//   "Finance & Accounting",
//   "IT & Software",
//   "Office Productivity",
//   "Personal Development",
//   "Design",
//   "Marketing",
//   "Lifestyle",
//   "Photography & Video",
//   "Health & Fitness",
//   "Music",
// ];

// const Navbar = ({ onLoginClick, onSignUpClick }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);
//   const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);

//   // Filter courses for search
//   const filteredCourses = COURSES.filter((course) =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//     // Here you can integrate API search call
//   };

//   return (
//     <header className="navbar-container">
//       {/* Logo */}
//       <a href="/" className="logo no-underline">
//         <Logo />
//       </a>

//       {/* Explore - Desktop */}
//       <nav className="nav-links desktop-nav">
//         <div
//           className="dropdown"
//           onMouseEnter={() => setIsExploreOpen(true)}
//           onMouseLeave={() => setIsExploreOpen(false)}
//         >
//           <div
//             className="dropdown-toggle"
//             onClick={() => setIsExploreOpen((prev) => !prev)}
//           >
//             <span className="nav-link">Explore</span>
//             <span className={`dropdown-arrow ${isExploreOpen ? "rotate" : ""}`}>
//               <i className="fas fa-chevron-down"></i>
//             </span>
//           </div>
//           <div className={`dropdown-menu ${isExploreOpen ? "show" : ""}`}>
//             {EXPLORE_CATEGORIES.map((category) => (
//               <a key={category} href="#">
//                 {category}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Udemy-like Search Bar */}
//       <div className="search-container">
//         <form onSubmit={handleSearch} className="search-form">
//           <input
//             type="text"
//             placeholder="Search for courses..."
//             className="search-input"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             aria-label="Search courses"
//           />
//           <button type="submit" className="search-button" aria-label="Search">
//             <i className="fas fa-search"></i>
//           </button>
//         </form>

//         {/* Search Results Dropdown */}
//         {searchQuery && filteredCourses.length > 0 && (
//           <div className="search-results">
//             {filteredCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="search-result-item"
//                 onClick={() => {
//                   setSearchQuery(course.title); // autofill when clicked
//                 }}
//               >
//                 {course.title}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//             <a href="#home" className="mobile-nav-link">
//                 Home
//               </a>
//               <a href="#about" className="mobile-nav-link">
//                 About
//               </a>
//               <a href="#contact" className="mobile-nav-link">
//                 Contact
//               </a>

//       {/* Desktop Auth Buttons */}
//       <div className="auth-buttons desktop-auth">
//         <a href="#" onClick={onLoginClick} className="login-btn">
//           Log In
//         </a>
//         <a href="#" onClick={onSignUpClick} className="signup-btn">
//           Sign Up
//         </a>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         className="mobile-menu-btn"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         aria-label="Toggle mobile menu"
//       >
//         <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"}`}></i>
//       </button>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           className="mobile-menu-overlay"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <div
//             className="mobile-menu-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <nav className="mobile-nav">
//               {/* Explore - Mobile collapsible */}
//               <a
//                 href="#"
//                 className="mobile-nav-link"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsMobileExploreOpen((prev) => !prev);
//                 }}
//                 style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
//               >
//                 <span>Explore</span>
//                 <i
//                   className={`fas fa-chevron-${isMobileExploreOpen ? "up" : "down"}`}
//                   aria-hidden="true"
//                 ></i>
//               </a>
//               {isMobileExploreOpen && (
//                 <div>
//                   {EXPLORE_CATEGORIES.map((category) => (
//                     <a
//                       key={category}
//                       href="#"
//                       className="mobile-nav-link"
//                       style={{ paddingLeft: "20px", fontSize: "16px" }}
//                     >
//                       {category}
//                     </a>
//                   ))}
//                 </div>
//               )}
//               <a href="#home" className="mobile-nav-link">
//                 Home
//               </a>
//               <a href="#about" className="mobile-nav-link">
//                 About
//               </a>
//               <a href="#contact" className="mobile-nav-link">
//                 Contact
//               </a>
//             </nav>
//             <div className="mobile-auth-buttons">
//               <a href="#" onClick={onLoginClick} className="mobile-login-btn">
//                 Log In
//               </a>
//               <a href="#" onClick={onSignUpClick} className="mobile-signup-btn">
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navebar.css";

// Logo component
const Logo = () => (
  <div
    className="flex items-center"
    style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "20px" }}
  >
    <div className="flex-shrink-0 flex items-center">
      <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center mr-3">
        <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
          <div className="w-3 h-2 bg-red-600 rounded-sm"></div>
        </div>
      </div>
      <span className="logo-text text-2xl font-bold no-underline">RedQ</span>
    </div>
  </div>
);

// Dummy courses for search results
const COURSES = [
  { id: 1, title: "React for Beginners" },
  { id: 2, title: "Advanced React" },
  { id: 3, title: "Python for Data Science" },
  { id: 4, title: "Intro to AI" },
  { id: 5, title: "Mobile App Development with Flutter" },
  { id: 6, title: "Cloud Fundamentals" },
  { id: 7, title: "Cybersecurity Basics" },
];

// Explore categories (Udemy-like)
const EXPLORE_CATEGORIES = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
];

const Navbar = ({ onLoginClick, onSignUpClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  // Filter courses for search
  const filteredCourses = COURSES.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you can integrate API search call
  };

  return (
    <header className="navbar-container">
      {/* Logo */}
      <a href="/" className="logo no-underline">
        <Logo />
      </a>

      {/* Explore - Desktop */}
      <nav className="nav-links desktop-nav">
  <div
    className="dropdown"
    onMouseEnter={() => setIsExploreOpen(true)}
    onMouseLeave={() => setIsExploreOpen(false)}
  >
    <div
      className="dropdown-toggle"
      onClick={() => setIsExploreOpen((prev) => !prev)}
    >
      <span className="nav-link">Explore</span>
      <span className={`dropdown-arrow ${isExploreOpen ? "rotate" : ""}`}>
        <i className="fas fa-chevron-down"></i>
      </span>
    </div>
    <div className={`dropdown-menu ${isExploreOpen ? "show" : ""}`}>
      <div className="explore-grid">
        {EXPLORE_CATEGORIES.map((category) => (
          <a key={category} href="#" className="explore-item">
            {/* Optional: Add an icon here */}
            <span>{category}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
</nav>

      {/* Udemy-like Search Bar */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for courses..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search courses"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
        </form>

        {/* Search Results Dropdown */}
        {searchQuery && filteredCourses.length > 0 && (
          <div className="search-results">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="search-result-item"
                onClick={() => {
                  setSearchQuery(course.title); // autofill when clicked
                }}
              >
                {course.title}
              </div>
            ))}
          </div>
        )}
      </div>
            {/* Navigation Links between Search and Auth Buttons */}
      <nav className="nav-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="auth-buttons desktop-auth">
        <a href="#" onClick={onLoginClick} className="login-btn">
          Log In
        </a>
        <a href="#" onClick={onSignUpClick} className="signup-btn">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Navbar;