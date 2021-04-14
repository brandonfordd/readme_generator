// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = "";

function renderLicenseBadge(license) {
  let badgeLink = `![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />`
  if (!license) {
    return
  } else {
    badge = badgeLink 
  } return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

  // Plug userReponses into table of contents
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
  // Create title and description
  // Generate badges
  let draftMarkdown = 
  `
  # ${userResponses.title}

  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) `
  // added badge for license
  
  if (userResponses.license === 'none') {

  } else {

  
  draftMarkdown +=
  `![Badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)<br />


  
  `
  };


  `
  ## Description 
  
  
  ${userResponses.description}
  `
  // Add table of contents data to markdown
  draftMarkdown += draftTable;
  
  // Add license section to markdown
  draftMarkdown += `
  * [License](#license)`;

  // Create installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userResponses.installation}`
  };

  // Create usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userResponses.usage}`
  };
  
  // Create contribution section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${userResponses.contributing}`
  };

  // Create tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userResponses.tests}
  `};

  // Connect userResponses to license section
  
  if (userResponses.license === 'none') {

  } else {

  
  draftMarkdown +=
  `
  
  ## License

  ![Badge](https://img.shields.io/badge/license-${userResponses.license}-brightgreen)<br />
  `
  };

  // Questions section
  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDeveloper +=
  `
  Email: ${userInfo.email}
  `};

 // Add developer section to markdown
  draftMarkdown += draftDeveloper;

  // Return markdown
  return draftMarkdown;
};

// Export markdown module
module.exports = generateMarkdown;