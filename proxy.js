import { NextResponse } from "next/server";
import { verifyToken } from "./src/lib/jwt";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  const isProtected =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/bugs") ||
    pathname.startsWith("/users") ||
    pathname.startsWith("/profile");

  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const payload = verifyToken(token);

    if (!payload) {
      const response = NextResponse.redirect(
        new URL("/login", request.url)
      );

      response.cookies.delete("token");

      return response;
    }

    if (isAuthPage) {
      return NextResponse.redirect(
        new URL("/dashboard", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:path*",
    "/bugs/:path*",
    "/users/:path*",
    "/profile/:path*",
  ],
};