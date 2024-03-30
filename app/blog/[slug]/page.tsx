import Image from "next/image";
import { notFound } from "next/navigation";
import { allPosts, Post as PostType } from "contentlayer/generated";
import MdxWrapper from "@/components/MdxWrapper";
import { formatDate } from "@/utils/formatDate";
import Avatar from "@/public/avatar.jpg";

export default function Post({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-xl flex-col gap-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>
            <p className="text-lg tracking-tight text-tertiary ">
              {post.description}
            </p>
          </div>
          <div className="flex max-w-none items-center gap-4">
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full bg-secondary"
            />
            <div className="leading-tight">
              <p className="text-primary">Brian Ruiz</p>
              <p className="text-secondary">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                {/* {" · "} */}
              </p>
            </div>
          </div>
          {post.image && (
            <>
              <div className="h-8" />
              <Image
                src={post.image}
                alt={`${post.title} post image`}
                width={700}
                height={350}
                className="-ml-6 w-[calc(100%+48px)] max-w-none  md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
                priority
                quality={100}
              />
            </>
          )}
          <div className="h-16" />
          <div className="prose prose-neutral">
            <MdxWrapper code={post.body.code} />
          </div>
        </div>
      </article>
    </div>
  )
}