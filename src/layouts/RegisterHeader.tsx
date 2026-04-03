import { FaArrowLeft } from "react-icons/fa";

import {Logo} from '@/components'


function RegisterHeader() {
   return (
      <header className="rag-header">
         <Logo/>
         <div className="rag-header-actions">
            <a href="/" className="back-btn">
               <FaArrowLeft className="arrow"/>
            </a>
         </div>
      </header>
   );
}

export default RegisterHeader;