"use client";

import { OrdersList } from "@/components";
import { useUser } from "@/hooks/useUsers";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  const router = useRouter();
  const { user, isLoading, isError } = useUser(session?.user.email);

  if (status === "loading") {
    return (
      <div className="flex justify-center text-lime-600 mt-6">
        Checking your authentification...
      </div>
    );
  }

  if (isLoading) return <div className="flex justify-center">Loading...</div>;
  if (isError)
    return <div className="flex justify-center">Failed to load!</div>;

  const { email, image, isAdmin, username } = user[0];
  return (
    <section className="mt-14 sm:mt-18 md:mt-20 container max-w-7xl mx-auto">
      <h1 className="secondary_header">{username} profile</h1>
      {isAdmin && <h2 className="secondary_header">(admin)</h2>}
      <div className="flex justify-center gap-2">
        <Image
          src={image}
          width={128}
          height={128}
          alt={username}
          className="rounded-lg"
        />
        <div>
          <div>Email: {email}</div>
          {isAdmin && (
            <Link href="/dashboard">
              <div className="main_btn text-center mt-6">Admin dashboard</div>
            </Link>
          )}
        </div>
      </div>
      <h2 className="secondary_header">My orders</h2>
      <OrdersList userId={session?.user.id} />
    </section>
  );
};

export default Profile;
