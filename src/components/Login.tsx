"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <Image
          src={session?.user.image || "/images/eco-logo.png"}
          width={37}
          height={37}
          className="rounded-full"
          alt="profile"
        />
      ) : (
        <div>Log in</div>
      )}
    </div>
  );
};

export default Login;
