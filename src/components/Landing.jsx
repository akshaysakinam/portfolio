import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function RotatingCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export default function Landing() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full py-24 snap-start"
    >
      {/* 3D Cube Canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg text-black dark:text-white">
          Hi, I'm Akshay Kumar.
        </h1>
        <TypeAnimation
          sequence={["Backend Developer", 2000, "Tech Explorer", 2000, "Salesforce Developer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-blue-600 dark:text-blue-300 font-mono mb-8"
        />
        <a
          href="#projects"
          className="mt-8 animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
        >
          <span className="text-3xl">↓</span>
        </a>
      </motion.div>
    </section>
  );
}
