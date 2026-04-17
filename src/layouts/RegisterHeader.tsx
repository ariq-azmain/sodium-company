import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import {Logo} from '@/components'


function RegisterHeader() {
   return (
      <header className="rag-header">
         <Logo/>
         <div className="rag-header-actions">
            <Link href="/" className="back-btn">
               <FaArrowLeft className="arrow"/>
            </Link>
         </div>
      </header>
   );
}

export default RegisterHeader;