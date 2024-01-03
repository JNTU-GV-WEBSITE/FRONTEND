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
import "./Syllabus.css";

// Sample data
const data = [
    { sno: 1, branch: 'Civil Engineering', pdfLink: 'https://drive.google.com/file/d/1hEGLoAX6trn7qoiMNSYvnR960HMJHT_G/view?usp=sharing' },
    { sno: 2, branch: 'Mechanical Engineering and Automobile Engineering', pdfLink: 'https://drive.google.com/file/d/1rg6W0T7tVHAFhoDfcfZs499QA_hhCt9B/view?usp=sharing' },
    { sno: 3, branch: 'Electrical and Electronic Engineering', pdfLink: 'https://drive.google.com/file/d/1Jgx9-JWH5DP5GIPtf8KOSdf7Iyvg6Tg5/view?usp=sharing' },
    { sno: 4, branch: 'Electronics and Communication Engineering', pdfLink: 'https://drive.google.com/file/d/1vr1-14rHGB-LIhzDzSIlJgZBS0OL_tp5/view?usp=sharing' },
    { sno: 5, branch: 'Computer Science and Engineering and Infomation Technology', pdfLink: 'https://drive.google.com/file/d/1TKfA85Uwqj3VIaRHu5VnaacDLeT-TxlR/view?usp=sharing' },
];

const Syllabus = () => {
    return (
        <div className="syllabus">
            <div className="syllabus-title">Academic Syllabus</div>
            <Accordion elevation={20} defaultExpanded className="accordion-affiliated">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ background: "#303030", color: "white" }} >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Regulation R23
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Table>
                        {/* Table Head */}
                        <TableHead sx={{ background: "#A9A9A9" }}>
                            <TableRow>
                                <TableCell>S.no</TableCell>
                                <TableCell>Branch</TableCell>
                                <TableCell>Syllabus Link</TableCell>
                            </TableRow>
                        </TableHead>

                        {/* Table Body */}
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.sno}>
                                    <TableCell>{row.sno}</TableCell>
                                    <TableCell>{row.branch}</TableCell>
                                    <TableCell>
                                        <a href={row.pdfLink} target="_blank" rel="noopener noreferrer">
                                            Syllabus
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Syllabus;