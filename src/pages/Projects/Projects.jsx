import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const DRIVE_IMG = "https://github.com/Anuj5504/health-setu/blob/main/frontend/public/healthsetu.jpg";

const projects = [
  {
    title: "HealthSetu - Smart Healthcare Platform",
    description:
      "HealthSetu is an AI-powered healthcare management system featuring multi-role dashboards for patients, doctors, and admins. Includes voice-based appointment booking, automated medicine reminders, and real-time health tracking for vitals. Enhances care coordination, reduces waiting times, and improves treatment adherence through smart automation.",
    src: DRIVE_IMG,
    link: "https://github.com/Anuj5504/health-setu/blob/main/frontend/public/healthsetu.jpg",
    color: "#0ea5e9",
    githubLink: "https://github.com/Anuj5504/health-setu",
    liveLink: "https://healthsetu.netlify.app/",
  },
  {
    title: "BlogNest - Blogging Platform",
    description:
      "Full-stack blogging platform with React.js, Node.js, Express.js, MongoDB, and GROQ API. Enables authenticated users to perform full CRUD on blogs. Role-based JWT authentication ensures secure access for users and admins. Admin dashboard includes real-time analytics, user management, and post moderation with auto-flagging of posts reported over 10 times.",
    src: DRIVE_IMG,
    link: "https://i.postimg.cc/Z5szJKsp/blogncst.png",
    color: "#4b6cc1",
    githubLink: "https://github.com/Sushant-Joshilkar04/SEPM_BlogNest",
    liveLink: "https://blognest-app.netlify.app/",
  },
  {
    title: "Doubt Solver - Doubt Management System",
    description:
      "Built with React.js, Firebase, and Tailwind CSS. Allows users to submit, edit, delete, and resolve doubts. Real-time status tracking and category-based filters improved navigation efficiency. Firebase used for authentication and real-time backend updates.",
    src: DRIVE_IMG,
    link: "https://i.postimg.cc/d0kDcBn9/doubtsolver.png",
    color: "#10b981",
    githubLink: "https://github.com/Sushant-Joshilkar04/DoubtSolver",
    // liveLink: "https://doubtsolver.vercel.app/",
  },
  {
    title: "Chrome Extension for Screen Capture",
    description:
      "Chrome Extension built with JavaScript, HTML, and CSS. Offers features similar to Lightshot—area-based screenshot capture, auto-scroll for off-screen content, and hotkey (Ctrl+Shift+Y) support. Drag-to-select UI enhances speed and accessibility.",
    src: DRIVE_IMG,
    link: "https://i.postimg.cc/B6R5FKnX/screencaptureext.png",
    color: "#f59e0b",
    githubLink: "https://github.com/Sushant-Joshilkar04/LongScreenshot",
    // liveLink: "https://chrome.google.com/webstore/detail/your-extension-id",
  },
  // {
  //   title: "CodeKori 🔥",
  //   description:
  //     "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
  //   src: "house.jpg",
  //   link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
  //   color: "#ed649e",
  //   githubLink: "https://github.com/seraprogrammer/CodeKori",
  //   liveLink: "https://codekori.js.org",
  // },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[92%] md:w-[80%] lg:w-[65%] xl:w-[55%] origin-top project-card"
        whileHover={{
          y: -12,
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
          transition: { duration: 0.3 },
        }}
      >
        <div
          className="w-full flex flex-col bg-zinc-900/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border-l-8 border-opacity-80 transition-all duration-300"
          style={{
            borderColor: color,
            boxShadow: `0 4px 32px 0 ${color}22, 0 1.5px 8px 0 #0008`,
          }}
        >
          {/* Project number and accent */}
          <div className="flex items-center gap-2 px-8 pt-8">
            <span className="bg-black/60 backdrop-blur text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm border border-zinc-800">
              Project {i + 1}
            </span>
            <div
              className="w-2.5 h-2.5 rounded-full border-2 border-zinc-800"
              style={{ backgroundColor: color }}
            />
          </div>

          {/* Content section */}
          <div className="w-full p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow">
                {title}
              </h2>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            <div>
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-5" />
              <div className="flex items-center gap-6">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/70 hover:bg-zinc-900/80 transition-colors border border-zinc-700 shadow-sm"
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-sm font-semibold"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>
                {/* Live Link */}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/70 hover:bg-zinc-900/80 transition-colors border border-zinc-700 shadow-sm"
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span
                      className="text-sm font-semibold"
                      style={{ color }}
                    >
                      Live
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string, // Make optional if not always present
};
