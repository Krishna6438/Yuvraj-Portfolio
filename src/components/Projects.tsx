import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Life On Land",
      description:
        "The Life on Land website is a visually engaging splash page dedicated to raising awareness about environmental conservation and biodiversity. Designed with a modern aesthetic, it features custom animations, a unique cursor, and a responsive layout. The site highlights the mission to protect Earth's ecosystems, showcases a collaborative team of developers, and incorporates custom branding and imagery. Built using HTML, CSS, and JavaScript, the project demonstrates skills in UI/UX design, team collaboration, and front-end web development.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YUkpFHlkFDl_U58j-VIrs8BztYNYHhK7JQ&s",
      tech: ["Html", "CSS", "Javascript"],
      liveDemo: "https://life-onland.netlify.app/",
      github: "https://github.com/yuviikhatkar07/Environment",
    },
    {
      title: "Student Management System",
      description:
        "This is a simple Student Record Management System written in C. It allows you to manage student records by adding, viewing, updating, and deleting student details.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmlu7VmIZRc0NkVMjpNGD3ATUpSe19pzAJw&s",
      tech: ["C"],
      liveDemo: "#",
      github: "https://github.com/yuviikhatkar07/Student-management-system",
    },
    {
    title: "Movie Mania",
    description:
      "A movie ticket booking platform where users can explore movies, check showtimes, choose seats, and book tickets with an intuitive interface.",
    image: "/mm.jpg",
    tech: ["Html", "CSS","Javascript"],
    liveDemo: "https://moviemania112.vercel.app/",
    github: "https://github.com/yuviikhatkar07/MovieMania",
},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-white text-primary hover:bg-blue-50"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-primary"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-skill-badge text-skill-badge-text hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
