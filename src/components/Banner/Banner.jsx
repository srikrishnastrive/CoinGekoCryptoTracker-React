import BannerImage from '../../assets/banner-1.jpg';




function Banner(){
    return (
        <div className='w-full h-[25rem] relative'>
            <img  src={BannerImage} className='h-full w-full'/>
            <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem]'>
            <div className='flex flex-col justify-center gap-4'>
                <div className='font-semibold text-5xl text-white'>Crypto Tracker</div>
                <div className='font-semibold text-am text-white text-center'>
                Get all info regarding Cryptocurrencies
                </div>
            </div>
            </div>

        </div>
    )
}


export default Banner;
