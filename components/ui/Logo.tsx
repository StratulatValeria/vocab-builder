import { Icon } from "./Icon";
import Link from "next/link";

interface LogoProps {
  className?: string;
}
export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <Icon
        id="icon-Logo"
        className="w-9 h-9 md:w-10 md:h-10 text-brand-green"
      />
      <span className="font-fixel font-bold text-xl md:text-2xl text-brand-black group-hover:text-brand-green transition-colors">
        VocabBuilder
      </span>
    </Link>
  );
};
