import React from 'react';

const Herosection = () => {
    return (
        <>
            <div className='bg-white mt-4'>
                <div className='container mx-auto h-full flex flex-col md:flex-row items-center justify-between pt-10 md:pt-40 px-6'>
                    {/* Text Section */}
                    <div className='w-full md:w-1/2 text-center md:text-left'>
                        <h1 className='text-3xl md:text-5xl font-bold'>We Build Business!</h1>
                        <h1 className='text-3xl md:text-5xl text-primary-text pt-5'>Convert Ideas Into Softwares!</h1>
                        <p className='pt-5 text-sm md:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae alias,
                            aperiam unde vel similique eos expedita perferendis cumque hic neque deserunt
                            dolorem nesciunt nam porro est quibusdam dignissimos aspernatur a.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                        <img
                            src='../../images/heroImage1.png'
                            alt='Illustration'
                            className='w-full max-w-md mx-auto md:ml-auto'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Herosection;
