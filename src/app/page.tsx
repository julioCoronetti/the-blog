import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "#" }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "imagem",
            priority: true,
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-10-03">
            03/10/2025 - 12:23
          </time>

          <PostHeading as="h1" url="#">
            Ad culpa esse quibusdam atque
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa
            esse quibusdam atque, tempore, velit corrupti totam nesciunt debitis
            in accusantium commodi quam quae illo accusamus aliquid fuga
            repellat delectus.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">footer</p>
      </footer>
    </Container>
  );
}
