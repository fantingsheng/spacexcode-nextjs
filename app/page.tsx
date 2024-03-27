import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar.jpg";
import { allPosts } from ".contentlayer/generated";
import PostList from "../components/PostList";

export default function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
      <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Fan Tingsheng
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Software Engineer & Creator
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
          {/* <Stats /> */}
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi there, I'm Timfan - Javascript enthusiast and Full-Stack Developer based in Wuxi. 
          In addition to coding, I also like writing, sharing web develop knowledge.
        </p>
        <p 
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          I have been coding for more than 10 years, I started my journey at the end of 2014.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              {/* <ArrowUpRightIcon className="h-5 w-5" /> */}
              <span>Contact</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="mailto:contact@b-r.io"
              className="flex items-center gap-2 no-underline"
            >
              {/* <ArrowUpRightIcon className="h-5 w-5" /> */}
              <span>Get Newsletter</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-secondary">Latest Posts</h2>
        <PostList posts={posts} />
        <Link
          href="/blog"
          className="text-secondary underline underline-offset-4 hover:text-primary"
        >
          See All
        </Link>
      </div>
    </div>
    </main>
  );
}
