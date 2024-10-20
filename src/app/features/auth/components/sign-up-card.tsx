import { DottedSeparator } from '@/components/dotted-separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export function SignUpCard() {
    return (
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl'>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to our{" "}
                    <Link href={'#'}>
                        <span className='text-blue-700'>Privacy Policy</span>
                    </Link>
                    and{" "}
                    <Link href={'#'}>
                        <span className='text-blue-700'>Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7'>
                <form className='space-y-4'>
                    <Input 
                        required
                        type='name'
                        value={''}
                        onChange={() => {}}
                        placeholder='Enter your name'
                        disabled={false}
                    />
                    <Input 
                        required
                        type='email'
                        value={''}
                        onChange={() => {}}
                        placeholder='Enter email address'
                        disabled={false}
                    />
                    <Input 
                        required
                        type='passward'
                        value={''}
                        onChange={() => {}}
                        placeholder='Enter password'
                        disabled={false}
                        min={8}
                        max={256}
                    />
                    <Button variant={'teal'} disabled={false} size={'lg'} className='w-full'>
                        Sign Up
                    </Button>
                </form>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button disabled={false} className='w-full' size={'lg'} variant={'secondary'}>
                    Login with Google
                </Button>
                <Button disabled={false} className='w-full' size={'lg'} variant={'secondary'}>
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    )
}
