'use client';
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/toaster';
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
