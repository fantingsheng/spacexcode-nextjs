import SocialLinks from "@/components/SocialLinks";

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p className="mt-4 max-w-lg">
          This is the about page for our blog. Here you can find more information about the blog and its purpose.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <p className="text-sm text-secondary">Find me elsewhere</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
