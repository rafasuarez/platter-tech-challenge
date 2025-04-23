# platter-tech-challenge
## Description

This repository contains the `platter-tech-challenge` project. It includes a `package.json` file that manages the project's dependencies, scripts, and metadata.

## package.json Overview

The `package.json` file is a critical component of this project. It provides the following:

- **Metadata**: Includes information such as the project name, version, and private status.
- **Dependencies**: Lists the libraries and packages required for the project to run.
- **DevDependencies**: Lists the tools and libraries needed for development purposes only.
- **Scripts**: Defines custom commands that can be executed using `npm run <script-name>`.

### Key Sections in package.json

1. **Name and Version**:
    - The `name` field specifies the project name: `"platter-tech-challenge"`.
    - The `version` field indicates the current version of the project: `"0.0.0"`.
    - The `private` field ensures the project is not accidentally published to the npm registry.

2. **Scripts**:
    - `start`: Starts the application using Parcel.
    - `build`: Builds the project for production using Parcel.

3. **Dependencies**:
    - Lists the packages required for the application to function:
      - `@tailwindcss/cli`: Tailwind CSS CLI tool.
      - `@tailwindcss/vite`: Tailwind CSS integration for Vite.
      - `tailwind-scrollbar`: A plugin for styling scrollbars with Tailwind CSS.

4. **DevDependencies**:
    - Lists packages used during development:
      - `@parcel/transformer-sass`: Parcel transformer for Sass files.
      - `@tailwindcss/postcss`: Tailwind CSS PostCSS plugin.
      - `parcel`: A web application bundler.
      - `svgo`: A tool for optimizing SVG files.
      - `tailwindcss`: A utility-first CSS framework.

### How to Use package.json

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the development server:
    ```bash
    npm run start
    ```

3. Build the project for production:
    ```bash
    npm run build
    ```

4. Add a new dependency:
    ```bash
    npm install <package-name>
    ```

5. Add a new dev dependency:
    ```bash
    npm install <package-name> --save-dev
    ```