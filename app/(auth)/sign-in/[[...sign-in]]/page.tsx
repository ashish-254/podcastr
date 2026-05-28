import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth min-h-screen w-full">
      <SignIn />
    </div>
  );
};

export default Page;

// import { SignIn } from "@clerk/nextjs";
// import React from "react";

// const page = () => {
//   return (
//     <div className="flex-center glassmorphism-auth h-screen w-full">
//       <SignIn />
//     </div>
//   );
// };

// export default page;
