# Transaction Authorization Protocol (TAP)

**A secure and compliant authorization layer for every crypto transaction.**

---

## Quick Overview

TAP is an open, decentralized protocol that introduces a multi-party authorization step **before** on-chain settlement. It’s designed to make cryptocurrency payments:

- **Safer** – Each party must agree on transaction details before funds move.
- **Compliant** – Seamlessly incorporates Travel Rule requirements and other regulatory checks.
- **User-Friendly** – Improves the experience by exchanging human-readable info, replacing guesswork with clear context.

Whether you’re an exchange, bank, wallet provider, or business making B2B payments, TAP ensures that **everyone involved knows exactly who they’re transacting with—and why—before hitting “send.”**

---

## Key Benefits

### 1. Prevent Errors & Loss of Funds
- **Two-Way Confirmation**: Both sender and receiver confirm the amount, asset type, and addresses.
- **Eliminate Mistakes**: Wrong-chain or wrong-address errors are caught during the off-chain authorization phase.

### 2. Regulatory Compliance
- **Travel Rule Ready**: Easily share required sender/receiver data between VASPs—securely and privately.
- **FATF Guidance**: Adheres to global standards without leaking personal info on-chain.

### 3. Improved Security & Fraud Prevention
- **Encrypted Messaging**: TAP uses DIDComm v2 for secure, end-to-end encrypted off-chain coordination.
- **Address Validation**: Recipients can provide or confirm their addresses only after approval checks.

### 4. Business-Grade Workflows
- **Rich Metadata**: Attach invoices, reference IDs, and real-world identities to transactions.
- **Multi-Party Coordination**: Integrate compliance officers, treasury approvers, or auditors into a single flow.

---

## How It Works

1. **Transaction Proposal**: The originator’s agent (e.g., an exchange) sends a *Transfer* request detailing asset, amount, and parties.
2. **Approval Phase**: Relevant participants (beneficiary, custodians, compliance services) respond with *Authorize* or *Reject* messages.
3. **Settlement**: Once all conditions are met, the originator broadcasts the on-chain transaction and sends a *Settle* notification with the final TXID.

This simple four-message sequence—Transfer, Authorize, Settle, Reject—powers the entire TAP ecosystem.

---

## Real-World Use Cases

- **Exchange-to-Exchange Transfers**
  Automate Travel Rule checks and confirm deposit addresses without user hassles.
  [Learn more](#)

- **Custodial Withdrawals & Deposits**
  Ensure users and custodians confirm wallet addresses before broadcasting to the blockchain.
  [Learn more](#)

- **B2B & Cross-Border Payments**
  Add invoices, references, and compliance data—perfect for merchants and global businesses.
  [Learn more](#)

- **E-Commerce Purchases**
  Let buyers and sellers exchange order details, shipping info, and stablecoin payments securely.
  [Learn more](#)

---

## Built on Decentralized Identity

TAP messages are secured with [DIDComm v2](https://identity.foundation/didcomm-messaging/spec/).
Each party is represented by a [Decentralized Identifier (DID)](https://www.w3.org/TR/did-core/), allowing self-sovereign identities and trustless verification—no central gatekeepers required.

---

## Get Started

1. **Explore the GitHub Repo**
   Review the official TAP specifications and schemas.
   **[GitHub: TransactionAuthorizationProtocol/TAIPs](https://github.com/TransactionAuthorizationProtocol/TAIPs)**

2. **Read the White Paper**
   Dive deeper into the protocol’s design, use cases, and technical details.
   **[White Paper](https://docs.google.com/document/d/1z16nPRjiCFGsnMqr7GiBRMCMMPBG6laaS337s4oJrEw/edit?tab=t.0#heading=h.ujq0dkl3njwc)**

3. **Join the Community**
   Contribute to discussions, ask questions, and learn from the TAP community.
   [Community Forum](#) | [Chat Group](#)

4. **Implement TAP**
   Start integrating off-chain authorization flows. Whether you’re building a wallet, exchange, or enterprise payment solution—TAP is ready to power secure crypto transactions.

---

## Why TAP?

Modernize crypto transfers with a layer of **trust, compliance, and collaboration.** TAP brings a familiar, business-friendly approach to an otherwise trustless environment—enabling safe, authorized, and fully transparent transactions without sacrificing the benefits of decentralized blockchains.

---
