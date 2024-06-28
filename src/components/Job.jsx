import Location_Icon from "../assets/location-icon.png";
import Compensation_Icon from "../assets/compensation-icon.png";
import Figma_Icon from "../assets/figma-logo.png";
import Illustrator_Icon from "../assets/illustrator-logo.png";
import Adobe_Icon from "../assets/adobe-logo.png";
import Company_Logo from "../assets/company-logo.png";

const Job = () => {
  return (
    <div className=" flex flex-col w-full h-fit ">
      <div className="flex flex-col  px-[4.1rem] py-[36px] gap-[24px] shadow-navbar shadow-[#D9D9D9]">
        <div className=" flex align-middle text-center items-center gap-[11px]  w-fit">
          <p className=" text-[#3D3D3D] text-3xl font-bold">
            Senior Product Designer
          </p>
          <div className=" h-[4px] w-[4px] bg-[#D1D1D1] rounded-full"></div>
          <p className=" text-[14px] text-[#888888]">posted 2 days ago</p>
          <div className=" flex justify-center align-middle items-center text-center bg-[#ECFDF3] rounded-2xl w-[57px] border border-[#ABEFC6] gap-[4px]">
            <div className=" w-[4px] h-[4px] bg-[#17B26A] rounded-full"></div>
            <p className=" text-[12px] text-[#067647] font-bold">Open</p>
          </div>
        </div>
        <div className="flex align-middle text-center items-center gap-[11px]">
          <div className=" flex justify-start items-center gap-[7px]">
            <img
              src={Location_Icon}
              alt="Delaware, USA"
              className=" text-[#5D5D5D]"
            />
            <p className="text-[#5D5D5D]  text-[18px] font-medium">
              Delaware, USA
            </p>
          </div>
          <div className=" h-[4px] w-[4px] bg-[#D1D1D1] rounded-full"></div>
          <div className=" flex justify-start items-center gap-[7px]">
            <img
              src={Compensation_Icon}
              alt="Delaware, USA"
              className=" text-[#5D5D5D]"
            />
            <p className="text-[#5D5D5D]  text-[18px] font-medium">
              $300k-$400k
            </p>
          </div>
        </div>
      </div>
      <div className="flex  px-[4.1rem] py-[36px] gap-[105px] shadow-navbar shadow-[#D9D9D9]">
        <div className=" flex flex-col gap-2">
          <p className=" text-[14px] text-[#6E6D6D] font-medium">
            Skills Required
          </p>
          <div className=" flex flex-col gap-2">
            <div className=" border border-[#D0D5DD] rounded-md flex justify-center items-center align-middle w-fit px-[4px] gap-[2px]">
              <img
                src={Figma_Icon}
                alt="figma"
                className=" w-[14px] h-[14px]"
              />
              <p className=" text-[12px] text-[#344054] font-medium">Figma</p>
            </div>
            <div className=" border border-[#D0D5DD] rounded-md flex justify-center items-center align-middle w-fit px-[4px] gap-[2px]">
              <img
                src={Illustrator_Icon}
                alt="illustrator"
                className=" w-[14px] h-[14px]"
              />
              <p className=" text-[12px] text-[#344054] font-medium">
                Adobe Illustrator
              </p>
            </div>
            <div className=" border border-[#D0D5DD] rounded-md flex justify-center items-center align-middle w-fit px-[4px] gap-[2px]">
              <img
                src={Adobe_Icon}
                alt="adobe"
                className=" w-[14px] h-[14px]"
              />
              <p className=" text-[12px] text-[#344054] font-medium">
                Adobe XD
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-[14px] text-[#6E6D6D] font-medium">
            Preferred Language
          </p>
          <p className=" font-bold text-[16px] text-black">English</p>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-[14px] text-[#6E6D6D] font-medium">Type</p>
          <p className=" font-bold text-[16px] text-black">Full time</p>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-[14px] text-[#6E6D6D] font-medium">
            Years of Experience
          </p>
          <p className=" font-bold text-[16px] text-black">
            3+ Years of Experience
          </p>
        </div>
      </div>

      <div className="flex  px-[4.1rem] py-[36px] gap-[105px] shadow-navbar shadow-[#D9D9D9]">
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col gap-2">
            <p className=" text-[14px] text-[#6E6D6D] font-medium">
              About the job
            </p>
            <div className=" flex flex-col gap-1 text-[#3D3D3D]">
              <p>1. Handle the UI/UX research design</p>
              <p>
                2. Work on researching on latest web applications designs &
                trends
              </p>
              <p>3. Work on conceptualizing and visualizing</p>
              <p>
                4. Work on creating graphics content and other graphic related
                works
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className=" text-[14px] text-[#3D3D3D] font-medium">Benefits</p>
            <div className=" flex flex-col gap-1">
              <div className=" flex gap-2 ml-2 items-center align-middle text-center">
                <div className=" w-[4px] h-[4px] bg-black rounded-full"></div>
                <p className="text-[#3D3D3D]">Health insurance</p>
              </div>
              <div className=" flex gap-2 ml-2 items-center align-middle text-center">
                <div className=" w-[4px] h-[4px] bg-black rounded-full"></div>
                <p className="text-[#3D3D3D]">Provident Fund</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className=" text-[14px] text-[#3D3D3D] font-medium">Schedule:</p>
            <div className=" flex flex-col gap-1">
              <div className=" flex gap-2 ml-2 items-center align-middle text-center">
                <div className=" w-[4px] h-[4px] bg-black rounded-full"></div>
                <p className="text-[#3D3D3D]">Day shift</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <p className=" text-[14px] text-[#3D3D3D] font-medium">
              Supplemental pay types:
            </p>
            <div className=" flex flex-col gap-1">
              <div className=" flex gap-2 ml-2 items-center align-middle text-center">
                <div className=" w-[4px] h-[4px] bg-black rounded-full"></div>
                <p className="text-[#3D3D3D]">Performance bonus</p>
              </div>
              <div className=" flex gap-2 ml-2 items-center align-middle text-center">
                <div className=" w-[4px] h-[4px] bg-black rounded-full"></div>
                <p className="text-[#3D3D3D]">Yearly bonus</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[14px] text-[#3D3D3D] font-medium">
              Work Location: In person
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col shadow-navbar shadow-[#D9D9D9] px-[4.1rem] py-[36px] gap-[25px]">
        <div className=" flex gap-3">
          <img
            src={Company_Logo}
            alt="company-logo"
            className=" w-[30px] h-[30px] rounded-md"
          />
          <p className=" font-medium text-[20px] text-[#4F4F4F]">Atlassian</p>
        </div>

        <div className=" flex gap-24">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">
                Company Size
              </p>
              <p className="text-[#3D3D3D]">1k - 2k Employees</p>
            </div>

            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">Sector</p>
              <p className="text-[#3D3D3D]">
                Information Technology, Infrastructure
              </p>
            </div>

            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">
                Founded In
              </p>
              <p className="text-[#3D3D3D]">2019</p>
            </div>
          </div>

          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">Type</p>
              <p className="text-[#3D3D3D]">Private</p>
            </div>

            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">Funding</p>
              <p className="text-[#3D3D3D]">Bootstrapped</p>
            </div>

            <div className=" flex flex-col gap-1">
              <p className=" text-[14px] text-[#6E6D6D] font-medium">
                Founded By
              </p>
              <p className="text-[#3D3D3D]">
                Scott Farquhar, Mike Cannon-Brookes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
