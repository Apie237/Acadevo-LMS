import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Clock, BookOpen, CheckCircle2, ArrowLeft, Loader } from "lucide-react";
import api from "../utils/api.js";
import CourseDetailSkeleton from "../components/skeletons/CourseDetailSkeleton.jsx";
import usePageTitle from "../hooks/usePageTitle";
import { site } from "../data/site";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  usePageTitle(course?.title || "Course");

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await api.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Failed to fetch course:", err);
      }
    };

    fetchCourse();
    fetchUser();

    // After a successful checkout, poll until the enrolment webhook has been processed.
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      let attempts = 0;
      const maxAttempts = 10;
      const checkEnrollment = setInterval(async () => {
        attempts++;
        await fetchUser();
        if (attempts >= maxAttempts) clearInterval(checkEnrollment);
      }, 2000);
      return () => clearInterval(checkEnrollment);
    }
    return undefined;
  }, [id, fetchUser, searchParams]);

  const handleGoToDashboard = () => {
    const token = localStorage.getItem("token");
    window.location.href = token ? `${site.learnHubUrl}/dashboard?token=${token}` : "/login";
  };

  const handleBuy = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to continue");
      return navigate("/login");
    }
    try {
      setLoading(true);
      const res = await api.post(
        "/payments/create-checkout-session",
        { courseId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        alert("Payment URL not found.");
      }
    } catch (err) {
      console.error("Payment error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!course) return <CourseDetailSkeleton />;

  const alreadyEnrolled = user?.enrolledCourses?.some((c) => c._id === course._id);
  const features = Array.isArray(course.features) ? course.features : [];
  const lessons = course.lessons || [];
  const image = course.thumbnail || course.imageUrl;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="container-page relative py-10 md:py-14">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              {course.category && (
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200">
                  {course.category}
                </span>
              )}
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{course.title}</h1>
              {course.description && (
                <p className="mt-5 text-lg leading-relaxed text-slate-300">{course.description}</p>
              )}
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Lessons</p>
                  <p className="mt-1 text-xl font-bold">{lessons.length}</p>
                </div>
                {course.duration && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Duration</p>
                    <p className="mt-1 text-xl font-bold">{course.duration} Months</p>
                  </div>
                )}
                {course.price !== undefined && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Access fee</p>
                    <p className="mt-1 text-xl font-bold">${course.price} / month</p>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {image ? (
                <img src={image} alt={course.title} className="aspect-video w-full object-cover" />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-navy-600 to-navy-900">
                  <BookOpen size={64} className="text-white/30" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {features.length > 0 && (
              <div className="card p-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">What you'll learn</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="card p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Course curriculum</h2>
              {lessons.length > 0 ? (
                <div className="mt-6 space-y-3">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson._id}
                      className="flex items-center justify-between gap-4 rounded-xl border border-line p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-ink">{lesson.title}</h3>
                          {lesson.content && <p className="line-clamp-1 text-sm text-muted">{lesson.content}</p>}
                        </div>
                      </div>
                      {lesson.duration && (
                        <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
                          <Clock size={14} /> {lesson.duration} min
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-muted">The curriculum for this course will be published soon.</p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-24 p-7">
              <h3 className="text-lg font-bold text-ink">Enrolment</h3>
              {course.price !== undefined && (
                <p className="mt-2 text-3xl font-extrabold text-ink">
                  ${course.price}
                  <span className="ml-1 text-sm font-medium text-muted">/ month</span>
                </p>
              )}

              {alreadyEnrolled && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-800">
                  <CheckCircle2 size={20} className="text-emerald-600" /> You're enrolled
                </div>
              )}

              <div className="mt-6">
                {!user ? (
                  <button onClick={() => navigate("/login")} className="btn-primary w-full py-4">
                    Log in to Enrol
                  </button>
                ) : alreadyEnrolled ? (
                  <button onClick={handleGoToDashboard} className="btn-primary w-full py-4">
                    Go to Learning Dashboard
                  </button>
                ) : (
                  <button
                    role="button"
                    onClick={handleBuy}
                    disabled={loading}
                    className="btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader size={18} className="animate-spin" /> Processing…
                      </>
                    ) : (
                      "Enrol Now"
                    )}
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
