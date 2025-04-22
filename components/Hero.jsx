import { h } from "../deps.ts";

/**
 * Hero component for the TAP site homepage
 */
export default function Hero({ title, subtitle, children }) {
  // Default values
  title = title || "Safe and compliant real-world transactions on any public blockchain";
  subtitle = subtitle || "Crypto's first private decentralized payment messaging protocol for VASPs financial institutions, DeFi, and Self-hosted wallets";
  children = children || null;
  
  return (
    <div class="py-8 sm:py-16">
      <div class="relative isolate">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-foreground opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      
        <div class="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight font-heading text-text-primary sm:text-6xl">
              {title}
            </h1>
            <p class="mt-6 text-lg leading-8 text-text-muted">
              {subtitle}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="/intro.html" class="btn-primary">
                Introduction <span aria-hidden="true" class="ml-1">→</span>
              </a>
              <a href="/tap-overview.html" class="btn-secondary">
                Technical Overview <span aria-hidden="true" class="ml-1">→</span>
              </a>
            </div>
            <div class="mt-8 flex items-center justify-center gap-x-6">
              <a href="https://docs.google.com/document/d/1z16nPRjiCFGsnMqr7GiBRMCMMPBG6laaS337s4oJrEw/edit#heading=h.qhpcmvla2cvr#" class="btn-secondary">
                Read the TAP Whitepaper <span aria-hidden="true" class="ml-1">→</span>
              </a>
              <a href="https://taips.tap.rsvp" class="btn-secondary">
                Read the standards <span aria-hidden="true" class="ml-1">→</span>
              </a>
            </div>
            
            <div class="mt-8 px-12 text-sm bg-secondary text-secondary-foreground py-4 rounded-lg">
              <div class="font-bold text-md text-center mb-2 font-heading">Ready to build with TAP?</div>
              <p>
                Join the <a href="https://t.me/+ciHTo8DedQY2ZDU5" class="text-primary hover:underline">Telegram group</a> to connect with the development community. Or check out the <a href="https://github.com/TransactionAuthorizationProtocol/protocol" class="text-primary hover:underline">protocol repo</a> to get started.
              </p>
            </div>
            {children}
          </div>
        </div>
      
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary-foreground opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
