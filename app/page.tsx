'use client';

import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';

import { Wheel } from './Wheel';
import { useState } from 'react';
import { Form } from './Form';

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
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '--Drawer-horizontalSize': 'clamp(300px, 28%, 100%)',
        }}>
        <Form />
      </Drawer>
      <Wheel />
    </div>
  );
}
