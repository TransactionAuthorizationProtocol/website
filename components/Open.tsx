import { CubeTransparentIcon, DocumentTextIcon, LockOpenIcon, UserGroupIcon } from "npm:@heroicons/react/24/outline";

const features = [
  {
    name: "Collaborative",
    description:
      "Anyone can contribute to the TAP Protocol to implement new features and contribute to the standards. We provide a standard way to propose changes through TAIPs",
    icon: UserGroupIcon,
  },
  {
    name: "Available to everyone",
    description:
      "All of TAP is open source and public domain. Anyone may implement it without any restrictions or licensing agreements.",
    icon: LockOpenIcon,
  },
  {
    name: "Standard Compliant",
    description:
      "The TAP Protocol is designed to be compatible with international regulations including FATF Travel Rule. Blockchain data is supplemented with a compliant messaging layer.",
    icon: DocumentTextIcon,
  },
];

export function Open() {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-text-primary">
          Fully Open and Public Domain
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Transparent and fair
          </p>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            The TAP protocol was designed and built as a public good.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-text-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-secondary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-text-muted">
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
