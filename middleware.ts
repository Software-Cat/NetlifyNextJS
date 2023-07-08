import { NextRequest } from "next/server";
import { MiddlewareRequest } from "@netlify/next";

export async function middleware(nextRequest: NextRequest) {
    const middlewareRequest = new MiddlewareRequest(nextRequest)
    const response = await middlewareRequest.next()
    const message = `This was a static page but has been transformed in ${nextRequest?.geo?.city}, ${nextRequest?.geo?.country} using middleware!`
    response.replaceText("#message", message)
    response.setPageProp("message", message)

    return response
}

export const config = {
    matcher: '/static/:path*',
}