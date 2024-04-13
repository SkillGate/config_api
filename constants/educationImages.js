const ucsc =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1702273476/SkillGate/ucsc.png";
const nibm =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021570/SkillGate/universityLogo/nibm-removebg-preview_w3wqff.png";
const nsbm =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021573/SkillGate/universityLogo/nsbm-removebg-preview_m2tgzb.png";
const moratuwa =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021876/SkillGate/universityLogo/University_of_Moratuwa_logo_l3ancc.png";
const colombo =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021852/SkillGate/universityLogo/png-transparent-faculty-of-medicine-university-of-colombo-university-of-moratuwa-university-of-salford-colombo-miscellaneous-logo-university-removebg-preview_jhf4lm.png";
const jpura =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021857/SkillGate/universityLogo/png-clipart-university-of-sri-jayewardenepura-sri-jayawardenapura-kotte-university-of-colombo-vidyodaya-pirivena-university-of-moratuwa-campuslogo-removebg-preview_g2wvo7.png";
const ruhuna =
  "https://res.cloudinary.com/midefulness/image/upload/v1713021856/SkillGate/universityLogo/images-removebg-preview_iq6pgg.png";

const educationImage = (education) => {
  const educationID = education
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "");
  switch (educationID) {
    case "ucsc":
    case "universityofcolomboschoolofcomputing":
      return { name: "ucsc", value: ucsc };
    case "nibm":
    case "nationalinstituteofbusinessmanagement":
      return { name: "nibm", value: nibm };
    case "nsbm":
    case "nationalschoolofbusinessmanagement":
      return { name: "nsbm", value: nsbm };
    case "moratuwa":
    case "universityofmoratuwa":
      return { name: "moratuwa", value: moratuwa };
    case "colombo":
    case "universityofcolombo":
      return { name: "colombo", value: colombo };
    case "jpura":
    case "universityofsrijayawardenepura":
      return { name: "jpura", value: jpura };
    case "ruhuna":
    case "universityofruhuna":
      return { name: "ruhuna", value: ruhuna };
    default:
      return null;
  }
};

module.exports = {
  educationImage,
};
