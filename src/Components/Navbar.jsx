import { CloseRounded, MenuRounded } from '@mui/icons-material'
import { Box, Button, Dialog, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const arr = ['left', 'right', 'top', 'bottom']
    const DrawerStyle = {
        height: "100%",
        width: '80%'
    }
    return (
        <>
            <Box bgcolor={'#f5f5f5f7'} position={'fixed'} zIndex={10} width={'100%'} height={'70px'} boxSizing={'border-box'} className='space-between y-center'>
                <Box width={'auto'} padding={'0 5px'} boxSizing={'border-box'} className='x-y-center'>
                    <img height={'50px'} width={'200px'} src="https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
                </Box>
                <Box width={'50%'} className='nav-menu y-center'>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="/ambulances">Ambulances</a>
                        </li>
                        <li>
                            <a href="/locations">Location</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </Box>
                <Button variant='contained' href='/locations' className='nav-btn book-btn' sx={{bgcolor: 'red', borderRadius: '20px', width: '130px', fontSize:'14px',marginRight:'20px'}}>Book Now</Button>
                            {/* <button className='nav-btn' >Book Now</button> */}
                <Box height={'100%'} width={'70px'} className='menu-btn x-y-center'>
                    <MenuRounded sx={{ cursor: 'pointer', color: 'var(--bg-color)' }} onClick={toggleDrawer(arr[1], true)} fontSize='large' />
                </Box>
                <Drawer
                    PaperProps={{ sx: DrawerStyle }}
                    anchor="right"
                    open={state[arr[1]]}
                    onClose={toggleDrawer(arr[1], false)}
                >
                    <Box
                        sx={{ width: "100%", height: "70%" }}
                        role="presentation"
                        onClick={toggleDrawer(arr[1], false)}
                        onKeyDown={toggleDrawer(arr[1], false)}
                    >
                        <Box height={"10%"} className="y-center" paddingLeft={"32px"} sx={{ cursor: "pointer" }}>
                            <CloseRounded />
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <NavLink to={'/'} style={{textDecoration:'none'}}>
                                        <ListItemText style={{ color: "black" }} primary={'Home'} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <NavLink to={'/gallery'} style={{textDecoration:'none'}}>
                                        <ListItemText style={{ color: "black" }} primary={'Gallery'} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <NavLink to={'/ambulances'} style={{textDecoration:'none'}}>
                                        <ListItemText style={{ color: "black" }} primary={'Ambulances'} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <NavLink to={'/locations'} style={{textDecoration:'none'}}>
                                        <ListItemText style={{ color: "black" }} primary={'Locations'} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <NavLink to={'/contact'} style={{textDecoration:'none'}}>
                                        <ListItemText style={{ color: "black" }} primary={'Contact Us'} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    {/* {list(arr[1])} */}
                </Drawer>
            </Box>
        </>
    )
}

export default Navbar
