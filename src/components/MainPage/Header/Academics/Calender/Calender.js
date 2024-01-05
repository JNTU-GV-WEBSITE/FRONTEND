import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Calender.css";

// Sample data
const data = [
    { sno: 1, Title: 'Academic Calendar for IV-B.Tech II-Semester', pdfLink: 'https://jntugvcev.edu.in/wp-content/uploads/2023/10/IV-B.Tech-II-Sem-ACY-2023-2024.pdf'  },
    { sno: 2, Title: 'Academic Calendar for IV-B.Tech I-Semester', pdfLink: 'https://jntugvcev.edu.in/wp-content/uploads/2023/07/B.Tech-IV-Year-Academic-Calendar-2023-24.pdf' },
    { sno: 3, Title: 'Academic Calendar for III Year-B.Tech I & II-Semester ', pdfLink: 'https://jntugvcev.edu.in/wp-content/uploads/2023/07/B.Tech-III-Year-Academic-Calendar-2023-24.pdf' },
    { sno: 4, Title: 'Academic Calendar for II Year-B.Tech I & II-Semester ', pdfLink: 'https://jntugvcev.edu.in/wp-content/uploads/2023/07/II-Year-B.Tech-for-the-Academic-Year.pdf'},
    { sno: 5, Title: 'Academic Calendar for I Year - B.Tech', pdfLink: 'https://jntugvcev.edu.in/wp-content/uploads/2023/09/DocScanner-14-Sept-2023-3-14-pm.pdf'},

    { sno: 6, Title:'Academic Calendar- MCA I-Semester', pdfLink:'https://jntugvcev.edu.in/wp-content/uploads/2023/10/I-MCA-2023-Batch-Academic-Calender.pdf'},
    { sno: 7, Title:'Academic Calendar-MCA III-Semester & IV-Semester', pdfLink:'https://jntugvcev.edu.in/wp-content/uploads/2023/07/MAC2022-Batch-academic-calender-for-2023-2024.pdf'},
    { sno: 8, Title:'Academic Calendar-MCA-V-Semester and VI-Semester', pdfLink:'https://jntugvcev.edu.in//wp-content/uploads/2021/07/academic-calandar-MCA-V-VI-Sem.pdf'},

    { sno: 9, Title:'Academic Calendar-M.Tech-l-Year', pdfLink:'https://jntugvcev.edu.in/wp-content/uploads/2023/10/I.M.TECH-Academic-Calendar.pdf'},
    { sno: 10, Title:'Academic Calendar for M.Tech II Year', pdfLink:'https://jntugvcev.edu.in/wp-content/uploads/2023/07/M.Tech-II-Year-Accademic-calendar.pdf'},

    { sno: 11, Title:'Academic Calendar for B.Pharmacy I Year', pdfLink:'https://drive.google.com/file/d/19Zkp0k64ouvlYw2awLs7IY408OqsZcbA/view'},
    { sno: 12, Title:'Academic Calendar for B.Pharmacy II Year', pdfLink:'https://drive.google.com/file/d/1IrawmiHcz5rP2le0Q5pXrNyt75psQnzH/view'},
    

    { sno: 13, Title:'Academic Calendar for Pharm-D I Year', pdfLink:'https://drive.google.com/file/d/1WP--NiUYNNfPR1nJrqGR5bOEQsP84s7b/view'},
    { sno: 14, Title:'Academic Calendar for Pharm-D II Year', pdfLink:'https://drive.google.com/file/d/1C98jPJyDk3AY9ZgcZ0l2YCfmxzBIq9y5/view'},
    { sno: 15, Title:'Academic Calendar for Pharm-D III Year', pdfLink:'https://drive.google.com/file/d/1KTU0LGyTzSQN6SwKRTiUoCC8HYkxP56H/view'},

    { sno: 16, Title:'Academic Calendar for MBA & MCA', pdfLink:'https://drive.google.com/file/d/12h7w_EuGdnR3gqAEyM68HcLmUIx26qaI/view'},
    { sno: 17, Title:'Academic Calendar for M-Tech & M-Pharmacy', pdfLink:'https://drive.google.com/file/d/18SIawj2DntYndNAsjXLA7-3s1f-23G9q/view'},

];

const Calender = () => {
    return (
        <div className="Calender">
            <div className="calender-title"> Academic Calender</div>
            <Accordion elevation={20} defaultExpanded className="accordion-affiliated">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ background: "#303030", color: "white" }} >
                    <Typography sx={{ width: "50%", flexShrink: 0 }}>
                        2023-2024  Academic Calender
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table>
                        {/* Table Head */}
                        <TableHead sx={{ background: "#A9A9A9" }}>
                            <TableRow>
                                <TableCell>S.no</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Calender Link</TableCell>
                                
                            </TableRow>
                        </TableHead>

                        {/* Table Body */}
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.sno}>
                                    <TableCell>{row.sno}</TableCell>
                                    <TableCell>{row.Title}</TableCell>
                                    <TableCell>
                                        <a href={row.pdfLink} target="_blank" rel="noopener noreferrer">
                                        Download
                                        </a></TableCell>

                                        
                  

                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Calender;