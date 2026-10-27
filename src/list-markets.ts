import {
  SOMNIA_HIDEKI_TESTNET_ADDRESSES,
  SomniaMarkets,
} from "@somnia-chain/markets-sdk";
import { hidekiTestnet } from "@somnia-chain/markets-sdk/chains";

async function main() {
  // Read-only SDK connection: no private key and no transaction signing.
  const markets = new SomniaMarkets({
    chain: hidekiTestnet,
    indexerUrl: "https://hideki-dev.smk.somnia.host/v1/graphql",
    addresses: SOMNIA_HIDEKI_TESTNET_ADDRESSES,
  });

  const perps = await markets.client.listPerpMarkets();
  if (perps.length === 0) {
    console.log("No perpetual markets were returned.");
    return;
  }

  console.log(`Loaded ${perps.length} dreamDEX perpetual markets on Somnia testnet:\n`);
  for (const market of perps) {
    console.log(`${market.baseSymbol} / ${market.quoteSymbol ?? "USDso"}`);
    console.log(`  Pool: ${market.poolAddress}`);
    console.log(`  Margin bank: ${market.marginBank}`);
    console.log(`  Base decimals: ${market.baseDecimals}`);
  }
}

main().catch((error: unknown) => {
  console.error("Could not load dreamDEX perps markets:", error);
  process.exitCode = 1;
});
