import type { Metadata } from 'next';
import { Inter, Inconsolata, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import { FontProvider } from '@/Providers/FontProvider';

const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Mentor | Dictionary web app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
