import React from 'react'
import Typography from '@mui/material/Typography';
import weirdstore from '../../assets/Weirdstore-logo.svg'
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
            <img src={weirdstore} alt="weird store logo"  style={{width:'25rem', height:'auto'}} />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 5,
            }}
          >
            <img src={weirdstore} alt="weird store logo"  style={{width:'15rem', height:'auto'}} />
          </Typography>
        </div>
    </div>
  )
}
