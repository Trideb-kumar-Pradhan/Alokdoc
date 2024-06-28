// // import React, { useState } from 'react';
// // import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
// // import { Worker, Viewer } from '@react-pdf-viewer/core';
// // import '@react-pdf-viewer/core/lib/styles/index.css';

// // const navItems = [
// //   { name: 'MM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'POY/FDY PACKING', 'PSF/RPSF PACKING', 'DTY PACKING', 'ERROR HANDLING'] },

// // { name: 'PPPI', pdfs: ['A.pdf', 'B.pdf', 'E.pdf', 'C.pdf', 'D.pdf'], displayNames: ['MASTER DATA', 'POY/FDY PACKING', 'PSF/RPSF PACKING', 'DTY PACKING', 'ERROR HANDLING'] },
// // { name: 'SD', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'MASTER DATA', 'Product 3', 'Product 4', 'Product 5'] },
// // { name: 'EWM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
// // { name: 'QM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['MASTER DATA', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
// // { name: 'PM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
// // { name: 'MDG', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },
// // { name: 'PPPI PACKING MODULE', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf'], displayNames: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'] },


// // ];

// // const Navbar = () => {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [dialogOpen, setDialogOpen] = useState(false);
// //   const [selectedPDF, setSelectedPDF] = useState(null);

