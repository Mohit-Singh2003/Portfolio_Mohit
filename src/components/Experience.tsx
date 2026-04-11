import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    company: "Egen",
    role: "Associate Software Developer, GenAI Backend",
    location: "Hyderabad, IN",
    period: "Mar 2025 – Present",
    bullets: [
      "Architected a natural-language workforce analytics platform using Google ADK + Gemini, replacing manual Looker Studio dashboard navigation for C-suite stakeholders.",
      "Built a supervisor agent that classifies user intent and routes queries to four specialised domain agents (bench, staffing, utilisation, skills), each with independent BigQuery SQL generation.",
      "Engineered a secure SQL execution layer on BigQuery: read-only enforcement, DDL/DML blocking, pre-execution safety validation, and structured error handling.",
      "Developed FastAPI backend services for real-time agent-to-database communication; implemented a Dialogflow CX + Google Chat bridge with session-persistent conversational state.",
      "Deployed and maintained cloud-native services on GCP (Cloud Run); participated in CI/CD pipelines, Agile sprints, and live production debugging across multi-agent workflows.",
    ],
    tags: ["Google ADK", "Gemini", "FastAPI", "BigQuery", "Cloud Run", "Dialogflow CX"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Where I've <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative pl-8 md:pl-20 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/30" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-colors">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-primary">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
