'use client';

import { motion } from 'framer-motion';

export function BuildingIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#064E3B" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5C07B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E5C07B" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main Building */}
      <motion.rect
        x="120"
        y="80"
        width="80"
        height="180"
        rx="4"
        fill="url(#buildingGrad)"
        stroke="#0F766E"
        strokeWidth="1"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Tall Building */}
      <motion.rect
        x="210"
        y="40"
        width="70"
        height="220"
        rx="4"
        fill="url(#buildingGrad)"
        stroke="#0F766E"
        strokeWidth="1"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Small Building */}
      <motion.rect
        x="60"
        y="160"
        width="50"
        height="100"
        rx="4"
        fill="url(#buildingGrad)"
        stroke="#0F766E"
        strokeWidth="1"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Windows */}
      {[
        // Main building windows
        { x: 130, y: 95, delay: 0.8 },
        { x: 155, y: 95, delay: 0.85 },
        { x: 175, y: 95, delay: 0.9 },
        { x: 130, y: 125, delay: 0.95 },
        { x: 155, y: 125, delay: 1.0 },
        { x: 175, y: 125, delay: 1.05 },
        { x: 130, y: 155, delay: 1.1 },
        { x: 155, y: 155, delay: 1.15 },
        { x: 175, y: 155, delay: 1.2 },
        { x: 130, y: 185, delay: 1.25 },
        { x: 155, y: 185, delay: 1.3 },
        { x: 175, y: 185, delay: 1.35 },
        // Tall building windows
        { x: 220, y: 55, delay: 1.4 },
        { x: 245, y: 55, delay: 1.45 },
        { x: 220, y: 85, delay: 1.5 },
        { x: 245, y: 85, delay: 1.55 },
        { x: 220, y: 115, delay: 1.6 },
        { x: 245, y: 115, delay: 1.65 },
        { x: 220, y: 145, delay: 1.7 },
        { x: 245, y: 145, delay: 1.75 },
        { x: 220, y: 175, delay: 1.8 },
        { x: 245, y: 175, delay: 1.85 },
        { x: 220, y: 205, delay: 1.9 },
        { x: 245, y: 205, delay: 1.95 },
      ].map((window, i) => (
        <motion.rect
          key={i}
          x={window.x}
          y={window.y}
          width="15"
          height="20"
          rx="2"
          fill="url(#windowGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ 
            duration: 2,
            delay: window.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
        />
      ))}

      {/* Small building windows */}
      {[
        { x: 68, y: 175, delay: 2.0 },
        { x: 88, y: 175, delay: 2.1 },
        { x: 68, y: 205, delay: 2.2 },
        { x: 88, y: 205, delay: 2.3 },
      ].map((window, i) => (
        <motion.rect
          key={`small-${i}`}
          x={window.x}
          y={window.y}
          width="12"
          height="18"
          rx="2"
          fill="url(#windowGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ 
            duration: 2,
            delay: window.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
        />
      ))}

      {/* Ground */}
      <motion.line
        x1="40"
        y1="260"
        x2="300"
        y2="260"
        stroke="#0F766E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Moon/Sun */}
      <motion.circle
        cx="320"
        cy="60"
        r="25"
        fill="#E5C07B"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </motion.svg>
  );
}

export function HouseIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 160"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <defs>
        <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#064E3B" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5C07B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E5C07B" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* House body */}
      <motion.rect
        x="40"
        y="70"
        width="120"
        height="80"
        rx="4"
        fill="url(#houseGrad)"
        stroke="#0F766E"
        strokeWidth="1.5"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Roof */}
      <motion.polygon
        points="100,20 30,70 170,70"
        fill="url(#roofGrad)"
        stroke="#E5C07B"
        strokeWidth="1.5"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Door */}
      <motion.rect
        x="85"
        y="100"
        width="30"
        height="50"
        rx="2"
        fill="#064E3B"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />

      {/* Windows */}
      <motion.rect
        x="50"
        y="85"
        width="25"
        height="25"
        rx="2"
        fill="#E5C07B"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      <motion.rect
        x="125"
        y="85"
        width="25"
        height="25"
        rx="2"
        fill="#E5C07B"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      />

      {/* Door handle */}
      <motion.circle
        cx="108"
        cy="125"
        r="3"
        fill="#E5C07B"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 1.1 }}
      />
    </motion.svg>
  );
}

export function KeyIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, rotate: -45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      <defs>
        <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5C07B" />
          <stop offset="100%" stopColor="#D4A84A" />
        </linearGradient>
      </defs>

      {/* Key head */}
      <motion.circle
        cx="30"
        cy="30"
        r="18"
        fill="none"
        stroke="url(#keyGrad)"
        strokeWidth="6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Key body */}
      <motion.line
        x1="42"
        y1="42"
        x2="85"
        y2="85"
        stroke="url(#keyGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      {/* Key teeth */}
      <motion.line
        x1="65"
        y1="65"
        x2="75"
        y2="55"
        stroke="url(#keyGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
      <motion.line
        x1="75"
        y1="75"
        x2="85"
        y2="65"
        stroke="url(#keyGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
    </motion.svg>
  );
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-mercury-emerald/10"
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border border-mercury-gold/10"
        style={{ top: '60%', right: '10%' }}
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-mercury-emerald/5"
        style={{ top: '30%', right: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating lines */}
      <motion.div
        className="absolute w-px h-40 bg-gradient-to-b from-transparent via-mercury-emerald/20 to-transparent"
        style={{ top: '20%', left: '15%' }}
        animate={{
          y: [0, 100, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-px h-60 bg-gradient-to-b from-transparent via-mercury-gold/20 to-transparent"
        style={{ top: '40%', right: '25%' }}
        animate={{
          y: [0, -80, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-mercury-gold/30"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}

export function NairobiSkyline({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 800 200"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2 }}
    >
      <defs>
        <linearGradient id="skylineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      
      {/* Simplified Nairobi skyline silhouette */}
      <path
        d="M0,200 L0,150 L30,150 L30,120 L50,120 L50,100 L70,100 L70,80 L90,80 L90,100 L110,100 L110,60 L130,60 L130,40 L150,40 L150,60 L170,60 L170,80 L190,80 L190,50 L210,50 L210,30 L230,30 L230,50 L250,50 L250,70 L270,70 L270,90 L290,90 L290,60 L310,60 L310,40 L330,40 L330,20 L350,20 L350,40 L370,40 L370,60 L390,60 L390,80 L410,80 L410,100 L430,100 L430,70 L450,70 L450,50 L470,50 L470,30 L490,30 L490,50 L510,50 L510,70 L530,70 L530,90 L550,90 L550,60 L570,60 L570,80 L590,80 L590,100 L610,100 L610,120 L630,120 L630,90 L650,90 L650,110 L670,110 L670,130 L690,130 L690,150 L710,150 L710,120 L730,120 L730,140 L750,140 L750,160 L770,160 L770,180 L800,180 L800,200 Z"
        fill="url(#skylineGrad)"
      />
    </motion.svg>
  );
}
