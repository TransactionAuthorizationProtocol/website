import { extract } from "https://deno.land/std@0.220.1/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

/*
taip: 6
title: Transaction Parties
author: Pelle Braendgaard <pelle@notabene.id>, Andrés Junge <andres@notabene.id>, Richard Crosby <richard@notabene.id>
status: Draft
type: Standard
created: 2024-01-22
updated: 2024-01-22
discussions-to: https://github.com/TransactionAuthorizationProtocol/TAIPs/pull/8
requires: 2

*/
export interface TAIP {
  slug: string;
  taip: number;
  title: string;
  author: string;
  status: "Draft" | "Review" | "Complete" | "Archived";
  type: string;
  created: Date;
  updated?: Date;
  discustionsTo?: string;
  requires?: string;
  replaces?: string;
  content: string;
}

export function getTAIPs(): TAIP[] {
  const files = Deno.readDirSync("./TAIPs/");
  const taips: TAIP[] = [];
  for (const file of files) {
    if (file.name.endsWith(".md") === false) continue;
    const slug = file.name.replace(".md", "");
    taips.push(getTAIP(slug));
  }
  taips.sort((a, b) => a.taip - b.taip);

  return taips;
}

export function getTAIP(slug: string): TAIP | null {
  const text = Deno.readTextFileSync(join("./TAIPs/", `${slug}.md`));
  try {
    const { attrs, body } = extract(text);
    return {
      ...attrs,
      slug,
      content: body,
    };
  } catch (error) {
    console.log("Error parsing TAIP", slug);
    console.error(error);
    return null;
  }
}
