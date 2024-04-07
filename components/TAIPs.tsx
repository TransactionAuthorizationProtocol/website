import { Fragment } from "npm:react";
import { Menu, Transition } from "npm:@headlessui/react";
import { EllipsisVerticalIcon } from "npm:@heroicons/react/20/solid";

import { getTAIPs, TAIP } from "@/utils/taips.ts";

const statuses = {
  Complete: "text-green-700 bg-green-50 ring-green-600/20",
  Review: "text-green-700 bg-green-50 ring-green-600/20",
  Draft: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  const TAIPs = getTAIPs();
  return (
    <>
      <ul role="list">
        {TAIPs.map((taip) => (
          <li
            key={taip.slug}
            className="flex items-center justify-between"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-blue-500">TAIP-{taip.taip}</p>
                <p className="text-md font-semibold leading-6 text-gray-900">
                  <a
                    href={taip.slug}
                  >
                    {taip.title}
                  </a>
                </p>
                <p
                  className={classNames(
                    statuses[taip.status],
                    "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
                  )}
                >
                  {taip.status}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
