import React, { useEffect, useState } from 'react';
import {
  Code2,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Trophy,
  Gamepad2,
  Database,
  GitBranch,
  Cpu,
  Zap,
  Award,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Software Engineer | Game Developer | Problem Solver";

  useEffect(() => {
    setIsLoaded(true);

    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typingInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Anns Shahbaz
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400' : 'text-white/70'
                    }`}
                >
                  {section === 'hero' ? 'Home' : section === 'projects' ? 'Work' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-ping"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Code2 className="w-8 h-8 text-cyan-400/60" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-delayed">
            <Gamepad2 className="w-8 h-8 text-purple-400/60" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
            <Database className="w-8 h-8 text-blue-400/60" />
          </div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="inline-block animate-wave">👋</span> Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Anns Shahbaz
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 min-h-[2rem]">
              <span className="typing-cursor">{typedText}</span>
              {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://drive.google.com/drive/folders/118GcW023lDPE0cVUueA2K4bPG-wRzy3S?usp=drive_link"
                download
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border-4 border-cyan-400/30">
                  <Code2 className="w-32 h-32 text-cyan-400" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  Software Engineer passionate about building innovative and scalable software systems.
                  Graduate of Punjab University College of Information Technology (PUCIT) with CGPA 3.93.
                </p>
                <p>
                  Working at Revolving Games on an RPG PC game, implementing complex systems like
                  Battle Pass progression & missions, concurrent quest systems and internal debugging tools.
                </p>
                <p>
                  I thrive on solving complex problems and find optimal solutions.
                </p>
              </div>
              {/* <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-400/30">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Unity Expert</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-400/30">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>C# Developer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-400/30">
                  <Gamepad2 className="w-4 h-4 text-blue-400" />
                  <span>Game Developer</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SBL: Phoenix Flight',
                company: 'Revolving Games',
                tech: ['Unity', 'C#', '.NET', 'AWS', 'AKKA'],
                description: 'RPG PC game with Quests, Battle Pass and many systems.',
                features: ['Battle Pass', 'Quest System', 'Game Debug Menu', 'Traversal Tools', 'Island Rating', 'And More'],
                color: 'cyan',
                status: 'In Development',
                link: 'https://drive.google.com/drive/folders/1fcouMlx2HMM6XXmsbJnIUcEFXkyvXcaX?usp=sharing',
                linkText: 'View Videos',
              },
              {
                title: 'Snakes & Ladders 3D',
                company: 'Gamebole',
                tech: ['PlayCanvas', 'JavaScript'],
                description: 'Classic board game reimagined in a modern 3D environment with smooth animations.',
                features: ['3D Environment Design', 'Procedural Snakes'],
                color: 'purple',
                status: 'Released',
                link: 'https://www.coolmathgames.com/0-snakes-and-ladders',
                linkText: 'Play Game',
              },
              {
                title: 'Drift Chase',
                company: 'Gamebole',
                tech: ['PlayCanvas', 'JavaScript'],
                description: 'High-speed car chase game featuring custom-built vehicle drift physics system.',
                features: ['Custom Physics', 'Drift Mechanics', 'Chase Gameplay'],
                color: 'blue',
                status: 'Prototype',
                linkText: 'View Demo',
              },
              {
                title: 'Titanic Rescue',
                company: 'Mindstorm Studios',
                tech: ['Unity', 'C#'],
                description: 'Hyper-casual rescue game developed during Game Jam with team collaboration.',
                features: ['Smooth Boat Mechanics', 'Hyper Casual Design'],
                color: 'green',
                status: 'Game Jam',
                link: 'https://www.youtube.com/watch?v=hrUzCuHmei4',
                linkText: 'Watch Video',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-bold text-${project.color}-400 mb-1 group-hover:text-cyan-400 transition-colors`}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.company}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs bg-${project.color}-400/20 text-${project.color}-400 rounded-full`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div className={`w-1 h-1 bg-${project.color}-400 rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.linkText || 'View Project'}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-purple-800/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills Showcase
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Gamepad2, name: 'Unity', color: 'cyan' },
              { icon: Code2, name: 'C#', color: 'purple' },
              { icon: Database, name: '.NET', color: 'blue' },
              { icon: GitBranch, name: 'Git', color: 'green' },
              { icon: Cpu, name: 'DSA', color: 'pink' },
              { icon: Zap, name: 'OOP', color: 'yellow' },
              { icon: Award, name: 'Problem Solving', color: 'red' },
              { icon: Gamepad2, name: 'PlayCanvas', color: 'indigo' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <skill.icon className={`w-12 h-12 mx-auto mb-4 text-${skill.color}-400 group-hover:animate-bounce`} />
                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r from-${skill.color}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Awards & Achievements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Bronze Medal - ACM ICPC',
                subtitle: 'Asia-Topi Regional Onsite Competition 2021',
                icon: Trophy,
                color: 'yellow',
                link: 'https://drive.google.com/file/d/1h7zvGrbNW-r7yxFaNvmYoKTYIFmMWuhc/view?usp=sharing',
                linkText: 'View Details',
              },
              {
                title: 'Winner - VisioSpark',
                subtitle: 'OnSpot Programming Competition 2022',
                icon: Award,
                color: 'cyan',
                link: 'https://drive.google.com/file/d/1jsHfgZ_ezLNvYwJcvSNBkucpyQ5Fb-9O/view?usp=sharing'
              },
              {
                title: 'Top 3 - VisioSpark',
                subtitle: 'Code Debugging Competition 2022',
                icon: Code2,
                color: 'purple',
                link: 'https://drive.google.com/file/d/1jsHfgZ_ezLNvYwJcvSNBkucpyQ5Fb-9O/view?usp=sharing'
              },
              {
                title: 'Winner - VisioSpark',
                subtitle: 'Code Debugging Competition 2023',
                icon: Code2,
                color: 'purple',
                // No link provided
              },
              {
                title: 'Top 0.5% - Mindstorm Studios',
                subtitle: 'Internship Program 2022',
                icon: Zap,
                color: 'green',
                // No link provided
              },
              {
                title: 'Outstanding Mechanics - Mindstorm Studios',
                subtitle: 'Rookie Game Jam 2022',
                icon: Gamepad2,
                color: 'blue',
                link: 'https://drive.google.com/file/d/1rtz0MaaJjma2RPgEVyYrJa57A3Yeub40/view?usp=sharing'
              },
              {
                title: 'Best Team Effort - Mindstorm Studios',
                subtitle: 'Rookie Game Jam 2021',
                icon: Award,
                color: 'pink',
                link: 'https://drive.google.com/file/d/16LAHI1HuwgIXMjeKKxUEHMd45cmTNCxw/view?usp=sharing',
                linkText: 'Technical Details',
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}-400 group-hover:animate-pulse flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{achievement.subtitle}</p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-cyan-300"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Certificate
                      </a>
                    )}
                  </div>
                  {/* {achievement.link && (
                    <div className="pt-2 border-t border-white/10">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {achievement.linkText}
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:annsshahbaz@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              annsshahbaz@gmail.com
            </a>
            <a
              href="tel:+923144026961"
              className="flex items-center gap-3 px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +92-314-4026961
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://linkedin.com/in/annsshahbaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
            </a>
            {/* <a
              href="https://github.com/ansi007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Anns Shahbaz | Made in Bolt AI
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;