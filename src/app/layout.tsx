export const metadata = {
  title:{
    absolute:"",
    default:"Learing Next.Js",
    template:" %s | template key",
  }
}

export default function RootLayout({
  children,
  user,
}: {
  user:React.ReactNode
  children: React.ReactNode;
 
}) {

  return (
    <html lang="en">
      <body>{children}
        {user}
      </body>
    </html>
  )
}
