const google =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700118695/SkillGate/google_icon.png";
const xventure =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645058/SkillGate/xv-logo.png";
const ifs =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645073/SkillGate/ifs-logo.png";
const creativeSoftware =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1702202649/SkillGate/creative%20software.png";
const gtn =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645187/SkillGate/gtn-logo.webp";
const dialog =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645063/SkillGate/Dialog_Axiata-logo.png";
const axiataDigitalLabs =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645084/SkillGate/axiata_dialog-logo.png";
const wealthos =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645454/SkillGate/wealthos-logo.png";
const x99 =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1700645059/SkillGate/99x-logo.png";

const companyImage = (comapany) => {
  const comapanyID = comapany.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
  switch (comapanyID) {
    case "google":
      return { name: "google", value: google };
    case "xventure":
      return { name: "xventure", value: xventure };
    case "ifs":
      return { name: "ifs", value: ifs };
    case "creativesoftware":
      return { name: "creativeSoftware", value: creativeSoftware };
    case "gtn":
      return { name: "gtn", value: gtn };
    case "dialog":
      return { name: "dialog", value: dialog };
    case "axiatadigitallabs":
      return { name: "axiataDigitalLabs", value: axiataDigitalLabs };
    case "wealthos":
      return { name: "wealthOS", value: wealthos };
    case "99x":
      return { name: "99x", value: x99 };
    default:
      return null;
  }
};

module.exports = {
  companyImage,
};
