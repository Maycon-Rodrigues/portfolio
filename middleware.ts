import { NextRequest, NextResponse } from 'next/server';

// Configurações
const locales = ['pt-BR', 'en'];
const defaultLocale = 'pt-BR';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verifica se já tem um locale na URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Detecta o idioma preferido do navegador
    const preferredLocale = request.headers.get('accept-language')?.includes('en') ? 'en' : defaultLocale;
    
    // Redireciona para a URL com locale
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 