import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "@/components/NavLink";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 font-normal"
      {...props}
    />
  );
};

const components = {
  a: CustomLink,
  Link: CustomLink,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}