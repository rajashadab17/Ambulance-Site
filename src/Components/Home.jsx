import { Box, Button, Typography } from '@mui/material'
import Ambulance_Pic from '../Images/Ambulance.jpg'
import React from 'react'

const Home = () => {
    return (
        <>
            <Box height={'auto'} boxSizing={'border-box'} padding={'70px 0'} position={'relative'} className='main-section'>
                <Box height={'100vh'} width={'100vw'} bgcolor={'red'}>
                    <img src={Ambulance_Pic} className='bg-img' width={'100%'} height={'100%'} alt="" />
                </Box>
                <Box bgcolor={'rgba(0,0,0,0.3)'} height={'100vh'} margin={'70px 0'}
                className='x-y-center' 
                // display={'flex'} justifyContent={'center'} alignItems={'start'} 
                position={'absolute'} top={0} zIndex={1} width={'100vw'}>
                    <Box className='col x-y-center'>
                        <Typography textTransform={'uppercase'} color={'white'} textAlign={'center'} fontSize={'56px'} fontWeight={'bold'}>All Pakistan Private Ambulance Service</Typography>
                        <Button variant='contained' className='nav-btn bg-btn' sx={{width:'170px'}}>Book Now</Button>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor={'white'} minHeight={'100vh'} boxSizing={'border-box'} padding={'30px 0'}>
                <Typography className='section-heading' fontSize={'46px'} fontWeight={'bold'} textAlign={'center'} fontFamily={`"Ubuntu Sans", sans-serif`}>Our Service</Typography>
                <Typography fontSize={'30px'} fontWeight={'bold'} textAlign={'center'} margin={'20px'} fontFamily={`"Ubuntu Sans", sans-serif`}>Ambulance Service</Typography>
                <Box className='space-around ambulance-service' margin={'50px 0'} boxSizing={'border-box'}>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Medical Transport</Typography>
                        <Typography margin={'10px 0'}>
                            Comfortable non-emergency medical transportation. We ensure patients reach their appointments or medical facilities safely and comfortably.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Inter-City Transfers</Typography>
                        <Typography margin={'10px 0'}>
                            Efficient transportation between cities. Our service ensures seamless transfers for patients requiring medical care beyond their current location.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Event Medical Services</Typography>
                        <Typography margin={'10px 0'}>
                            On-site medical assistance for events. We provide professional medical support to ensure the safety and well-being of event attendees.
                        </Typography>
                    </Box>
                </Box>
                <Box className='x-y-center'>
                    <Button variant='contained' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box>
                <Typography fontSize={'30px'} fontWeight={'bold'} textAlign={'center'} margin={'20px'} fontFamily={`"Ubuntu Sans", sans-serif`}>Rental Service</Typography>
                <Box className='space-around rental-services' margin={'50px 0'} boxSizing={'border-box'}>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Medical Equipment</Typography>
                        <Typography margin={'10px 0'}>
                            Essential medical equipment for various healthcare needs. Our inventory includes a wide range of equipment designed to support patients during transportation and medical procedures, ensuring their comfort and safety at all times.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Cardiac Monitor</Typography>
                        <Typography margin={'10px 0'}>
                            Advanced cardiac monitoring equipment for critical care. Our cardiac monitors provide real-time monitoring of vital signs, allowing our medical team to closely monitor patients' cardiac health and respond promptly to any changes or emergencies during transportation.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            height: '300px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography sx={{ color: 'var(--bg-color)', textDecoration: 'underline' }} textTransform={'uppercase'} fontSize={'20px'} fontWeight={'bold'} >Oxygen Cylinder</Typography>
                        <Typography margin={'10px 0'}>
                            Life-saving oxygen cylinders for patients in need of respiratory support. Our oxygen cylinders are equipped with the necessary supplies to deliver oxygen therapy to patients, ensuring they receive the vital oxygen they require, even during transit or emergencies.
                        </Typography>
                    </Box>
                </Box>
                <Box className='x-y-center'>
                    <Button variant='contained' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box>
            </Box>
            <Box minHeight={'100vh'} boxSizing={'border-box'} padding={'30px 0'}>
                <Typography className='section-heading' fontSize={'46px'} fontWeight={'bold'} textAlign={'center'} fontFamily={`"Ubuntu Sans", sans-serif`}>Our Ambulances</Typography>
                <Box className='space-around ambulances' margin={'50px 0'} boxSizing={'border-box'}>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Hiace</Typography>
                    </Box>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Suzuki</Typography>
                    </Box>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Bolan</Typography>
                    </Box>
                </Box>
                <Box className='x-y-center'>
                    <Button variant='contained' href='/ambulances' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box>
            </Box>
            <Box minHeight={'100vh'} boxSizing={'border-box'} padding={'30px 0'}>
                <Typography className='section-heading' fontSize={'46px'} fontWeight={'bold'} textAlign={'center'} fontFamily={`"Ubuntu Sans", sans-serif`}>Our Locations</Typography>
                <Box className='space-around locations' margin={'50px 0'} boxSizing={'border-box'}>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://www.manahilambulance.com/wp-content/uploads/2023/03/karachi_ambulance.jpg" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Karachi</Typography>
                    </Box>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.pexels.com/photos/12912453/pexels-photo-12912453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Lahore</Typography>
                    </Box>
                    <Box
                        className='col y-center space-around'
                        sx={{
                            height: '350px',
                            width: '20%',
                            borderRadius: '50px',
                            background: '#e0e0e0',
                            boxShadow: `8px 8px 16px #afafaf,
                            -8px -8px 16px #ffffff`,
                            padding: '30px 20px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Box bgcolor={'black'} height={'210px'} width={'210px'} borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.pexels.com/photos/16693762/pexels-photo-16693762/free-photo-of-faisal-masjid-in-islamabad.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Islamabad</Typography>
                    </Box>
                </Box>
                <Box className='x-y-center'>
                    <Button variant='contained' href='/locations' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box>
            </Box>
        </>
    )
}

export default Home
