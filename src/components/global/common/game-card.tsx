'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
    title: string;
    content: string;
    img: string;
    url: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, content, img, url }) => {
  return (
    <Link href={url}>
      <div className="max-w-3xl content-container mx-4 mx-auto mt-5">
        <motion.div
          className="rounded-[15px] pb-5 relative border border-uiblack dark:border-white/50 overflow-hidden min-h-auto lg:col-span-1 col-span-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}>
          <div className="rounded-[15px] relative overflow-hidden flex flex-col justify-between items-center">
            <Image src={img} alt={title} width={300} height={300} />
            <div className="gap-y-2 flex flex-col items-center text-center relative z-10 px-4 py-5">
              <div className="text-[18px] lg:text-[28px] font-semibold">
                {title}
              </div>
              <p>{content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default GameCard;
