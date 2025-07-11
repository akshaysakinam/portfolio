export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Salesforce", icon: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
        
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-24 px-4 text-center relative">
      <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-24 h-24 p-2 bg-white dark:bg-zinc-800 shadow-md rounded-xl hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain mb-2"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                    }}
                  />
                  <span className="text-sm text-black dark:text-white text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
