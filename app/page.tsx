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
    <main>
      <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Fan Tingsheng
          </h1>
          <p
            className="animate-in text-secondary mt-1"
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
          Hi there 👋, I'm Timfan - Javascript enthusiast and Full-Stack Developer based in Wuxi. 
          In addition to coding, I also like writing, sharing web develop knowledge.
        </p>
        <p 
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          I have been coding for more than 10 years, I started my journey at the end of 2014.
        </p>
        <div className="my-8 columns-2 gap-4 sm:columns-3">
          <div className="relative mb-4 h-40">
            <div className="flex flex-col rounded-md border p-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="black"></rect>
                <g clip-path="url(#clip0_920_2749)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8C13.37 8 8 13.37 8 20C8 25.31 11.435 29.795 16.205 31.385C16.805 31.49 17.03 31.13 17.03 30.815C17.03 30.53 17.015 29.585 17.015 28.58C14 29.135 13.22 27.845 12.98 27.17C12.845 26.825 12.26 25.76 11.75 25.475C11.33 25.25 10.73 24.695 11.735 24.68C12.68 24.665 13.355 25.55 13.58 25.91C14.66 27.725 16.385 27.215 17.075 26.9C17.18 26.12 17.495 25.595 17.84 25.295C15.17 24.995 12.38 23.96 12.38 19.37C12.38 18.065 12.845 16.985 13.61 16.145C13.49 15.845 13.07 14.615 13.73 12.965C13.73 12.965 14.735 12.65 17.03 14.195C17.99 13.925 19.01 13.79 20.03 13.79C21.05 13.79 22.07 13.925 23.03 14.195C25.325 12.635 26.33 12.965 26.33 12.965C26.99 14.615 26.57 15.845 26.45 16.145C27.215 16.985 27.68 18.05 27.68 19.37C27.68 23.975 24.875 24.995 22.205 25.295C22.64 25.67 23.015 26.39 23.015 27.515C23.015 29.12 23 30.41 23 30.815C23 31.13 23.225 31.505 23.825 31.385C28.565 29.795 32 25.295 32 20C32 13.37 26.63 8 20 8Z" fill="white"></path></g><defs>
                  <clipPath id="clip0_920_2749"><rect width="24" height="24" fill="white" transform="translate(8 8)"></rect></clipPath></defs>
              </svg>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mt-1">Timfan</p>
              <a
                className="rounded border border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 mt-3 w-auto"
                href="https://github.com/fantingsheng" target="_blank">Follow</a>
            </div>
          </div>
          <div className="relative mb-4 h-40">
            <div className="flex flex-col rounded-md border p-4">
              <svg width="40" height="40" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mt-1">@fants0230</p>
              <a
                className="rounded border border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 mt-3 w-auto"
                href="https://github.com/fantingsheng" target="_blank">Follow</a>
            </div>
          </div>
          <div className="relative mb-4 h-80">
            <Image
              alt="Fants"
              src="https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1704520822305-e5dd2a34-5ef4-4dfd-9063-dd7074e59656.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover rounded-md border"
            />
          </div>
          <div className="relative mb-4 h-40">
            <div className="flex flex-col rounded-md border p-4 bg-grid">
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mt-1">用智慧选择目标，用智能实现目标。</p>
              <a
                className="mt-4 text-right"
                target="_blank">-- Sam Altman</a>
            </div>
          </div>
          <div className="relative mb-4 h-40">
            <div className="flex flex-col rounded-md border p-4">
              <Image alt="Logo" src="https://spacexcode.com/img/share.png" width="40" height="40" className="" />
              <p className="text-sm text-neutral-900 dark:text-neutral-100 mt-2">欢迎来到太空编程 | 太空编程</p>
              <p className="text-xs mt-1">分享硬核的编程知识</p>
              <a className="text-xs mt-2" href="https://spacexcode.com" target="_blank">https://spacexcode.com</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </div>
    </main>
  );
}
