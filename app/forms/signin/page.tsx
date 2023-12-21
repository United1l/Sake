'use client'

import Image from 'next/image'
import Button from '../../components/buttons'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function LoginPage() {
    const matches = useMediaQuery('(min-width: 768px)')

    return (
        <main className="min-h-screen w-auto flex">
            {matches && 
            <div className="flex-1 flex 
              items-center justify-center bg-[#d90429]">
                <Image
                    src="/form-image-2.png"
                    alt="form image"
                    width={100}
                    height={100}
                    className="w-full h-1/2" 
                />
            </div>}
            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="font-semibold absolute top-4 text-2xl">
                    Log in
                </h2>
                <div className="h-[20rem] w-4/6 border-2 rounded-lg flex flex-col items-center justify-evenly">
                    <input type="email" name="user-email" id="user-email" 
                     className="border-2 w-40 md:w-[220px] p-2 rounded-lg text-sm" placeholder="Email address" />
                    <Button>
                        Log in
                    </Button>
                    <h6 className="text-xs">
                        Or
                    </h6>
                    <div className="h-[7rem] w-4/6 flex flex-col items-center justify-evenly">
                        <h6>Sign in using</h6>
                        <Image
                            src="/g-logo.png"
                            alt="google logo"
                            width={64}
                            height={64}
                            className="cursor-pointer" 
                        />
                    </div>
                    <h6 className="text-xs mt-4">
                        Don't have an account? sign-up
                    </h6>
                </div>
            </div>
        </main>
    )
}