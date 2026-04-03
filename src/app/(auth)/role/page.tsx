import Link from 'next/link'
import {
   FaUsers,
   FaCheckCircle,
   FaArrowRight,
   FaUserTag
} from "react-icons/fa";

import { ChoiceCard } from "@/components";
import { memberFeatures, roleFeatures } from "@/constant";
import "@/css/role.css";

const page = () => {
   return (
      <div className="choice-container" id="choiceContainer">
         <div id="content">
            <div className="choice-header">
               <h1>Welcome to SODIUM</h1>
               <p>
                  You're almost there! Choose how you'd like to continue your
                  journey with us.
               </p>
            </div>

            <div className="choice-grid">
              <Link href="/member-dashboard">
               <ChoiceCard
                  role={false}
                  title="Continue as Member"
                  description="Access your member dashboard to view events, connect with the community, and explore SODIUM resources."
                  id="memberOption"
                  button="Go to Member Dashboard"
                  features={memberFeatures}
               />
              </Link>
              <Link href="/application">
                
               <ChoiceCard
                  role={true}
                  title="Apply for a Role"
                  description="Choose a specialized role that matches your skills and interests. Get access to department-specific features."
                  id="roleOption"
                  button="Apply for a Role"
                  features={roleFeatures}
               />
              </Link>
            </div>
         </div>
      </div>
   );
};
export default page;
