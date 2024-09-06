'use client'
export default function Layout({
  children,
  user,
}: {
  children: React.ReactNode;
  user:React.ReactNode;
}) {

  
  console.log(user);
  return (
      <>
        <h1>Test layout</h1>
        
        {children}
        {user}
      </>
  )
}