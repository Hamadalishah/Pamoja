import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[100px] bg-orange-600 flex items-center">
        <div className="mx-4 sm:mx-auto flex flex-wrap items-center justify-between max-w-[1600px] w-full">
          <div className="border border-white w-full sm:w-auto mb-2 sm:mb-0">
            <input
              type="text"
              placeholder="ALL EVENTS"
              className="bg-orange-600 w-full sm:w-[300px] placeholder-white text-white border-white border px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center w-full sm:w-auto">
            <IoIosArrowBack className="text-white" />
            <input
              type="text"
              placeholder="SUN, OCT 6"
              className="bg-orange-600 w-full sm:w-[300px] placeholder-white text-white border-white border px-4 py-2 mx-2 focus:outline-none"
            />
            <IoIosArrowForward className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
