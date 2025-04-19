import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-black/90 text-center py-4">
        <Image src="/logo_dark.png" alt="Logo" width={150} height={50} className="mx-auto mb-4" />
        <p className="text-sm text-gray-300">Copyright © {new Date().getFullYear()} PURE LIFE MASSAGE. All rights reserved.</p>
      </footer>
    );
  }