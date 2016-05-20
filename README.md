## Useful Links

[Customization of Visual Studio Code](https://code.visualstudio.com/docs/customization/overview)
[Visual Studio Code and Angular](https://blogs.msdn.microsoft.com/vscode/2015/05/21/getting-started-with-angular-and-visual-studio-code/)

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
- Copy one line up, copy one line down `Shift + Alt + UpArrow`, `Shift + Alt + DownArrow`

### Intellisense

- `Control + Space` in a bower.json or package.json, jsconfig.json file for example, will give us suggestions for any property
- Also we can use `Control + Space`in a **css** file.

### tsd

The following command will create a *typings* folder. 

```bash
# -s is to save it out
# -a is for action
# -o overwrite in case is already there
# -r recursive search inside all the references

tsd query -r -o -a install bardjs angular jquery chai mocha angular-ui-router angular-sanitize angular-mocks angular-animate bootstrap moment-node moment sinon toastr -s
```

It will create the following files:

- tsd.d.ts 
- tsd.json

### Snippets

Typing *fun* and then pressing *tab*.

```js
function name(params) {
    
}
```

Or we can create ours:

- Go to *Preferences* -> *User Snippets* select the language and edit the file.

```json
// javascript.json
// in this example we also use variables ${var1}, ${var2}, etc.
// $0 leaves the cursor where we want it to be after calling the snippet
{
	"Hello World Function": {
		"prefix": "hello",
		"body": [
			"function helloWorld(${var1}) {",
			"\tconsole.log('Hello World '+${var1});",
            "\t$0",				
			"}"
		]
	}
}
``` 

[John Papa's user snippets](http://jpapa.me/ngstyles)

### Go to definition, find references, and Peek

In the mac you may want to disable the special function keys of the keyboard. Also you might need to go to keyboard shortcuts and look if there's any collision with the *Mission Control*.

```bash
F12 # go to definition
Alt F12 # go to the definition, but without moving from where you are
Shift F12 #find all references
```

### References in Typescript

Keywords: **references**, **peek**.

- We can hold Command/Control to see the definition
- Click with Command/Control to go the file
- Click with Option/Alt to open the file in a new window

### Finding symbols

To find symbols, and symbols categorized ```@, @:```

To change the symbol **Everywhere** whe can use ```F2```

### Errors and Formatting

#### Formatting

We click ```Command or Ctrl P``` and once there ```>Format Code````

#### Checking Errors

The same as before this time ```!``` and this shows the errors, then in each error ```F8``` and we get the intellisense.

#### Move the lines up and down

```alt or option and arrow up or down```

## Themes and Preferences

### Theme

```Ctrl + Shift + P``` ```>Preferences Color Theme```

### Preferences

There are:

* Default
* User
* Workspace (for specific project)

```File > Preferences > User Settings```

- "editor.formatOnType": true
- "editor.tabSize": 4
- "editor.wrappingColumn": 120
- "files.exclude": {}
- "editor.fontFamily": "Courier"
- "editor.fontsize": 14

```json
// files.exclude
{
	"**/.git": true, 
	"**/.DS_Store": true, 
	"**/*.js": {
		"when": "$(basename).ts" /* hides js files when ts exist */ 
		}
}
```

#### Workspace

Creates **settings.json** file stored in the **.settings** folder.

### Scroll the default preferences

When editing the default preferences ```Ctrl + Shift + P``` and use ```@``` or ```:@```

### Keybindings

[code.visualstudio.com/Docs/customization](code.visualstudio.com/Docs/customization)

|keys|Command|
|:--|:--|
|Shift+Alt+F|Format Code|
|Alt+F12|Peek|
|Shift+F12|Show al references|
|F12|Go to Definition|
|Ctrl+P|Go to File or History|
|Ctrl + 1|Focus on frist pane|

#### Defining Keybindings

It's a json file

```json
{
	"key": "ctrl+shift+l",
	"command": "workbench.action.changeToLightTheme"
}
```

## Language Features

- C# and Typescript are totally featured
- CSS, HTML, Javascript, JSON, Less and Sass hava Intellisense and linting.

### HTML

- We can use **emmet**
- use angular directives inside

### CSS and Less

- ```Ctrl+Shift+O``` shows as the CSS for tag elements
- Intellisense with properties
- colors
- emmet

### JSON

- Navigate through ```Ctrl+Shift+O```
- ```Ctrl+Space``` to check for options

### Markdown

- ```Ctrl+Shift+V``` let's you do a preview.

### Javascript

- Format code ```Alt+Shift+F```
- ```Ctrl+.``` to fix warnings

#### Intellisense 

Definetely Typed: 

Example ```angular.d.ts```.

We use the library **tsd**

```bash
npm install tsd -g
tsd query -r --o -a install angular --save
```

### ES6

In the intellisense of visual code reads the file **jsconfig.json** and changes.

```json
{
	"compilerOptions": {
		"target": "ES6"
	}
}
```

### Gulp

If we use ```>task``` it will look for gulp tasks.

### Typescript

- cross references
- symbols
- show definitions
- tsd.d.ts

**tsconfig.json** (the equivalent of jsconfig.json)

- we can also use tasks that we can define through ```Ctr+P``` ```>task```

## Version Control and Git

- Git Viewlet
- Status Bar
- File Gutter indicators
- Output

## Debugging

## Integrating Code with External Tools via Tasks

