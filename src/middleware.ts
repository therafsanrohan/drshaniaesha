import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Block common malicious bot user agents
  const userAgent = request.headers.get('user-agent') || '';
  const blockedAgents = ['curl', 'wget', 'python-requests', 'scrapy', 'postmanruntime'];
  const isBlockedAgent = blockedAgents.some(agent => userAgent.toLowerCase().includes(agent));

  if (isBlockedAgent) {
    return new NextResponse('Access Denied: Automated bots are restricted.', { status: 403 });
  }

  // 2. Add an additional layer of security headers dynamically at the edge
  const response = NextResponse.next();
  response.headers.set('X-Edge-Protection', 'enabled');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
