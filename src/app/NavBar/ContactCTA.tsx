import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA({ onClick }: { onClick?: () => void }) {
  return (
    <div className="w-full sm:w-max lg:min-w-max lg:items-center">
      <Link
        href="/ContactUs/"
        onClick={onClick}
        className="flex items-center justify-center gap-x-2 text-gray-700 hover:text-gray-900 border-b border-transparent hover:border-gray-900 transition text-lg lg:text-base"
      >
        Get in touch
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}