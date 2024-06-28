const Tabs = () => {
  return (
    <div className="flex items-center h-12 shadow-navbar shadow-[#D9D9D9]">
      <div className="flex justify-between items-center w-505 gap-16  ml-[4.5rem]">
        <div className=" flex flex-col justify-between items-center shadow-none">
          <p className="text-[#DC4A2D] font-bold">Job preview</p>
          <div className=" h-[2px] w-14  bg-[#DC4A2D] absolute top-[142px]"></div>
        </div>
        <p className="text-[#888888]">Applicants</p>
        <p className="text-[#888888]">Match</p>
        <p className="text-[#888888]">Messages</p>
      </div>
    </div>
  );
};

export default Tabs;
