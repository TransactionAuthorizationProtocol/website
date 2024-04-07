import {
  FaceSmileIcon,
  ScaleIcon,
  ShieldCheckIcon,
  TableCellsIcon,
} from "npm:@heroicons/react/24/outline";
const features = [
  {
    name: "Comply with latest regulations",
    description:
      "Comply with your regulators implementation of FATF’s Travel Rule, and other regulations without compromising user privacy.",
    icon: ScaleIcon,
  },
  {
    name: "Avoid loss of customer funds",
    description:
      "Ensure that your customers' transactions arrive at the correct destination without loss or theft of funds.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Reconciliation with real-world business processes",
    description:
      "Record keeping for accounting, order fulfillment, and regulatory compliance purposes.",
    icon: TableCellsIcon,
  },
  {
    name: "Better and more secure user experience",
    description:
      "Replace confusing and insecure blockchain addresses with your customer's real-world counterparts.",
    icon: FaceSmileIcon,
  },
];

export function Features() {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Safe, Private and Compliant Transactions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Authorize transactions with confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The first practical approach for handling complex transaction
            authorizations for critical and complex real-world use cases such as
            e-commerce, trade, and cross-border payments settled on blockchains.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
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
