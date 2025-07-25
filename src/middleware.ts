import { NextResponse } from 'next/server';

// Remove this file if you are not using middleware. If you want to keep it, export a default function.
export function middleware() {
  // Example: do nothing
  return NextResponse.next();
}