// //   const handleClick = (event, item) => {
// //     setSelectedItem(item);
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleView = (pdf) => {
// //     setSelectedPDF(pdf);
// //     setDialogOpen(true);
// //     handleClose();
// //   };

// //   const handleDialogClose = () => {
// //     setDialogOpen(false);
// //   };

// //   return (
// //     <>
// //       <AppBar position="static" style={{ backgroundColor: '#1E90FF', boxShadow: 'none' }}>
// //         <Toolbar>
// //           <Typography
// //             variant="h3"
// //             component="div"
// //             sx={{
// //               flexGrow: 1,
// //               display: 'flex',
// //               alignItems: 'center',
// //             }}
// //           >
// //             <img src="/lo.png" alt="Company Logo" style={{ height: '55px', marginRight: '0.5rem', borderRadius: '5px', boxShadow: '0px 3px 5px rgba(4, 5, 0, 2.5)' }} />
// //             <span style={{ fontSize: '25px', fontFamily: 'Times New Roman, Times, serif', textShadow: '0px 2px 4px rgba(0, 0, 0, 3.3)' }}>
// //               ALOK INDUSTRIES SILVASSA
// //             </span>
// //           </Typography>
// //           {navItems.map((item, index) => (
// //             <div key={index} style={{ position: 'relative' }}>
// //               <Button
// //                 aria-controls={`simple-menu-${index}`}
// //                 aria-haspopup="true"
// //                 onClick={(e) => handleClick(e, item)}
// //                 color="inherit"
// //                 style={{
// //                   boxShadow: '0px 3px 5px rgba(4, 3, 6, 0.4)', 
// //                   margin: '5px', 
// //                 }}
// //               >
// //                 {item.name}
// //               </Button>
// //               <Menu
// //                 id={`simple-menu-${index}`}
// //                 anchorEl={anchorEl}
// //                 keepMounted
// //                 open={Boolean(anchorEl && selectedItem === item)}
// //                 onClose={handleClose}
// //               >
// //                 {item.pdfs.map((pdf, idx) => (
// //                   <MenuItem key={idx} onClick={() => handleView(pdf)}>
// //                     {item.displayNames[idx]}
// //                   </MenuItem>
// //                 ))}
// //               </Menu>
// //             </div>
// //           ))}
// //         </Toolbar>
// //       </AppBar>

// //       <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="lg" fullWidth>
// //         <DialogContent>
// //           {selectedPDF && (
// //             <Worker workerUrl="/pdf.worker.min.js">
// //               <div style={{ height: '750px' }}>
// //                 <Viewer fileUrl={`/pdf/${selectedPDF}`} />
// //               </div>
// //             </Worker>
// //           )}
// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // };

// //  export default Navbar;

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const navItems = [
  { name: 'MM', pdfs: ['A.pdf', 'E.pdf', 'D.pdf', 'C.pdf', 'B.pdf','B.pdf','B.pdf'], displayNames: ['PURCHASE REQUISITION', 'PURCHASE ORDER', 'SERVICE ENTRY AGAINST WORK ORDER', 'INVENTORY MANAGEMENT', 'INBOUND TRUCK TRACKING','OUTGATE PASS ORDER','REPORTS'] },
  { name: 'PPPI', pdfs: ['A.pdf', 'B.pdf', 'E.pdf', 'C.pdf', 'D.pdf'], displayNames: ['MASTER DATA', 'PACKING PREREQUISITES', 'PO CREATION', 'PRS', 'MFORM'] },
  { name: 'EWM', pdfs: ['A.pdf', 'B.pdf', 'E.pdf'], displayNames: ['TRANSPORT', 'TRACKFIRST', 'WMDASHBOARD'] },
  { name: 'PACKING MODULE', pdfs: ['A.pdf', 'B.pdf', 'E.pdf', 'C.pdf', 'D.pdf','A.pdf', 'B.pdf', 'E.pdf', 'C.pdf', 'D.pdf','B.pdf', 'E.pdf', 'C.pdf', 'D.pdf'], displayNames: ['CP/MASTERBATCH', 'POY/FDY', 'PSF/RPSF', 'DTY', 'WEAVING','KNITTING','EMBROIDARY','HEMMING','GARMENT','MADEUPS/BADDING','SEFTY TEXTTILE','SPINNING/PACKAGING/CONE/BRIKET','TEXTTILE PALLET TRANSFER','ZPPRECRON'] },
];

const submenuOptions = {
  MM: {
    'PURCHASE REQUISITION': [
      { name: 'Service PR ', pdf: 'PR for services.pdf' },
      { name: 'PR against SO', pdf: 'PR Against SO.pdf' },
      { name: 'PR for ZFRT', pdf: 'PR for ZFRT.pdf' },
      { name: 'PR for ZPAM & ZPAM', pdf: 'PR for ZMRO&ZPAM.pdf' },
      { name: 'PR Release', pdf: 'PR Release.pdf' },
    ],
    'PURCHASE ORDER': [
      { name: '3debXy', pdf: 'a.pdf' },
      { name: '3debAB', pdf: 'd.pdf' },
      { name: '3debMN', pdf: 'd.pdf' },
    ],
  },
  PPPI: {
  },
  EWM: {
  },
  QM: {
  },
  'PACKING MODULE': {
  },
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [subDialogOpen, setSubDialogOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredButtonn, setHoveredButtonn] = useState(null);
  const [hoveredButtonm, setHoveredButtonm] = useState(null);
  const handleClick = (event, item) => {
    setSelectedItem(item);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null); 
    setSubmenuItems([]); 
  };

  const handleView = (pdf, displayName) => {
    if (selectedItem && selectedItem.name in submenuOptions) {
      const submenu = submenuOptions[selectedItem.name];
      const submenuItems = submenu[displayName];
      if (submenuItems) {
        const selectedSubmenu = submenuItems.find(item => item.name === 'MASTER DATA');
        setSelectedPDF(selectedSubmenu ? selectedSubmenu.pdf : pdf);
        setSubmenuItems(submenuItems);
        setSubDialogOpen(true);
      } else {
        setSelectedPDF(pdf);
        setDialogOpen(true);
        handleClose();
      }
    }
  };
  
  const handleDialogClose = () => {
    setAnchorEl(null);
    setSelectedItem(null); //use for this jesa ki outside close karna ho 
    setDialogOpen(false);
    setSubmenuItems([]);
  };
  
  const handleSubDialogClose = () => {
    setSubDialogOpen(false);
    setSubmenuItems([]); 
  };

  

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#DC143C', boxShadow: 'none',color:'white' }}>
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
            <img src="/lo.png" alt="Company Logo" style={{ height: '48px', marginRight: '0.5rem', borderRadius: '5px', boxShadow: '0px 3px 5px rgba(4, 5, 0, 2.5)' }} />
            <span style={{ fontSize: '25px', fontFamily: 'Times New Roman, Times, serif', textShadow: '0px 2px 4px rgba(0, 0, 0, 3.3)' }}>
              ALOK INDUSTRIES SILVASSA
            </span>
          </Typography>
          {navItems.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Button
                aria-controls={`simple-menu-${index}`}
                aria-haspopup="true"
                onClick={(e) => handleClick(e, item)}onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                color="inherit"
                style={{
                  boxShadow: '0px 3px 5px rgba(4, 3, 6, 0.4)', 
                  margin: '5px', 
                  color:'white',
                  transform: hoveredButton === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
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
        <MenuItem
          key={idx}
          onClick={() => handleView(pdf, item.displayNames[idx])}
          onMouseEnter={() => setHoveredButtonm(idx)}
          onMouseLeave={() => setHoveredButtonm(null)}
          style={{
            transform: hoveredButtonm === idx ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
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

      <Dialog open={subDialogOpen} onClose={handleSubDialogClose} maxWidth="md"   PaperProps={{
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',padding:'10px' // Transparent white background
    },
  }}
 >
        <DialogContent style={{ padding:'10px' , display:'flex', justifyContent: 'center'}}>
          {submenuItems && submenuItems.map((item, idx) => (
            <Button
              key={idx}  
              onClick={() => {
                setSelectedPDF(item.pdf);
                setDialogOpen(true);
                handleSubDialogClose();
              }}onMouseEnter={() => setHoveredButtonn(idx)}
              onMouseLeave={() => setHoveredButtonn(null)}
              style={{ margin: '10px',  boxShadow: '0px 3px 5px rgba(4, 5, 0, 1.5)',fontSize:'17px',backgroundColor:'rgb(220, 20, 60)',color:'white', transform: hoveredButtonn === idx ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',}}
            >
              {item.name}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
