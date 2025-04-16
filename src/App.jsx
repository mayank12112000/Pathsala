import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { NotFound } from "./components/NotFound/NotFound.jsx";
import { Carousel} from "./components/Carousel/Carousel.jsx";
import { Courses} from "./components/Courses/Courses.jsx";
import { Route, Routes } from "react-router-dom";


function App() {

    return (
      <div className={styles.App}>
        <Navbar />
        <div className="my-5">

        <Routes>
          <Route index element={<Hero/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </div>
        <Footer/>
      </div>
  )
}

export default App
