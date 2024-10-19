import Link from 'next/link'
import React from 'react'
import { IoLogoVk } from "react-icons/io5";

// const VkIcon = () => {
//     return (
//         <svg className="" width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" clipRule="evenodd" d="M8.78755 9.16663H6.38075C5.69308 9.16663 5.55554 9.4903 5.55554 9.84711C5.55554 10.4845 6.37151 13.6456 9.3548 17.8263C11.3437 20.6814 14.1458 22.2291 16.6957 22.2291C18.2255 22.2291 18.4148 21.8854 18.4148 21.2933V19.1354C18.4148 18.4479 18.5597 18.3107 19.0442 18.3107C19.4012 18.3107 20.0131 18.4891 21.4411 19.8657C23.073 21.4972 23.342 22.2291 24.2599 22.2291H26.6667C27.3544 22.2291 27.6982 21.8854 27.4999 21.207C27.2828 20.5309 26.5037 19.5499 25.4698 18.3872C24.9088 17.7244 24.0674 17.0106 23.8124 16.6536C23.4554 16.1948 23.5574 15.9908 23.8124 15.583C23.8124 15.583 26.7447 11.4532 27.0507 10.0512C27.2037 9.54124 27.0507 9.16663 26.3229 9.16663H23.9161C23.3041 9.16663 23.022 9.4903 22.8689 9.84711C22.8689 9.84711 21.645 12.8298 19.9112 14.7672C19.3502 15.328 19.0952 15.5065 18.7892 15.5065C18.6362 15.5065 18.4147 15.328 18.4147 14.8182V10.0512C18.4147 9.43929 18.2372 9.16663 17.7271 9.16663H13.945C13.5626 9.16663 13.3325 9.45056 13.3325 9.71972C13.3325 10.2997 14.1995 10.4335 14.2889 12.065V15.6085C14.2889 16.3854 14.1485 16.5262 13.8425 16.5262C13.0266 16.5262 11.0419 13.5303 9.86472 10.1021C9.63407 9.43578 9.40265 9.16663 8.78755 9.16663Z" fill="#B0ACB5" />
//         </svg>
//     )
// }

// TODO: Вынести ссылки на соц сети в константы

const VkLink = () => {
    return (
        <Link href='#'>
            <IoLogoVk className='text-[22px] text-[#B0ACB5] hover:text-white transition-all' />
        </Link>
    )
}

export { VkLink }