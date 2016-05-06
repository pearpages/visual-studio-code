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

- Look for a file: `Ctrl + P`or `Command + P`
- Browse recent files: `Ctrl + P` or `Command + P`
- Toggle the sidebar: `Ctrl + B` or `Command + B` 
- Navigate History: `Ctrl + Tab` or `Command + Tab`
- Open a css sheet or another linked file: `Ctrl + click` or `Command + click`
- Open a css sheet or another linked file next to the current file: `Ctrl + Alt + click` or `Command + Option + click`
- Show help: just type `?`
- Symbol : `@`
- Symbol by type: `@:`
- Go to line: `Control + G` or `Command + G`

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

### Side by Side editing

In Mac: `Command + 1, Command + 2, Command + 3, ...`

In Windows: `Ctrl + 1, Ctrl + 2, Ctrl + 3, ...`

- Open a new windo `Control + \`
- Close current window: `Control + W`

### Important Keyboard Shortcuts

[Customization](http://code.visualstudio.com/Docs/customization)
[John Papa](http://www.johnpapa.net/visual-studio-code)

- Command Palette `Control + Shift + P`
- File Navigation `Control + P`
- See all options: `?` and any of the prior

### Language Features

The best support is for C# and Typescript.

[See them in the Visual Studio Code Webpage](http://code.visualstudio.com/Docs/languages)

## Refactoring

### HTML

- Close tags `Control + Shift + '`
- Open tags `Control + Shift + ¡` 

#### Emmet

[Syntax](http://docs.emmet.io)

```
div>ul>li(lipsum10)*5
div.container
```

### Selecting and Cursors

- Multicursors, I've changed my configuration in user settigngs to follow `Ctrl + Alt + 2numpad` and `Ctrl + Alt + 8numpad`
- Select all occurrences `Ctrl + F2` or `Ctrl + Shift + L`
- Progressively selecting `Ctrl + D` and Skipping one `Ctrl + K`

### Intellisense

- `Control + Space` in a bower.json or package.json, jsconfig.json file for example, will give us suggestions for any property
- Also we can use `Control + Space`in a **css** file.