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
  } else if (data.license === "none") {
    return "";
  } else {
    return renderLicenseLink(data);
  }
}

function install(data) {
  if (data.instCon) {
    return `## Insallation

   ${data.Instalation}`
  } else {
    return ``
  }
}

function usage(data) {
  if (data.usCon) {
    return `## Usage

   ${data.Usage}`
  } else {
    return ``
  }
}


function credits(data) {
  if (data.credCon) {
    return `## Credits

   ${data.Credits}`
  } else {
    return ``
  }
}
function license(data) {
  if (data.licenseCon) {
  console.log("hi")
   return `## License

  Please input license here manualy`
  } else if (data.license === "none") {
    return ``
  } else {
  
    return `## License

   ${data.license}`
  }
}
function installCheck(check) {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}
function usageCheck(check) {
  if (!check) {
    return '';
  } else {
    return `* [Usage](#Usage)`
  }
}
function credCheck(check) {
  if (!check) {
    return '';
  } else {
    return `* [Credits](#Credits)`
  }
}
function licenseCheck(auto, check) {
  if (!auto) {
    if (check === "none") {
      return '';
    } else {
      return `* [License](#License)`
    }
  } else {
    return `* [License](#License)`
  }
}
function toc(data) {
  if (data.credCon || data.usCon || data.instCon || data.licenseCon) {
    return `## Table of Contents
`
  } else if (data.license != "none") {
    `## Table of Contents
    `
  } {
    return ``
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
 ${renderLicenseSection(data)}

  ## Description
   ${data.Description}

   ${toc(data)}

   ${installCheck(data.instCon)}
   ${usageCheck(data.usCon)}
  ${credCheck(data.credCon)}
  ${licenseCheck(data.licenseCon, data.license)}


  ${install(data)}

  

  ${usage(data)}

  ${credits(data)}

  ${license(data)}
`;
}

module.exports = generateMarkdown;
