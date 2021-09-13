// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === "APACHE") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  }
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  }
  if (license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  }
  if (license === "APACHE") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  }
  if (license === "MIT") {
    return ""
  }
  if (license === "GNU GPLv3") {
    return ""
  }
  if (license === "APACHE") {
    return ""
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
1. [Description](#projectDescription)
2. [Installation Instructions](#installation)
3. [How to Use](#usage)
4. [License](#license)
5. [How to Contribute](#contributing)
6. [Tests](#tests)
7. [Questions](#github)

  # Description
  ${data.projectDescription}
  # Installation Instructions
  ${data.installation}
  # How to Use
  ${data.usage}
  # License
  Licensed under the ${data.license} license.

  ${renderLicenseBadge(data.license)}

  License URL: ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
  # How to Contribute
  ${data.contributing}
  # Tests
  ${data.tests}
  # Contact with Questions
  Github: https://github.com/${data.github}
  
  Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
