import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping you brand grow
          <br /> and move forward
        </p>
      </motion.div>
      <motion.div className="titleContainer">title</motion.div>
      <motion.div className="listContainer">list</motion.div>
    </motion.div>
  );
};

export default Services;
