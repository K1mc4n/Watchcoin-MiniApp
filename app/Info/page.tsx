import { TokenInfo } from "../../components/TokenInfo";

export default function InfoPage() {
  return (
    <div className="space-y-8">
      <TokenInfo />

      <section>
        <h3 className="text-lg font-semibold mb-2">About $WATCHCOIN</h3>
        <p className="text-sm text-zinc-300">
          $WATCHCOIN is a community-driven token built for discovery and rewards in the crypto space.
          Stake, trade, and engage to earn — with transparency and fun.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-2">Latest News</h3>
        <ul className="text-sm text-zinc-400 space-y-1">
          <li>✅ June 21 — $WATCHCOIN staking pool hits 1M TVL</li>
          <li>✅ June 20 — Swap feature now supports Base Chain</li>
          <li>✅ June 18 — $WATCHCOIN listed on DEX Screener</li>
        </ul>
      </section>
    </div>
  );
}

