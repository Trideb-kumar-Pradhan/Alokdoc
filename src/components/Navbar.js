


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const navItems = [
  { name: 'MM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'POY/FDY PACKING', 'PSF/RPSF PACKING', 'DTY PACKING', 'ERROR HANDLING'] },
  { name: 'PPPI', pdfs: ['A.pdf', 'B.pdf', 'E.pdf', 'C.pdf', 'D.pdf'], displayNames: ['MASTER DATA', 'POY/FDY PACKING', 'PSF/RPSF PACKING', 'DTY PACKING', 'ERROR HANDLING'] },
  { name: 'SD', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'MASTER DATA', 'Product 3', 'Product 4', 'Product 5'] },
  { name: 'EWM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
  { name: 'QM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
  { name: 'PM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
  { name: 'MDG', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
  { name: 'PPPI PACKING MODULE', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleClick = (event, item) => {
    setSelectedItem(item);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = (pdf) => {
    setSelectedPDF(pdf);
    setDialogOpen(true);
    handleClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#1E90FF', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src="/lo.png" alt="Company Logo" style={{ height: '55px', marginRight: '0.5rem', borderRadius: '5px', boxShadow: '0px 3px 5px rgba(4, 5, 0, 2.5)' }} />
            <span style={{ fontSize: '25px', fontFamily: 'Times New Roman, Times, serif', textShadow: '0px 2px 4px rgba(0, 0, 0, 3.3)' }}>
              ALOK INDUSTRIES SILVASSA
            </span>
          </Typography>
          {navItems.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Button
                aria-controls={`simple-menu-${index}`}
                aria-haspopup="true"
                onClick={(e) => handleClick(e, item)}
                color="inherit"
                style={{
                  boxShadow: '0px 3px 5px rgba(4, 3, 6, 0.4)', 
                  margin: '5px', 
                }}
              >
                {item.name}
              </Button>
              <Menu
                id={`simple-menu-${index}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl && selectedItem === item)}
                onClose={handleClose}
              >
                {item.pdfs.map((pdf, idx) => (
                  <MenuItem key={idx} onClick={() => handleView(pdf)}>
                    {item.displayNames[idx]}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Toolbar>
      </AppBar>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="lg" fullWidth>
        <DialogContent>
          {selectedPDF && (
            <Worker workerUrl="/pdf.worker.min.js">
              <div style={{ height: '750px' }}>
                <Viewer fileUrl={`/pdf/${selectedPDF}`} />
              </div>
            </Worker>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
