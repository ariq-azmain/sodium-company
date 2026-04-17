import Link from "next/link";

const CTA = ({ text, href }: { text: string; href: string }) => {
   return (
      <div className="cta-container !overflow-visible">
         <span>
            <Link href={href} className="cta-btn !px-[10px] !py-[8px]">
               {text}
            </Link>
         </span>
      </div>
   );
};

export default CTA;
