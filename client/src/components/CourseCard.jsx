import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const CourseCard = ({ course }) => {
  const totalLessons = course.lessons?.length || 0;
  const image = course.thumbnail || course.imageUrl;

  return (
    <Link
      to={`/courses/${course._id}`}
      className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900">
        {image ? (
          <img
            src={image}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <BookOpen size={44} className="text-white/40" />
          </div>
        )}
        {course.status && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-navy shadow-soft">
            {course.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {course.category && (
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {course.category}
          </span>
        )}
        <h3 className="mt-3 line-clamp-2 text-lg font-bold text-ink">{course.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{course.description}</p>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <BookOpen size={15} className="text-brand" /> {totalLessons} Lessons
          </span>
          {course.duration && (
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-brand" /> {course.duration} Months
            </span>
          )}
          {course.price !== undefined && (
            <span className="ml-auto font-bold text-ink">${course.price}</span>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View details <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default CourseCard;
