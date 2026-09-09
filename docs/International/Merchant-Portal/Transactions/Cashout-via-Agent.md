# Cashout via Agent

## Sequence Diagram — Cashout via Agent

![Cashout via Agent sequence diagram](/img/diagrams/cashout-via-agent.svg)

## Positive Flow

- Customer wallet debited; agent wallet credited. Agent physically disburses cash to the customer.
- Both agent and customer receive a transaction confirmation notification via NotifySvc.

## Negative Flows

- **N1** — Customer insufficient balance: Core Wallet returns `INSUFFICIENT_BALANCE`; no cash disbursed; transaction FAILED.
- **N2** — Agent daily cashout limit exceeded: MMP validation blocks the request before the Core Wallet call.
- **N3** — Customer MSISDN not registered: Returns 404 (`CUSTOMER_NOT_FOUND`).
