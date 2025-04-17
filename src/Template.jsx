import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// {/* Rounded Eyecatching Section */}
// <section className="w-[95%] mx-auto flex justify-center items-center bg-[var(--color-primary)] text-white text-4xl font-bold rounded-3xl p-24 shadow-lg">
// Bolded Text
// </section>

const colors = {
  background: "#FBFCF6",
  primary: "#F7D325",
  light: "#FFEC9F",
  medium: "#D0A832",
  dark: "#524B43",
  text: "#153DA2",
};

const sections = [
  { id: "sec1", label: "Sketching and Wireframing" },
  { id: "sec2", label: "Hi-Fi Prototype" },
  { id: "sec3", label: "Founder Feedback" },
];

// Topics are used for fluid word list animation
const topics = [
  "Sketching and Wireframing",
  "Hi-Fi Prototype",
  "Founder Feedback",
];

const Template = () => {
  //////////////////////////////////////////////////////////////////////////////
  // Image Full Screen
  //////////////////////////////////////////////////////////////////////////////
  // Image is for the fullscreen view
  const [selectedImage, setSelectedImage] = useState(null);

  //////////////////////////////////////////////////////////////////////////////
  // Page Sections Via Side Menu
  //////////////////////////////////////////////////////////////////////////////
  const [activeSection, setActiveSection] = useState(null);
  const processRef = useRef(null);
  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Use Effect for scrolling to sections via a menu
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 50% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  // Animated Dynamic Text
  //////////////////////////////////////////////////////////////////////////////
  const [currentTopic, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const topicInterval = setInterval(() => {
      setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 3000);

    return () => clearInterval(topicInterval);
  }, []);

  return (
    <div
      style={{
        "--color-background": colors.background,
        "--color-primary": colors.primary,
        "--color-light": colors.light,
        "--color-medium": colors.medium,
        "--color-dark": colors.dark,
        "--color-text": colors.text,
      }}
      className="w-full text-center mb-8 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <section
          className="fixed inset-0 bg-[var(--color-light)] bg-opacity-80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen preview"
              className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg"
            />
          </div>
        </section>
      )}

      {/* Heading */}
      <section className="relative flex flex-col justify-center items-center p-14 w-full h-full">
        <div className="flex flex-col justify-center items-start text-black">
          <div className="text-7xl font-bold">
            <h1 className="text-2xl font-bold text-[var(--color-dark)]">
              CSCI1300: Iterative Design & Evaluation
            </h1>
            <p className="mt-16 mb-4 text-[var(--color-dark)]">Warp AI Home</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={topics[currentTopic]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--color-primary)]"
              >
                {topics[currentTopic]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full border-b border-black my-8"></div>

          {/* Button */}
          <div className="w-full mt-6 flex justify-center ">
            <button
              onClick={scrollToProcess}
              className="w-full border-2 border-black text-black text-2xl font-semibold px-8 py-3 transition duration-300 hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]"
            >
              See the process
            </button>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="w-full flex flex-row py-16 px-14 bg-[var(--color-light)]">
        {/* Left Side (3/4) */}
        <div className="w-3/4 text-left">
          <h2 className="text-3xl font-bold">Title</h2>
          <p className="mt-8 mb-4">Why its important</p>

          <p className="my-4">
            In this project, our team partnered
            with Warp to address a key usability gap: the lack of a centralized
            dashboard where users can manage their account, team, sessions, and
            explore AI features. As Warp expands its collaborative and
            cloud-based tools, this feature would serve as the foundation for a
            more guided, discoverable, and intelligent user experience. 
            In working directly with a startup, this project challenged us to think
            critically about users, iterate based on feedback, and balance
            design creativity with business needs.
          </p>
        </div>

        {/* Right Side (1/4) */}
        <div className="w-1/4 text-left pl-8">
          <h3 className="text-2xl font-bold">Contribution</h3>
          <p>
            Research, Branding, UX/UI Design, Prototypes, Website Development,
            Accessible UI Components
          </p>
          <h3 className="text-2xl font-bold mt-4">Project Duration</h3>
          <p>4 Weeks</p>
          <h3 className="text-2xl font-bold mt-4">Research Refences</h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://mail.google.com
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://docs.google.com/forms
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                https://www.notion.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Scroll Section */}
      <section ref={processRef}>
        <h2 className="text-3xl py-16 px-14 text-left font-bold">Heading</h2>
        <div className="w-full flex flex-row py-16 px-14 bg-opacity-70 relative">
          {/* Sidebar Navigation */}
          <div className="w-1/4">
            <nav className="sticky top-1/2 transform -translate-y-1/2">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-lg font-semibold text-left px-4 py-2 transition rounded-lg ${
                    activeSection === id
                      ? "bg-[var(--color-light)] text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-3/4 space-y-16 pl-8">
            {/* Section 1 */}
            <section id="sec1" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Sketching and Wireframing
              </h1>
            </section>

            {/* Section 2 */}
            <section id="sec2" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Hi-Fi Prototype
              </h1>
            </section>

            {/* Section 3 */}
            <section id="sec3" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Founder Feedback
              </h1>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template;
