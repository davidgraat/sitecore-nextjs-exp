import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { MiddlewarePlugin } from '../index';
import server from 'next/server';

class SsrRouterPlugin implements MiddlewarePlugin {
  order = 1;
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    console.log(req.nextUrl.pathname);
    //return Promise.resolve(res || server.NextResponse.next());
    if (req.nextUrl.pathname === '/styleguide/test-ssr') {
      const url = req.nextUrl.clone();
      url.pathname = '/ssr' + req.nextUrl.pathname;
      return NextResponse.rewrite(url);
    } else {
      return Promise.resolve(res || server.NextResponse.next());
    }
  }
}

export const ssrRouterPlugin = new SsrRouterPlugin();
