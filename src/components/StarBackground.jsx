import { useEffect, useState } from "react";

export default function StarBackground({ darkMode }) {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const makeSky = () => {
      const count = Math.max(60, Math.floor((window.innerWidth * window.innerHeight) / 12000));
      setStars(
        Array.from({ length: count }, (_, id) => ({
          id,
          size: Math.random() * 2.4 + 1,
          left: Math.random() * 100,
          top: Math.random() * 100,
          opacity: Math.random() * 0.65 + 0.25,
          duration: Math.random() * 4 + 2,
        }))
      );

      setMeteors(
        Array.from({ length: 6 }, (_, id) => ({
          id,
          left: Math.random() * 100,
          top: Math.random() * 35,
          delay: Math.random() * 12,
          duration: Math.random() * 4 + 4,
          width: Math.random() * 80 + 70,
        }))
      );
    };

    makeSky();
    window.addEventListener("resize", makeSky);
    return () => window.removeEventListener("resize", makeSky);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500 ${
        darkMode
          ? "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_34%),linear-gradient(180deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]"
          : "bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.16),_transparent_36%),linear-gradient(180deg,_#f8fafc_0%,_#e0f2fe_44%,_#f8fafc_100%)]"
      }`}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full animate-star-pulse ${
            darkMode
              ? "bg-white shadow-[0_0_12px_rgba(125,211,252,0.9)]"
              : "bg-cyan-500/70 shadow-[0_0_10px_rgba(14,116,144,0.35)]"
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={`absolute h-px rotate-[-32deg] rounded-full opacity-70 animate-meteor ${
            darkMode
              ? "bg-gradient-to-r from-white via-cyan-200 to-transparent"
              : "bg-gradient-to-r from-cyan-700 via-cyan-300 to-transparent"
          }`}
          style={{
            width: `${meteor.width}px`,
            left: `${meteor.left}%`,
            top: `${meteor.top}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
