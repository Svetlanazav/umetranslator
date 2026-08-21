import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Routes are prerendered to static HTML at build time; hydrate that markup
// instead of throwing it away. Unknown routes fall back to 404.html, which
// ships an empty shell.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
