import { UserButton } from "@clerk/clerk-react";

export default function ProtectedPage() {
  return (
    <>
      <UserButton />
      <h1>Protected Page</h1>
    </>
  )
}