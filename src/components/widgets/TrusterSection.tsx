import Image from 'next/image'
import React from 'react'

const TrusterSection = () => {
    return (
        <div

            className={`flex flex-col items-center `}
        >

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 ml-[300px] mt-[-30px]'>
                <div className='py-6 px-8 rounded-lg bg-white mt-[5px]'>
                    <Image src={'/trust5.png'} className='h-[50px] w-[130%]' alt='' width={100} height={300} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white mt-[-13px]'>
                    <Image src={'/trust2.png'} className='h-[80px] w-[130%]' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white mt-[-1px]'>
                    <Image src={'/trust3.png'} className='h-[50px] w-[130%]' alt='' width={100} height={100} />
                </div>
                <div className='py-6 px-8 rounded-lg bg-white '>
                    <Image src={'/trust4.png'} className='h-[50px] w-[130%]' alt='' width={100} height={100} />
                </div>


            </div>


        </div>
    )
}

export default TrusterSection