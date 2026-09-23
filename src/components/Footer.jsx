export default function Footer({ darkMode }) {
  return (
    <footer
      className={`relative z-10 border-t px-6 py-8 text-center text-sm ${
        darkMode
          ? "border-white/10 text-slate-500"
          : "border-slate-200 text-slate-600"
      }`}
    >
      <p>
        © {new Date().getFullYear()} Mohamed Ech-Chara. MadeAll rights reserved.
      </p>
    </footer>
  );
}
