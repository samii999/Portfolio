// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Award, 
  Code, 
  Smartphone,
  ExternalLink,
  Mail,
  Download
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Computer Science graduate passionate about building innovative web and mobile applications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Profile Image */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto md:mx-0 mb-6">
                  <Image
                    src="/images/profile/profile.jpeg"
                    alt="Muhammad Usman"
                    fill
                    className="rounded-2xl object-cover shadow-xl border-4 border-white"
                  />
                </div>
                
                {/* Quick Info Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">Attock, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold">um558899@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold">1+ Year</p>
                    </div>
                  </div>
                </div>

                {/* Download Resume Button */}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="mt-6 w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="md:w-2/3">
              {/* Professional Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                  Professional Summary
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Computer Science graduate with strong foundational knowledge of web and mobile application development. 
                  Hands-on experience with React Native, React.js, and Next.js through academic and personal projects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Developed a full-featured Final Year Project involving authentication, role-based access control, APIs, 
                  and AI-assisted image classification. Seeking an internship opportunity to apply technical skills, 
                  learn from industry professionals, and grow as a full-stack developer.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-green-600 rounded-full"></span>
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  Education
                </h2>
                
                <div className="border-l-4 border-green-200 pl-4">
                  <h3 className="text-xl font-bold mb-1">COMSATS University Islamabad</h3>
                  <p className="text-green-600 font-semibold mb-2">Attock Campus</p>
                  <p className="text-gray-700 mb-3">Bachelor of Science in Computer Science (BSCS)</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">2020 - 2024</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CGPA: 3.5/4.0</span>
                  </div>
                  
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Mobile Application Development',
                      'Web Technologies',
                      'Machine Learning',
                      'Software Engineering',
                      'Database Systems',
                      'Data Structures'
                    ].map((course, index) => (
                      <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-purple-600 rounded-full"></span>
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Work Experience
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-purple-200 pl-4">
                    <h3 className="text-xl font-bold mb-1">Web & Mobile App Developer</h3>
                    <p className="text-purple-600 font-semibold mb-2">Personal Projects • Jan 2024 – Present</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Developed mobile and web applications using React Native, React.js, and Next.js</li>
                      <li>Created reusable UI components and responsive layouts for cross-platform compatibility</li>
                      <li>Integrated Firebase Authentication and Supabase for secure data storage and backend services</li>
                      <li>Worked with REST APIs using Node.js and Express for data handling and user interactions</li>
                      <li>Implemented features such as role-based access control, image uploads, and GPS location usage</li>
                      <li>Used Git and GitHub for version control and project management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                  Languages
                </h2>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'English', level: 'Fluent', percentage: 90 },
                    { name: 'Urdu', level: 'Native', percentage: 100 },
                    { name: 'Punjabi', level: 'Native', percentage: 100 },
                  ].map((lang, index) => (
                    <div key={index} className="text-center">
                      <div className="font-bold mb-1">{lang.name}</div>
                      <div className="text-sm text-gray-600 mb-2">{lang.level}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm currently looking for internship opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Code size={20} />
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}