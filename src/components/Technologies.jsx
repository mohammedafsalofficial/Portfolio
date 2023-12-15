import Technology from "./Technology";

const Technologies = () => {
  const technologies = [
    {
      id: 1,
      skill: "HTML5",
      level: "Experienced",
    },
    {
      id: 2,
      skill: "CSS",
      level: "Intermediate",
    },
    {
      id: 3,
      skill: "TailwindCSS",
      level: "Intermediate",
    },
    {
      id: 4,
      skill: "Javascript",
      level: "Intermediate",
    },
    {
      id: 5,
      skill: "React.js",
      level: "Basic",
    },
    {
      id: 6,
      skill: "Express.js",
      level: "Basic",
    },
    {
      id: 7,
      skill: "Spring Boot",
      level: "Basic",
    },
  ];

  return (
    <section id="experience" className="space-y-4 text-lg md:text-xl">
      <h2 className="text-white text-2xl font-semibold">Technologies</h2>
      <div className="grid grid-cols-2">
        {technologies.map((technology) => (
          <div key={technology.id}>
            <Technology skill={technology.skill} level={technology.level} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
