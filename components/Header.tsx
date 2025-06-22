import Link from "next/link";

const links = [
  { name: "Info", href: "/info" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Boosters", href: "/boosters" },
  { name: "Staking", href: "/staking" },
  { name: "Swap", href: "/swap" },
  { name: "Check-in", href: "/check-in" },
  { name: "Traders", href: "/traders" },
];

export function Header() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-700 py-4 px-6">
      <nav className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-yellow-400">$WATCHCOIN</h1>
        <ul className="flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-yellow-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

