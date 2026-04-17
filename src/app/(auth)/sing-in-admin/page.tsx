"use client";
import { Input } from "@/components/";
import { memo } from "react";

const page = ({}) => {
   const Submit = e => {
      e.preventDefault();
   };
   return (
      <div>
         <Input handleSubmit={Submit} />
      </div>
   );
};
export default memo(page);