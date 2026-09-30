import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  if (!projects.length) {
    return (
      <p className="rounded-2xl border border-dashed border-line py-16 text-center text-muted">
        No projects in this category yet.
      </p>
    );
  }
  return (
    <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;
