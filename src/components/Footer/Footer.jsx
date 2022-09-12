import React from 'react'
import Typography from '@mui/material/Typography';
export default function Footer() {
  return (
    <div>
        <div className='FooterBg'>
        <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#bb7dfb',
              textDecoration: 'none',
            }}
          >
            Weird Store
          </Typography>
        </div>
    </div>
  )
}
