import { Box, ClickAwayListener } from '@mui/material'
import React from 'react'
import user from "../assets/user.png"
import userLight from "../assets/userLight.png"

const UserDowndown = ({theme, setIsLogin}) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };
  
    const styles = {
        position: 'absolute',
        top: 40,
        right: 0,
        left: -135,
        zIndex: 1,
        border: "none",
        borderRadius: "6px",
        p: 1,
        bgcolor: 'var(--bg-color-secondary)',
        color: "var(--text-color)",
        width: "140px"
      };
    
  return (
    <>
    <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative' }}>
            <img src={theme==="dark" ? user: userLight} alt="user-img" className='img' style={{marginTop: "6px", marginRight: "14px"}} onClick={handleClick}/>
            {open ? (
            <Box sx={styles}>
                <span style={{cursor: "pointer"}}>User Management</span> <br></br>
                <span style={{cursor: "pointer"}} onClick={() =>setIsLogin(false)}>Logout</span>
            </Box>
            ) : null}
        </Box>
    </ClickAwayListener>
    </>
  )
}

export default UserDowndown
