import NavbarReferral from '@/containers/layout/NavbarReferral'
import React from 'react'

export default function ReferralLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <NavbarReferral />
            {children}
        </ >
    )
}
