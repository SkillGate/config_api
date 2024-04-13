const ucsc =
  "https://res.cloudinary.com/dsqosc2ig/image/upload/v1702273476/SkillGate/ucsc.png";

const educationImage = (education) => {
  const educationID = education.toLowerCase();
  switch (educationID) {
    case "ucsc":
      return { name: "ucsc", value: ucsc };
    default:
      return null;
  }
};

module.exports = {
  educationImage,
};
