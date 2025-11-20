import Icon from "@/app/components/Icon";
import { Link } from "wouter";

interface LinkProps {
  text: string;
  href: string;
  icon: string;
}

export default ({ text, href, icon }: LinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 mb-4"
    >
      <Icon name={icon} />
      {text}
    </Link>
  );
};
