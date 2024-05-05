import Product from "./components/Product";
import Image from "./components/Image";
import Button from "./components/Button";
import Description from "./components/Description";
export default function App() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row font-sans ">
      <div className="w-full h-screen"> 
       <Image />
      </div>
      <div className="w-full sm:w-full md:w-full flex flex-col items-center justify-center text-white font-avant-garde  max-lg:mt-[500px] max-md:mt-[500px] max-sm:mt-[500px] max-lg:absolute   max-md:absolute  max-sm:absolute ">
       <Description />
        <div className="w-[494px] max-sm:w-[360px] flex items-start justify-start mb-[3rem] max-sm:ml-[50px]">
          <Button />
        </div>
        <div className="w-[504px] max-sm:w-[360px] lg:w-[600px] xl:w-[800px] md:w-[504px]  2xl:w-[797px] flex  sm:pl-0 md:pl-0 xl:pl-[9rem] lg:pl-[4rem]   mb-[7rem]          overflow-x-auto no-scrollbar" >
          <Product />
        </div>
      </div>
    </div>
  );
}
