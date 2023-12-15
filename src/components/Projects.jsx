import project1 from "../assets/notesnap.png";
import project2 from "../assets/streamup.png";
import project3 from "../assets/ems.png";
import project4 from "../assets/chatbot.jpg";
import project5 from "../assets/groupchat.jpg";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: project1,
      title: "NoteSnap",
      description:
        "Tired of sticky notes scattered everywhere? Wishing you had a centralized, digital space to capture your thoughts, ideas, and to-dos? Look no further than NoteSnap, the ultimate note-taking web application designed to streamline your workflow and boost your productivity!",
    },
    {
      id: 2,
      img: project2,
      title: "StreamUp",
      description:
        "Forget passive video watching – enter the era of interactive live stream analysis with StreamUp! We break free from the confines of the screen and unveil the hidden layers of live video, transforming it from captivating entertainment to a rich data playground.",
    },
    {
      id: 3,
      img: project3,
      title: "Employee Management System",
      description:
        "Juggling mountains of employee files got you down? Wish you had a streamlined, secure, and accessible way to store all your HR data? Look no further than Employee Management System, the powerful web application designed to revolutionize employee data management!",
    },
    {
      id: 4,
      img: project4,
      title: "Chatbot",
      description:
        "Tired of chatbots that only give repetitive answers? The intelligent assistant that learns from you and evolves with every interaction. We're not just here to answer your questions – we're here to build a unique relationship and become your personalized AI companion.",
    },
    {
      id: 5,
      img: project5,
      title: "Group Chat",
      description:
        "Tired of the visual overload of modern chat apps? Longing for the days of focused conversations fueled by the clack of keys? Step into the shadows of the terminal with Group Chat, where deep connections bloom amidst lines of code.",
    },
  ];

  return (
    <section id="projects" className="space-y-4 text-lg md:text-xl">
      <h2 className="text-teal-300 text-2xl font-semibold">Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Project img={project.img} title={project.title} description={project.description} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
