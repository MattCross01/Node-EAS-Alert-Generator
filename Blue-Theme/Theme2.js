const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>

  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style2.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@500;700&display=swap" rel="stylesheet">
  <title>EAS GENERATOR - Blue Theme</title>
  </head>
  <body>
  <audio src="https://www.youtube.com/watch?v=xU0h8LS6uSg" autoplay loop>YES</audio>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">EMERGENCY ALERT SYSTEM</h1>
     <br>
      <h2 class="alert-type">${answers.alerttype}</h2>
      <h2 class="marquee-text"><marquee scrollamount="35">${answers.marqueetext}</h2></marquee>
    </div>
    <div id="rectangle"></div>
  
  </body>
  </html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'sametones',
      message: 'Do you want to include the SAME header tones? WARNING: TONES ARE VALID, DO NOT ATTEMPT TO BROADCAST THIS PROGRAM!',
    },
    {
      type: 'input',
      name: 'marqueetext',
      message: 'Enter scrolling marquee text',
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
      err ? console.log(err) : console.log('Successfully updated EAS inputs!')
    );
  });
