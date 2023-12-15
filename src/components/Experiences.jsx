import Experience from "./Experience";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      date: "2022 - PRESENT",
      title: "B.E Computer Science",
      description:
        "Coding proficiency, problem-solving skills, algorithm design, system analysis, object-oriented programming, database management, and knowledge of various software development tools and frameworks.",
    },
    {
      id: 2,
      date: "2022 - PRESENT",
      title: "The Git & Github Bootcamp",
      description:
        "Master the essentials and the tricky bits: rebasing, squashing, stashing, reflogs, blobs, trees, & more!",
    },

    {
      id: 3,
      date: "2022 - 2023",
      title: "Intership at Nxtlogic",
      description:
        "Did an internship at Nxtlogic and gained experience in HTML, CSS and JavaScript",
    },
    {
      id: 4,
      date: "2022 - 2023",
      title: "Web Development Bootcamp",
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps.",
    },
  ];

  return (
    <section id="experience" className="space-y-4 text-lg md:text-xl">
      <h2 className="text-teal-300 text-2xl font-semibold">Experiences</h2>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <Experience
            date={experience.date}
            title={experience.title}
            description={experience.description}
          />
        </div>
      ))}
    </section>
  );
};

export default Experiences;
