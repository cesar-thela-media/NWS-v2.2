"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const Feature = () => {
  return (
    <section className="bg-muted">
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-16 flex flex-col gap-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Built for Fort Bend homeowners
            </h2>
            <p className="text-base sm:text-lg font-normal text-muted-foreground max-w-xl">
              From a single room to a full custom home—scoped, designed, and
              built with clear communication every step.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/whole-home-remodeling-richmond-tx.jpg"
                alt="Whole home remodeling in Richmond, TX"
                width={564}
                height={560}
                className="rounded-xl w-full h-full object-cover aspect-video min-h-[280px]"
              />
            </motion.div>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-card rounded-xl border border-border p-6 sm:p-8 flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <p className="text-4xl sm:text-5xl font-bold text-foreground">
                    2007
                  </p>
                </div>
                <p className="text-base font-normal text-muted-foreground">
                  Serving Richmond, TX and nearby Fort Bend communities with
                  custom builds and full-service remodeling.
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row items-center gap-6 h-full">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="bg-card rounded-xl border border-border p-6 sm:p-8 flex flex-col self-stretch justify-between gap-8 w-full"
                >
                  <p className="text-4xl sm:text-5xl font-bold text-foreground">
                    Full
                  </p>
                  <p className="text-sm font-normal text-muted-foreground">
                    Service from kitchens and baths to additions and custom
                    homes—one accountable team.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="p-6 sm:p-8 bg-[var(--color-dark)] rounded-xl border border-border flex flex-col self-stretch justify-between gap-8 w-full"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-medium text-white">
                      Ready for a clear next step?
                    </p>
                    <p className="text-base font-normal text-white/50">
                      Free consult · 5% off when you mention the website.
                    </p>
                  </div>
                  <Button
                    className="w-fit group bg-primary hover:bg-[var(--color-primary-hover)] h-auto px-5 py-2.5 flex items-center gap-2 rounded-[4px] text-white cursor-pointer"
                    render={<a href="tel:2812992309" />}
                  >
                    <span>Book a consult</span>
                    <ArrowUpRight className="group-hover:rotate-45 ease-in-out transition-all duration-300" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
