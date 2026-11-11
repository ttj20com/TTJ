# TTJ Platform

A non-wagering skill and arcade gaming platform foundation.

## Product rules
- Points are platform-only utility points for game access and play.
- Points are not cash, cannot be withdrawn, transferred for cash, or redeemed for money.
- No betting, wagering, odds, cash prizes, or cash-out flows.
- No fictional users, balances, transactions, or unverified game listings.

## Stack
- Next.js App Router
- TypeScript
- Supabase integration planned for authentication, profiles, game catalog, and an auditable points ledger.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure the Supabase URL and publishable key before enabling account features. The current repository is a foundation, not a deployed production service. No payment provider, live game runtime, point settlement, or production authentication has been configured.

## Environment
See `.env.example`. Never expose a Supabase service-role key in browser code.
