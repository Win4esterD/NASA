import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'NASA picture of the day',
  description: "Get every day's picture of the space made by NASA",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
