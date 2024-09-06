import React from "react";

export default function complexDashboard({
  children,
  users
}: {
  children: React.ReactNode;
  users: React.ReactNode;

}) {
  return (
    <>
     <>{users}</>
     {/* <Users/> */}
    <h1>Hello from layout</h1>
      {children}
      
     
    </>
  )
}
