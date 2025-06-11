import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  shortDescription: string;
}

export default function ProjectCard({
  slug,
  title,
  category,
  thumbnailUrl,
  shortDescription,
}: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="block group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-60">
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-blue-500 font-semibold mb-1">{category}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{shortDescription}</p>
      </div>
    </Link>
  );
}
