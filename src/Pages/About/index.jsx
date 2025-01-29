
import AboutImg from "../../assets/model.webp";

const index = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row px-5">
      <div className="flex justify-start items-start flex-col ">
        <div className="text-5xl text-black pt-7 flex gap-4">
          <div className="flex justify-start items-center gap-5">
            <h4>
              <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">*</span>
              (design) FORLIO
            </h4>
            <div className="border-b border-8 border-gray-500 w-96 mt-3 hidden lg:block"></div>
          </div>
          <h1 className="text-5xl md:ml-4">2025</h1>
        </div>
        <div className="flex justify-center items-start gap-8 flex-col ">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl w-2/4 pt-28 ">
            Hey there! I{"'"}m Uzitrake. A
            <span className="text-pink-700">Fullstack Developer</span> Based in
            Kenya(KE)
          </div>
          <div>
            Current works : HYPERCRITICAL STUDIO <br />
            Available for freelance
            <br /> Software engineer
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={AboutImg} alt="About Img" className="pt-10 w-full" />
      </div>
    </div>
  );
};

export default index;
