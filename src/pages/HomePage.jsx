import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects } = useProjects();
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-filter"></div>
        <h1>Welcome to EduFund</h1>
        <p>
          EduFund is dedicated to providing essential educational resources to
          students in need. Our mission is to empower the next generation of
          learners by enabling the community to come together and fund
          classrooms, learning materials, and school supplies.
        </p>
      </section>
      <div id="project-list">
        {projects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
