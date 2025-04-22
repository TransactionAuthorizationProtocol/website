import {
  ArrowPathRoundedSquareIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
} from "npm:@heroicons/react/24/outline";

const usecases = [
  {
    name: "Safer withdrawals and deposits",
    description:
      "Dramatically improve the safety and security of your customers' on-chain transactions",
    icon: ShieldCheckIcon,
  },
  {
    name: "Post-trade settlement",
    description:
      "Ensure that trading transactions on modern non-custodial exchanges are settled securely and rapidly by third-party custodian.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "B2B Payments",
    description:
      "Instantly settled cross border payments that are tied to your customers, suppliers, and invoices not opaque blockchain addresses.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "E-Commerce Payments",
    description:
      "Securely and privately share merchant, invoice, and customer information to safely enable e-commerce payments using stablecoins",
    icon: BuildingStorefrontIcon,
  },
];

export function Usecases() {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Real-world Crypto
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Transactions between people rather than cryptographic addresses
          </p>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            Securely and Privately connect the real-world identities of your
            customers and counterparties to blockchain transactions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {usecases.map((usecase) => (
              <div key={usecase.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-text-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-md">
                    <usecase.icon
                      className="h-6 w-6 text-secondary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {usecase.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-muted">
                  {usecase.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
