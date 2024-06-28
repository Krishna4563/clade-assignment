import Trash_Logo from "../assets/trash-icon.png";
import Edit_Logo from "../assets/edit-icon.png";
import Applicants_Logo from "../assets/applicants-icon.png";
import Matches_Logo from "../assets/matches-icon.png";
import Message_Logo from "../assets/messages-icon-new.png";
import Views_Logo from "../assets/eye-icon.png";

const Sidebar = () => {
  return (
    <div className=" right-0 bottom-0 w-[400px] h-screen flex flex-col items-center align-middle py-10">
      <div className="flex flex-col gap-10 items-center justify-center align-middle text-center">
        <div className=" flex gap-2 mt-2">
          <button className="flex items-center justify-center gap-2 w-[140px] px-[16px] py-[6px] border border-[#DC4A2D] bg-[#FEF4F2] rounded-lg">
            <img src={Trash_Logo} alt="delete" />
            <p className=" text-[#DC4A2D] text-[16px]">Delete job</p>
          </button>
          <button className="flex items-center justify-center gap-2 w-[140px] px-[16px] py-[6px] border bg-[#DC4A2D] rounded-lg">
            <img src={Edit_Logo} alt="edit" />
            <p className=" text-[#FFFFFF] text-[16px]">Edit job</p>
          </button>
        </div>
        <div className=" flex flex-col gap-2 w-[85%]">
          <div className=" flex justify-between items-center align-middle text-center">
            <div className=" flex gap-2 items-center align-middle">
              <img
                src={Applicants_Logo}
                alt="applicants"
                className=" w-[15px] h-[15px]"
              />
              <p className=" text-[#4F4F4F]">Applicants</p>
            </div>
            <p className=" text-[#3D3D3D] font-bold text-[16px]">400</p>
          </div>
          <div className=" h-[1px] bg-[#E7E7E7] w-full"></div>
        </div>

        <div className=" flex flex-col gap-2 w-[85%]">
          <div className=" flex justify-between items-center align-middle text-center">
            <div className=" flex gap-2 items-center align-middle">
              <img
                src={Matches_Logo}
                alt="applicants"
                className=" w-[15px] h-[15px]"
              />
              <p className=" text-[#4F4F4F]">Matches</p>
            </div>
            <p className=" text-[#3D3D3D] font-bold text-[16px]">100</p>
          </div>
          <div className=" h-[1px] bg-[#E7E7E7] w-full"></div>
        </div>

        <div className=" flex flex-col gap-2 w-[85%]">
          <div className=" flex justify-between items-center align-middle text-center">
            <div className=" flex gap-2 items-center align-middle">
              <img
                src={Message_Logo}
                alt="applicants"
                className=" w-[15px] h-[15px] text-black border-black"
              />
              <p className=" text-[#4F4F4F]">Messages</p>
            </div>
            <p className=" text-[#3D3D3D] font-bold text-[16px]">147</p>
          </div>
          <div className=" h-[1px] bg-[#E7E7E7] w-full"></div>
        </div>

        <div className=" flex flex-col gap-2 w-[85%]">
          <div className=" flex justify-between items-center align-middle text-center">
            <div className=" flex gap-2 items-center align-middle">
              <img
                src={Views_Logo}
                alt="applicants"
                className=" w-[15px] h-[15px]"
              />
              <p className=" text-[#4F4F4F]">Views</p>
            </div>
            <p className=" text-[#3D3D3D] font-bold text-[16px]">800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
