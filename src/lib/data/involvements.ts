export interface Involvement {
  name: string;
  position: string;
  profileKey?: string;
}

export const involvements2023: Record<string, Involvement[]> = {
  "Accounting Association": [
    { name: "Denise Wei", position: "External Vice President" },
    { name: "Qui Hoang", position: "Vice President of Internal Affairs" },
    { name: "Sydney Yu", position: "Director of Professional Development" },
    { name: "Jessica Nguyen", position: "Mentee" },
  ],
  "Beta Alpha Psi": [
    { name: "Talia Yip", position: "Treasurer" },
  ],
  "Commit the Change": [
    { name: "Madhu Sharma", position: "Technical Lead" },
  ],
  "Financial Literacy Association": [
    { name: "Teresa Chu", position: "President" },
    { name: "Julie Hsieh", position: "Director of Marketing" },
  ],
  "Human Resources Management Association": [
    { name: "Deborah Kim", position: "Vice President of Marketing" },
    { name: "Skyler Chang", position: "Intern" },
  ],
  "Management Information Student Society": [
    { name: "Evan Choe", position: "Vice President of External Relations" },
    { name: "Tannvi Banerjee", position: "Vice President of Professional Development" },
    { name: "Alex Zhou", position: "Vice President of Internal Affairs" },
    { name: "Raj Singh", position: "Mentor" },
    { name: "Eddie Rios", position: "Mentor" },
    { name: "Skyler Chang", position: "Intern" },
    { name: "Ethan Tung", position: "VP of Finance Intern" },
  ],
  "Marketing Association": [
    { name: "Ruby Ko", position: "President" },
    { name: "Zoe Lui", position: "Member Relations Director" },
    { name: "Annie Sreshthabutra", position: "Marketing Director" },
  ],
  "Merage Undergraduate Student Association": [
    { name: "Vivian Tran", position: "President" },
    { name: "Eddie Rios", position: "Vice President of Academic Affairs" },
    { name: "Mason Chen", position: "Freshman Representative" },
    { name: "Tiffany Chien", position: "Freshman Representative" },
    { name: "Ethan Tung", position: "Freshman Representative" },
    { name: "Timothy Sih", position: "Freshman Representative" },
  ],
  "Product Association": [
    { name: "Nicole Nguyen", position: "President" },
    { name: "Tannvi Banerjee", position: "Vice President of Fellowship" },
    { name: "Justin Chao", position: "Product Management Lead" },
  ],
  "Scholars of Finance": [
    { name: "Teresa Chu", position: "Vice President of Finance & Operations" },
  ],
  "Undergraduate Business Association": [
    { name: "Kayla Wong", position: "President" },
    { name: "Puneet Singh", position: "Vice President of Professional Development" },
    { name: "Lana Locquiao Noguera", position: "Mentee" },
    { name: "Jaejin Kim", position: "Mentor" },
  ],
  "Taiwanese National Organization": [
    { name: "Julie Hsieh", position: "President" },
  ],
  "TEDxUCIrvine": [
    { name: "Ethan Tung", position: "Finance Team Member" },
  ],
};

export const foundedOrgs = [
  "Accounting Association",
  "Management Information Student Society",
  "Marketing Association",
  "Merage Undergraduate Student Association",
  "Product Association",
  "Scholars of Finance",
  "Undergraduate Business Association",
  "Financial Literacy Association",
  "Human Resources Management Association",
];
