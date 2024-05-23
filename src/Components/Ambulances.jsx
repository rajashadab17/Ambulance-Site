import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Ambulances = () => {

    useEffect(() => {
        window.scrollTo(0,0)
        }, [])

  return (
    <>
      <Box  minHeight={'100vh'} boxSizing={'border-box'} padding={'100px 0'}>
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
                        <Box bgcolor={'black'} height={'210px'} width={'210px'}  borderRadius={'50%'} className='location x-y-center'>

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
                        <Box bgcolor={'black'} height={'210px'} width={'210px'}  borderRadius={'50%'} className='location x-y-center'>

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
                        <Box bgcolor={'black'} height={'210px'} width={'210px'}  borderRadius={'50%'} className='location x-y-center'>

                            <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </Box>
                        <Typography fontSize={'20px'} fontWeight={'bold'}>Bolan</Typography>
                    </Box>
                </Box>
                <Box className='x-y-center'>
                    <Button variant='contained' href='/locations' className='nav-btn' sx={{ bgcolor: 'red', borderRadius: '20px', width: '180px' }}>Explore More</Button>
                </Box>
            </Box>
    </>
  )
}

export default Ambulances
