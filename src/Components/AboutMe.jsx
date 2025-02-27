const aboutMe = () => {
    const aboutMe = [
      { title: "aboutMe 1", description: "A cool aboutMe.", link: "#" },
      { title: "aboutMe 2", description: "Another cool aboutMe.", link: "#" },
    ];
  
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="grid gap-4">
          {aboutMe.map((proj, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} className="text-blue-500">About Me</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default aboutMe;