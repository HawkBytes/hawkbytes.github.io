
import Toggle from "../Toggle";
import Hamburger from "../Hamburger";

const index = () => {
  return (
    <div className=" text-teal h-[5vh]  mx-4 border-b-2  border-black font-bold font-popins flex justify-between items-center  text-sm">
      <div className="logo tracking-tight -mb-2">HAWKBYTES</div>

        <div className="hamburger ">
        <Hamburger/>
        </div>

        <div className="toggle px-2"><Toggle/></div>
    </div>
  )
}

export default index
