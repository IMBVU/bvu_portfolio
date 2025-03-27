import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Analytics",
    description: "A modern analytics platform built with React and Node.js",
    image: "https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22tab-7823156_1280.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-03-26T21%3A56%3A10.910Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F920f328c0773499c%2Ftab-7823156_1280.png%3FExpires%3D1837720571%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DhLk4hmRDwCc-zffXuUy-1eNu9oo7RBYCazy35F4oo2nPudLFH34XUKT9RuRLHlks6Qnw~4fWuZwp9ah-j3CVbH4u8mY9zj0Hr3VEgXNaacs5mK6nM7dbkHs6VHlcB1fGmgE~vrCQELkCxPi-90pcral3-2vovjrnO97wJbr~i4UNtJLQkuoyWdXD9~sw4qpDPIv-HROCdx-IOa3mFgYok72721Wp94XjkAmdCFb3xBosWkl-8zJmcrvkkeJZX2bew-lkwJYox6alkobe~PU83elMadfL4Y2NNIyTOMl3w7PGg3ufux4gB7BlS4NPV7rNaQFfOlPc1m15m2REIGJOwA__%22%7D",
    link: "/analytics"
  },
  {
    title: "Software Development",
    description: "Comprehensive business intelligence platform for data-driven decisions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280",
    link: "/software-development"
  },
  {
    title: "Content Creation",
    description: "Professional photography, videography, and digital content creation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
    link: "/content-creation"
  },
  {
    title: "3Bar LLC",
    description: "All-in-one solution for managing business operations and workflows",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1280",
    link: "/3bar"
  }
];

export function Projects() {
  return (
    <section id="works" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
