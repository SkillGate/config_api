const { skillsImage } = require("../constants/skillImages");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

//Get Array of Skills
router.post("/skills", verifyToken, async (req, res) => {
  try {
    const skills = req.body;

    const skillsUrls = await Promise.all(skills.map(async (skill) => {
      const requiredSkill = skillsImage(skill);
      return requiredSkill ? requiredSkill : { name: skill, value: "None" };
    }));

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

module.exports = router;
