import { NextResponse, type NextRequest } from "next/server";

/**
 * Two domains, one app:
 *   treelance.ai  → "/"        (Treelance product — default)
 *   treesos.io    → "/company" (Trees OS company)
 *
 * Only the root path is host-routed; deeper paths are shared across both.
 */
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const url = req.nextUrl;

  if (url.pathname === "/" && host.includes("treesos")) {
    url.pathname = "/company";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
