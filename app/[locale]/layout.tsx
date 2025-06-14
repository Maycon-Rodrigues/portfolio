import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TranslationProvider, locales, type Locale } from '@/lib/translations';
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: 'pt-BR' },
    { locale: 'en' }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const isPortuguese = (locale as string) === 'pt-BR';
  
  return {
    title: isPortuguese ? "Maycon Rodrigues - Desenvolvedor Full-Stack" : "Maycon Rodrigues - Full-Stack Developer",
    description: isPortuguese ? "Desenvolvedor Full-Stack | Transformando Ideias em Código" : "Full-Stack Developer | Transforming Ideas into Code",
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Validar se o locale é suportado
  if (!['pt-BR', 'en'].includes(locale)) {
    notFound();
  }

  // Carregar as mensagens para o locale atual
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <TranslationProvider initialLocale={locale as Locale} initialMessages={messages}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
} 