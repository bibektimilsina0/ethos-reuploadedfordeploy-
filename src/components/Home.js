
import Vr from './VrApp'
import Shortdesc from './Shortdesc';
import Navbar from './Navbar';
import adv from '../image/adventure.jpeg'
import culture from '../image/culture.jpeg';
import nature from '../image/nature.jpeg';
import wellness from '../image/wellness.jpeg'
import other from '../image/others.jpeg'
// import FullView from './components/FullView';
import '../vrapp.css'

function Home() {
   
    return (
        <div className="home">
            <Navbar />
            <div className='flex flex-col'>
                
            <div className='left m-0 -mb-1'>
                <Vr />
                <Shortdesc />
            </div>
            {/* <div className='w-full h-15 bg-white'></div> */}
            <div className='flex  mb-5 mt-8 font-mono bg-slate-200 justify-around'>
                <div>
                 <h1 className='text-2xl mt-8 text-lime-500 font-semibold mr-8'>EXPLORE </h1>
                    <h1 className='text-2xl mt-3 text-orange-900 font-medium'>NEPAL!</h1>
                    <h4 className='text-lg mt-3 font-mono  '>#LifetimeExperiences</h4>
                </div>
                <div className='m-2 w-[170px] h-[180px] flex flex-col hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center rounded-md hover:shadow'>
                    <h4 className="text-lg justify-center font-medium font-serif" >Adventure</h4>
                    <img className="justify-center rounded"src={adv} alt="" style={{ height: '130px', width: '150px' }} />
                </div>
                <div  className='m-2 w-[170px] h-[180px] flex flex-col hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center rounded-md hover:shadow'>
                    <h4 className="text-lg font-medium font-serif" >Culture</h4>
                    <img src={culture} alt="" className="rounded" style={{ height: '130px', width: '150px' }} />
                </div>
                <div  className='m-2 w-[170px] h-[180px] flex flex-col hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center rounded-md hover:shadow'>
                    <h4 className="text-lg font-medium font-serif" >Nature</h4>
                    <img src={nature} alt="" className="rounded" style={{ height: '130px', width: '150px' }} />
                </div>
                <div  className='m-2 w-[170px] h-[180px] flex flex-col hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center rounded-md hover:shadow'>
                    <h4 className="text-lg font-medium font-serif" >Wellness</h4>
                    <img src={wellness} alt="" className="rounded" style={{ height: '130px', width: '150px' }} />
                </div>
                <div  className='m-2 w-[170px] h-[180px] flex flex-col hover:bg-gradient-to-b from-sky-400 to-slate-200 items-center justify-center rounded-md hover:shadow'>
                <h4 className="text-lg font-medium font-serif" >Others</h4>
                <img src={other} alt="" className="rounded" style={{ height: '130px', width: '150px' }} />
                </div>
            </div>
            </div>


            {/* <FullView /> */}
        </div >

    );
}
export default Home;