import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "ti-book",
      title: "محتوى تعليمي",
      desc: "مشاركة محتوى مكتوب ومرئي باستمرار عبر منصاتنا",
      num: "١",
    },
    {
      icon: "ti-speakerphone",
      title: "احاديث رزان",
      desc: "بودكاست يهدف إلى تمكين الشباب والطلاب",
      num: "٢",
    },
    {
      icon: "ti-school",
      title: "دورات تدريبية",
      desc: "نقدم دورات تدريبية دورية افتراضية",
      num: "٣",
    },
    {
      icon: "ti-user-dollar",
      title: "مستشارك المهني",
      desc: "جلسات استشارة مهنية افتراضية",
      num: "٤",
    },
    {
      icon: "ti-device-laptop",
      title: "فرص تدريب وتطوع",
      desc: "بالتعاون مع منظمات غير حكومية",
      num: "٥",
    },
    {
      icon: "ti-writing",
      title: "التقديم للمنح",
      desc: "مساعدة في المنح الدراسية والسيرة الذاتية",
      num: "٦",
    },
  ];

  return (
    <section
      className="py-16 bg-amber-50 relative overflow-hidden"
      id="services"
    >
      <div className="absolute -right-30 -top-20 w-80 z-10">
        <Image
          src="/images/bg-logo-removebg-preview.png"
          alt="icon"
          width={300}
          height={300}
          className="max-w-full"
        />
      </div>
      <div className="container mx-auto px-5 md:px-0 mt-10 md:mt-0">
        <div className="mx-auto md:w-1/2 text-center">
          <h1 className="w-fit mx-auto bg-pink-100 text-pink-600 text-sm font-bold px-5 py-1 rounded-md mb-3">
            أفضل خدماتنا
          </h1>
          <p className="text-slate-800 font-bold md:text-3xl">
            نحرص على تقديم تحليلات عميقة ونصائح استراتيجية تساعدك على الاستعداد
            لمستقبل مسارك المهني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative p-7 bg-white rounded-md duration-500 group hover:bg-pink-600 cursor-pointer"
            >
              <i
                className={`ti ${service.icon} text-xl p-3 bg-pink-600 text-white rounded-full duration-500 group-hover:text-pink-600 group-hover:bg-white`}
              ></i>
              <h1 className="text-slate-800 text-xl font-semibold py-5 duration-500 group-hover:text-white">
                {service.title}
              </h1>
              <p className="text-slate-600 mb-16 text-sm group-hover:text-white duration-500">
                {service.desc}
              </p>
              <div className="w-full absolute bottom-7 end-7 flex justify-end items-center mt-3 gap-2">
                <div className="h-1 w-1/4 bg-pink-600 duration-500 group-hover:bg-white"></div>
                <span className="text-lg text-pink-600 duration-500 group-hover:text-white">
                  {service.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
