const Projects = () => {
    const projects = [
      { title: "Project 1", description: "A cool project.", link: "#" },
      { title: "Project 2", description: "Another cool project.", link: "#" },
    ];
  
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid gap-4">
          {projects.map((proj, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  