
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

// const navItems = [
//   { name: 'POY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'FDY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'PSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'RPSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'DTY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'PACKAGING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'MADEUPS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'SPINNING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'GARMENTS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'KNITTING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
// ];

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedPDFs, setSelectedPDFs] = useState([]);

//   const handleClick = (event, pdfs) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedPDFs(pdfs);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDownload = (pdf) => {
//     const link = document.createElement('a');
//     link.href = `/pdf/${pdf}`;
//     link.download = pdf;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: '#1E90FF', boxShadow: 'none' }}>
//       <Toolbar>
//         <Typography 
//           variant="h3" 
//           component="div" 
//           sx={{ flexGrow: 1, fontFamily: 'serif', textAlign: 'flex-start', fontSize: '1.5rem', color: 'black', display: 'flex', alignItems: 'center' ,height:'50px'}}>
//           <img src="/lo.png" alt="Company Logo" style={{ height: '55px', marginRight: '0.5rem' ,borderRadius:"5px"}} />
//           <span style={{ fontFamily: 'Times New Roman, Times, serif' }}>ALOK INDUSTRIES SILVASSA</span>
//         </Typography>
//         {navItems.map((item, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <Button
//               aria-controls={`simple-menu-${index}`}
//               aria-haspopup="true"
//               onClick={(e) => handleClick(e, item.pdfs)}
//               color="inherit"
//               style={{ boxShadow: 'none' }} 
//             >
//               {item.name}
//             </Button>
//             <Menu
//               id={`simple-menu-${index}`}
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               {selectedPDFs.map((pdf, idx) => {
//                 const displayName = pdf.replace('.pdf', '');
//                 return (
//                   <MenuItem key={idx} onClick={() => handleDownload(pdf)}>
//                     {displayName}
//                   </MenuItem>
//                 );
//               })}
//             </Menu>
//           </div>
//         ))}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;import React, { useState } from 'react';
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const navItems = [
//   { name: 'POY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'FDY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'PSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'RPSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'DTY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'PACKAGING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'MADEUPS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'SPINNING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'GARMENTS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
//   { name: 'KNITTING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
// ];

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleClick = (event, pdfs) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleView = (pdf) => {
//     setSelectedPDF(pdf);
//     setDialogOpen(true);
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <>
//       <AppBar position="static" style={{ backgroundColor: '#1E90FF', boxShadow: 'none' }}>
//         <Toolbar>
//           <Typography
//             variant="h3"
//             component="div"
//             sx={{ flexGrow: 1, fontFamily: 'serif', textAlign: 'flex-start', fontSize: '1.5rem', color: 'black', display: 'flex', alignItems: 'center', height: '50px' }}
//           >
//             <img src="/lo.png" alt="Company Logo" style={{ height: '55px', marginRight: '0.5rem', borderRadius: "5px" }} />
//             <span style={{ fontFamily: 'Times New Roman, Times, serif' }}>ALOK INDUSTRIES SILVASSA</span>
//           </Typography>
//           {navItems.map((item, index) => (
//             <div key={index} style={{ position: 'relative' }}>
//               <Button
//                 aria-controls={`simple-menu-${index}`}
//                 aria-haspopup="true"
//                 onClick={(e) => handleClick(e, item.pdfs)}
//                 color="inherit"
//                 style={{ boxShadow: 'none' }}
//               >
//                 {item.name}
//               </Button>
//               <Menu
//                 id={`simple-menu-${index}`}
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 {item.pdfs.map((pdf, idx) => {
//                   const displayName = pdf.replace('.pdf', '');
//                   return (
//                     <MenuItem key={idx} onClick={() => handleView(pdf)}>
//                       {displayName}
//                     </MenuItem>
//                   );
//                 })}
//               </Menu>
//             </div>
//           ))}
//         </Toolbar>
//       </AppBar>

//       <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="lg" fullWidth>
//         <DialogContent>
//           {selectedPDF && (
//             <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>

//               <div style={{ height: '750px' }}>
//                 <Viewer fileUrl={`/pdf/${selectedPDF}`} />
//               </div>
//             </Worker>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Dialog, DialogContent } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const navItems = [
  { name: 'POY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'FDY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'PSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'RPSF', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'DTY', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'PACKAGING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'MADEUPS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'SPINNING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'GARMENTS', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
  { name: 'KNITTING', pdfs: ['PPPI.pdf', 'MM.pdf', 'SD.pdf', 'EWM.pdf', 'PM.pdf'] },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = (event, pdfs) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = (pdf) => {
    setSelectedPDF(pdf);
    setDialogOpen(true);
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
            sx={{ flexGrow: 1, fontFamily: 'serif', textAlign: 'flex-start', fontSize: '1.5rem', color: 'black', display: 'flex', alignItems: 'center', height: '50px' }}
          >
            <img src="/lo.png" alt="Company Logo" style={{ height: '55px', marginRight: '0.5rem', borderRadius: "5px" }} />
            <span style={{ fontFamily: 'Times New Roman, Times, serif' }}>ALOK INDUSTRIES SILVASSA</span>
          </Typography>
          {navItems.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <Button
                aria-controls={`simple-menu-${index}`}
                aria-haspopup="true"
                onClick={(e) => handleClick(e, item.pdfs)}
                color="inherit"
                style={{ boxShadow: 'none' }}
              >
                {item.name}
              </Button>
              <Menu
                id={`simple-menu-${index}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {item.pdfs.map((pdf, idx) => {
                  const displayName = pdf.replace('.pdf', '');
                  return (
                    <MenuItem key={idx} onClick={() => handleView(pdf)}>
                      {displayName}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          ))}
        </Toolbar>
      </AppBar>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="lg" fullWidth>
        <DialogContent>
          {selectedPDF && (
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
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
