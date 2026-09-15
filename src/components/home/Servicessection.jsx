"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { servicesData } from "@/config/servicesData";
import ServiceCard from "./ServiceCard";

function Card({ card, index, total, progress, activeCard }) {
  const start = index / total;
  const end = (index + 1) / total;
  const slot = end - start;

  const buffer = slot * 0.5;

  const enterStart = Math.max(0, start - buffer);
  const enterEnd = Math.min(1, start + buffer);

  const blurClearPoint = enterStart + (enterEnd - enterStart) * 0.5;

  // Position
  const y = useTransform(
    progress,
    [enterStart, enterEnd],
    [index === 0 ? "0%" : "100%", "0%"]
  );

  // Scale
  const scale = useTransform(
    progress,
    [enterStart, enterEnd],
    [index === 0 ? 1 : 1.15, 1]
  );

  // Blur
  const blur = useTransform(
    progress,
    [enterStart, blurClearPoint],
    [index === 0 ? "blur(0px)" : "blur(10px)", "blur(0px)"]
  );

  // Opacity
  const opacity = useTransform(
    progress,
    [Math.max(0, enterStart - 0.001), enterStart],
    [index === 0 ? 1 : 0, 1]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{
        y,
        scale,
        filter: blur,
        opacity,
        zIndex: index + 1,
        willChange: "transform, filter, opacity",
      }}
    >
      {/* LEFT SIDE LARGE COUNTING */}
      <div className="absolute -left-2 top-0 z-20 hidden -translate-x-full lg:block">
        <motion.span
          animate={{
            opacity: activeCard === index ? 1 : 0,
            x: activeCard === index ? 0 : -15,
            scale: activeCard === index ? 1 : 0.9,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block text-7xl font-extrabold leading-none tracking-tighter text-primary xl:text-8xl"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      <ServiceCard service={card} index={index} />
    </motion.div>
  );
}

function Servicessection() {
  const cards = servicesData.items;

  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [pinStyle, setPinStyle] = useState({});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll progress
  const progress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.6,
    restDelta: 0.0005,
  });

  useMotionValueEvent(progress, "change", (value) => {
    if (!cards.length) return;

    const index = Math.min(
      Math.floor(value * cards.length),
      cards.length - 1
    );

    setActiveCard(index);
  });

  useEffect(() => {
    if (!cards.length) return;

    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= vh) {
        setPinStyle({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: `${vh}px`,
        });
      } else if (rect.bottom < vh) {
        setPinStyle({
          position: "absolute",
          top: "auto",
          bottom: 0,
          left: 0,
          right: 0,
          height: `${vh}px`,
        });
      } else {
        setPinStyle({
          position: "absolute",
          top: 0,
          bottom: "auto",
          left: 0,
          right: 0,
          height: `${vh}px`,
        });
      }
    }

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });

        ticking = true;
      }
    }

    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.visualViewport?.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
      window.visualViewport?.removeEventListener("resize", handleScroll);
    };
  }, [cards.length]);

  if (!cards.length) return null;

  const sectionHeight = `${cards.length * 100}vh`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-100"
      style={{ height: sectionHeight }}
    >
      <div
        style={pinStyle}
        className="flex items-center justify-center overflow-hidden px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl">
          <div className="relative h-[480px] sm:h-[500px] lg:h-[520px]">
            {cards.map((card, index) => (
              <Card
                key={`${card.id}-${index}`}
                card={card}
                index={index}
                total={cards.length}
                progress={progress}
                activeCard={activeCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicessection;