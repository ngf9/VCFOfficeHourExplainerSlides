Terminal 101

The Basics: Three Terms to Know
Terminal — The app where you type commands. A text-based window into your computer's operating system.
Command Language — The syntax the terminal understands. Bash and Zsh are examples. It's the grammar you use to talk to your machine.
CLI (Command Line Interface) — The text-based way of interacting with your computer, as opposed to clicking buttons in a graphical interface (GUI).

What is Bash? What is Zsh? What is Oh My Zsh?

Bash (Bourne Again SHell) is a shell - a program that reads your text commands and tells the operating system what to do.

Historically, macOS and Linux used Bash by default.

In 2019, macOS switched its default shell from Bash to Zsh. Zsh is largely compatible with Bash but adds better defaults, smarter features, and more customization.

Oh My Zsh is not a shell. It’s a framework that runs on top of Zsh and adds themes, plugins, and helpful shortcuts that make the terminal more pleasant and productive. I recommend installing Oh My Zsh.

Bash – The “default” command language
Zsh – A newer (nicer) shell that replaces bash
Oh My Zsh — Not a shell; a toolkit for your shell (install: https://ohmyz.sh/#install)
Use the Terminal

1. Navigation: Three Key Commands
pwd  Where am I? Shows your current folder. 
cd folder-name Go somewhere. Moves you into a folder. Use cd .. to go back up one level. 
ls What’s inside this folder? Lists files and subfolders.

2. Opening Your Project in VS Code
code . Opens the current folder in VS Code. Fastest way to get your editor open. 

3. NPM Basics (React, Next.js) 
You only need two commands: 
npm install Install dependencies 
npm run dev Start the dev server so you can see your build on the browser via localhost

Important: You must run npm install and npm run dev inside your project folder. Check with ls. If you see package.json, you’re in the right place. If not, cd into the correct folder.
