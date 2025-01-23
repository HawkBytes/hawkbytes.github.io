const index = () => {
  return (
    <div className="border-t border-b text-xs text-start py-6 border-black flex justify-between px-4">
      <div className="flex flex-col">
        <div className="text-gray-400 font-bold">Location</div>
        <div className="">GMT+3(20:55, KE)</div>
      </div>
      <div className="">
      <div className="text-gray-400 font-bold">
  Status 
  <span className="h-2 w-2 bg-green-500 rounded-full inline-block ml-2"></span>
</div>

        <div className="">
          AVAILABLE FOR WORK <br />
          WORKING WORLDWIDE
        </div>
      </div>
      <div className="">
        <div className="text-gray-400 font-bold">Instagram</div>
        <div className="">Socials DRIBBLE</div>
      </div>
      <div className="">uzitrake</div>
    </div>
  );
};

export default index;
