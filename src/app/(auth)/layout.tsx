"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
}

function AuthLayout({children}: AuthLayoutProps) {
    const pathname = usePathname();
    const isSignIn = pathname ==="/sign-in";

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    Work Management
                    <div className="flex items-center gap-2">
                        <Button asChild variant={'ghost'}>
                            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                                {isSignIn ? "Sign Up" : "Sign In"}
                            </Link>
                        </Button>
                    </div>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout