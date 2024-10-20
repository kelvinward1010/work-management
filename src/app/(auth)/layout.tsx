import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
    children: React.ReactNode;
}

function AuthLayout({children}: AuthLayoutProps) {
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    Work Management
                    <div className="flex items-center gap-2">
                        <Button variant={'ghost'}>
                            Sign Up
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