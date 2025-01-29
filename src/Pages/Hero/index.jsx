import Lottie from "../../components/Lottie";

const index = () => {
  return (
    <div className="h-[95vh] w-full text-6xl font-semibold  flex flex-col justify-around items-center gap-8 lg:text-9xl pt-8 font-['Grotesk Diamond']">
      <div className="flex gap-6 justify-between items-center">
        <div className="">CREATIVE</div>
        <div className="flex flex-col gap-6 text-sm lg:text-3xl lg:gap-12">
          <h1>FREELANCER</h1>
          <h1>DEVELOPER</h1>
          <h1> UX/UI DESIGNER</h1>
        </div>
      </div>
      <div className="flex gap-16">
        <span className="lg:mt-6"><Lottie/></span>
        <span className="lg:pb-">DEVELOPER</span>
        
        </div>
      <div className="text-sm font-normal flex gap-2 self-end w-1/2 lg:text-2xl lg:self-center">
        <svg
          height="50px"
          width="100px"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontWeight: "bold" }}
        >
          <path
            d="M15.7196 11.9163C13.8735 11.9163 12.3279 13.3863 12.3279 15.2342V22.5H11.641V15.2342C11.641 13.3863 10.0954 11.9163 8.20639 11.9163H0.822021V11.2443H8.20639C10.0954 11.2023 11.641 9.73237 11.5981 7.88442V0.660645H12.3279V7.88442C12.3279 9.73237 13.8735 11.2023 15.7196 11.2023H23.1469V11.9163H15.7196Z"
            fill="currentColor"
          />
        </svg>
        specializing in web development for brands worldwide Web dev innovation
        driven by strategy and precision
      </div>
      <div className="flex items-center gap-4">
        DESIGNER
        <div className="w-24 h-24 lg:w-52 lg:h-28 overflow-hidden rounded-full">
    <img
      className="w-full h-full object-cover"
      src="https://vickkie.github.io/img/works/0763.webp"
      alt="Designer"
    />
  </div>
      </div>
    </div>
  );
};

export default index;
