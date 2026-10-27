# dreamDEX Perps Market Reader

A tiny read-only TypeScript example using the official `@somnia-chain/markets-sdk` to discover dreamDEX perpetual markets on Somnia Hideki testnet.

## Run it

```sh
npm install
npm run markets
```

No wallet, private key, funds, or transactions are needed. The script connects to the Hideki testnet indexer and prints the markets returned by the SDK.

## Bounty access proof

After running it successfully, publish this project to a public GitHub repository. The repo demonstrates use of the dreamDEX Markets SDK. Then submit one private whitelist request through a dreamDEX Discord ticket with your DoraHacks email, track (`Feedback`, `MVP`, or both), and the GitHub repository link.

## Network

- Chain: Somnia Hideki testnet (chain ID 50383)
- Indexer: `https://hideki-dev.smk.somnia.host/v1/graphql`
- SDK: `@somnia-chain/markets-sdk` 0.32.1
