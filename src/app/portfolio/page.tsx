import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projectsData, Project } from '@/data/projects'; // Import centralized data and interface

export const metadata: Metadata = {
  title: "Portfolio | Blueprint by Dilip",
  description: "Explore the diverse portfolio of architectural projects by Blueprint by Dilip, showcasing innovative design and successful execution.",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore a selection of our finest projects, showcasing our commitment to innovative design, quality craftsmanship, and client satisfaction.
        </p>
      </header>

      {projectsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project: Project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              category={project.category}
              thumbnailUrl={project.thumbnailUrl}
              shortDescription={project.shortDescription}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500">No projects to display at the moment. Please check back soon!</p>
        </div>
      )}
    </div>
  );
}
