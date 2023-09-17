import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css';

// Metadata for SEO
export const metadata = {
    title: 'Saha',
    deskcription: 'A Social Media App'
}

// Importing Inter Font from Google Fonts
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ 
children 
}: { children: React.ReactNode 
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}