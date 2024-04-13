const { companyImage } = require("../constants/companyImages");
const { educationImage } = require("../constants/educationImages");
const { skillsImage } = require("../constants/skillImages");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

const noLogo =
  "https://res.cloudinary.com/midefulness/image/upload/v1713019229/SkillGate/NoLogo/no-logo-removebg-preview_r3ipnp.png";

//SKILLS
//Get Array of Skills
router.post("/skills", verifyToken, async (req, res) => {
  try {
    const skills = req.body;

    const skillsUrls = await Promise.all(
      skills.map(async (skill) => {
        const requiredSkill = skillsImage(skill);
        return requiredSkill ? requiredSkill : { name: skill, value: "None" };
      })
    );

    res.status(200).json(skillsUrls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get specific skill
router.get("/skill/:skillName", verifyToken, async (req, res) => {
  try {
    const { skillName } = req.params;
    const skillImage = skillsImage(skillName);

    if (skillImage) {
      res.status(200).json(skillImage);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//COMPANY LOGO
//Get Array of Skills
router.post("/company", verifyToken, async (req, res) => {
  try {
    const company = req.body;

    const companyUrls = await Promise.all(
      company.map(async (comLogo) => {
        const requiredCompanyLogo = companyImage(comLogo);
        return requiredCompanyLogo
          ? requiredCompanyLogo
          : { name: comLogo, value: noLogo };
      })
    );

    res.status(200).json(companyUrls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get specific skill
router.get("/company/:companyName", verifyToken, async (req, res) => {
  try {
    const { companyName } = req.params;
    const comapanyLogo = companyImage(companyName);

    if (comapanyLogo) {
      res.status(200).json(comapanyLogo);
    } else {
      res.status(200).json({ name: companyName, value: noLogo });
      // res.status(404).json({ message: "Company logo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//EDUCATION CENTER
//Get Array of Skills
router.post("/educations", verifyToken, async (req, res) => {
  try {
    const educations = req.body;

    const educationsUrls = await Promise.all(
      educations.map(async (education) => {
        const requiredEducation = educationImage(education);
        return requiredEducation
          ? requiredEducation
          : { name: education, value: noLogo };
      })
    );

    res.status(200).json(educationsUrls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Get specific skill
router.get("/education/:educationName", verifyToken, async (req, res) => {
  try {
    const { educationName } = req.params;
    const educationLogo = educationImage(educationName);

    if (educationLogo) {
      res.status(200).json(educationLogo);
    } else {
      res.status(200).json({ name: educationName, value: noLogo });
      // res.status(404).json({ message: "Education logo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
