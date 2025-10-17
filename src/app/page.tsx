import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </>
  );
}
