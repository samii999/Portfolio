"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      className="w-full max-w-7xl mx-auto flex flex-col gap-16"
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        background:
          "linear-gradient(to bottom, #ffffff 0%, #fcd34d 50%, #ffffff 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#000000",
          border: "3px solid #000000",
          borderRadius: "0.5rem",
          padding: "1.5rem 2rem",
          marginBottom: "2rem",
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold uppercase"
          style={{
            color: "#ffffff",
            letterSpacing: "-0.05em",
            fontFamily: "Inter, sans-serif",
          }}
        >
          About Me
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I am <strong>Muhammad Usman</strong>, a passionate{" "}
              <strong>BSCS graduate</strong> specializing in web and mobile
              application development. I enjoy building practical, user-focused
              digital solutions that solve real-world problems through clean
              design and efficient code.
            </p>
          </div>

          {/* Academic Background */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Academic Background
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I have completed my Bachelor of Science in Computer Science (BSCS), where I developed a solid foundation in:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Programming fundamentals</li>
              <li>Software engineering principles</li>
              <li>Database systems</li>
              <li>Web and mobile application development</li>
            </ul>
            <div
              className="p-6 border rounded-xl bg-gray-50 mt-6"
              style={{ border: "3px solid #FFD700" }}
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                Final Year Project (FYP)
              </h3>
              <p className="text-gray-700">
                <strong>Fixora – Civic Issue Reporting App</strong>
                <br />
                A mobile application that enables citizens to report public
                issues using images and GPS-based location tracking, while
                allowing staff and organizations to verify, manage, and resolve
                issues efficiently.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What I Do
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Design and develop responsive web interfaces</li>
              <li>Build cross-platform mobile applications</li>
              <li>Integrate backend services and REST APIs</li>
              <li>Work with Firebase, Firestore, and Supabase</li>
              <li>Train and experiment with AI / ML models</li>
              <li>Focus on performance, usability, and clean architecture</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js
              </div>
              <div>
                <strong>Mobile:</strong> React Native, Expo
              </div>
              <div>
                <strong>Backend & Cloud:</strong> Firebase, Firestore, Supabase
              </div>
              <div>
                <strong>AI & ML:</strong> Model training, data preprocessing
              </div>
              <div>
                <strong>Tools:</strong> Git, GitHub, REST APIs
              </div>
              <div>
                <strong>Design:</strong> UI/UX principles, responsive layouts
              </div>
            </div>
          </div>

          {/* Goals */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Professional Goals
            </h2>
            <p className="text-gray-700 leading-relaxed">
              My goal is to grow as a full-stack and mobile application developer,
              work on impactful projects, and continuously improve my skills in
              AI-driven solutions and scalable application design.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-black mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Work Ethic & Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strong problem-solving mindset</li>
              <li>Clean and maintainable code practices</li>
              <li>Continuous learning and self-improvement</li>
              <li>Team collaboration and clear communication</li>
              <li>Focus on real-world impact through technology</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Profile & CTA */}
        <div className="space-y-8">
          {/* Profile Picture */}
          <div className="text-center">
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl mx-auto"
              style={{ border: "3px solid #FFD700" }}
            >
              <Image
                src="/images/profile/profile.jpeg"
                alt="Muhammad Usman"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Availability Badge */}
            <div className="flex items-center justify-center mt-4">
              <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse block"></span>
              <span
                className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md"
                style={{ fontWeight: "900" }}
              >
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Connect Section */}
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: "#000000",
              border: "3px solid #FFD700",
            }}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#ffffff' }}>Let's Connect</h2>
            <p className="mb-4" style={{ color: '#ffffff' }}>
              I am open to internships, junior developer roles, freelance work, and
              collaborative projects. Feel free to explore my work or get in touch.
            </p>

           {/* Buttons */}
<div className="flex flex-row items-center justify-center mt-8 mb-6" style={{ gap: '3rem' }}>
  {/* Hire Me Button */}
  <Link
    href="/contact"
    style={{
      backgroundColor: "#FFD700",
      color: "black",
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      fontWeight: "bold",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "2px solid #FFD700",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      textDecoration: "none",
      display: "inline-block",
      width: "180px",
      textAlign: "center",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "black";
      e.currentTarget.style.color = "#FFD700";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#FFD700";
      e.currentTarget.style.color = "black";
    }}
  >
    Hire Me
  </Link>

  {/* Download CV Button */}
  <Link
    href="/resume.pdf"
    target="_blank"
    style={{
      backgroundColor: "black",
      color: "#FFD700",
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      fontWeight: "bold",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      border: "2px solid #FFD700",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      textDecoration: "none",
      display: "inline-block",
      width: "180px",
      textAlign: "center",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#FFD700";
      e.currentTarget.style.color = "black";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "black";
      e.currentTarget.style.color = "#FFD700";
    }}
  >
    Download CV
  </Link>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
