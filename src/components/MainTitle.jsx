// components/ui/MainTitle.jsx
export default function MainTitle({ title, subtitle, center = false }) {
  return (
    <div className={`mb-10 md:w-1/2 ${center ? "text-center mx-auto" : ""}`}>
      <h2
        className={`w-fit bg-[#a6225d1d] text-(--main-color) text-sm font-bold px-5 py-1 rounded-md mb-3 ${center ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      <p
        className={`text-slate-800 font-bold text-2xl md:text-3xl leading-snug ${center ? "max-w-2xl mx-auto" : ""}`}
      >
        {subtitle}
      </p>
    </div>
  );
}
