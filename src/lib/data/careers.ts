export interface Placement {
  name: string;
  company: string;
  position: string;
}

export type CategoryMap = Record<string, Placement[]>;

export interface YearData {
  internships: CategoryMap;
  fullTimes: CategoryMap;
}

export const careersData: Record<string, YearData> = {
  "2025": {
    internships: {
      "Accounting": [
        { name: "Timothy Sih", company: "PwC", position: "Audit Intern" },
      ],
      "Consulting": [
        { name: "Aidan Jayakumar", company: "EY", position: "Process & Controls Consulting Intern" },
        { name: "Keira Wong", company: "Trigger 7", position: "Consulting Intern" },
      ],
      "Finance": [
        { name: "Gabriel Villamariona", company: "Empirical Wealth Management", position: "Portfolio Management Intern" },
        { name: "Lana Locquiao Noguera", company: "JLL", position: "Capital Markets Intern" },
        { name: "Marcus Cao", company: "Credible CRE", position: "Capital Markets Intern" },
        { name: "Mason Chen", company: "Stifel Financial Corp.", position: "Branch Intern" },
        { name: "Puneet Singh", company: "PwC", position: "Financial Due Diligence Intern" },
        { name: "Viggo Nguyen", company: "Northwestern Mutual", position: "Financial Planning Intern" },
      ],
      "Human Resources": [
        { name: "Skyler Chang", company: "S&P Global", position: "HR Intern" },
      ],
      "Marketing": [
        { name: "Annie Sreshthabutra", company: "Once Upon a Farm", position: "Brand Marketing Intern" },
        { name: "Annie Sreshthabutra", company: "Wasserman", position: "Brands & Properties Intern" },
        { name: "Asia Chan", company: "Cambro Manufacturing", position: "Marketing Intern" },
        { name: "Asia Chan", company: "Food Innovations", position: "Digital Marketing Intern" },
        { name: "Emily Chen", company: "Precisely", position: "Product Marketing Intern" },
        { name: "Emily Chen", company: "SAP", position: "iXP Intern" },
        { name: "Grace Xu", company: "LA Times", position: "Client Solutions & Content Marketing" },
        { name: "Keili Ishiara", company: "Bank of Hawaii", position: "Marketing Data Analytics & CRM Intern" },
        { name: "Kurtis Lin", company: "Mind Pump Media", position: "Product Marketing Intern" },
        { name: "Madeleine Chen", company: "Fox Entertainment", position: "Consumer Insights Intern" },
        { name: "Tiffany Chien", company: "IBM", position: "Product Marketing Intern" },
        { name: "Tiffany Chien", company: "Siemens", position: "Engagement Marketing Intern" },
      ],
      "Operations": [
        { name: "Kyle Shih", company: "Penske Motor Group", position: "Product Intern" },
        { name: "Zoe Lui", company: "TikTok", position: "Category Manager Intern" },
      ],
      "Product": [
        { name: "Christopher Li", company: "Masimo", position: "UI/UX Design Intern" },
        { name: "Joseph Tom", company: "PayPal", position: "Technical Product Manager Intern" },
      ],
      "Real Estate": [
        { name: "Marcus Cao", company: "Project Destined", position: "Commercial Real Estate Private Equity Intern" },
      ],
      "Sales": [
        { name: "Ben Nguyen", company: "PepsiCo", position: "Sales Intern" },
      ],
      "Strategy": [
        { name: "Skyler Chang", company: "Medical AI, Inc.", position: "FDA US Insurance Strategy Intern" },
      ],
      "Technology": [
        { name: "Alex Zhou", company: "Meta", position: "Software Engineer Intern" },
        { name: "Christopher Yeh", company: "Capital One", position: "Software Engineering Intern" },
        { name: "Mahad Afridi", company: "Recorded Future", position: "Software Engineering Intern" },
        { name: "Tannvi Banerjee", company: "Meta", position: "Software Engineer Intern" },
        { name: "Tannvi Banerjee", company: "Rippling", position: "Software Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Catherine Tran", company: "GCTD", position: "Fiscal Analyst" },
        { name: "Jessica Nguyen", company: "EY", position: "Assurance Staff" },
        { name: "Thomas Lin", company: "EY", position: "Audit Associate" },
        { name: "Tristan Dizon", company: "EY", position: "Assurance Staff" },
      ],
      "Consulting": [
        { name: "Julie Hsieh", company: "Imperial Star Solar", position: "Business Analyst" },
        { name: "Justin Chao", company: "Capital One", position: "Business Analyst" },
        { name: "Kate Arnold", company: "Fincons Group", position: "Business Analyst" },
      ],
      "Marketing": [
        { name: "Alie Li", company: "Amazon", position: "Marketing Specialist" },
        { name: "Joseph Tom", company: "Dell", position: "Product Marketing" },
        { name: "Kayla Wong", company: "Rare Beauty", position: "Brand & Product Marketing Associate" },
        { name: "Ruby Ko", company: "Okta", position: "Product Marketing Analyst" },
      ],
      "Operations": [
        { name: "Eddie Rios", company: "Rippling", position: "Customer Support Specialist" },
      ],
      "Technology": [
        { name: "Tannvi Banerjee", company: "Mercor", position: "Software Engineer" },
      ],
    },
  },

  "2024": {
    internships: {
      "Accounting": [
        { name: "Jessica Nguyen", company: "EY", position: "Audit & Assurance Intern" },
        { name: "Tristan Dizon", company: "EY", position: "Audit & Assurance Intern" },
      ],
      "Consulting": [
        { name: "Emily Chen", company: "Accenture", position: "Business Analyst Intern" },
        { name: "Justin Chao", company: "Capital One", position: "Business Analyst Intern" },
        { name: "Kate Arnold", company: "24 Hour Fitness", position: "Competitive Strategy Analyst" },
        { name: "Kate Arnold", company: "ST Sicily", position: "Business Development Intern" },
      ],
      "Finance": [
        { name: "Aidan Jayakumar", company: "Capstone Partners", position: "Wealth Management Intern" },
        { name: "Catherine Tran", company: "TruStage", position: "Finance & Accounting Intern" },
        { name: "Ethan Tung", company: "Goldman Sachs", position: "Research Analyst" },
        { name: "Gabriel Villamariona", company: "Advanced Sterilization Products", position: "Finance Intern" },
        { name: "Lana Noguera", company: "Marcus & Millichap", position: "Investment Brokerage Sales Intern" },
        { name: "Nathan Hou", company: "Sumitomo Mitsui Banking Corporation", position: "Finance & Leasing Summer Analyst" },
        { name: "Puneet Singh", company: "Nordstrom", position: "Corporate Finance Intern" },
        { name: "Teresa Chu", company: "Citi Bank", position: "Corporate Banking Summer Analyst" },
        { name: "Thomas Lin", company: "Cactus & Pearl", position: "Finance & Accounting Intern" },
      ],
      "Human Resources": [
        { name: "Skyler Chang", company: "First American", position: "HR Business Partner Intern" },
      ],
      "Marketing": [
        { name: "Alie Li", company: "Amazon", position: "Partner Marketing Intern" },
        { name: "Annie Sreshthabutra", company: "Hakuhodo International", position: "Strategic Planner Intern" },
        { name: "Cinta Adhinigarat", company: "SentinelOne", position: "Marketing Operations Intern" },
        { name: "Elise Nadell", company: "BYD", position: "Marketing Intern" },
        { name: "Emily Chen", company: "Revent Solutions", position: "Content Marketing Intern" },
        { name: "Kayla Wong", company: "Fenty Hair", position: "Brand Marketing Intern" },
        { name: "Kyle Shih", company: "Hamee US Corp", position: "Marketing Intern" },
        { name: "Ruby Ko", company: "Okta", position: "Product Marketing Management Intern" },
        { name: "Tiffany Chien", company: "Niagra Bottling", position: "Marketing & Sales Intern" },
      ],
      "Operations": [
        { name: "Christopher Li", company: "L. Norwood & Associates", position: "Project Coordinator Intern" },
      ],
      "Product": [
        { name: "Joseph Tom", company: "Capital One", position: "Product Management Intern" },
        { name: "Julie Hsieh", company: "Dataocean", position: "Intern" },
      ],
      "Real Estate": [
        { name: "Elise Nadell", company: "Project Destined", position: "Commercial Real Estate Intern" },
        { name: "Lana Noguera", company: "Project Destined", position: "Commercial Real Estate Intern" },
      ],
      "Technology": [
        { name: "Sophia Tran", company: "Amazon", position: "Software Development Engineer Intern" },
      ],
      "Legal": [
        { name: "Rayyaan Majid", company: "Monterrey Law Firm", position: "Law Clerk" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Denise Wei", company: "PricewaterhouseCoopers", position: "Audit Associate" },
        { name: "Sydney Yu", company: "PricewaterhouseCoopers", position: "Audit Associate" },
        { name: "Talia Yip", company: "Deloitte", position: "Audit Associate" },
      ],
      "Consulting": [
        { name: "Lumin Oo", company: "Deloitte", position: "Analyst" },
      ],
      "Finance": [
        { name: "Hans Chang", company: "E.sun Commercial Bank", position: "Analyst" },
        { name: "Nicole Nguyen", company: "J.P. Morgan Chase", position: "MLDP Analyst" },
      ],
      "Marketing": [
        { name: "Jamie Zhao", company: "Walmart", position: "Content Assistant Manager" },
        { name: "Lilian Luu", company: "Providence", position: "Communications Specialist" },
      ],
      "Operations": [
        { name: "Brandyn Huynh", company: "Amazon", position: "Operations & Logistics" },
        { name: "Qui Hoang", company: "Teal", position: "Community Engagement & Support Specialist" },
        { name: "Vivian Tran", company: "ServiceNow", position: "Associate IT Project Manager" },
      ],
      "Technology": [
        { name: "Rithu Eswaramoorthy", company: "MongoDB", position: "Software Engineer" },
        { name: "Sophia Tran", company: "Amazon", position: "Software Development Engineer" },
      ],
    },
  },

  "2023": {
    internships: {
      "Accounting": [
        { name: "Denise Wei", company: "PwC", position: "Audit Intern" },
        { name: "Sydney Yu", company: "PwC", position: "Audit Intern" },
        { name: "Talia Yip", company: "Deloitte", position: "Audit & Assurance Intern" },
      ],
      "Consulting": [
        { name: "Justin Chao", company: "West Monroe", position: "Consulting Intern" },
        { name: "Hans Chang", company: "Deloitte", position: "Risk Advisory Intern" },
        { name: "Lumin Oo", company: "Deloitte", position: "Summer Scholar" },
      ],
      "Finance": [
        { name: "Puneet Singh", company: "1st Century Bank", position: "Commercial Banking Intern" },
      ],
      "Marketing": [
        { name: "Alie Li", company: "Integral Consulting Inc.", position: "Database Marketing Intern" },
        { name: "Grace Xu", company: "ScaleAgent", position: "Marketing Intern" },
        { name: "Joseph Tom", company: "Profound", position: "Product Marketing Intern" },
        { name: "Nicole Nguyen", company: "ServiceNow", position: "Product Marketing Co-Op" },
        { name: "Raj Singh", company: "Hajoca", position: "Marketing/Management Intern" },
        { name: "Ruby Ko", company: "MPH Tech Academy", position: "Social Media Marketing Manager" },
        { name: "Ruby Ko", company: "Invesco", position: "ETF & Content Marketing Intern" },
      ],
      "Operations": [
        { name: "Brandyn Huynh", company: "Amazon", position: "Area Manager Intern" },
        { name: "Eddie Rios", company: "Ingram Micro", position: "Business Analyst Intern" },
      ],
      "Public Relations": [
        { name: "Lilian Luu", company: "Cruise", position: "Internal Communications Intern" },
      ],
      "Project Management": [
        { name: "Jamie Zhao", company: "Walmart", position: "Project Management Intern" },
        { name: "Qui Hoang", company: "Critical Mass", position: "Project Delivery Intern" },
        { name: "Vivian Tran", company: "ServiceNow", position: "Project Management Intern" },
      ],
      "Technology": [
        { name: "Jaejin Kim", company: "Profound", position: "Software Engineer Intern" },
        { name: "Madhu Sharma", company: "Amazon", position: "Software Development Engineer Intern" },
        { name: "Rainer Setiawan", company: "Profound", position: "Product Design Intern" },
        { name: "Rithu Eswaramoorthy", company: "MongoDB", position: "Software Engineer Intern" },
        { name: "Sophia Tran", company: "Dassault Systèmes", position: "Software Engineer Intern" },
        { name: "Tannvi Banerjee", company: "Apsy", position: "Machine Learning Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Ashley London", company: "Revolution Entertainment Services", position: "Accounting Assistant" },
        { name: "Deena Toofan", company: "Deloitte", position: "Audit & Assurance Associate" },
      ],
      "Consulting": [
        { name: "Sera Xu", company: "EY-Parthenon", position: "Associate" },
        { name: "Will Bordessa", company: "Slalom", position: "Associate Consultant" },
      ],
      "Human Resources": [
        { name: "Omar Naji", company: "Capital One", position: "HR Rotational Program Associate" },
      ],
      "Marketing": [
        { name: "Adrian Siu", company: "ServiceNow", position: "Product Marketing Associate" },
        { name: "Courtney Tsao", company: "ServiceNow", position: "Marketing Operations Associate" },
        { name: "Faith Chia", company: "ServiceNow", position: "Product Marketing Associate" },
      ],
      "Project Management": [
        { name: "Raymond Dinh", company: "HP", position: "Project Management Lead" },
      ],
      "Real Estate": [
        { name: "Liz Chan", company: "Prologis", position: "Investment Analyst" },
      ],
      "Sales": [
        { name: "Catherine Nguyen", company: "Amazon Web Services", position: "Associate Account Executive" },
      ],
      "Technology": [
        { name: "Hanui Lee", company: "JP Morgan Chase & Co.", position: "Design Analyst" },
        { name: "Naveen Sastri", company: "MasterCard", position: "Product Manager" },
        { name: "Ryan Miranda", company: "Microsoft", position: "Software Engineer" },
        { name: "Stephen Minn", company: "Cox", position: "Product Owner" },
      ],
    },
  },

  "2022": {
    internships: {
      "Accounting": [
        { name: "Ashley London", company: "Revolution Entertainment Services", position: "Accounting Assistant" },
        { name: "Deena Toofan", company: "Comfort Keepers", position: "Finance Intern" },
        { name: "Jasraj Singh", company: "Valleysoft Directions", position: "Director" },
        { name: "Qui Hoang", company: "Grant Thornton", position: "Rotational Intern" },
        { name: "Sydney Yu", company: "EY", position: "Audit Intern" },
        { name: "Talia Yip", company: "PwC", position: "Audit Intern" },
        { name: "Denise Wei", company: "PwC", position: "Audit Intern" },
      ],
      "Consulting": [
        { name: "Eddie Rios", company: "Mentor Global Consultants", position: "Research and Business Analyst" },
        { name: "Kayla Wong", company: "Accenture", position: "Salesforce Project: Business Analyst Intern" },
        { name: "Lumin Oo", company: "Deloitte", position: "Discovery Consulting Intern" },
        { name: "Raymond Dinh", company: "Salesforce", position: "Business Systems Analyst Intern" },
        { name: "Will Bordessa", company: "Slalom", position: "Business Advisory Services Intern" },
      ],
      "Finance": [
        { name: "Haley Kim", company: "Wells Fargo", position: "Corporate Banking Summer Analyst" },
      ],
      "Human Resources": [
        { name: "Justin Chao", company: "Western Digital", position: "Human Resources Intern" },
        { name: "Omar Naji", company: "Capital One", position: "HRIP Intern" },
        { name: "Kaylie Zhou", company: "Adobe", position: "Global Rewards Intern" },
      ],
      "Management": [
        { name: "Vivian Tran", company: "ServiceNow", position: "IT Project Management Intern" },
        { name: "Yllana Casim", company: "Intel", position: "Ecosystem Portfolio Scale and Enablement Intern" },
      ],
      "Marketing": [
        { name: "Adrian Siu", company: "ServiceNow", position: "Solutions Marketing Co-op" },
        { name: "Catherine Lin", company: "UCI Esports", position: "Stream Production Intern" },
        { name: "Courtney Tsao", company: "NBCUniversal", position: "Consumer Insights Intern" },
        { name: "Hans Chang", company: "BenQ", position: "Ecommerce Marketing Intern" },
        { name: "Jamie Zhao", company: "ServiceNow", position: "Strategic Events Marketing Co-Op" },
        { name: "Julie Hsieh", company: "Day and Night International Co.", position: "Marketing Intern" },
        { name: "Naveen Sastri", company: "MasterCard", position: "Cyber & Intelligence Solutions Intern" },
      ],
      "Operations": [
        { name: "Aaron Lee", company: "Oppti", position: "Business Development Intern" },
        { name: "Sera Xu", company: "Glassdoor", position: "Business Operations Intern" },
      ],
      "Product": [
        { name: "Faith Chia", company: "ServiceNow", position: "Product Marketing Co-Op" },
        { name: "Hanui Lee", company: "JP Morgan Chase & Co.", position: "Design Development Summer Analyst" },
        { name: "Nicole Nguyen", company: "Moody's Analytics", position: "Data Solutions Marketing Intern" },
        { name: "Stephen Minn", company: "Cox Automotive", position: "Product Management Intern" },
      ],
      "Public Relations": [
        { name: "Lilian Luu", company: "Comcast", position: "Public Relations Intern" },
      ],
      "Real Estate": [
        { name: "Jodie Tai", company: "The Walt Disney Company", position: "Real Estate Controls Intern" },
        { name: "Liz Chan", company: "CBRE", position: "Brokerage Intern" },
      ],
      "Sales": [
        { name: "Ruby Ko", company: "Smith & Associates", position: "Sales Assistant Intern" },
        { name: "Catherine Nguyen", company: "Amazon", position: "AWS Sales Intern" },
      ],
      "Software Engineering": [
        { name: "Madhu Sharma", company: "Amazon", position: "Software Development Engineer Intern" },
        { name: "Ryan Miranda", company: "Microsoft", position: "Software Engineer Intern" },
        { name: "Rithu Eswaramoorthy", company: "MongoDB", position: "Software Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Tiffany Wong", company: "KPMG", position: "Audit Associate" },
      ],
      "Consulting": [
        { name: "Ethan Canavan", company: "Deloitte", position: "Application & Program Analyst" },
        { name: "Linda Woo", company: "Deloitte", position: "Application & Program Analyst" },
      ],
      "Finance": [
        { name: "Lucian Liu", company: "Prudential Private Capital", position: "Investment Analyst" },
        { name: "Khoa Tran", company: "JP Morgan Chase & Co.", position: "MMBSI Analyst" },
      ],
      "Human Resources": [
        { name: "Sahana Vairavaraj", company: "Capital One", position: "Human Resources Rotational Program Associate" },
      ],
      "Management": [
        { name: "Cathy Yun", company: "Capital One", position: "Management Rotational Program" },
      ],
      "Marketing": [
        { name: "Josh Tong", company: "Mobvista", position: "Marketing Coordinator" },
      ],
      "Product": [
        { name: "Sandy Nguyen", company: "MongoDB", position: "Product Designer" },
      ],
      "Tech Sales": [
        { name: "Ian Han", company: "Oracle", position: "Business Development Consultant" },
      ],
      "Venture Capital": [
        { name: "Julian Rachman", company: "Nomad", position: "Growth Lead" },
      ],
    },
  },

  "2021": {
    internships: {
      "Accounting": [
        { name: "Cathy Yun", company: "BDO", position: "Tax Intern" },
        { name: "Cathy Yun", company: "Holthouse Carlin & Van Trigt", position: "Tax Intern" },
        { name: "Sahana Vairavaraj", company: "Baker Tilly", position: "Tax Intern" },
      ],
      "Consulting": [
        { name: "Haley Kim", company: "Sizigi", position: "Strategy Consulting Intern" },
        { name: "Raymond Dinh", company: "Mentor Global Consultants", position: "Management Consulting Intern" },
        { name: "Sera Xu", company: "180 Degrees Consulting", position: "Associate Consultant" },
      ],
      "Finance": [
        { name: "Julian Rachman", company: "Two Sigma Ventures", position: "Summer Investor" },
        { name: "Khoa Tran", company: "JPMorgan Chase & Co.", position: "MMBSI Summer Analyst" },
        { name: "Tiffany Wong", company: "JPMorgan Chase & Co.", position: "GFBM Summer Analyst" },
        { name: "Lucian Liu", company: "Prudential Private Capital", position: "Summer Investment Analyst" },
      ],
      "Human Resources": [
        { name: "Omar Naji", company: "TikTok", position: "Talent Acquisition Intern" },
        { name: "Sahana Vairavaraj", company: "Capital One", position: "HR Rotational Program Intern" },
      ],
      "Marketing": [
        { name: "Catherine Lin", company: "Westhaven Power", position: "Marketing Intern" },
        { name: "Le An Pham", company: "Fiddler", position: "Marketing Intern" },
        { name: "Serina Nguyen", company: "EtherWAN Systems", position: "Marketing Intern" },
        { name: "Catherine Nguyen", company: "HashiCorp", position: "Marketing Demand Generation Intern" },
        { name: "Catherine Nguyen", company: "SoundOff", position: "Brand Management & PR Intern" },
        { name: "Faith Chia", company: "TJX Companies", position: "Merchandising Intern" },
        { name: "Jenny Cheung", company: "Saks OFF 5th", position: "Social Media Intern" },
        { name: "Joshua Tong", company: "United Exchange Corporation", position: "Marketing Assistant" },
        { name: "Naveen Sastri", company: "eBay", position: "Marketing Planning Intern" },
        { name: "Raj Singh", company: "Sencha Credit", position: "Content Marketer" },
      ],
      "Operations": [
        { name: "Emily Nguyen", company: "Samba TV", position: "Business Operations Intern" },
        { name: "Haley Kim", company: "BlackBerry", position: "Managed Security Service Provider" },
        { name: "Jasmin He", company: "Henkel", position: "Brand Management Intern" },
        { name: "Raymond Dinh", company: "Agora Néos", position: "Project Management Intern" },
      ],
      "Product": [
        { name: "Sandy Nguyen", company: "McAfee", position: "Product Design Intern" },
        { name: "Sandy Nguyen", company: "MongoDB", position: "Product Design Intern" },
      ],
      "Technology": [
        { name: "Ryan Miranda", company: "Microsoft", position: "Software Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "David Sonq", company: "EY", position: "Tax Staff" },
        { name: "Tiffany Chan", company: "RSM", position: "Audit Associate" },
      ],
      "Consulting": [
        { name: "Philip Cheung", company: "Deloitte", position: "Application & Program Analyst" },
        { name: "Naishal Shah", company: "Green Street Advisors", position: "Market Research Associate" },
        { name: "Matthew Nagata", company: "Workday", position: "Field Readiness Architect" },
      ],
      "Finance": [
        { name: "Yong Lin", company: "Capital One", position: "Commercial Rotational Program Associate" },
      ],
      "Human Resources": [
        { name: "Jeffrey Cho", company: "Western Digital", position: "HR Coordinator" },
        { name: "Andrew Duong", company: "Armanino LLP", position: "Sourcing Recruiter" },
      ],
      "Marketing": [
        { name: "Astyr Ko", company: "Western Digital", position: "Marketing Communications Specialist" },
        { name: "Jenny Cheung", company: "SAP", position: "Marketing Coordinator" },
        { name: "Le An Pham", company: "Redbubble", position: "Brand Partnerships Coordinator" },
        { name: "Jasmin He", company: "Henkel Beauty", position: "Brand Management/Product Development" },
      ],
    },
  },

  "2020": {
    internships: {
      "Accounting": [
        { name: "Sahana Vairavaraj", company: "Marcum", position: "Assurance Intern" },
        { name: "Tiffany Chan", company: "RSM", position: "Assurance Intern" },
        { name: "Andrew Duong", company: "Crowe", position: "Tax Intern" },
        { name: "David Sonq", company: "EY", position: "Tax Intern" },
        { name: "Tiffany Wong", company: "KPMG", position: "Tax Intern" },
      ],
      "Consulting": [
        { name: "Philip Cheung", company: "COPE Health Solutions", position: "eMoney Consultant Intern" },
        { name: "Tony Zhou", company: "EY", position: "Business Consulting Intern" },
        { name: "Linda Woo", company: "KPMG", position: "Advisory Intern" },
      ],
      "Finance": [
        { name: "Lucian Liu", company: "Experian", position: "Corporate Finance Intern" },
        { name: "Yong Lin", company: "City National Bank", position: "Specialty Banking Summer Analyst" },
        { name: "Stephen Minn", company: "KLK Capital Management", position: "Finance Intern" },
      ],
      "Human Resources": [
        { name: "Jeffrey Cho", company: "Western Digital", position: "Talent Acquisition Intern" },
        { name: "Emily Nguyen", company: "New Relic", position: "Talent Development Intern" },
        { name: "Ian Han", company: "Sunwest Bank", position: "Talent Development Intern" },
        { name: "Sera Xu", company: "CreatorUp", position: "Training Solutions Intern" },
      ],
      "Marketing": [
        { name: "Astyr Ko", company: "ServiceNow", position: "Brand Marketing Intern" },
        { name: "Jenny Cheung", company: "Shiseido", position: "Brand Marketing Intern" },
        { name: "Le An Pham", company: "Sunwest Bank", position: "Brand Marketing Intern" },
        { name: "Serina Nguyen", company: "Issuu", position: "Brand Marketing Intern" },
        { name: "Joshua Tong", company: "DiverseVC", position: "Marketing & Content Intern" },
        { name: "Omar Naji", company: "NUDA Juice & Wellness", position: "Marketing Strategy Intern" },
        { name: "Catherine Lin", company: "Cybra Security", position: "Sales & Marketing Intern" },
        { name: "Catherine Nguyen", company: "ViaLoop", position: "Sales & Marketing Intern" },
      ],
      "Operations": [
        { name: "Jessica Lee", company: "The Walt Disney Company", position: "Enterprise Sourcing Associate" },
        { name: "Raymond Dinh", company: "Pathways to Career Success", position: "Administrative Assistant" },
        { name: "Stephen Minn", company: "Ripplink", position: "Strategy & Operations Intern" },
        { name: "Vivi Liu", company: "CrossBond Brand Consultant", position: "Project Manager" },
      ],
      "Product": [
        { name: "Alexis Rivera", company: "Foundations Jewelry", position: "Product Development" },
        { name: "Jasmin He", company: "Seagate Technology", position: "Product Line Management Intern" },
        { name: "Sandy Nguyen", company: "GoInvo", position: "UX Design Intern" },
      ],
      "Technology": [
        { name: "Ben Fan", company: "KJ Soft", position: "Data Science Intern" },
        { name: "Ryan Chen", company: "VMware", position: "Data Science Intern" },
        { name: "Ryan Miranda", company: "Microsoft", position: "Software Engineer Intern" },
        { name: "Julian Rachman", company: "Amazon Web Services", position: "Technical Consultant" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Romeo Li", company: "EY", position: "Assurance Associate" },
        { name: "Joy Huang", company: "RSM", position: "Assurance Associate" },
        { name: "Tri Do", company: "KPMG", position: "Audit Associate" },
        { name: "Nicholas Tam", company: "RSM", position: "Tax Associate" },
      ],
      "Analytics": [
        { name: "Dominic Wright", company: "Paramount Residential Mortgage Group", position: "Junior Business Analyst" },
        { name: "Andrew Kusnohadi", company: "Optum", position: "Business Analyst" },
      ],
      "Consulting": [
        { name: "Jeff Lu", company: "Accenture", position: "Strategy & Management Consulting Analyst" },
        { name: "Emily Nguyen", company: "EY", position: "Business Consultant" },
        { name: "Jessica Lee", company: "Deloitte", position: "Risk Advisory Analyst" },
      ],
      "Finance": [
        { name: "Katie Xiong", company: "Prudential Private Capital", position: "Investment Analyst" },
      ],
      "Marketing": [
        { name: "Alexis Rivera", company: "United Exchange Corporation", position: "Product Marketing Associate" },
        { name: "Janessa Paredes", company: "Hochburg Sports Marketing", position: "Social Media Specialist" },
      ],
      "Technology": [
        { name: "Kevin Loc", company: "Amazon", position: "Software Development Engineer" },
      ],
    },
  },

  "2019": {
    internships: {
      "Accounting": [
        { name: "Joy Huang", company: "RSM", position: "Audit Intern" },
        { name: "Tri Do", company: "KPMG", position: "Audit Intern" },
        { name: "Katherine Jiang", company: "Deloitte", position: "Audit & Assurance Intern" },
        { name: "Romeo Li", company: "EY", position: "Assurance Intern" },
        { name: "Nicholas Tam", company: "RSM", position: "Tax Intern" },
      ],
      "Consulting": [
        { name: "Emily Nguyen", company: "EY", position: "Risk Advisory Intern" },
        { name: "Jeff Lu", company: "Accenture", position: "Consulting Analyst Intern" },
      ],
      "Finance": [
        { name: "Aira Samontina", company: "Benefit Funding Retirement Services", position: "Wealth Management Intern" },
        { name: "Katie Xiong", company: "Season Two Ventures", position: "Venture Capital Intern" },
        { name: "Tiffany Wong", company: "City of Redwood City", position: "Finance & Revenue Services Intern" },
      ],
      "Human Resources": [
        { name: "Jeffrey Cho", company: "Optum", position: "Client Management Intern" },
        { name: "Jenny Cheung", company: "Greenhouse Agency", position: "HR Assistant" },
        { name: "Jessica Lee", company: "Western Digital", position: "RAMP Compensation Intern" },
      ],
      "Marketing": [
        { name: "Jenny Cheung", company: "BlackBerry", position: "Corporate Marketing Intern" },
        { name: "Julia Wong", company: "Ytel", position: "Digital Marketing Intern" },
        { name: "Le An Pham", company: "Polar Holidays", position: "Digital Marketing Intern" },
        { name: "Karen Ching", company: "HomeTown Financial Services", position: "Marketing Intern" },
        { name: "Vivi Liu", company: "OC Visitors Association", position: "Marketing Coordinator" },
      ],
      "Product": [
        { name: "Sandy Nguyen", company: "4S Education Foundation", position: "Product Designer & Developer" },
        { name: "Sandy Nguyen", company: "Aeromates Co.", position: "UX/UI Design Associate" },
      ],
      "Strategy": [
        { name: "Dominic Wright", company: "Cox Communications", position: "Competitive Insights Intern" },
        { name: "Emily Nguyen", company: "Lumentum", position: "WorkPlace Services Business Operations Intern" },
        { name: "Ivy Chen", company: "Danone", position: "Category Strategy & Insights Intern" },
      ],
      "Technology": [
        { name: "Julian Rachman", company: "Pollenly", position: "Data Science Engineer Intern" },
        { name: "Kevin Loc", company: "Siemens Software", position: "Software Development Intern" },
        { name: "Ryan Chen", company: "Effect-Tech", position: "Software Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Carol Lai", company: "EY", position: "Tax Staff" },
        { name: "Philip Au", company: "EY", position: "Assurance Staff" },
      ],
      "Consulting": [
        { name: "Erica Truong", company: "Deloitte", position: "Business Analyst" },
        { name: "Prachi Athavale", company: "Deloitte", position: "Business Technology Analyst" },
      ],
      "Finance": [
        { name: "Ethan Chee", company: "Deloitte", position: "Engagement Financial Advisor" },
        { name: "Jessica Cheng", company: "Goldman Sachs", position: "Private Equity Analyst" },
      ],
      "Human Resources": [
        { name: "LeAnne Do", company: "Google", position: "GCP Training Campaign Coordinator" },
        { name: "Huyen Nguyen", company: "Brown & Streza", position: "HR Assistant" },
      ],
      "Operations": [
        { name: "Ivy Chen", company: "DoorDash", position: "Merchant Associate" },
        { name: "Resanna Li", company: "Amazon", position: "Area Manager" },
      ],
      "Technology": [
        { name: "Kenny Huynh", company: "Amazon", position: "Software Development Engineer" },
      ],
    },
  },

  "2018": {
    internships: {
      "Accounting": [
        { name: "Carol Lai", company: "EY", position: "Tax Intern" },
        { name: "Philip Au", company: "EY", position: "Audit Intern" },
      ],
      "Consulting": [
        { name: "Brandon Andrews", company: "Tsang & Associates", position: "Business & Legal Consultant" },
        { name: "Ethan Chee", company: "Deloitte", position: "Engagement Controller Summer Scholar" },
        { name: "Prachi Athavale", company: "Deloitte", position: "Summer Scholar" },
      ],
      "Finance": [
        { name: "Erica Truong", company: "Goldman Sachs", position: "Risk Management Summer Analyst" },
        { name: "Jessica Cheng", company: "Goldman Sachs", position: "Finance Summer Analyst" },
        { name: "Dominic Wright", company: "Paramount Residential Mortgage Group", position: "Account Management Intern" },
        { name: "Ryan Chen", company: "Infoblox", position: "Revenue Analyst Intern" },
        { name: "Tri Do", company: "Pathway Capital Management", position: "Private Equity Intern" },
      ],
      "Human Resources": [
        { name: "LeAnne Do", company: "Blizzard Entertainment", position: "Leadership Development Coordinator" },
        { name: "Huyen Nguyen", company: "JNR Inc.", position: "HR Intern" },
      ],
      "Marketing": [
        { name: "Jessica Lee", company: "Cylance Inc.", position: "Digital Marketing Intern" },
        { name: "Joy Huang", company: "GMR Web Team", position: "Digital Marketing Intern" },
        { name: "Julia Wong", company: "The Portal", position: "Digital Marketing Intern" },
        { name: "Ivy Chen", company: "Bonduelle Fresh Americas", position: "Marketing Intern" },
        { name: "Keene Do", company: "American Honda Motor Company", position: "Marketing Intern" },
      ],
      "Operations": [
        { name: "Andrew Kusnohadi", company: "HireRight", position: "Sales Operations Intern" },
        { name: "Resanna Li", company: "Cintas", position: "Operations Scholar" },
      ],
      "Technology": [
        { name: "Kenny Huynh", company: "Amazon", position: "Software Development Engineer Intern" },
      ],
    },
    fullTimes: {
      "Accounting": [
        { name: "Christina Truong", company: "Deloitte", position: "Audit Assistant" },
        { name: "Hans Yu", company: "Almich & Associates", position: "Accountant" },
        { name: "Kelly So", company: "Grant Thornton", position: "Audit Associate" },
      ],
      "Consulting": [
        { name: "Jenna Huynh", company: "Deloitte", position: "Business Analyst" },
        { name: "Raymond Sit", company: "Deloitte", position: "Cyber Risk Consultant" },
      ],
      "Technology": [
        { name: "Dustin Perez", company: "UC Irvine", position: "Software Developer" },
      ],
    },
  },
};

export const careerYears = Object.keys(careersData).sort((a, b) => Number(b) - Number(a));
