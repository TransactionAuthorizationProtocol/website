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
      "Ensure that your customers' transactions arrive at the correct destination without loss or theft of funds.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "B2B Payments",
    description:
      "Record keeping for accounting, order fulfillment, and regulatory compliance purposes.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "E-Commerce Payments",
    description:
      "Replace confusing and insecure blockchain addresses with your customer's real-world counterparts.",
    icon: BuildingStorefrontIcon,
  },
];

export function Usecases() {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Real-world Crypto
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transactions between people rather than cryptographic addresses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Securely and Privately connect the real-world identities of your
            customers and counterparties to blockchain transactions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {usecases.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
