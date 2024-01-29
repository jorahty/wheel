'use client';
import Drawer from '@mui/joy/Drawer';
import Menu from '@mui/icons-material/Menu';
import { Wheel } from './Wheel';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <div>
      <button id="menu" onClick={toggleDrawer(true)}>
        <Menu />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div></div>
      </Drawer>
      <Wheel />
    </div>
  );
}
