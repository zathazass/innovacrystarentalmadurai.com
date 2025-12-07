'use client'
import React from 'react'
import { assets } from '@/assets'
import Image from 'next/image'
import { Info } from '@/lib/constants/information'

const Header = () => {
  const { LocationSvg, ContactSvg, MailSvg, GstinSvg } = assets
  const { name, address, contact, gstin } = Info

  return (
    <header className="z-10 bg-primary text-white text-sm">
      {/* Top contact bar */}
        <div className="flex flex-wrap justify-center max-w-7xl px-4 m-auto sm:justify-between p-2">
          
          {/* Location */}
          <address className="not-italic items-center gap-1 hidden md:flex">
            <Image src={LocationSvg} alt="location" priority width={16} height={16} />
            <span className="uppercase">
              {address.location}, {address.city}
            </span>
          </address>

          {/* Contact numbers */}
          <div className="flex items-center gap-1">
            <Image src={ContactSvg} alt="contact" priority width={19} height={21} />
            <div className="flex flex-row sm:flex-row gap-1 sm:gap-3">
              {contact.phone.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  aria-label={`Call ${name} at ${phone}`}
                  className="hover:underline"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="hidden sm:flex items-center gap-1">
            <Image src={MailSvg} priority alt="email" width={18} height={18} />
            <a
              href={`mailto:${contact.email}`}
              className="hover:underline"
              aria-label={`Send an email to ${name}`}
            >
              {contact.email}
            </a>
          </div>

          {/* GSTIN */}
          <div className="hidden lg:flex items-center gap-1 ">
            <Image src={GstinSvg} alt="GSTIN" width={18} height={20} />
            <span>{`GSTIN ${gstin}`}</span>
          </div>
        </div>
    </header>
  )
}

export default Header
