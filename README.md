## Why

### Top main reasons

It's something in between an editor and an IDE.

* Code is fast
* Faster with code
* Cross-platform
* Debugger
* Rich Intellisense
* Refactoring features

### Compared to other editors

#### Editors 

- Sublime
- Brackets
- Atom

Are/Have/Can:

- lightweight/fast
- file/folders
- many languages
- many workflows
- keyboard centered

#### IDEs

- Webstorm
- Visual Studio

Are/Have/Can:

- project systems
- code understanding
- debug
- integrated build
- File > New, Wizards
- designers
- ALM integration
- plaftorm tools
- ...

#### Visual Code

- lightweight/fast
- file/folders with project context
- many languages
- keyboard centered
- code understanding
- debug
- task running

### Under the Covers

> Visual Studio Code a new choice of tool that combines the simplicity of a code editor with what developers need for their code-edit-debug cycle. **Erich Gamma**

- It is done with Electron (Angular Opensource Project)
- Made by the authors of Monaco and Eclipse
- TypeScript Server

## Using and Configuring Visual Studio Code

### Command Palette

MAC: `Shift + Command + P`

Windows: `Shift + Ctrl + P`

### Command Line Options

In Windows: Open the current folder in the editor ```code .```

In Mac: 

[Use this link to setup the CLI in Mac](https://code.visualstudio.com/Docs/setup)

```bash
# ~/bash_profile
open ~/bash_profile
code () {VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}
source ~/bash_profile
```

```bash
# open in the last active instance
code index.html -r 

# open a new instance
code src/another/app -n 

# open a new instance to specific line and column
code -g src/client/app/home.controller.js:10:8
code -g -r src/client/app/home.controller.js:10:8 # the same but in the last opened instance

# open a new project in a new instance
code . -n
```

### Open multiple contigous windows

In Mac: Command + 1, Command + 2, Command + 3, ...

In Windows: Ctrl + 1, Ctrl + 2, Ctrl + 3, ...

