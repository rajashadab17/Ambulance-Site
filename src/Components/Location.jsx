import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Location = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
        }, [])

  return (
    <>
      <Box  minHeight={'100vh'} boxSizing={'border-box'} padding={'100px 0'}>
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
                        <Box bgcolor={'black'} height={'210px'} width={'210px'}  borderRadius={'50%'} className='location x-y-center'>

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
                        <Box bgcolor={'black'} height={'210px'} width={'210px'}  borderRadius={'50%'} className='location x-y-center'>

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

export default Location
