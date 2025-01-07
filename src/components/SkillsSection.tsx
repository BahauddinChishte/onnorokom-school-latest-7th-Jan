import { ArrowUpRight, Code, Globe, PenTool, Megaphone, BarChart, Briefcase } from 'lucide-react';

export function SkillsSection() {
  const skills = [
    {
      title: "Web Development",
      icon: Code,
      description: "Learn HTML, CSS, JavaScript, React and more",
      url: "https://bahauddin.notion.site/WEB-DEV-RESOURCES-OnnorokomSchool-80a119d725754723ab293478a0cafda3?pvs=4"
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      description: "Master SEO, social media, and online advertising",
      url: "https://academy.hubspot.com/courses/digital-marketing"
    },
    {
      title: "UI/UX Design",
      icon: PenTool,
      description: "Create beautiful and functional user interfaces",
      url: "https://learnuiux.in/"
    },
    {
      title: "Content Writing",
      icon: Globe,
      description: "Learn copywriting and content marketing",
      url: "https://www.coursera.org/browse/arts-and-humanities/content-writing"
    },
    {
      title: "Data Analytics",
      icon: BarChart,
      description: "Master data analysis and visualization",
      url: "https://www.coursera.org/browse/data-science/data-analysis"
    },
    {
      title: "Freelancing",
      icon: Briefcase,
      description: "Start your freelancing career today",
      url: "https://www.coursera.org/browse/business/freelancing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Master In-Demand Skills
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore curated courses from leading platforms to master the skills that matter in today's digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <a
              key={skill.title}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                {skill.description}
              </p>
              <div className="flex items-center gap-2 text-primary-400">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.coursera.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors"
          >
            <span>Explore All Courses</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}