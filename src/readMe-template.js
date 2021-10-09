const fs = require('fs');

// create the title
const generateTitle = titleText => {
  if (!titleText) {
    return '';
  }

  return `# ${titleText}`;
};
// create the description
const generateDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `## Description 
  ${descriptionText}`;
};

// create the TOC Title
const generateTOCTitle = TOCTitle => {
  return '## Table Of Contents';
};

//Begin TOC Lines
const generateTOCLicense = TOCLicense => {
  if (!licenseText) {
    return '';
  }
  return '* [License Information](#license)'
};

const generateTOCInstall = TOCInstall => {
  if (!installText) {
    return '';
  }
  return '* [Instilation](#install)'
};

const generateTOCUsage = TOCUsage => {
  if (!usageText) {
    return '';
  }
  return '* [Usage](#usage)'
};
const generateTOCContributors = TOCContributors => {
  if (!contributorsText) {
    return '';
  }
  return '* [Contributors](#contributors)'
}

const generateTOCTesting = TOCTesting => {
  if (!testingText) {
    return '';
  }
  return '* [Testing](#testing)'
}

const generateTOCQuestions = TOCQuestions => {
  if (!questionssText) {
    return '';
  }
  return '* [Questions](#questions)'
}
//End TOC lines

const generateLicense = licenseText => {
  if (!LicenseText) {
    return '';
  }

  return `## License 
  ${licenseText}`;
};

const generateInstall = installText => {
  if (!installText) {
    return '';
  }

  return `## Instillation 
  ${installText}`;
};

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `## Usage 
  ${usageText}`;
};

const generateContributors = contributorsText => {
  if (!contributorsText) {
    return '';
  }

  return `## Contributors 
  ${contributorsText}`;
};

const generateTesting = testingText => {
  if (!testingText) {
    return '';
  }

  return `## Testing 
  ${testingText}`;
};

const generateQuestions = questionsText => {
  if (!questionsText) {
    return '';
  }

  return `## Questions 
  ${questionsText}`;
};

///////////////////////////////

// export function to generate entire readme
module.exports = readMeData => {
//   // destructure page data by section
//   const { projects, about, ...header } = templateData;

return `
${titleText}

${descriptionText}

${TOCTitle}
${TOCLicense}
${TOCInstall}
${TOCUsage}
${TOCContributors}
${TOCTesting}
${TOCQuestions}

${licenseText}
${installText}
${usageText}
${contributorsText}
${testingText}
${questionsText}

`


//   return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
//   </head>
  
//   <body>
//     <header>
//       <div class="container flex-row justify-space-between align-center py-3">
//         <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//         <nav class="flex-row">
//           <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//         </nav>
//       </div>
//     </header>
//     <main class="container my-5">
//       ${generateAbout(about)}
//       ${generateProjects(projects)}
//     </main>
//     <footer class="container text-center py-3">
//       <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
//     </footer>
//   </body>
//   </html>
//   `;
// };
