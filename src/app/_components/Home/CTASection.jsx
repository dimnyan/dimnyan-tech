import Image from "next/image";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="relative bg-dot-white/[0.2] bg-slate-800">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-full py-32 px-5 bg-slate-800 text-white md:px-10 lg:px-24 xl:px-20 2xl:px-40 ">
        <div className="px-10 relative rounded-2xl border border-blue-400/50 bg-blue-500/10 py-10 md:py-20 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 xl:gap-20 2xl:gap-32 overflow-hidden">
          <div className="z-10">
            <h1 className="text-5xl font-bold py-3">
              Enhance Your Business Presence
            </h1>
          </div>
          <div className="relative z-20 my-auto">
            <p className="py-1">Contact Me Today for a Free Consultation</p>
            <div className="flex gap-5 my-7">
              <button className="px-3 py-2 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700">
                <Link href="mailto:dimasnyoman1@gmail.com">Try Now</Link>
              </button>
            </div>
          </div>
          <div className="absolute inset-0 min-h-[60vh] flex justify-center items-center overflow-hidden">
            <Image
              src={"/assets/shapedimnyan.png"}
              alt="shape"
              height={500}
              width={800}
              className="m-auto md:mt-32 scale-150 md:scale-125 pt-24 md:pt-0 md:pb-64 filter blur-3xl opacity-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
