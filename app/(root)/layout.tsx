import React from 'react';
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import LeftSidebar from '@/components/shared/LeftSidebar';
import Topbar from '@/components/shared/Topbar';
import RightSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saha',
  deskcription: 'A Social Media App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
              <section className="main-container">
                <div className="main-container">
                  <div className="w-full max-w-4xl">
                    {children}
                  </div>
                </div>
              </section>
            <RightSidebar />
          </main>
          <Bottombar />
          </body>
      </html>
    </ClerkProvider>
  )
}
