import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, LightBulbIcon } from 'npm:@heroicons/react/24/outline'
import { Zero } from './CC0.tsx'


const features = [
  {
    name: 'Public domain',
    description:
      'Fully open and public domain. No need to ask for permission or worry about licensing. Update, remix, and distribute as you see fit.',
    icon: Zero,
    href: "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    name: 'Permissionless Innovation',
    description:
      "Don't depend on gatekeepers and slow committee processes. Updated and adapt to new technologies and challenges as they happen. Innovate and build without asking for permission. Anyone can submit a Transaction Authorization Improvement Proposal.",
    icon: PencilSquareIcon,
    href: './TAIPs/taip-1'
  },
]

export  function Open() {
return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Fully Open and Public Domain
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No gatekeepers, no restrictions, no limits
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
