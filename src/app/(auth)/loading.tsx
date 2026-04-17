import Image from "next/image";

const loading = () => {
   return (
      <div className="h-screen w-full flex justify-center items-center">
         <Image
            src="/images/icons/loading-circle.svg"
            height={200}
            width={200}
            alt='Loading...'
         />
      </div>
   );
};
export default loading;
