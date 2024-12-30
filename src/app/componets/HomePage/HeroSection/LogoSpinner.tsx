"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { GetLogo } from "@/app/utils/logo";
import useWindows from "@/app/hooks/useWindowSize";

export default function SpinningLogo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const isInteracting = useRef<boolean>(false);
  const windows = useWindows(100);
  const isMobile = windows.width < 768;

  useEffect(() => {
    GetLogo(canvasRef, sceneRef, rendererRef, isInteracting);
  }, []);

    useLayoutEffect(() => {
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.setSize(
          isMobile ? 250 : 400,
          isMobile ? 250 : 400
        );
      }
    }, [isMobile]);

  return (
    <main className="relative flex w-full flex-col items-center justify-start">
      <div className="absolute top-[-10px] left-0 w-full h-full pointer-events-none"></div>
      <div className={`
        ${isMobile ? "h-[40vh]" : "h-[30vh]"} 
        relative pb-4 md:mb-8 mb-4 flex-shrink-0 flex justify-end items-center 
        transition-all duration-300 ease-in-out
        ${isMobile ? "scale-[0.85] origin-center" : ""}
      `}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            transition: 'all 300ms ease-in-out',
            width: isMobile ? '250px' : '500px',
            height: isMobile ? '250px' : '500px'
          }}
        >
          <canvas ref={canvasRef} className="w-full h-full canvas-container" />
        </motion.div>
      </div>
    </main>
  );
}