import Image from "next/image";

function IntroduceMe() {
  return (
    <div className=" bg-cyan-100 text-white py-10 md:flex md:py-20">
      <div className="max-w-screen-xl mx-auto md:w-1/2 ">
        <p className=" text-lg md:text-xl px-6 pt-6 pb-3 text-black tracking-wider">
          My Background
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 p-6 text-black tracking-tight">
          1 year of Experience in React JS development with a strong portfolio
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto ">
        <p className=" text-lg md:text-xl px-6 py-4 text-black tracking-wider">
          Experiences
        </p>
        <div className="pt-6 pb-3">
          <h2 className="text-xl  font-bold mb-2 px-6 text-black">
            PT. LSP Gatensi Karya Konstruksi
          </h2>
          <p className=" text-sm px-6 mb-2 text-black ">as Front-End Web Dev</p>
          <p className=" text-xs px-6 text-gray-800">Jan 2023 - Present</p>
        </div>
        <div className="pt-6 pb-3">
          <h2 className="text-xl  font-bold mb-2 px-6 text-black">
            PT. Equnix Business Solution
          </h2>
          <p className=" text-sm px-6 mb-2 text-black ">
            as Software Dev Intern
          </p>
          <p className=" text-xs px-6 text-gray-800">Apr 2021 - Jul 2021</p>
        </div>
        <div className="pt-6 pb-4">
          <h2 className="text-xl  font-bold mb-1 px-6 text-black">
            Lab Universitas Gunadarma
          </h2>
          <p className=" text-sm px-6 mb-2 text-black ">as Lab Asisstant</p>
          <p className=" text-xs px-6  text-gray-800">Mar 2021 - Sept 2022</p>
        </div>
      </div>
    </div>
  );
}

export default IntroduceMe;
