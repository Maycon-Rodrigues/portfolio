'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Tipos
export type Locale = 'pt-BR' | 'en';
export const locales: Locale[] = ['pt-BR', 'en'];
export const defaultLocale: Locale = 'pt-BR';

// Context
interface TranslationContextType {
  locale: Locale;
  messages: any;
  setLocale: (locale: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider
interface TranslationProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
  initialMessages: any;
}

export function TranslationProvider({ children, initialLocale, initialMessages }: TranslationProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState(initialMessages);
  const pathname = usePathname();

  // Atualizar locale baseado na URL
  useEffect(() => {
    const pathLocale = pathname.split('/')[1] as Locale;
    if (locales.includes(pathLocale) && pathLocale !== locale) {
      setLocaleState(pathLocale);
      
      // Carregar novas mensagens
      import(`../locales/${pathLocale}.json`)
        .then((module) => setMessages(module.default))
        .catch(console.error);
    }
  }, [pathname, locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    import(`../locales/${newLocale}.json`)
      .then((module) => setMessages(module.default))
      .catch(console.error);
  };

  return (
    <TranslationContext.Provider value={{ locale, messages, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Hook para usar traduções
export function useTranslations(namespace?: string) {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }

  return (key: string) => {
    try {
      const keys = namespace ? `${namespace}.${key}`.split('.') : key.split('.');
      let value = context.messages;
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    } catch {
      return key;
    }
  };
}

// Hook para o locale atual
export function useLocale() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useLocale must be used within a TranslationProvider');
  }
  return context.locale;
}

// Hook para trocar locale
export function useSetLocale() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useSetLocale must be used within a TranslationProvider');
  }
  return context.setLocale;
} 