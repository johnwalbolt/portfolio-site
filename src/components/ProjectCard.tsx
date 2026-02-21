"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string;
  href: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  skills,
  href,
  image,
  imageAlt,
  reverse = false,
}: ProjectCardProps) {
  return (
    <FadeIn>
      <Link href={href} className="group block">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
            reverse ? "md:direction-rtl" : ""
          }`}
        >
          <div className={`${reverse ? "md:order-2" : ""}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg bg-gray-50"
            >
              <Image
                src={image}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <div className={`${reverse ? "md:order-1" : ""}`}>
            <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <p className="text-sm text-gray-400 mb-4">{skills}</p>
            <span className="text-sm font-medium text-black group-hover:underline">
              View More →
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
