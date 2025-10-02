import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post/json-post-repository";
import { Suspense } from "react";

export default async function HomePage() {

  return (
    <div>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">footer</p>
      </footer>
    </div>
  );
}
