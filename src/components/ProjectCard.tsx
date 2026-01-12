"use client";

import Image from "next/image";

type ProjectProps = {
  project: any;
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-[#111] rounded-2xl p-6 shadow-lg">
      {/* Project Title and Details */}
      <div className="text-center">
        <h3
          className="text-2xl font-semibold mb-3"
          style={{ color: "#ffffff" }}
        >
          {project.title}
        </h3>

        <p
          className="text-gray-300 leading-relaxed mb-4"
          style={{ color: "#d1d5db" }}
        >
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert('Please contact the owner for permission to access the code repository.');
            }}
          >
            View Code
          </a>
          <a
            href={project.video}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Watch Demo
          </a>
        </div>
      </div>

      {/* Mobile Screens Gallery - At the very bottom */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {project.images.map((image: string, index: number) => (
            <div key={index} className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={image}
                  alt={`${project.title} - Screen ${index + 1}`}
                  width={200}
                  height={400}
                  className="rounded-xl shadow-md"
                  style={{ objectFit: 'cover' }}
                />
                {/* Mobile Frame Effect */}
                <div className="absolute inset-0 border-2 border-gray-700 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
