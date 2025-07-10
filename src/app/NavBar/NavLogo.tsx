import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex min-w-max items-center">
      <Link
        href="/"
        className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700"
      >
        <Image
          src="/ct_logo_midi_colour.png"
          alt="Care Therapy logo"
          width={100}
          height={100}
          priority
          className="h-12 w-auto sm:h-16 object-contain"
        />
      </Link>
    </div>
  );
}