import { currentUser } from '@clerk/nextjs/server';
import { SignOut } from '@/components';

export default async function UserPage() {
  const user = await currentUser();

  if (!user) return <p className="text-center mt-10">Please log in to view profile.</p>;

  return (
    <section>
      <div className="!mt-[180px] w-full !text-center !p-[30px]">
        <img 
          src={user.imageUrl} 
          alt={user.firstName || "User"} 
          className="h-[80px] w-[80px] rounded-full mx-auto" 
        />
        
        <h1 className="text-2xl font-black text-blue-100 !mt-[5px]">
          {user.firstName} {user.lastName}
        </h1>
      </div>

      <div className="!mt-[-30px]">
        <p className="text-sm font-bold text-center !p-2 h-fit z-[50]">
          <span className="!p-1.5 bg-[rgb(70,70,71)] rounded-2xl">
            {user.emailAddresses[0].emailAddress}
          </span>
        </p>
      </div>

      <div className="w-full text-center !mt-[120px]">
        <SignOut />
      </div>
    </section>
  );
}
