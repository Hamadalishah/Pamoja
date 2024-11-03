import ShopCard from "../components/shop_card";

export default function Shop() {
  return (
    <div className="w-full h-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 max-w-screen-lg mx-auto items-center">
        <ShopCard imageUrl="/New folder/bag1.png" title="Hello World 1" showIcon={true} />
        <ShopCard imageUrl="/New folder/bag2.png" title="Hello World 2" />
        <ShopCard imageUrl="/New folder/couple 2.svg" title="Hello World 3" />
        <ShopCard imageUrl="/New folder/IMG_0199 2.svg" title="Hello World 4" />
      </div>
    </div>
  );
}












// import Image from "next/image"



// export default function Shop() {
//     return (
//       <div className="w-full h-auto py-10">
//         <div className="grid grid-cols-2 gap-6 w-[1100px] mx-auto items-center">
//           {/* Card 1 */}
//           <div className="relative w-full h-[450px]">
//             <img src="/New folder/bag1.png" alt="Bag 1" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
//               <span className="text-white text-xl">Hello World</span>
//             </div>
//           </div>
  
//           {/* Card 2 */}
//           <div className="relative w-full h-[450px]">
//             <img src="/New folder/bag2.png" alt="Bag 2" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
//               <span className="text-white text-xl">Hello World</span>
//             </div>
//           </div>
  
//           {/* Card 3 */}
//           <div className="relative w-full h-[450px]">
//             <img src="/New folder/couple 2.svg" alt="Couple" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
//               <span className="text-white text-xl">Hello World</span>
//             </div>
//           </div>
  
//           {/* Card 4 */}
//           <div className="relative w-full h-[450px]">
//             <img src="/New folder/IMG_0199 2.svg" alt="IMG_0199" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
//               <span className="text-white text-xl">Hello World</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
