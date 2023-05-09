import { useRef } from "react";

const Team = ({setReverseOrder, reverseOrder, handleDown, handleUp, index }) => {
  const btn = useRef(null)

    return(
        <div className="team py-20">
          <div className="container mx-auto text-center">
            <h3 className='text-center text-[#8b7b7b] tracking-widest text-lg font-medium'>WHY CHOOSE US</h3>
            <h2 className='text-center text-3xl lg:text-5xl my-6 font-black'>Our Expert Team Member</h2>
            <div className="members flex flex-col lg:flex-row my-14 gap-14 p-4">
                <div className="member2 lg:w-1/3 relative">
                  <div className="bg-white p-5 absolute w-10/12 right-0 bottom-8 border-r-4 border-primary">
                    <span className="text-[#8b7b7b] text-md ">President of sales</span>
                    <h3 className="text-2xl font-black my-2">Darlene Robertson</h3>
                    <div className="icons flex flex-row items-center gap-6 mt-3 divide-x">
                    <i className="fi fi-brands-facebook"></i>
                    <i className="fi fi-brands-twitter ps-6"></i>
                    <i className="fi fi-brands-instagram ps-6"></i>
                    <i className="fi fi-brands-youtube ps-6"></i>
                    </div>
                  </div>
                </div>
                <div className="member1 lg:w-1/3 relative">
                <div className="bg-white p-5 absolute w-10/12 right-0 bottom-8">
                    <span className="text-[#8b7b7b] text-md ">Web Designer</span>
                    <h3 className="text-2xl font-black my-2">Guy Hawkins</h3>
                  </div>
                </div>
                <div className="member3 lg:w-1/3 relative">
                <div className="bg-white p-5 absolute w-10/12 right-0 bottom-8">
                    <span className="text-[#8b7b7b] text-md ">Nursing Assistant</span>
                    <h3 className="text-2xl font-black my-2">Dianne Russell</h3>
                  </div>
                </div>
            </div>
            <button onClick={() => handleUp(index)} ref={btn} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>up</button>
                <button onClick={() => handleDown(index)} ref={btn} className='btn btn-primary mt-10 transition duration-500 ease-in-out'>down</button>
          </div>
        </div>
    )
}

export default Team;