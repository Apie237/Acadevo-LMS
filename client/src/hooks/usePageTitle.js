import { useEffect } from "react";

const BASE = "TopestTech";
const DEFAULT = "TopestTech — Technology, Software & Digital Skills";

// Sets document.title for the current page.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : DEFAULT;
  }, [title]);
}
