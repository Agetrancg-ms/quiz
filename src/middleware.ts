import { NextResponse } from 'next/server';

// Middleware padrão, mantido apenas se necessário para o Next.js
export function middleware() {
  return NextResponse.next();
}
