import React from "react";

// Lightweight fallback shown while a page's code is loading.
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
    <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand" />
  </div>
);

export default PageLoader;
