import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material';
import styles from "./faq.module.css";
import { style } from "@mui/system";

const faqList = [
  {
    summary: `Is QTify free to use?`,
    details: `Yes! It is 100% free, and has 0% ads!`,
  },
  {
    summary: `Can i download and listen to songs offline?`,
    details: `Sorry, unfortunately we don't provide the sevice to download any songs.`,
  },
];

export default function FaqSection() {
  return (
    <div className={styles.faqSection}>
      <h1 className={styles.heading} style={{ textAlign: "center" }}>
        FAQs
      </h1>
      {faqList.map(({ summary, details }, index) => {
        return (
          <div className={styles.accordionContainer} key={index}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.questionHead}
              >
                <Typography>{summary}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.answerBody}>
                <Typography>{details}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
