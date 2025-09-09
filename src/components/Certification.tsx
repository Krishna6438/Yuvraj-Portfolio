import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const certifications = [
        {
            title: "Python Essentials 1",
            issuer: "Cisco Networking Academy",
            date: "2024",
            description: "Credential demonstrating foundational knowledge of Python programming, including variables, data structures, control flow, functions, and problem-solving.",
            link: "https://drive.google.com/file/d/1GxcBMWIxuK3FdpSynLi50k0AYKtyAaVa/view?usp=sharing"
        },
        {
            title: "Language Luxe - Mastering the Art of Speaking English",
            issuer: "Lovely Professional University",
            date: "2024",
            description: "Completed a certification program focused on improving English communication skills, including vocabulary, grammar, pronunciation, and fluency in professional contexts.",
            link: "https://drive.google.com/file/d/1x7wE3Ko1qgfj-QwjvapgbP_5ou23dG7G/view?usp=sharing"
        }


    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.2, duration: 0.6 }
        })
    };

    return (
        <section id="certifications" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Certifications
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A timeline of my verified credentials and continuous learning journey
                    </p>
                </motion.div>

                <div className="relative border-l border-border/40 ml-4">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="mb-10 ml-6"
                        >
                            {/* Icon */}
                            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white ring-8 ring-background">
                                <CheckCircle size={16} />
                            </span>

                            {/* Card */}
                            <div className="p-5 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {cert.title}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                <p className="text-muted-foreground mb-3">{cert.description}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline"
                                >
                                    View Certificate →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
