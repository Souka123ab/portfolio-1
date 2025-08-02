import React from "react";
import Header from "./hedear";
import Home from "./etudiant/home";
import Footer from "./footer";
      // import Dasbord from "./etudiant/Dashboard"; // Notice the capital 'D'
function App() {
  return (
    <div>
    <Header />
    <Home />
    <Footer />
     {/* // 2. Les composants en React kaybdaw b majuscule */}
    </div>

  );
}

export default App;
