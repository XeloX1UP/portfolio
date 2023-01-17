import NavBar from "../components/navs/navBar"
import 'bulma/css/bulma.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
