import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // 1. Block common automated bot user agents
  const userAgent = request.headers.get('user-agent') || '';
  const blockedAgents = ['curl', 'wget', 'python-requests', 'scrapy', 'postmanruntime'];
  const isBlockedAgent = blockedAgents.some(agent => userAgent.toLowerCase().includes(agent));

  if (isBlockedAgent) {
    return new NextResponse('Access Denied: Automated requests are restricted.', { status: 403 });
  }

  // 2. Add security & cache-busting headers for HTML entry points
  const response = NextResponse.next();
  response.headers.set('X-Edge-Protection', 'enabled');

  // Prevent stale browser caching of HTML documents while allowing Next.js static asset caching
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate, s-maxage=0');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/.*).*)',
  ],
};
