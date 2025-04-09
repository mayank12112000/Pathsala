import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Route, Routes } from "react-router-dom";


function App() {

    return (
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route index element={<Hero/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
  )
}

export default App
