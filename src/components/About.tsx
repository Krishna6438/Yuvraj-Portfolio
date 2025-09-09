import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a focus on creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl ">
                  <img
                    src="Personal.jpg"
                    alt="Yuvraj"
                    className="w-full h-full object-cover -rotate-1 rounded-full"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dedicated Web Developer seeking a challenging role to leverage technical expertise
                  in front-end and back-end development to create innovative, user-centric web applications.
                  Proficient in specific programming languages, frameworks, and tools to deliver
                  high-quality, responsive, and efficient web solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Bachelor in Computer Application
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lovely Professional University
                    </p>
                    <p className="text-sm text-primary font-medium">2024-Present</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Diploma</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer Software
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Harton Skill Center
                    </p>
                    <p className="text-sm text-primary font-medium">2022-2023</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Represented school in State Level Arts and Craft Competition
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Silver Medal in District Level Crafting Competition
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Committed to continuous learning and technical innovation
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;