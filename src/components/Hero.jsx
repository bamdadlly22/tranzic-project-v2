import { useRef } from 'react';
import img from '../img/hero-image.png'


const Hero = ({setReverseOrder, reverseOrder, handleDown, handleUp, index, setPrimaryColor }) => {
    const btn = useRef(null)
    return(
        <>
        <div className="hero container mx-auto mt-10 mb-20">
            <div className="flex flex-col md:flex-row items-center">
            <img className='md:w-3/5' src={img}/>
             <div className='p-3 md:p-1 md:w-2/5'>
                <h3 className='text-[#8b7b7b] bg-[#fcf2f0] py-1 px-2 inline tracking-widest text-sm'>WHY CHOOSE US</h3>
                <h1 className='text-3xl lg:text-5xl my-6 font-black leading-tight lg:leading-snug'>Tranzic Website Only For your Logistics <span className='text-[#efd204] underline'>Support</span></h1>
                <p className='text-[#9ea09f] text-md lg:text-lg me-5 lg:leading-8 pb-5 border-b-2 border-dashed'>Dramatically supply transparent deliverables beforese back comp internal or "organic" sources. Comp transparent is the backward leverage other.</p>
                <div className='numbers flex flex-row gap-x-8 lg:gap-x-14 mt-8' >
                    <div className='flex flex-col'><h4 className='text-4xl font-black'>12k+</h4><span className='mt-3 text-[#9ea09f]'>Delivery Done</span></div>
                    <div className='flex flex-col'><h4 className='text-4xl font-black'>10+</h4><span className='mt-3 text-[#9ea09f]'>Years Ex.</span></div>
                    <div className='flex flex-col'><h4 className='text-4xl font-black'>4.5k+</h4><span className='mt-3 text-[#9ea09f]'>Reviews</span></div>
                </div>
                <button onClick={() => handleUp(index)} ref={btn} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>up</button>
                <button onClick={() => handleDown(index)} ref={btn} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>down</button>
                <input onChange={e => setPrimaryColor(e.target.value)} className='ms-4 border p-3 w-5/12 lg:w-fit' type="text" name="" placeholder='write color code...' />
             </div>
            </div>
        </div>
        </>
    )
}

export default Hero;