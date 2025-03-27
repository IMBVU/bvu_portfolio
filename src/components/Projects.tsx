import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Analytics",
    description: "A modern analytics platform built with React and Node.js",
    image: "https://media-hosting.imagekit.io/920f328c0773499c/tab-7823156_1280.png?Expires=1837720571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hLk4hmRDwCc-zffXuUy-1eNu9oo7RBYCazy35F4oo2nPudLFH34XUKT9RuRLHlks6Qnw~4fWuZwp9ah-j3CVbH4u8mY9zj0Hr3VEgXNaacs5mK6nM7dbkHs6VHlcB1fGmgE~vrCQELkCxPi-90pcral3-2vovjrnO97wJbr~i4UNtJLQkuoyWdXD9~sw4qpDPIv-HROCdx-IOa3mFgYok72721Wp94XjkAmdCFb3xBosWkl-8zJmcrvkkeJZX2bew-lkwJYox6alkobe~PU83elMadfL4Y2NNIyTOMl3w7PGg3ufux4gB7BlS4NPV7rNaQFfOlPc1m15m2REIGJOwA__",
    link: "/analytics"
  },
  {
    title: "Software Development",
    description: "Comprehensive business intelligence platform for data-driven decisions",
    image: "https://media-hosting.imagekit.io/9b7d0cdf7b3b4aee/code-1839406_1280.jpg?Expires=1837720571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=afc7RWOMiVQl-pTVg1q8tWxmD8lyGENyc~C26I~DHivI0qFkJqdHe6~DTlVidqeAgBAaMG1pp~q6O6foUz5HEZW4uF6NcclX9SQhShFX08qjFrWqpj5zPOGtyFFlpFVhZsVGteM2mOuTGVdeoml3VSVmx6cxQ0HW8JzTRGd27C~thIwo0D5mJBIU0e-SLHWelCjSkSAb4k7ETX2gIj8SZWo~IRXGix9FxhUMedmHUrEIwHiAF~f9bAdhua0dMYPh9b2676oCzx1K2AXnzpMpiEc0MP-n8jjlj-Y3ABM7CguyQlP4Kof4OddrK6Ay0b1HMxDBRiswWL78lxsPM7xYRQ__",
    link: "/software-development"
  },
  {
    title: "Content Creation",
    description: "Professional photography, videography, and digital content creation",
    image: "https://media-hosting.imagekit.io/1746ce05594d4279/computer-5903052_1280.jpg?Expires=1837720571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nNEcesn2lt1KtrUoLIo98boXp7PhbLCQja4QtwWuoUbTdcP1WT796zP1RHRijI2PH38swamgnmKIue70hlIGRfw0Ut0ZNsKOdFlcrBhbueIlBYYCBRCpfzJp6h6Mvf-QqDnNDX3ID1p~uZpSGO1nSHqNQ1ADxCczw2JuDLzFSA6OddVFahsVxxjZm~JC-mpaWwLvGaztYbHa9upOEpkKlyRJyT9Ih107KL3XYuLACBukzVkLbFunBaAFZMpFBH2kVb3MB8njQ1f3W-tmK~h9fJVn0R3Uic9CmYRBQpyvcKh7gK8QCDMyYDC9KEatyJ70u7cBS9sXJquKfeNYqTLSBQ__",
    link: "/content-creation"
  },
  {
    title: "3Bar LLC",
    description: "All-in-one solution for managing business operations and workflows",
    image: "https://media-hosting.imagekit.io/71098db3bac94ab3/wine-6878041_1280.jpg?Expires=1837720571&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YeUgTMLj-pUrCFl9oce3J9Ooad7hIeKy4rrWbkuKaRZSPO4lVq-kGW-5zrVyXBvXRpRkC4PCFshLpI6UFxZg9EbNb-VJGmOEslgtGtjMGAlwRsuBR4dIYr8F4S9ZNu7nIzMUOUuyM7CPp8wXSXed2jmk0bAwXT8NjteOiJeso5~VPzg50UZr87uaMlZIdzoHjfvSSNIsRWhCGtHIyJl9~t3R7auNL0-uMg1~WrsI53IS8ccMfh~86iuQ06isKQGIAbPJ6zxG-hXPbbQmyyQ3p18w5bDCKe5iBxuelHEGpNLL9xcC4Mq3klzg047dFFrZuDn57reF39rspaunVYMNcQ__",
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
