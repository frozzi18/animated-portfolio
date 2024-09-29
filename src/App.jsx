import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portofolio">Parallax</section>
      <section>Portofolio1</section>
      <section>Portofolio2</section>
      <section>Portofolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
