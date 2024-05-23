import { Mail, WhatsApp } from '@mui/icons-material'
import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            <Box minHeight={'100vh'} boxSizing={'border-box'} padding={'100px 0'}>
                <Typography className='section-heading' fontSize={'46px'} fontWeight={'bold'} textAlign={'center'} fontFamily={`"Ubuntu Sans", sans-serif`}>Contact Us</Typography>
                <Box className='space-between contact'
                    sx={{
                        height: '90vh',
                        width: '80%',
                        borderRadius: '50px',
                        background: '#e0e0e0',
                        boxShadow: `8px 8px 16px #afafaf,
                    -8px -8px 16px #ffffff`,
                        padding: '30px 20px',
                        boxSizing: 'border-box'
                    }}
                    margin={'50px auto'} boxSizing={'border-box'}>
                    <Box height={'100%'} width={'50%'} boxSizing={'border-box'} padding={'30px'} className='col space-around'>
                        <Box height={'25%'} width={'100%'} className='col space-around x-center'>
                            <Typography variant='h4' fontWeight={'bold'}>Our Office</Typography>
                            <Box>
                                <Typography >Liaquat National Hospital,</Typography>
                                <Typography >Opposite Gate 2, Karachi</Typography>
                            </Box>
                        </Box>
                        <Box height={'30%'} width={'100%'} className='col space-around x-center'>
                            <Typography variant='h4' fontWeight={'bold'}>Want to Contact Us?</Typography>
                            <Box className='col space-around' height={'40%'}>
                                <Box className='y-center'>
                                    <WhatsApp />
                                    <Typography>&nbsp;&nbsp;: +92 305 2073013</Typography>
                                </Box>
                                <Box className='y-center'>
                                    <Mail />
                                    <Typography>&nbsp;&nbsp;: azizkhan6653@gmail.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box height={'100%'} width={'50%'} bgcolor={'#c9c9c98f'} borderRadius={'25px'} className='col y-center' padding={'20px'} boxSizing={'border-box'}>
                        <Typography variant='h4' textAlign={'center'}>Contact Form</Typography>
                        <Box className=' col space-around' height={'400px'} width={'100%'}>
                            <TextField variant='outlined' label='Name' fullWidth />
                            <TextField variant='outlined' label='Email' fullWidth />
                            <TextareaAutosize
                                style={{
                                    background: 'transparent',
                                    border: '1px solid grey',
                                    borderRadius: '9px',
                                    padding: '5px'
                                }}
                                minRows={5}
                                aria-label="maximum height"
                                placeholder="What you are concerning for?"
                            />
                            <br />
                            <Button variant='contained' className='nav-btn' sx={{ width: '100px !important', borderRadius: '9px', padding: '0px !important' }}>Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Contact
