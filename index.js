const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
  <title>EAS GENERATOR</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">EMERGENCY ALERT SYSTEM</h1>
    <h2 class="marquee-text"><marquee>${answers.marqueetext}</h2></marquee>
   <br>
    <p>${answers.alertissuer}</p>
    <h3 class="h3">Issued a</h3>
    <h2 class="alert-type">${answers.alerttype}
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'marqueetext',
      message: 'Enter scrolling marquee text',
    },
    {
      type: 'input',
      name: 'alertissuer',
      message: 'Who is issuing the alert?',
    },
    {
      type: 'input',
      name: 'alerttype',
      message: 'Enter the alert type',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
