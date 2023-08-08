"use client";

import { useUser } from "@/hooks/useUsers";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { user, isLoading, isError } = useUser(session?.user.email);

  if (!session?.user) {
    router.push("/login");
  }
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load!</div>;

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
    </section>
  );
};

export default Profile;
