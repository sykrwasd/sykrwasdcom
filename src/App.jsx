// App.js
import "./App.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen text-[#1A1A1A] px-6 py-12">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold">Umar Syakir</h1>
        <p className="text-lg text-gray-500 mt-3">
          CS Student · Builder · Dreamer
        </p>
      </header>

      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/image/profile.jpg"
          alt="Umar Syakir"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow"
        />
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 mb-10 text-gray-600">
        <a
          href="https://github.com/sykrwasd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-3xl"
        >
          <FaTwitter />
        </a>
      </div>

      {/* About */}
      <section className="max-w-2xl mx-auto text-center mb-10">
        <p className="text-xl text-gray-700">
          I'm a CS student who works primarily with React, Node.js, Express.js, and MongoDB.
          I enjoy solving problems and building full-stack tools that make life easier.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 underline">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Project
            title="ReLearn – Student Book Marketplace"
            desc="Cross-platform app for students to buy and sell used books."
            link="https://github.com/sykrwasd/ReLearn"
            tech={["React Native", "Expo", "MongoDB", "AWS S3", "TailwindCSS"]}
            image="/image/ReLearn.png"
          />
          <Project
            title="Achievia – Goal-Based Savings App"
            desc="Finance tracker for managing savings goals."
            link="https://github.com/sykrwasd/sykrOpenAI"
            tech={["React Native", "Expo", "MongoDB"]}
            image="/image/achievia.jpg"
          />
          <Project
            title="DISK Voting System"
            desc="Internal voting platform for 375 students with real-time tracking."
            link="https://github.com/syahrillhaiqal/DiskVotingSystem"
            tech={["HTML", "CSS", "Tailwind", "Node.js", "MongoDB", "Express.js", "Railway"]}
            image="/image/disk.png"
          />
          <Project
            title="PDF Summarizer (sykrOpenAI)"
            desc="Uploads academic PDFs and summarizes content using OpenAI API."
            link="https://github.com/sykrwasd/sykrOpenAI"
            tech={["React", "OpenAI", "MongoDB", "Pdf-Parse", "TailwindCSS", "Multer"]}
            image="/image/ai.png"
          />
          <Project
            title="Sales Management System (Sagu)"
            desc="Tracks orders and deliveries for sagu dessert sales."
            link="https://github.com/sykrwasd/Sagu"
            tech={["HTML", "CSS", "Node.js", "MongoDB", "Express.js", "Railway"]}
            image="/image/sagu.png"
          />
          <Project
            title="KShoppe – Daily Closing Report"
            desc="Retail report generator with modal preview and PDF export."
            link="https://github.com/sykrwasd/KShoppe"
            tech={["HTML", "CSS", "Vercel", "JavaScript", "jQuery"]}
            image="/image/kshoppe.jpg"
          />
          <Project
            title="CodeNest – Employee Management System"
            desc="Full-stack HR platform for NazaCorp with payroll and performance tracking."
            link="https://github.com/sykrwasd/CodeNest"
            tech={["PHP", "MySQL", "XAMPP", "CSS", "JavaScript"]}
            image="/image/codenest.png"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16 pb-4">
        © {new Date().getFullYear()} Umar Syakir
      </footer>
    </div>
  );
}

function Project({ title, desc, link, image, tech }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-gray-100 hover:scale-[1.01] transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain rounded-lg mb-4 bg-gray-100"
        />
      )}
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-600 mb-2">{desc}</p>
      {tech && (
        <p className="text-sm text-gray-500 italic mb-4">
          {tech.join(" · ")}
        </p>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}

export default App;
