import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HEADER_OFFSET = 80;

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop - HEADER_OFFSET, behavior: "smooth" });
  }
}

// Section anchors all live on the homepage. From another page the target does
// not exist yet, so navigate home first and scroll on the commit that follows.
//
// Paths here come from useLocation, which is relative to the router basename,
// unlike window.location.pathname, which carries the deploy base path.
export function useSectionNav() {
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pendingSection || location.pathname !== "/") return;
    scrollToId(pendingSection);
    setPendingSection(null);
  }, [pendingSection, location.pathname]);

  return (id: string) => {
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      setPendingSection(id);
      navigate("/");
    }
  };
}
