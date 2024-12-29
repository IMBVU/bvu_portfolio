import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Expert in React, TypeScript, and modern CSS frameworks like Tailwind"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Proficient in Python, SQL, and data visualization tools"
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    description: "Experience with Node.js, Express, and various databases"
  }
];

export function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications
            and analyzing complex data sets. With a strong foundation in both frontend
            and backend technologies, I create seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6 mx-auto">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            With over 5 years of experience in software development, I've worked on
            various projects ranging from e-commerce platforms to data analytics
            solutions. I'm constantly learning and adapting to new technologies
            to deliver the best possible solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}