// app/signup/page.tsx
import { SignupForm } from '@/components/signup-form'

export default function SignupPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign Up for Chat</h1>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
