import briefcase_icon from "../assets/briefcase-icon.svg";
import message_icon from "../assets/message-icon.png";
import payments_icon from "../assets/payments-icon.png";
import bell_icon from "../assets/bell-icon.png";
import company_logo from "../assets/company-logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center h-24 px-6 py-4 shadow-navbar shadow-[#D9D9D9] ">
      <div className=" top-6 left-10 py-3 px-5 bg-[#E7E7E7] text-[#DC4A2D] font-satoshi font-bold">
        Logo
      </div>
      <div className=" flex justify-between items-center w-538 h-14 p-3 rounded-full shadow-[1px_1px_1px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="flex justify-center items-center bg-[#DC4A2D] rounded-full h-11 w-[90px] gap-1.5 border-2 border-[#FCB4A5]">
          <img src={briefcase_icon} alt="briefcase-icon" className="w-5 h-5" />
          <p className=" text-white font-sans">Jobs</p>
        </div>
        <div class="flex justify-center items-center rounded-full h-12 w-28 gap-1.5 relative">
          <div class="relative">
            <img src={message_icon} alt="briefcase-icon" className="w-5 h-5" />
            <div class="absolute top-0 right-0 h-1.5 w-1.5 bg-[#DC4A2D] rounded-full"></div>
          </div>
          <p className=" text-[#B0B0B0]">Messages</p>
        </div>

        <div className="flex justify-center items-center  rounded-full h-12 w-28 gap-1.5">
          <img src={payments_icon} alt="briefcase-icon" className="w-5 h-5 " />
          <p className="text-[#B0B0B0]">Payments</p>
        </div>
      </div>

      <div className=" flex justify-center gap-3 items-center p-1 w-24 ">
        <div class="relative">
          <img src={bell_icon} alt="briefcase-icon" className="w-5 h-5" />
          <div class="absolute top-0 right-0 h-1.5 w-1.5 bg-[#DC4A2D] rounded-full"></div>
        </div>

        <img
          src={company_logo}
          alt="briefcase-icon"
          className="w-7 h-7 rounded-full"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
