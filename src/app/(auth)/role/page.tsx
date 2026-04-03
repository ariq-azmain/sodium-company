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
               {/*
              <div className="choice-card member-card" id="memberOption">
                  <div className="card-icon">
                     <FaUsers className="user" />
                  </div>
                  <h2>Continue as Member</h2>
                  <p>
                     Access your member dashboard to view events, connect with
                     the community, and explore SODIUM resources.
                  </p>
                  <div className="feature-list">
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>View upcoming events</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Connect with community</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Access resources</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Track achievements</span>
                     </div>
                  </div>
                  <div className="card-badge">
                     <FaArrowRight className="inline"/> Go to Member Dashboard
                  </div>
               </div>

               <div className="choice-card role-card" id="roleOption">
                  <div className="card-icon">
                     <FaUserTag/>
                  </div>
                  <h2>Apply for a Role</h2>
                  <p>
                     Choose a specialized role that matches your skills and
                     interests. Get access to department-specific features.
                  </p>
                  <div className="feature-list">
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>8 specialized roles available</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Department-specific access</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Leadership opportunities</span>
                     </div>
                     <div className="feature-item">
                        <FaCheckCircle className="check"/>
                        <span>Specialized projects</span>
                     </div>
                  </div>
                  <div className="card-badge">
                      <FaArrowRight className="inline" /> Apply for a Role
                  </div>
               </div> */}
               <ChoiceCard
                  role={false}
                  title="Continue as Member"
                  description="Access your member dashboard to view events, connect with the community, and explore SODIUM resources."
                  id="memberOption"
                  button="Go to Member Dashboard"
                  features={memberFeatures}
               />
               <ChoiceCard
                  role={true}
                  title="Apply for a Role"
                  description="Choose a specialized role that matches your skills and interests. Get access to department-specific features."
                  id="roleOption"
                  button="Apply for a Role"
                  features={roleFeatures}
               />
            </div>
         </div>
      </div>
   );
};
export default page;
