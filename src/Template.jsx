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
  { id: "sketching and wireframing", label: "Sketching and Wireframing" },
  { id: "wireframe critique", label: "Wireframe Critique" },
  { id: "hifi prototype", label: "Hi-Fi Prototype" },
  { id: "final critique", label: "Final Critique" },
];

// Topics are used for fluid word list animation
const topics = [
  "AI-Powered",
  "Clean Interface",
  "Developer-First",
  "Customizable",
  "Fast",
  "Central Hub",
  "Terminal Reinvented",
  "Command Center",
  "Smart Suggestions",
  "Intuitive",
  "Streamlined",
  "Efficient Workflow",
  "Context-Aware",
  "User-Guided",
  "Modern CLI",
  "Dashboard-Driven",
  "Cloud-Native",
  "Productivity-Boosting",
];

const sketchData = {
  Dani: [1, 2, 3],
  Mia: [1, 2, 3],
  Jake: [1, 2, 3],
  Efram: [1, 2, 3],
};

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
              className="absolute top-4 right-4 text-black text-3xl font-bold"
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
          <h2 className="text-3xl font-bold">Project description</h2>
          <p className="my-4">
            In this project, our team partnered with Warp, a next-gen terminal
            reimagined with AI and collaboration at its core. We aim to address
            a key usability gap: the lack of a centralized dashboard where users
            can manage their account, team, sessions, and explore AI features.
            As Warp expands its collaborative and cloud-based tools, this "Home"
            experience would serve as the foundation for a more guided,
            discoverable, and intelligent user experience.
          </p>
          <p className="my-4">
            In working directly with a startup, this project challenged us to
            think critically about users, iterate based on feedback, and balance
            design creativity with business needs. We identified key needs,
            sketched concepts, and built wireframes and prototypes. Through
            multiple rounds of feedback and usability testing, we refined the
            layout and content to better support essential features of the
            "Home" experience.
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
          <h3 className="text-2xl font-bold mt-4">Team Members</h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                // potentially add our linkedin / portfolio links?
                href="https://www.linkedin.com/in/daniela-dedona/"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-blue-500"
              >
                Daniela DeDona
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mia-nguyen-brownu/"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-blue-500"
              >
                Mia Nguyen
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jacob-stifelman/"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-blue-500"
              >
                Jacob Stifelman
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/efram-geller-ab5638246/"
                target="_blank"
                rel="noopener noreferrer"
                // className="text-blue-500"
              >
                Efram Geller
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
            {/* Sketching and Wireframing */}
            <section
              id="sketching and wireframing"
              className="text-left space-y-8"
            >
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Sketching and Wireframing
              </h1>

              <p>
                We began our iterative design process by brainstorming and
                visualizing possible directions for a{" "}
                <span className="font-semibold">
                  centralized homepage interface
                </span>{" "}
                for Warp — a developer-first AI terminal. This dashboard would
                serve as a hub to manage teams, sessions, recent activity, and
                AI-powered suggestions, helping users navigate Warp's ecosystem
                more efficiently.
              </p>

              <p>
                Our goal was to create an interface for{" "}
                <span className="font-semibold">desktop users</span>,
                specifically engineers who use Warp in collaborative
                environments. These users often struggle to find relevant files,
                understand team activity, or discover Warp's advanced AI tools.
                A dashboard could surface these features proactively, reducing
                friction and cognitive overhead.
              </p>

              <p>
                As a group, we sketched{" "}
                <span className="font-semibold">
                  four distinct layout ideas
                </span>
                , each exploring different ways to surface core functionalities
                such as team management, AI suggestions, account settings, and
                product metrics. Each member contributed three sketches — a home
                screen and two supporting screens — for a total of 16 unique
                sketches.
              </p>

              {/* Group Sketch Gallery */}
              {Object.entries(sketchData).map(([name, images]) => (
                <div
                  key={name}
                  className="flex items-start space-x-4 mb-10 min-h-[220px] md:min-h-[250px]"
                >
                  {/* Name Column */}
                  <div className="w-24 shrink-0 font-semibold text-lg mt-2">
                    {name}
                  </div>

                  {/* Horizontal Scrollable Image Carousel */}
                  <div className="overflow-x-auto flex space-x-4 p-4">
                    {images.map((i) => {
                      const src = `/sketches/${name.toLowerCase()}${i}.png`;
                      return (
                        <div key={i} className="flex-shrink-0 text-center">
                          <img
                            src={src}
                            alt={`${name}'s sketch ${i}`}
                            onClick={() => setSelectedImage(src)}
                            className="h-[180px] w-auto rounded-md shadow-md cursor-pointer transition transform duration-300 hover:scale-105 hover:shadow-lg"
                          />
                          <p className="mt-2 text-sm text-gray-600">
                            Sketch {i}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <p>
                After reviewing all sketches, we had a team discussion around
                what elements worked well and which approaches best aligned with
                Warp's goals. From that conversation, we created a consolidated
                wireframe using Balsamiq, combining the strongest parts of our
                sketches.
              </p>

              <p>
                Key decisions included surfacing team management and metrics in
                a left-side tab panel, while allowing quick access to AI
                suggestions and recent activity. This layout prioritized
                visibility without cluttering the interface.
              </p>

              <p>
                You can view the final wireframes and our walkthrough in the
                Loom video below.
              </p>

              <div className="w-full h-[550px] mt-10">
                <iframe
                  src="https://www.loom.com/embed/b00de5a5c25d4ad4b480fc7bdd893360?sid=79e680d3-3914-423b-9427-6d1869a01a40"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-lg"
                  title="Loom walkthrough"
                ></iframe>
              </div>
            </section>

            {/* Wireframe Critique */}
            <section id="wireframe critique" className="text-left space-y-10">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Wireframe Critique
              </h1>

              <p>
                After submitting our wireframe via Loom, we received detailed
                feedback from Warp stakeholders and critiqued our work in person
                with Vanessa Cho. Below is a breakdown of the feedback we
                received on each section of our design, and the changes we made
                (or chose not to make) in response.
              </p>

              {/* ===== HOME ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Home</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Is this dashboard intended to{" "}
                        <span className="italic">replace</span> WarpDrive?
                        There's concern it overlaps too much with the Documents
                        section.
                      </li>
                      <li>
                        The current dropdown may be cramming too many features
                        into one place.
                      </li>
                      <li>
                        Why is “Ask Warp” separated from the terminal? It
                        currently serves as a dual-mode input.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-gray-400">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Our Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        We reframed the dashboard as a complementary overview
                        that enhances WarpDrive, not replaces it.
                      </li>
                      <li>
                        We surfaced persona-based functionality directly on the
                        dashboard.
                      </li>
                      <li>
                        “Ask Warp” will be integrated with the terminal input to
                        align with current user expectations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== TEAM ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Team</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        The IA could use more thoughtful grouping—look at
                        Figma's org/project hierarchy.
                      </li>
                      <li>
                        Make assumptions clear (e.g., users belong to teams, not
                        just projects).
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-gray-400">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Our Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        We adopted a clear structure where users belong to
                        teams, and teams manage multiple workspaces.
                      </li>
                      <li>
                        We simplified navigation and made team-level views more
                        consistent.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== METRICS ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Metrics</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Tailor metrics to specific user types — e.g., admins
                        care about performance stats.
                      </li>
                      <li>
                        Show value — like how much time is saved using agentic
                        suggestions.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-gray-400">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Our Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        We proposed usage-based metrics: frequency of AI
                        suggestions, time saved, etc.
                      </li>
                      <li>
                        We tailored the display based on user role (e.g., admin
                        vs. team member).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== BILLING ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Billing</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        The pricing tiers are too prominent — not reflective of
                        what users actually come to view.
                      </li>
                      <li>
                        Look at Figma's billing portal for a more intuitive
                        model.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-gray-400">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Our Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        We demoted pricing tiers to a secondary page and
                        prioritized recent invoices and usage breakdowns.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== HOW TO USE ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">How to Use</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Feedback</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Does this belong buried under a tab on the homepage?
                      </li>
                      <li>
                        Consider surfacing onboarding at a more relevant point
                        in the user journey.
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-3xl text-gray-400">
                    →
                  </div>
                  <div className="md:w-1/2">
                    <p className="font-semibold mb-1">Our Response</p>
                    <ul className="list-disc list-inside">
                      <li>
                        We're redesigning onboarding to live at the top of the
                        homepage, including suggested code blocks and a CTA
                        linking to more detailed resources.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ===== FINAL THOUGHTS ===== */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Final Thoughts</h2>
                <p>
                  Our in-person critique with Vanessa reinforced many of the
                  same points, helping us prioritize which adjustments to make
                  first. Across the board, we focused on simplifying navigation,
                  clarifying hierarchy, and surfacing key functionality in the
                  most context-appropriate places.
                </p>
                <p className="italic">
                  Open question: How do we create a landing experience that's
                  helpful to new users, but doesn't overwhelm them with
                  complexity?
                </p>
              </div>
            </section>

            {/* Hi-Fi Prototype */}
            <section id="hifi prototype" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Hi-Fi Prototype
              </h1>

              <p>
                You can view the final hi-fi protoytpe and our walkthrough in
                the Loom video below.
              </p>

              <div className="w-full h-[550px] mt-10">
                <iframe
                  src="https://www.loom.com/share/27d983c61b4945af92e68bf9d468e08b?sid=039e7eaf-4791-43b3-ac13-608fddae4ef5"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-md shadow-lg"
                  title="Loom Hi-Fi walkthrough"
                ></iframe>
              </div>
            </section>

            {/* Final Critique */}
            <section id="final critique" className="text-left">
              <h1 className="text-3xl font-bold bg-[var(--color-light)] p-2 inline">
                Final Critique
              </h1>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template;
