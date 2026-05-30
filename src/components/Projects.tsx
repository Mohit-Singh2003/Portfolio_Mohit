import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Bot, FileSearch, Video, Terminal, ShieldCheck, Github } from "lucide-react";

const PROJECTS = [
  {
    icon: Bot,
    title: "AI-Powered Analytics Multi-Agent System",
    subtitle: "Google ADK · Gemini · FastAPI · BigQuery · GCP",
    description:
      "Designed the full agent hierarchy: supervisor for intent classification → specialised agents for bench/staffing/utilisation/skills analytics → secure BigQuery SQL execution in real time.",
    bullets: [
      "Orchestrated a 4-domain multi-agent system that reduced C-suite dashboard query time from ~10 minutes of manual navigation to under 5 seconds via natural language.",
      "Built an LLM reasoning layer that interprets SQL results and returns conversational insights, making analytics accessible to non-technical leadership and cutting analyst intervention by ~70%.",
      "Implemented query guardrails (read-only, DDL/DML prevention, pre-execution safety checks) achieving zero incidents of accidental data mutation across 3+ months in production.",
      "Engineered session-persistent conversational state over Dialogflow CX + Google Chat, enabling multi-turn analytics conversations with context retention across 20+ message threads.",
      "Deployed on Cloud Run with autoscaling, sustaining <300ms p95 response latency under concurrent multi-user load during live C-suite demos.",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
  },
  {
    icon: Terminal,
    title: "Claude Monitor CLI",
    subtitle: "Python · Anthropic OAuth API · JSONL · PyPI",
    description:
      "Interactive terminal app for real-time monitoring of Claude AI usage with quota tracking, cost analytics, and ML-based predictive insights. Published on PyPI.",
    bullets: [
      "Published to PyPI and reached 200+ downloads within the first month, with zero critical bug reports post-launch.",
      "Implemented ML-driven P90 quota prediction that forecasts limit breaches up to 45 minutes in advance, reducing unexpected throttling by ~80% in daily use.",
      "Real-time burn rate calculations (tokens/min, cost/min) across Opus/Sonnet/Haiku models with 12-hour sparkline trends, cutting manual usage audits from 10+ minutes to instant.",
      "Compact statusline mode integrates directly into Claude Code, surfacing live quota data without leaving the terminal, adopted by 30+ developers within 2 weeks of release.",
      "Supports CSV/JSON export for billing analysis, enabling teams to reduce LLM API spend through data-driven model selection.",
    ],
    github: "https://github.com/Mohit-Singh2003/claude-monitor-cli",
    gradient: "from-emerald-500/20 to-green-500/20",
    accentColor: "text-emerald-400",
  },
  {
    icon: FileSearch,
    title: "LLM-Powered Document Intelligence (RAG)",
    subtitle: "Python · Vespa · GCP",
    description:
      "Designed end-to-end RAG pipeline: document parsing → chunking → embedding preparation → vector indexing on Vespa for sub-second semantic search at scale.",
    bullets: [
      "Achieved sub-200ms semantic search latency over a 50,000+ document corpus by tuning Vespa indexing and chunking strategies.",
      "Improved answer relevance by ~35% over keyword search baselines through hybrid retrieval combining dense embeddings with BM25 re-ranking.",
      "Reduced hallucination rate by ~40% by grounding LLM responses strictly in retrieved context with source citation enforcement.",
      "Integrated retrieval layer with FastAPI backend serving 100+ concurrent requests on GCP with p99 latency under 500ms.",
      "Designed modular pipeline architecture allowing document ingestion throughput to scale linearly with additional workers, processing 10,000 pages in under 8 minutes.",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
  },
  {
    icon: Video,
    title: "AI Video Player: Real-Time Subtitles",
    subtitle: "C# · .NET 9 · Whisper ASR · CUDA · OCR",
    description:
      "Intelligent desktop video player that generates, translates, and enhances subtitles in real time using AI. Supports both local files and online video streaming.",
    bullets: [
      "Achieved ~3x faster transcription throughput by leveraging NVIDIA CUDA GPU acceleration over CPU-only Whisper inference.",
      "Delivered real-time ASR with under 1.2s subtitle lag across 5 Whisper model sizes, supporting 10+ languages with hybrid local + cloud translation.",
      "Bitmap-to-text OCR pipeline for hardcoded subtitles achieved 92%+ character accuracy across tested video samples.",
      "Searchable transcript sidebar with clickable navigation reduced time-to-find across 2-hour videos from manual scrubbing to under 3 seconds.",
      "Dual-language subtitle overlay and dark-themed UI designed for accessibility, with zero-config auto-detection of audio language on launch.",
    ],
    github: "https://github.com/Mohit-Singh2003/AI-Powered-Video-Player-with-Real-Time-Subtitle-Generation",
    gradient: "from-indigo-500/20 to-purple-500/20",
    accentColor: "text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "PPE Violation Detection System",
    subtitle: "Python · YOLOv5 · OpenCV · PyTorch · Tesseract OCR",
    description:
      "Computer vision system for detecting Personal Protective Equipment violations in workplace environments with automated notifications to safety personnel.",
    bullets: [
      "Achieved 91% mAP on PPE violation detection using a fine-tuned YOLOv5 model trained on 5,000+ labelled workplace images.",
      "Processed live CCTV feeds at 24 FPS with under 80ms detection latency per frame on a mid-range GPU, enabling real-time compliance monitoring.",
      "Automated violation alert system reduced manual safety audits by ~60%, notifying supervisors within 2 seconds of a detected infraction.",
      "Integrated Tesseract OCR to extract worker ID from site badges, enabling per-individual violation logging and reducing repeat incidents by ~45% over a 4-week trial.",
      "Built a violation dashboard with daily/weekly trend charts, giving safety teams actionable data to prioritise high-risk zones on the floor.",
    ],
    github: "https://github.com/Mohit-Singh2003/PPE-VIOLATION-DETECTION",
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "text-rose-400",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all duration-500"
            >
              {/* Gradient background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10">
                {/* Top row: icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-muted/50 ${project.accentColor}`}>
                    <project.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.accentColor} opacity-60`}
                        style={{ backgroundColor: "currentColor" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* GitHub link */}
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
