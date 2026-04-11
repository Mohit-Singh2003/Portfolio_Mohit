import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Building AI that{" "}
            <span className="gradient-text">actually works</span>{" "}
            in production.
          </h2>
        </motion.div>

        {/* Summary + highlight grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: prose summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm a production-focused GenAI backend engineer with hands-on experience
              architecting multi-agent LLM systems, RAG pipelines, and secure cloud-native
              APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              At <span className="text-foreground font-semibold">Egen</span>, I built an
              AI analytics platform that replaced Looker Studio dashboards with
              natural-language querying, shipping supervisor agent routing,
              domain-specific SQL agents, and a secure BigQuery execution layer on GCP.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Driven by one goal:{" "}
              <span className="text-foreground font-semibold">
                AI that actually works in production
              </span>
              .
            </p>
          </motion.div>

          {/* Right: JSON code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-border/50 bg-muted/20 overflow-hidden"
          >
            {/* Code block header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">expertise.json</span>
            </div>
            <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
{`{
  `}<span className="text-primary">"expertise"</span>{`: [`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Multi-Agent AI"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"Google ADK + Gemini"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Supervisor-routed hierarchies"</span>
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"RAG Pipelines"</span>{`,`}
{`
      `}<span className="text-primary">"stack"</span>{`: `}<span className="text-green-400">"Vespa + FastAPI"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Vector search at scale"</span>
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Cloud Native"</span>{`,`}
{`
      `}<span className="text-primary">"certs"</span>{`: [`}<span className="text-green-400">"ACE"</span>{`, `}<span className="text-green-400">"CDL"</span>{`, `}<span className="text-green-400">"ADP"</span>{`]`}
{`
    },`}
{`
    {`}
{`
      `}<span className="text-primary">"category"</span>{`: `}<span className="text-green-400">"Production Focus"</span>{`,`}
{`
      `}<span className="text-primary">"focus"</span>{`: `}<span className="text-green-400">"Guardrails, observability, security"</span>
{`
    }`}
{`
  ]`}
{`}`}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
