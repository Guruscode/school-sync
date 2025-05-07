import { NextRequest, NextResponse } from "next/server";

// Middleware function to protect routes
export function middleware(request: NextRequest) {
  // Example: Check for an auth token in cookies
  const token = request.cookies.get("auth_token")?.value;

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/admin", "/teacher", "/parent", "/student"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect to login if no token and trying to access a protected route
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify which paths the middleware should apply to
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/teacher/:path*", "/parent/:path*", "/student/:path*"],
};