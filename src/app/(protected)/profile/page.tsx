"use client";

import Image from "next/image";
import Link from "next/link";

import useCurrentUser from "@/hooks/useCurrentUser";

const Profile = () => {
   const { user, loading, error, isLoggedIn } = useCurrentUser();
   if (loading) {
      return (
         <div className="h-screen w-full flex justify-center items-center">
            <Image
               src="/images/icons/loading-circle.svg"
               height={200}
               width={200}
alt='loading...'
            />
         </div>
      );
   }
   if (error) {
      return (
         <div>
            <h1>An Error Occured</h1>
            <p>See Browser Console For More Information</p>
         </div>
      );
   }
   if (!isLoggedIn) {
      return (
         <div>
            <h1>You are not loggedin/singing</h1>
            <Link href="/authentication">login/singing Hear</Link>
         </div>
      );
   }
   return (
      <div>
         <div>
            <span>{user?.username?.slice(0, 1)}</span>
         </div>
         <p>{user?.username}</p>
         <p>{user?.email}</p>
         <p>
            Your Request Is <span>{user?.status}</span>
         </p>
      </div>
   );
};
export default Profile;
