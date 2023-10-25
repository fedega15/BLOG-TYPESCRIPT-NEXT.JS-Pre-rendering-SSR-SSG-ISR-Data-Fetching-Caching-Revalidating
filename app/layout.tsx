import './globals.css'
import Navbar from './components/NavBar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "TS Y NEXT BLOG",
  description: 'FEDERICO GALASSI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
