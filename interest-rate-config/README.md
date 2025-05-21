# Introduction 
React library component using Vite. 

# Project Structure
Inside the __*site*__ folder, you'll find the platform that resembles the Data Portal functionality (you don't really need to change anything there).
Your new library is found inside the __*packages*__ folder. You can code your project there (_src/*_).

# Installation process
1. *yarn install*
2. *yarn run install-project*

# External libraries
It's also important to externalize any dependencies you do not want to bundle into your library: react, react-dom, and styled-components. You can do so in the __*vite.config.js*__ file inside your library folder.

# Start app
You can either start the package and the site in separate terminal windows, or run both with *concurrently* with __*yarn dev*__. 

# Publish library
For the Data Portal, we're publishing in an Azure Feed. You should be able to find details inside the *.npmrc* file. 
Whenever you want to update the library you're working on, please follow the steps from your library folder:

1. Commit your changes
2. Update the package version. Eg.: *npm version 1.0.2*
3. Publish new version: *npm publish*