// Central registry of ALL gallery images auto-synced from every project
// Single source of truth — add images to projects, they appear everywhere automatically

import { sanctuaryProjects } from "./sanctuaryProjects";
import { commercialProjects } from "./commercialProjects";
import { residentialProjects, hospitalityProjects } from "./projectCollections";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  projectName: string;
  projectSlug: string;
  projectLocation: string;
}

function buildGalleryFromProjects(): GalleryImage[] {
  const images: GalleryImage[] = [];
  let idCounter = 0;

  const allProjects = [
    ...sanctuaryProjects,
    ...commercialProjects,
    ...residentialProjects,
    ...hospitalityProjects,
  ];

  // Add galleryImages from projects that have them
  for (const project of allProjects) {
    if (project.galleryImages && project.galleryImages.length > 0) {
      for (const img of project.galleryImages) {
        images.push({
          id: `gallery-synced-${idCounter++}`,
          src: img.src,
          alt: `${project.title || project.name} — ${img.category}`,
          category: img.category,
          projectName: project.title || project.name,
          projectSlug: project.slug,
          projectLocation: project.location,
        });
      }
    }
  }

  // Also add the main project card image from every project
  for (const project of allProjects) {
    if (project.image) {
      images.push({
        id: `gallery-synced-${idCounter++}`,
        src: project.image,
        alt: project.fullName || project.title || project.name || "",
        category: project.category || "Project",
        projectName: project.title || project.name || "",
        projectSlug: project.slug,
        projectLocation: project.location || "",
      });
    }
  }

  // Add highlight images from residential and hospitality projects
  for (const project of [...residentialProjects, ...hospitalityProjects]) {
    if (project.highlightImages && project.highlightImages.length > 0) {
      for (const img of project.highlightImages) {
        images.push({
          id: `gallery-synced-${idCounter++}`,
          src: img,
          alt: `${project.title || project.name} — Highlight`,
          category: "Highlight",
          projectName: project.title || project.name || "",
          projectSlug: project.slug,
          projectLocation: project.location || "",
        });
      }
    }
  }

  return images;
}

export const allGalleryImages = buildGalleryFromProjects();