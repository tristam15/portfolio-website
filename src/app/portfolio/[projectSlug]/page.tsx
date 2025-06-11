/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects'; // Import centralized data

/*
// Function to generate static paths for each project
// Define the props type for generateMetadata
type GenerateMetadataProps = {
  params: { projectSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvedMetadata
): Promise<Metadata> {
  const projectSlug = params.projectSlug;
  const project = projectsData.find((p) => p.slug === projectSlug);

  if (!project) {
    // Optionally handle project not found, though generateStaticParams should prevent this
    // For now, return fallback metadata or re-throw to let Next.js handle it (e.g., show 404 meta)
    return {
      title: "Project Not Found | Blueprint by Dilip",
      description: "The requested project could not be found."
    };
  }

  const description = project.shortDescription || project.longDescription.substring(0, 160) + (project.longDescription.length > 160 ? '...' : '');

  // Use parent to extend metadata from layout.tsx
  const parentOpenGraph = await parent;
  const previousImages = parentOpenGraph.openGraph?.images || [];

  return {
    title: `${project.title} | Portfolio - Blueprint by Dilip`,
    description: description,
    openGraph: {
      title: `${project.title} | Portfolio - Blueprint by Dilip`,
      description: description,
      images: project.thumbnailUrl 
        ? [{ url: project.thumbnailUrl, alt: `Image of ${project.title}` }, ...previousImages] 
        : [...previousImages],
    },
  };
}

// Function to generate static paths for each project
export async function generateStaticParams(): Promise<{ projectSlug: string }[]> {
  return projectsData.map((project) => ({
    projectSlug: project.slug,
  }));
}
*/

// Remove custom interface and use inline type accepted by Next.js
export default function ProjectDetailPage({ params }: any) {
  const { projectSlug } = params;
  const project = projectsData.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600">Project Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">
          Sorry, we couldn&apos;t find the project you were looking for.
        </p>
        <Link href="/portfolio" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 text-center">{project.title}</h1>
        <p className="text-xl text-gray-600 text-center mb-8">{project.category}</p>
        
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl mb-8">
          <Image 
            src={project.thumbnailUrl} 
            alt={`Main image for ${project.title}`}
            fill
            style={{ objectFit: 'cover' }}
            priority // Good for LCP
          />
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
        {/* Left Column: Project Description */}
        <section className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">About This Project</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </section>

        {/* Right Column: Project Details/Metadata */}
        <aside className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
          <div className="space-y-3 text-sm text-gray-700">
            {project.client && <div><strong>Client:</strong> {project.client}</div>}
            {project.location && <div><strong>Location:</strong> {project.location}</div>}
            {project.year && <div><strong>Year:</strong> {project.year}</div>}
            <div><strong>Category:</strong> {project.category}</div>
          </div>
        </aside>
      </div>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {project.images.map((imageSrc, index) => (
              <div key={index} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={imageSrc} 
                  alt={`Gallery image ${index + 1} for ${project.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-12">
        <Link href="/portfolio" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg">
          &larr; Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
