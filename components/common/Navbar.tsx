import Link from "next/link";   

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b">
        <div className="text-xl font-bold text-blue-700">Sajilo Fix</div>

        <div className="flex items-center gap-4">
            <Link href="/explore" className="text-sm text-gray-600 hover:text-black">Explore Issues</Link>
            <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-black"
            >
                Sign In
            </Link>
        </div>
    </nav>
  );
}