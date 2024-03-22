import './globals.css'
import { robotoFont, squarePegFont, quicksandFont } from '@/utils/fonts';

export const metadata = {
  title: 'FILEHANDLER',
  description: 'Homepage for foodera.dk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksandFont.className} ${robotoFont.variable} ${squarePegFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
