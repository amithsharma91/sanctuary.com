// SSR head metadata store used by the static prerender step.
// Each page renders exactly one <PageMeta>; on the server it records the
// resolved head values here so scripts/prerender.mjs can inject them into the
// built HTML before any client JavaScript executes.

export interface ServerHeadData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType: "website" | "article";
  canonical?: string;
  robots?: string;
}

let serverHead: ServerHeadData | null = null;

export function setServerHead(head: ServerHeadData): void {
  serverHead = head;
}

/** Returns and clears the head captured by the most recent server render. */
export function takeServerHead(): ServerHeadData | null {
  const head = serverHead;
  serverHead = null;
  return head;
}
