"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IoMdEyeOff, IoMdLock } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

function SignIn() {
  return (
    <form className='flex max-w-md flex-col gap-4 mt-4'>
      <Button type='button' color='purple' outline>
        <div className='flex items-center justify-start gap-[5.3rem] -ml-[5.8rem]'>
          <Image src='/google.png' alt='google icon' width={22} height={22} />
          <span className='text-[14px] font-[600] leading-[16px] text-[#08090A]'>
            Continue with Google
          </span>
        </div>
      </Button>
      <Button type='button' color='purple' outline>
        <div className='flex items-center justify-start gap-20 -ml-20'>
          <FaFacebook className='text-blue-500 h-5 w-5' />
          <span className='text-[14px] font-[600] leading-[16px] text-[#08090A]'>
            Continue with Facebook
          </span>
        </div>
      </Button>
      <div className='flex items-center justify-between my-3'>
        <Image alt='line' src='/stright-line.png' width={160} height={10} />
        <span className='text-[12px] font-[400] leading-[16px]'>
          Or connect with
        </span>
        <Image alt='line' src='/stright-line.png' width={160} height={10} />
      </div>
      <TextInput id='email1' type='email' placeholder='Email' required />
      <TextInput
        id='password1'
        type='password'
        placeholder='Password'
        required
        rightIcon={IoMdEyeOff}
      />
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' className='' />
          <Label
            htmlFor='remember'
            className='text-[12px] font-[400] leading-[16px] text-[#000000]'
          >
            Remember me
          </Label>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <IoMdLock />
          <h4 className='text-[12px] font-[400] leading-[16px] tracking-[0.02em] text-[#000000]'>
            Forgot password?
          </h4>
        </div>
      </div>
      <Button type='submit' color='dark' outline>
        Continue
      </Button>
    </form>
  );
}
export default SignIn;
