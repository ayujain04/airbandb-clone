import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import './globals.css'

export const metadata = {
  title: 'Catch',
  description: 'Catch - Profile Sharing for Chefs',
}

const font = Nunito ({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = {font.className}>
        <ClientOnly>
        <Modal actionLabel="Submit" title="Hello World" isOpen/>
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
