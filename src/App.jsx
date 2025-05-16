import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;










// import { useEffect, useState } from 'react';
// import './App.css'; // We'll define animation here

// const greetings = ['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Namaste', 'こんにちは', '안녕하세요', '你好', 'Olá'];

// function App() {
//   const [index, setIndex] = useState(0);
//   const [showHome, setShowHome] = useState(false);
//   const [animateExit, setAnimateExit] = useState(false);

//   useEffect(() => {
//     if (index < greetings.length - 1) {
//       const interval = setInterval(() => {
//         setIndex((prev) => prev + 1);
//       }, 500);
//       return () => clearInterval(interval);
//     } else {
//       // All greetings done
//       setTimeout(() => {
//         setAnimateExit(true); // Trigger slide-up animation
//       }, 1000); // small delay before starting animation

//       // After animation ends, show homepage
//       setTimeout(() => {
//         setShowHome(true);
//       }, 1500); // match with animation duration
//     }
//   }, [index]);

//   if (showHome) {
//     return (
//       <section className="home-page">
//         <h1>🏠 Welcome to the Home Page!</h1>
//         <p>This is your main app content.</p>
//       </section>
//     );
//   }

//   return (
//     <section className={`greeting-screen ${animateExit ? 'slide-up' : ''}`}>
//       <p className="greeting-text">{greetings[index]}</p>
//     </section>
//   );
// }

// export default App;
