// components/home/ServiceCard.jsx
export default function ServiceCard({ title, icon, desc, id }) {
  return (
    <div className="relative p-7 bg-(--second-color) rounded-md duration-500 border border-slate-100 group hover:bg-(--main-color)">
      <div
        className="text-xl p-3 bg-(--main-color) text-white rounded-full
       duration-500 group-hover:text-(--main-color) group-hover:bg-white! w-fit"
      >
        {icon}
      </div>
      <h3 className="text-slate-800 text-xl font-semibold py-5 duration-500 group-hover:text-white!">
        {title}
      </h3>

      <p className="text-slate-600 mb-16 text-[15px] group-hover:text-white duration-500 leading-relaxed">
        {desc}
      </p>

      {/* رقم الخدمة في الأسفل */}
      <div className="w-full absolute bottom-7 inset-e-7 flex justify-end items-center mt-3 gap-2">
        <div className="h-px w-1/4 bg-(--main-color) duration-500 group-hover:bg-white"></div>
        <span className="text-lg text-(--main-color) duration-500 group-hover:text-white font-bold">
          {id}
        </span>
      </div>
    </div>
  );
}
