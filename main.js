// Register a callback function to be called whenever a new file is created
app.vault.on("create", async (file) => {
    // Retrieve the contents of the new file
    const contents = await app.vault.read(file);
  
    // Do something with the file contents
    console.log(`New file created: ${file.path}`);
    console.log(`Contents: ${contents}`);
});
  