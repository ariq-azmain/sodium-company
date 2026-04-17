"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = () => {
   const [isShow, setIsShow] = useState<boolean>(false);
   const [secret, setSecret] = useState<string>("");
   return (
      <form>
         <label className="block" htmlFor="secret">
            Enter Secret
            <input
               type={isShow ? "text" : "password"}
               name="secret"
               id="secret"
               autoFocus={true}
               className="bg-gradient-to-b from-purple-400 to-indigo-900
                  focus:outline-none focus:border-none hover:translate-x-12!"
               value={secret}
            />
            <button
               onClick={() => {
                  setIsShow(!isShow);
               }}
            >
               {isShow ? <EyeOff /> : <Eye />}
            </button>
            <button type="submit">Sing In</button>
         </label>
      </form>
   );
};
export default Input;
