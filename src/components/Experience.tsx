import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Calendar, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    company: "Techolution",
    role: "AI Engineer",
    location: "Remote",
    period: "May 2026 – Present",
    type: "Full-time",
    bullets: [
      "Redesigned citation extraction in the Artifact Search feature of Creative Workspace, replacing sequential regex processing with a semaphore-gated parallel pipeline (concurrency=10) that streams citations to the UI via Pub/Sub as soon as LLM tokens arrive, reducing average citation delivery latency by ~65%.",
      "Implemented progressive loading architecture for LLM-driven search responses, decoupling extraction and delivery stages so partial results surface incrementally, cutting perceived wait time from ~4s to under 800ms for typical queries.",
      "Diagnosed and resolved 12+ production bugs across the Artifact Search service, improving result accuracy by ~25% and reducing error-rate spikes from 8% to under 1% under concurrent user load.",
      "Optimised Pub/Sub message fan-out logic to handle citation bursts without message loss, adding dead-letter handling and idempotency guards to prevent duplicate renders on the frontend.",
      "Collaborated cross-functionally with the Creative Workspace product team to instrument observability metrics for the new pipeline, enabling data-driven tuning of concurrency limits and response thresholds.",
    ],
    tags: ["Python", "Pub/Sub", "LLM", "Parallel Processing", "FastAPI", "Artifact Search"],
  },
  {
    company: "Egen",
    role: "ASDE-1 (Gen AI)",
    location: "Hyderabad, IN",
    period: "Sep 2025 – May 2026",
    type: "Full-time",
    bullets: [
      "Architected a natural-language workforce analytics platform using Google ADK + Gemini, replacing manual Looker Studio dashboard navigation for C-suite stakeholders.",
      "Built a supervisor agent that classifies user intent and routes queries to four specialised domain agents like bench, staffing, utilisation, and skills, each with independent BigQuery SQL generation capabilities.",
      "Engineered a secure SQL execution layer on top of BigQuery: read-only enforcement, DDL/DML blocking, pre-execution safety validation, and structured error handling.",
      "Developed FastAPI backend services for real-time agent-to-database communication; implemented a Dialogflow CX + Google Chat bridge with session-persistent conversational state.",
      "Deployed and maintained cloud-native services on GCP (Cloud Run); participated in CI/CD pipelines, Agile sprints, and live production debugging across multi-agent workflows.",
    ],
    tags: ["Google ADK", "Gemini", "FastAPI", "BigQuery", "Cloud Run", "Dialogflow CX", "GCP"],
  },
  {
    company: "Egen",
    role: "Generative AI Intern",
    location: "Hyderabad, IN",
    period: "Mar 2025 – Sep 2025",
    type: "Internship",
    bullets: [
      "Built Generative AI–powered backend services using Python, FastAPI, and Google ADK, enabling LLM-driven workflows for internal and client use cases.",
      "Optimised prompts and API workflows, improving response relevance by ~30% while reducing token usage and latency through iterative evaluation.",
      "Developed prototype multi-agent pipelines to automate repetitive data extraction tasks, cutting manual processing time by over 50% for the analytics team.",
      "Integrated third-party LLM APIs with internal tooling, implementing retry logic, rate-limit handling, and structured output parsing for production reliability.",
      "Participated in weekly sprint reviews and contributed to technical documentation, accelerating onboarding for two subsequent intern cohorts.",
    ],
    tags: ["Python", "FastAPI", "Google ADK", "LLM", "Prompt Engineering"],
  },
  {
    company: "NVIDIA",
    role: "Research Trainee",
    location: "On-site",
    period: "Dec 2023 – Jun 2024",
    type: "Internship",
    bullets: [
      "Fine-tuned deep learning models for AI/GenAI use cases, achieving ~10–20% improvement over baseline performance through controlled experiments.",
      "Developed and evaluated training pipelines using Python and deep learning frameworks, contributing to reproducible research and PoCs.",
      "Conducted systematic ablation studies and hyperparameter sweeps to identify optimal model configurations, documenting findings for team-wide knowledge sharing.",
      "Collaborated with senior researchers to benchmark model outputs against state-of-the-art baselines, surfacing actionable insights for ongoing R&D initiatives.",
      "Maintained experiment tracking and versioning using MLflow, ensuring full reproducibility of training runs across different hardware environments.",
    ],
    tags: ["Fine Tuning", "Python", "Deep Learning", "MLflow", "AI/GenAI"],
  },
  {
    company: "Kavishala",
    role: "Full Stack Developer",
    location: "Gurugram, IN",
    period: "Feb 2024 – May 2024",
    type: "Internship",
    bullets: [
      "Migrated 15+ Flask APIs to FastAPI, achieving ~40% faster response times, better concurrency, and reduced error rates via async processing and Pydantic validation.",
      "Automated API documentation using Swagger, improving developer productivity and reducing integration time.",
      "Migrated 1M+ records from PostgreSQL to Google BigQuery, delivering 5–8x faster analytics queries and enabling scalable reporting.",
      "Designed and implemented RESTful endpoint versioning strategy, ensuring zero-downtime migrations and backward compatibility for existing consumers.",
      "Wrote integration tests for migrated APIs using pytest, achieving 85%+ coverage and catching edge-case regressions before production deployment.",
    ],
    tags: ["FastAPI", "PostgreSQL", "BigQuery", "Swagger", "Python", "pytest"],
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
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-xs font-mono text-muted-foreground border border-border/50 rounded px-2 py-0.5">{exp.type}</span>
                    </div>
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
                {exp.bullets.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                {exp.tags.length > 0 && (
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
