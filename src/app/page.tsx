import { ClientComponent } from "@/components/ClientComponent";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { ServerComponent } from "@/components/ServerComponent";
import { Suspense } from "react";
import Loading from "./loading";

export default async function HomePage() {
  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <Suspense fallback={<Loading className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
