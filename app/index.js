'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Enter a name for your project '
        }
	]).then( (answers) => {
	    // create destination folder
	    //this.destinationRoot(answers.name);

	    this.fs.copyTpl(
	      this.templatePath('index.html'),
	      this.destinationPath('index.html'),
	      { title: answers.name }
	    );
	    this.fs.copy(this.templatePath('css/style.css'), this.destinationPath('css/style.css'));
	    this.fs.copy(this.templatePath('css/reset.css'), this.destinationPath('css/reset.css'));
	    this.fs.copy(this.templatePath('js/scripts.js'), this.destinationPath('js/scripts.js'));
	});
  }
};