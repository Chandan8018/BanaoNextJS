"use client";

import { Button, MegaMenu, Navbar, Tabs } from "flowbite-react";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import SignIn from "@/pages/SignIn";
import JoinIn from "@/pages/JoinIn";

function Header() {
  return (
    <MegaMenu className=''>
      <Navbar.Brand href='/'>
        <Image
          alt='logo'
          src='/logo.png'
          width={160}
          height={60}
          className='mr-3'
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/'>Home</Navbar.Link>
        <Navbar.Link href='/'>Company</Navbar.Link>
        <Navbar.Link href='/'>Resources</Navbar.Link>
        <Navbar.Link href='/'>Contact</Navbar.Link>
        <MegaMenu.DropdownToggle>
          <Button type='button' outline color='purple'>
            Sign In
          </Button>
        </MegaMenu.DropdownToggle>
      </Navbar.Collapse>
      <MegaMenu.Dropdown>
        <div className='pt-16 border-y border-gray-200 bg-[#F7F5F9] shadow-sm dark:border-gray-600 dark:bg-gray-800'>
          <div className='mx-auto grid max-w-screen-xl px-4 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-5 gap-14 md:px-6'>
            <div className='flex flex-col justify-center items-start gap-3 col-span-3'>
              <h1 className='text-[36px] font-semibold italic leading-[54px] tracking-[0.02em]'>
                Explore your <span className='text-[#0096C8]'>hobby</span> or{" "}
                <span className='text-[#8064A2]'>passion</span>
              </h1>
              <p className='text-[14px] font-[300] leading-[30px] tracking-[0.02em]'>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </p>
              <p className='text-[14px] font-[300] leading-[30px] tracking-[0.02em]'>
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
              <div className='flex gap-1 mt-20'>
                <Image alt='left' src='/left.png' width={330} height={40} />
                <Image alt='right' src='/right.png' width={330} height={40} />
              </div>
            </div>
            <div className='col-span-2'>
              <Tabs aria-label='Tabs with underline' variant='underline'>
                <Tabs.Item active title='Sign In'>
                  <SignIn />
                </Tabs.Item>
                <Tabs.Item title='Join In'>
                  <JoinIn />
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}

export default Header;
