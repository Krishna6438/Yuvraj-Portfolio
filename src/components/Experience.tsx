import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const experiences = [
        {
            role: "Intern",
            company: "Udit Kunj Foundation",
            period: "1 July 2025 – 25 July 2025",
            description: [
                "Built a React-based URL shortener app with logging middleware integration.",
                "Implemented responsive UI with Tailwind and ensured accessibility.",
                "Worked with REST APIs for URL persistence and analytics."
            ],
            certificateLink: "https://drive.google.com/file/d/1Vb6MOWW1xkvTIDlhssdhcbyNEzYzM9aD/view"
        },
        // You can add `certificateLink` to other experiences the same way
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: ["easeOut"] },
        },
    };

    return (
        <section id="experience" className="py-20 bg-section-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Roles and contributions that shaped my technical journey
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="border-border/50 hover:border-primary/30 transition-colors shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-muted-foreground italic">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-md font-medium text-secondary-foreground mb-2 text-white">
                                        {exp.company}
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="text-sm leading-relaxed">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* View Certificate Button */}
                                    {exp.certificateLink && (
                                        <div className="mt-4">
                                            <a
                                                href={exp.certificateLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button
                                                    size="sm"
                                                    className="bg-primary text-white hover:bg-primary/90"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View Certificate
                                                </Button>
                                            </a>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
