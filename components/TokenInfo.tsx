export function TokenInfo() {
  return (
    <div className="bg-zinc-800 p-4 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-lg font-semibold text-yellow-400">$WATCHCOIN Token Info</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-zinc-400">Price</div>
          <div className="text-white font-bold">$0.00000123</div>
        </div>
        <div>
          <div className="text-zinc-400">Market Cap</div>
          <div className="text-white font-bold">$123,456</div>
        </div>
        <div>
          <div className="text-zinc-400">Volume 24h</div>
          <div className="text-white font-bold">$12,345</div>
        </div>
        <div>
          <div className="text-zinc-400">Change 24h</div>
          <div className="text-green-500 font-bold">+4.2%</div>
        </div>
      </div>
    </div>
  );
}

