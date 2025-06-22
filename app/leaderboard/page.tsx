export default function LeaderboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-yellow-400">$WATCHCOIN Leaderboard</h2>
      <p className="text-zinc-400 text-sm">
        Coming soon: see who’s earning the most from watching & staking.
      </p>
      <ul className="bg-zinc-800 rounded-xl p-4 space-y-2 text-sm">
        <li>🥇 0xAbC...1234 — 10,000 $WATCH</li>
        <li>🥈 0xDef...5678 — 7,500 $WATCH</li>
        <li>🥉 0xGhi...9101 — 5,200 $WATCH</li>
      </ul>
    </div>
  );
}

