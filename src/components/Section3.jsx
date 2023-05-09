import img from '../img/hero-image.png'


const Section3 = ({handleDown, handleUp, index}) => {
    return(
        <>
            <div className="hero container mx-auto mt-20 mb-20">
            <div className="flex flex-col md:flex-row items-center">
             <div className='p-3 md:p-1 md:w-2/5 ms-28'>
                <h3 className='text-[#8b7b7b] bg-[#fcf2f0] py-1 px-2 inline tracking-widest text-sm'>WHY CHOOSE US</h3>
                <h1 className='text-3xl lg:text-5xl my-6 font-black leading-tight lg:leading-snug'>This is section 3</h1>
                <button onClick={() => handleUp(index)} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>up</button>
                <button onClick={() => handleDown(index)} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>down</button>           
                </div>
            <img className='md:w-3/5' src={img}/>
            </div>
        </div>
        </>
    )
}

export default Section3;