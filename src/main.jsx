import { createRoot } from "react-dom/client";
import "react-quill/dist/quill.snow.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import i18n from './i18n/i18n';
import App from "./App.jsx";
const savedLang = localStorage.getItem("lang") || "en";
i18n.changeLanguage(savedLang);
document.body.dir = savedLang === "ar" ? "rtl" : "ltr";

document.body.dir = savedLang === "ar" ? "rtl" : "ltr";
createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
