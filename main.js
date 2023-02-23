'use strict';

const { Plugin } = require('obsidian');

class MyPlugin extends Plugin {
    onload() {
      // Register a callback function to be called whenever a new file is created
      this.registerEvent(this.app.vault.on("create", async (file) => {
        // Retrieve the contents of the new file
        const contents = await this.app.vault.read(file);
  
        // Display a popup with the file path and contents
        new Notice(`New file created: ${file.path}\nContents: ${contents}`);
      }));
    }
  }
  
  module.exports = MyPlugin;
  
  