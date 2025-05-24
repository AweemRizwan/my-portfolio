import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const StackItems = [
    {id:1 , name: 'React', icon: FaReact, color: '#61DBFB'},
    {id:2 , name: 'Node.js', icon: IoLogoNodejs, color: '#8CC84B'}, 
    {id:3 , name: 'TypeScript', icon: SiTypescript, color: '#007ACC'},
    {id:4 , name: 'MongoDB', icon: SiMongodb, color: '#47A248'},
    {id:5 , name: 'Next.js', icon: TbBrandNextjs, color: '#000000'},

]
export const Stack = () => {
    return (
        <section id='stack' className='py-16 glass'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
                {StackItems.map((item) => {
                    // const Icon = item.icon
                    return (
                        <div key={item.id} className='flex flex-col items-center justify-center p-4 rounded-xl'>
                            <div className='mb-4 bg-white/10 p-6 roumded-xl '>
                                {React.createElement(item.icon, {
                                    className: 'w-32 h-32',
                                    style: {color: item.color}
                                })}
                            </div>
                                <p className='text-gray-400 font-semibold'>{item.name}</p>

                        </div>
                    )
                })} 
            </div>
        </section>
    )
}