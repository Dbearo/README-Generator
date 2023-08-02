// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) { 
   console.log(data.licenseCon)
  if (data.licenseCon) {
    return "";
  } else if (data.license === "none") {
    return "";
  }
  else {
    return data.license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (renderLicenseBadge(data) === "") {
    return;
  } else {
    const imgLink = `![](https://img.shields.io/badge/license-${renderLicenseBadge(data)}-green)`
    return imgLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.licenseCon) {
    return `![GitHub](https://img.shields.io/github/license/${data.user}/${data.repo})`;
  } else {
    return renderLicenseLink(data);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
 ${renderLicenseSection(data)}

  ## Discription
   ${data.Description}
`;
}

module.exports = generateMarkdown;
