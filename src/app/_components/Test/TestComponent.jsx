import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const TestComponent = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll();

  //   const { scrollY } = useScroll();
  //   useEffect(() => {
  //     console.log("Prog", scrollYProgress.current);
  //     console.log("scrollY", scrollY.current);
  //   }, [scrollYProgress.current, scrollY.current]);

  //   const l = "";
  //   console.log(l, { scrollY });

  return (
    <>
      <div className="h-screen bg-red-500">
        <h1 className="text-xl">TestComponent</h1>
      </div>
      <div ref={ref} className="h-screen">
        <motion.div
          className="bg-green-500 h-4 origin-[0%_0%] top-0 bottom-0 right-0"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <div className="h-screen bg-yellow-500">
        <h1 className="text-xl">TestComponent</h1>
      </div>
    </>
  );
};

export default TestComponent;
