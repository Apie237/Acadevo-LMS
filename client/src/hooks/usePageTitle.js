import { useEffect } from "react";

const BASE = "ToppestTech";
const DEFAULT = "ToppestTech — Technology, Software & Digital Skills";

// Sets document.title for the current page.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : DEFAULT;
  }, [title]);
}
