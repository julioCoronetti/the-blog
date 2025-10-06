import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";
import { PostModel } from "@/models/post/post-models";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  post: PostModel
};

export function PostSummary({ postHeading, postLink, post }: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={post.createdAt}
        title={formatDistanceToNow(post.createdAt)}
      >
        {formatDatetime(post.createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
}
