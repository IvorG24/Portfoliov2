"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../../Module/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technology Stack</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <>
            <motion.li
              className="bg-white borderBlack rounded-xl flex items-center gap-x-2 px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div
                className="text-2xl"
                key={index}
                style={{ color: skill.logoColor }}
              >
                {skill.titleLogo}
              </div>
              {skill.title}
            </motion.li>
          </>
        ))}
      </ul>
    </section>
  );
}
