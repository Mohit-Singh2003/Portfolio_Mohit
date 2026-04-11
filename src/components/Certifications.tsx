import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import aceImg from "@/certs-img/AssociateCloudEngineer.jpg";
import cdlImg from "@/certs-img/CloudDigitalLeader.jpg";
import adpImg from "@/certs-img/AssociateDataPractitioner.jpeg";

const CERTS = [
  {
    title: "Associate Cloud Engineer (ACE)",
    org: "Google Cloud",
    image: aceImg,
    url: "https://www.credly.com/badges/3aa2c067-9b95-4517-aa95-35d0dcdd0d76/public_url",
  },
  {
    title: "Cloud Digital Leader",
    org: "Google Cloud",
    image: cdlImg,
    url: "https://www.credly.com/badges/7949fe4b-5eb3-482c-b39e-46dca12173c6",
  },
  {
    title: "Associate Data Practitioner",
    org: "Google Cloud",
    image: adpImg,
    url: "https://www.credly.com/badges/fd0fd065-0ed0-4c47-bdc6-554c2ead04ec/public_url",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">
            Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Cloud <span className="gradient-text">certified</span>
          </h2>
        </motion.div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-muted/10 hover:border-primary/20 transition-all text-center block"
            >
              {/* Certificate image */}
              <div className="mx-auto mb-6 w-full rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-colors bg-white/5">
                <img src={cert.image} alt={cert.title} className="w-full h-auto object-cover" />
              </div>

              {/* Cert name */}
              <h3 className="font-bold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* Org */}
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <Award size={14} className="text-primary" />
                {cert.org}
              </div>

              {/* Verify link indicator */}
              <div className="flex items-center justify-center gap-1 mt-4 text-xs text-primary">
                <ExternalLink size={12} />
                Verify
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
