import Image from "next/image";

export default function Consultation() {
  return (
    <section className="py-16 relative overflow-hidden bg-amber-50" id="consultation">
      <div className="container mx-auto px-5 md:px-0">
        <div className="mx-auto md:w-1/2 text-center mb-10">
          <h1 className="w-fit mx-auto bg-pink-100 text-pink-600 text-sm font-bold px-5 py-1 rounded-md mb-3">استشر فريقنا</h1>
          <p className="text-slate-800 font-bold md:text-3xl leading-relaxed">نحن هنا لدعمك! ارسل استشارتك وسيتواصل معك فريقنا المتخصص</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block font-bold text-slate-700 mb-2">الاسم الكامل</label>
              <input type="text" placeholder="اكتب اسمك" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-pink-600 focus:ring-1 focus:outline-none" required />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
              <input type="email" placeholder="example@mail.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-pink-600 focus:ring-1 focus:outline-none" required />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-2">الاستشارة</label>
              <textarea rows={5} placeholder="اكتب استشارتك هنا..." className="w-full resize-none border border-gray-300 rounded-lg px-4 py-2 focus:ring-pink-600 focus:ring-1 focus:outline-none" required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-pink-700 transition flex items-center justify-center gap-2 mx-auto">
                <i className="bx bx-send text-lg"></i>
                <span>إرسال الاستشارة</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute -left-30 -bottom-20 w-80 z-10">
        <Image src="/images/bg-logo-removebg-preview.png" alt="icon" width={300} height={300} className="max-w-full" />
      </div>
    </section>
  );
}
