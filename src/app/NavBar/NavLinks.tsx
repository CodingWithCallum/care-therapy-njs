import Link from "next/link";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { name: "Our Story", href: "/OurStory" },
    { name: "Services", href: "/OurServices" },
    { name: "Blog", href: "/OurBlog" },
  ];

  return (
    <ul className="flex flex-col gap-y-6 text-lg text-gray-700 lg:flex-row lg:gap-x-6 lg:items-center lg:text-base">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            onClick={onClick}
            className="transition hover:text-gray-900 ease-linear block"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}