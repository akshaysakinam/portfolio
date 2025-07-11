import React from "react";
import { Timeline } from "./Timeline";

export default function Experience() {
  const data = [
    {
      title: "May 2024 – Present",
      content: (
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Front End Developer @ Event Aura
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Hyderabad, Telangana
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Working as a frontend developer, building responsive user interfaces using modern frameworks like React and Tailwind CSS.
          </p>
        </div>
      ),
    },
    
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-4 relative">
      <Timeline data={data} />
    </section>
  );
}
