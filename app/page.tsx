import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-20 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Welcome to $WATCHCOIN</h1>
      <p className="text-zinc-400 text-sm">
        Discover, stake, and earn in the Watch-to-Earn ecosystem.
      </p>
      <Link
        href="/info"
        className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400"
      >
        View Token Info
      </Link>
    </div>
  );
}

