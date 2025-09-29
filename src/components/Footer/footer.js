import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SolisBrochure from "../../assets/pdfs/solisBrochure.pdf";
import { downloadFile } from "../../utils/pdfDownloader";
import { Link } from "react-router-dom";
import SolidButton from "../Buttons/SolidButton";
import { FooterStyles } from "./styles";
import phoneIcon from "../../assets/images/phoneIcon.png";
import whatsAppIcon from "../../assets/images/whatsAppIcon.png";
import gmailIcon from "../../assets/images/gmailIcon.png";

export const Footer = () => {
  const emailAddress = "solisgreenenergysolutions@gmail.com";
  const subject = "";
  const body = "";

  const matches = useMediaQuery("(max-width:825px)");
  const footerStyles = FooterStyles();
  const composeEmail = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const openWhatsApp = () => {
    matches
      ? window.open(
          `https://api.whatsapp.com/send?phone=${"+91 8301849474"}`,
          "_blank"
        )
      : window.open(
          `https://web.whatsapp.com/send?phone=${"+91 8301849474"}`,
          "_blank"
        );
  };
  const openDialer = () => {
    window.location.href = `tel:${"+91 8301849474"}`;
  };
  const openGoogleMaps = () => {
    const mapsLink = `https://www.google.com/maps/place/Solis+Green+Energy+Solutions/@9.3924153,76.5408612,13.65z/data=!4m6!3m5!1s0x3b06258569df22ad:0xf94bd683ad5f7ee2!8m2!3d9.395112!4d76.5660969!16s%2Fg%2F11rr45vzg_?entry=ttu`;
    window.open(mapsLink, "_blank");
  };
  return (
    <Grid sx={footerStyles.wrapGridStyles}>
      <Grid className="" sx={footerStyles.dataGridStyles}>
        <Grid className="footerContactGrid" sx={footerStyles.columnGridStyles}>
          <Box>
            <Typography sx={footerStyles.typographyStyles}>
              {" "}
              Contact Us
            </Typography>
            <p
              role="button"
              onClick={(e) => {
                openGoogleMaps();
              }}
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                sx={{ ...footerStyles.subTypographyStyles, marginTop: "15px" }}
              >
                <b>Solis Green Energy Solutions</b>
              </Typography>
              <Typography sx={footerStyles.subTypographyStyles}>
                <br></br>Mini Kristal Arcade
                <br></br> Muthoor P.O, Thiruvalla,
                <br></br>Pathanamthitta
                <br></br>
                <br></br> Pin: <b>689107</b>
                <br></br>
                <br></br>
              </Typography>
            </p>
          </Box>
        </Grid>

        <Grid className="footerAboutGrid" sx={footerStyles.columnGridStyles}>
          <Box>
            <Typography sx={footerStyles.typographyStyles}>About Us</Typography>
            <Box>
              <SolidButton
                onClick={() =>
                  downloadFile(SolisBrochure, "Solis-Brochure.pdf")
                }
                texttoprint="Download Brochure"
                startIcon={<FileDownloadIcon />}
              >
                Download Brochure
              </SolidButton>
            </Box>
          </Box>
        </Grid>

        <Grid className="footerProjectGrid" sx={footerStyles.columnGridStyles}>
          <Typography sx={footerStyles.typographyStyles}>Projects</Typography>
          <Link to="/projects" style={footerStyles.linkStyles}>
            Installation
          </Link>
        </Grid>
        <Grid className="footerSupportGrid" sx={footerStyles.columnGridStyles}>
          <Typography sx={footerStyles.typographyStyles}>Support</Typography>
          {/* <Link style={footerStyles.linkStyles}>Technology Warranty</Link>
          <Link style={footerStyles.linkStyles}>BER Assessment</Link> */}
          {/* <Link style={footerStyles.linkStyles}>Shipping Policy</Link> */}

          <Link to="/contacts" style={footerStyles.linkStyles}>
            Reach us
          </Link>
          <Link style={footerStyles.linkStyles}>Terms & Conditions</Link>
          <Link style={footerStyles.linkStyles}>Privacy & Cookies policy</Link>
        </Grid>
        <Box sx={footerStyles.mobileButtonBoxStyle}>
          <Box>For more details</Box>
          <SolidButton
            onClick={() => downloadFile(SolisBrochure, "Solis-Brochure.pdf")}
            texttoprint="Download Brochure"
            startIcon={<FileDownloadIcon />}
            fontSize="12px"
          >
            Download Brochure
          </SolidButton>
        </Box>
      </Grid>
      <Grid sx={footerStyles.socialMediaGrid}>
        <Typography sx={footerStyles.socialSubTypographyStyles}>
          <p
            role="button"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              composeEmail();
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={gmailIcon}
                style={footerStyles.imageIconStyle}
                alt="icon"
              />
              &nbsp;&nbsp;<b>Email:&nbsp;</b>
              solisgreenenergysolutions@gmail.com
            </span>
          </p>
        </Typography>
        <Typography sx={footerStyles.socialSubTypographyStyles}>
          <p
            role="button"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              openWhatsApp();
            }}
          >
            {" "}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={whatsAppIcon}
                style={footerStyles.imageIconStyle}
                alt="icon"
              />
              &nbsp;&nbsp; <b>WhatsApp:&nbsp;</b> +91 8301849474
            </span>
          </p>
        </Typography>
        <Typography sx={footerStyles.socialSubTypographyStyles}>
          <p
            role="button"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              openDialer();
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={phoneIcon}
                style={footerStyles.imageIconStyle}
                alt="icon"
              />
              &nbsp;&nbsp; <b>Quick Contact Phone:&nbsp;</b> +91 8301849474
            </span>
          </p>
        </Typography>
      </Grid>
      <Grid sx={footerStyles.copyRightGridStyles}>
        <p>© 2023 Solis Green Energy. All Rights are Reserved.</p>
      </Grid>
    </Grid>
  );
};
