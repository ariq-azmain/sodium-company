'use client';
import { Element } from "react-scroll";
import {FaqItem} from "@/components";
import { faq } from '@/constants';


const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-[2] !py-28">
          <div>
            <h3 className="h4 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-[#e0e1ff]">
              Have A Lot Questions? Don't Worry.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>
        </div>

        <div className="faq-glow_before relative z-[2] border-2 border-[#0C1838] bg-[#080D27] flex justify-center">
          <div className="container flex gap-10 max-lg:block">
{    
  //<div className="rounded-[50%] absolute top-10 left-[calc(50%-40px)]
//             z-[4] flex space-20 items-center justify-center border-2
//             border-[#0C1838]
//             bg-[#080D27]">
//               <img src="/images/faq-logo.svg" alt="logo" className="space-1/2" />
//             </div>
}
            <div className="relative flex-1 top-0">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>
            <div className="relative flex-1 lg:top-0 top-0 ">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 z-[1] h-full w-0.5 bg-[#0c1838] max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
