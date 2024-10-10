'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { metadata } from './metadata';
import carsBg from '../app/assets/images/cars-bg.webp';
import { Suspense } from 'react';
import Spinner from './components/LoadingSpinner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <main>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${carsBg.src})` }}
          >
            <Suspense fallback={<Spinner />}>
              <Provider store={store}>{children}</Provider>
            </Suspense>
          </div>
        </main>
      </body>
    </html>
  );
}
