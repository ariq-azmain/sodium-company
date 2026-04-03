import { FaCheckCircle } from "react-icons/fa";
import "@/css/role.css";
interface Props {
   feature: string;
}

export default function FeatureItem({ feature }: Props) {
   return (
      <div className="feature-item">
         <FaCheckCircle className="check" />
         <span>{feature}</span>
      </div>
   );
}
