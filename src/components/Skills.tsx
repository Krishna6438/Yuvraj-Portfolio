import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      
      ]
    },
    {
      title: "Backend",
      skills: [
      
        { name: "Python", level: 70 },
        { name: "C", level: 75 },
        { name: "C++", level: 90 },
        
      ]
    },
    // {
    //   title: "Database",
    //   skills: [
    //     { name: "MongoDB", level: 80 },
    //     { name: "MySQL", level: 75 },
    //     { name: "PostgreSQL", level: 70 },
    //     { name: "Firebase", level: 85 },
    //   ]
    // },
    // {
    //   title: "Tools & Others",
    //   skills: [
    //     { name: "Git", level: 85 },
    //     { name: "Docker", level: 60 },
    //     { name: "AWS", level: 55 },
    //     { name: "Figma", level: 70 },
    //     { name: "Linux", level: 65 },
    //   ]
    // }
  ];

  const softSkills = [
    "Empathetic", "Motivational", "Collaborative", "Adaptable", 
    "Problem Solving", "Communication", "Time Management"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm py-2 px-4 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;