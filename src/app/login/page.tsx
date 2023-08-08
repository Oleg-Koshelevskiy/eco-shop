"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Button } from "@/components";

const LoginPage = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response: any = await getProviders();
      console.log(response);
      setProviders(response);
    };
    setUpProviders();
  }, []);
  return (
    <section>
      <h2 className="secondary_header">Login Page</h2>
      {session?.user ? (
        <div className="flex justify-center gap-3 md:gap-5">
          <Button type="button" onClick={signOut} className="secondary_btn ">
            Sign Out
          </Button>
          <Link href="/profile">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.name} className="flex justify-center m-2">
                <Button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="main_btn"
                >
                  <div>Sign In with {provider.name}</div>
                </Button>
              </div>
            ))}
        </>
      )}
    </section>
  );
};

export default LoginPage;
