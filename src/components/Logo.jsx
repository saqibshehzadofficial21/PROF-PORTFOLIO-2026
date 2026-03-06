import { motion } from "framer-motion";

export default function ProfDevpLogo({ size = 200, className = "" }) {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
 return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes rotate3d {
          0%   { transform: rotateY(0deg);  }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5)); }
          50%      { filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.85)); }
        }
        
        .logo-container {
          animation: rotate3d 10s linear infinite;
          transform-style: preserve-3d;
        }
        
        .glow-effect {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <motion.div
        className="logo-container h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"  // ← responsive size to match navbar height
        whileHover={{ rotate: 360, transition: { duration: 0.8, ease: "easeOut" } }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="glow-effect w-full h-full"
        >
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#0a0f1a" : "#e5e7eb"} />
              <stop offset="50%" stopColor={isDark ? "#111827" : "#d1d5db"} />
              <stop offset="100%" stopColor={isDark ? "#0a0f1a" : "#e5e7eb"} />
            </linearGradient>

            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFF5CC" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>

          {/* Outer subtle glow ring */}
          <circle
            cx="150"
            cy="150"
            r="145"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            opacity="0.25"
            className="dark:opacity-40"
          />

          {/* Main background circle */}
          <circle
            cx="150"
            cy="150"
            r="130"
            fill="url(#circleGradient)"
            className="dark:brightness-90"
          />

          {/* Golden border */}
          <circle
            cx="150"
            cy="150"
            r="130"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            className="dark:stroke-yellow-400"
          />

          {/* Inner thin accent ring */}
          <circle
            cx="150"
            cy="150"
            r="115"
            fill="none"
            stroke="#FFD700"
            strokeWidth="1.5"
            opacity="0.5"
            className="dark:opacity-70 dark:stroke-yellow-300"
          />

          {/* Code bracket left */}
          <path
            d="M 80 130 L 70 150 L 80 170"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-600 dark:text-yellow-400"
          />

          {/* Code bracket right */}
          <path
            d="M 220 130 L 230 150 L 220 170"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-600 dark:text-yellow-400"
          />

          {/* Main text - PROF */}
          <text
            x="150"
            y="168"
            textAnchor="middle"
            fill="url(#goldGradient)"
            fontSize="62"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="10"
            className="dark:fill-yellow-300"
          >
            PROF
          </text>

          {/* Underline accent */}
          <line
            x1="85"
            y1="182"
            x2="215"
            y2="182"
            stroke="currentColor"
            strokeWidth="3"
            opacity="0.7"
            className="text-yellow-600 dark:text-yellow-400"
          />

          {/* Decorative tech dots */}
          <circle cx="150" cy="75"  r="3" fill="currentColor" className="text-yellow-500 dark:text-yellow-300" />
          <circle cx="150" cy="225" r="3" fill="currentColor" className="text-yellow-500 dark:text-yellow-300" />
          <circle cx="90"  cy="95"  r="2" fill="currentColor" className="text-yellow-600 dark:text-yellow-400 opacity-80" />
          <circle cx="210" cy="95"  r="2" fill="currentColor" className="text-yellow-600 dark:text-yellow-400 opacity-80" />
          <circle cx="90"  cy="205" r="2" fill="currentColor" className="text-yellow-600 dark:text-yellow-400 opacity-80" />
          <circle cx="210" cy="205" r="2" fill="currentColor" className="text-yellow-600 dark:text-yellow-400 opacity-80" />
        </svg>
      </motion.div>
    </div>
  );
}