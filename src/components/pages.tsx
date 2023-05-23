import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from "next/link";
import FadeMenu from './material';

export default function FadeMenu2() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className='pages-menu'
        id="fade-button"
        aria-controls={open ? 'fade-menu-2' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         ...
      </Button>
      <Menu
        id="fade-menu-2"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}> <Link href="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}>   <Link href="#"> <FadeMenu /></Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link href="/shop">Shop</Link></MenuItem>
        <MenuItem onClick={handleClose}>   <Link href="/Blog">Blog</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/Events">Events</Link></MenuItem>

      </Menu>
    </div>
  );
}
