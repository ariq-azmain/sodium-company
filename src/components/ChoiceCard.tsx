import {
   FaUsers,
   FaCheckCircle,
   FaArrowRight,
   FaUserTag
} from "react-icons/fa";

import { FeatureItem } from "@/components";
import "@/css/role.css";

interface Props {
   role: boolean;
   title: string;
   description: string;
   id: string;
   button: string;
   features: {
      id: number;
      text: string;
   }[];
}

const ChoiceCard = ({
   role,
   title,
   description,
   features,
   id,
   button
}: Props) => {
  var i
   return (
      <div className={`choice-card ${role ? ' role-card ' : ' member-card '}`} id={id}>
         <div className="card-icon">
            {role ? <FaUserTag /> : <FaUsers className="user" />}
         </div>
         <h2>{title}</h2>
         <p>{description}</p>
         <div className="feature-list">
            {features.map(({ id, text }) => (
               <FeatureItem key={id} feature={text} />
            ))}
            <div className="card-badge ">
               <FaArrowRight className="inline" /> {button}
            </div>
         </div>
      </div>
   );
};
export default ChoiceCard;
