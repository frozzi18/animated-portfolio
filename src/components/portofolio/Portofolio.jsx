import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portofolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/28170952/pexels-photo-28170952/free-photo-of-a-green-door-with-shutters-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur mollitia voluptate accusantium, molestias quam laboriosam placeat reiciendis quod debitis eveniet.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/27680935/pexels-photo-27680935/free-photo-of-a-woman-standing-outside-of-a-building-with-a-yellow-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur mollitia voluptate accusantium, molestias quam laboriosam placeat reiciendis quod debitis eveniet.",
  },
  {
    id: 3,
    title: "Vanilla Commerce",
    img: "https://images.pexels.com/photos/27669807/pexels-photo-27669807/free-photo-of-a-road-is-winding-through-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur mollitia voluptate accusantium, molestias quam laboriosam placeat reiciendis quod debitis eveniet.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/21939796/pexels-photo-21939796/free-photo-of-cascade-on-river-in-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur mollitia voluptate accusantium, molestias quam laboriosam placeat reiciendis quod debitis eveniet.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portofolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portofolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portofolio;
