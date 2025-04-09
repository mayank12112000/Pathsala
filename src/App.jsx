import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Contact } from "./components/Contact/Contact.jsx";


function App() {

    return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Contact />
      </div>
  )
}

export default App
