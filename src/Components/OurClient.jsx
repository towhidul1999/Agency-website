import React from 'react';

const OurClient = () => {
    return (
        <>
            <div className='bg-gray-100 py-10'>
                <div className='container mx-auto text-center'>
                    <div className=''>
                        <h1 className='text-4xl font-bold mb-4'>Valuable Clients</h1>
                        <p className='text-lg text-gray-600'>
                            We Build Business Convert Ideas Into Software
                        </p>
                    </div>
                </div>
                <div className='container mx-auto flex flex-wrap justify-center items-center space-x-0 sm:space-x-10 text-center pt-16'>
                    <img src="../../images/Logo (1).png" alt="Logo 1" />
                    <img src="../../images/Logo (2).png" alt="Logo 2" />
                    <img src="../../images/Logo (3).png" alt="Logo 3" />
                    <img src="../../images/Logo (4).png" alt="Logo 4" />
                    <img src="../../images/Logo (5).png" alt="Logo 5" />
                    <img src="../../images/Logo (6).png" alt="Logo 6" />
                </div>

            </div>
        </>
    );
};

export default OurClient;
