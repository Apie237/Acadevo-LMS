import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, X, BookOpen } from "lucide-react";
import api from "../utils/api";
import CourseCard from "../components/CourseCard";
import CoursesPageSkeleton from "../components/skeletons/CoursePageSkeleton";
import PageHeader from "../components/PageHeader";
import usePageTitle from "../hooks/usePageTitle";

// Online courses from the learning platform API (existing LMS functionality).
const CoursesPage = () => {
  usePageTitle("Courses");
  const [courses, setCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await api.get("/courses");
        setCourses(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setLoadError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Categories come from the courses themselves so the filter always matches the data.
  const categories = useMemo(
    () => [...new Set(courses.map((c) => c.category).filter(Boolean))].sort(),
    [courses]
  );

  const filteredCourses = useMemo(() => {
    let filtered = courses;
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((course) => selectedCategories.includes(course.category));
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title?.toLowerCase().includes(q) || course.description?.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [courses, selectedCategories, searchTerm]);

  const toggleCategory = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  if (loading) return <CoursesPageSkeleton />;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        eyebrow="Learning Platform"
        title="Online Courses"
        description="Courses available on the TopestTech learning platform. Log in to access the courses you're enrolled in."
      />

      <div className="container-page py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-11"
              aria-label="Search courses"
            />
          </div>
          <p className="text-sm font-medium text-muted">
            Showing <span className="font-bold text-ink">{filteredCourses.length}</span>{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>
        </div>

        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategories([])}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategories.length === 0
                  ? "bg-navy text-white"
                  : "border border-line bg-white text-slate-600 hover:border-brand hover:text-brand"
              }`}
            >
              All
            </button>
            {categories.map((category) => {
              const active = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-brand text-white"
                      : "border border-line bg-white text-slate-600 hover:border-brand hover:text-brand"
                  }`}
                >
                  {category}
                  {active && <X size={14} />}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => <CourseCard key={course._id} course={course} />)
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
              <BookOpen size={32} className="mx-auto text-brand-300" />
              <p className="mt-4 text-lg font-bold text-ink">
                {loadError ? "Courses couldn't be loaded" : courses.length ? "No courses match your search" : "No courses published yet"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {loadError
                  ? "Please check your connection and try again later."
                  : courses.length
                  ? "Try adjusting your filters or search terms."
                  : "Explore TopestTech Academy programs in the meantime."}
              </p>
              {courses.length > 0 ? (
                <button onClick={clearFilters} className="btn-primary mt-6">
                  Clear filters
                </button>
              ) : (
                <Link to="/academy/programs" className="btn-primary mt-6">
                  View Academy Programs
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
