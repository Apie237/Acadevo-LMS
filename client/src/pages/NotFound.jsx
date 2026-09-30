import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page not found");
  return (
    <section className="flex min-h-[70vh] items-center bg-white">
      <div className="container-page text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
