import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, BookOpen, Calendar } from "lucide-react";

const ARTICLES = [
  {
    title: "Say Goodbye to Ads: Set Up an Ad-Free Home with Raspberry Pi",
    description:
      "Step-by-step guide to setting up Pi-hole on a Raspberry Pi for network-wide ad blocking. Covers installation, router DNS configuration, and the admin dashboard for real-time monitoring.",
    date: "Oct 5, 2024",
    readTime: "3 min read",
    url: "https://medium.com/@mohitucsss/say-goodbye-to-ads-set-up-an-ad-free-home-with-raspberry-pi-e4a4a15c047a",
    tags: ["Raspberry Pi", "Pi-hole", "Networking"],
  },
  {
    title: "Make Your TV Smart with Raspberry Pi 3B+ or Higher",
    description:
      "Turn a Raspberry Pi into a full smart TV with Kodi, IPTV streaming, Chromium browser, RetroPie gaming, and Plex media server. A complete home entertainment setup guide.",
    date: "Oct 5, 2024",
    readTime: "3 min read",
    url: "https://medium.com/@mohitucsss/make-your-tv-smart-with-raspberry-pi-3b-or-higher-a-step-by-step-guide-b17a846fd6d0",
    tags: ["Raspberry Pi", "Kodi", "DIY"],
  },
];

export default function Articles() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Articles
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Things I've <span className="gradient-text">written</span>
          </h2>
        </motion.div>

        {/* Article cards */}
        <div className="grid gap-6">
          {ARTICLES.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/30 hover:bg-muted/20 transition-all"
            >
              {/* Icon */}
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 self-start group-hover:bg-primary/20 transition-colors">
                <BookOpen size={24} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.description}
                </p>

                {/* Tags + read more */}
                <div className="flex flex-wrap items-center gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Read on Medium
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
