import Link from 'next/link'
import React from 'react'
import { FaYoutube } from "react-icons/fa";

// const YtIcon = () => {
//     return (
//         <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M25.1585 11.3528C24.94 10.4922 24.2963 9.81458 23.4787 9.58459C21.997 9.16663 16.0555 9.16663 16.0555 9.16663C16.0555 9.16663 10.1141 9.16663 8.63236 9.58459C7.8149 9.81458 7.17105 10.4922 6.95257 11.3528C6.55554 12.9124 6.55554 16.1666 6.55554 16.1666C6.55554 16.1666 6.55554 19.4208 6.95257 20.9806C7.17105 21.841 7.8149 22.5187 8.63236 22.7488C10.1141 23.1666 16.0555 23.1666 16.0555 23.1666C16.0555 23.1666 21.997 23.1666 23.4787 22.7488C24.2963 22.5187 24.94 21.841 25.1585 20.9806C25.5555 19.4208 25.5555 16.1666 25.5555 16.1666C25.5555 16.1666 25.5555 12.9124 25.1585 11.3528Z" fill="#B0ACB5" />
//             <path d="M14.1122 19.1207L19.0781 16.1663L14.1122 13.2117V19.1207Z" fill="#120F14" />
//         </svg>
//     )
// }

const YtLink = () => {
    return (
        <Link href='#'>
            <FaYoutube className='text-[22px] text-[#B0ACB5] hover:text-white transition-all'/>
        </Link>
    )
}

export { YtLink }