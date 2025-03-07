import styles from "./App.module.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Hero/Hero";
import { About } from "./Component/About/About";
import { Experience } from "./Component/Experience/Experience";
import { Projects } from "./Component/Projects/Projects";
import { Contact } from "./Component/Contact/Contact";
function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <hr />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
{
  /* <Hero />
<About />
<Experience />
<Projects />
<Contact /> */
}
