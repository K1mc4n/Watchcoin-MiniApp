import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "$WATCHCOIN Frame",
    description: "Discover, stake, and earn with $WATCHCOIN on Farcaster.",
    image: "https://watchcoin.xyz/preview.png",
    buttons: [
      { label: "Visit Info", action: "link", target: "https://watchcoin.xyz/info" },
      { label: "Leaderboard", action: "link", target: "https://watchcoin.xyz/leaderboard" }
    ]
  });
}

