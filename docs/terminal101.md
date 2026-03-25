Terminal 101

How It All Fits Together (Layered Diagram)
Terminal — The app you open. A window on your screen where you interact with your computer using text.
  Shell (Bash, Zsh) — The interpreter inside. Reads your commands and tells the operating system what to do.
    CLI (Command Line Interface) — The method: you type text commands instead of clicking buttons in a GUI.

What is Bash? What is Zsh? What is Oh My Zsh?
These are all shells — the interpreter layer.

Bash (Bourne Again SHell) is a shell - a program that reads your text commands and tells the operating system what to do.

Historically, macOS and Linux used Bash by default.

In 2019, macOS switched its default shell from Bash to Zsh. Zsh is largely compatible with Bash but adds better defaults, smarter features, and more customization.

Oh My Zsh is not a shell. It's a framework that runs on top of Zsh and adds themes, plugins, and helpful shortcuts that make the terminal more pleasant and productive. I recommend installing Oh My Zsh.

Bash – The "default" command language
Zsh – A newer (nicer) shell that replaces bash
Oh My Zsh — Not a shell; a toolkit for your shell (install: https://ohmyz.sh/#install)

Why the Terminal Matters
Every tool you use — VS Code, Claude Code, npm, git — runs through the terminal under the hood. Learning a handful of commands gives you direct control over your development environment. You only need about 10 commands to be productive.

Navigation: 3 Key Commands (with file tree + typing animation)
pwd  Where am I? Shows your current folder.
cd folder-name Go somewhere. Moves you into a folder. Use cd .. to go back up one level.
ls What's inside this folder? Lists files and subfolders.

File Actions: Create & Delete (typing animation)
mkdir my-app  Create a new folder.
touch index.js  Create an empty file.
rm index.js  Delete a file (no undo!). Use rm -r folder-name to delete a folder.

Opening Your Project in VS Code (typing animation)
code . Opens the current folder in VS Code. Fastest way to get your editor open.

npm: Two Commands You Need (typing animation with output)
npm install Install dependencies → "added 1,247 packages in 12s"
npm run dev Start the dev server → "ready — started server on localhost:3000"

Important: You must run npm install and npm run dev inside your project folder. Check with ls. If you see package.json, you're in the right place. If not, cd into the correct folder.

Git from the Terminal (quick reference — see GitHub 101 deck for full picture)
git clone <url> — Download a repo to your machine
git status — See what's changed since last commit
git add . — Stage all changes for commit
git commit -m "msg" — Save a snapshot with a message
git push — Upload your commits to GitHub
git checkout -b name — Create and switch to a new branch

When Things Go Wrong (red error styling)
command not found — You're in the wrong folder or the tool isn't installed.
EACCES permission denied — Try prefixing with sudo (carefully).
port already in use — Another dev server is running; kill it or use a different port.

Helpful Shortcuts
Tab — Autocomplete file/folder names
Ctrl+C — Stop a running process
Ctrl+L — Clear the screen
↑ Arrow — Cycle through command history
!! — Repeat last command

Watch: Your First Terminal Session (animated terminal replay)
$ cd ~/Documents/my-project
$ ls → src/ package.json README.md
$ npm install → added 1,247 packages in 12s
$ npm run dev → ready — started server on localhost:3000

Your Cheat Sheet (Recap — three groups)

File System: pwd, cd, ls, mkdir, touch, rm
Git: clone, status, add, commit, push, branch
Dev Tools: code ., npm install, npm run dev

Install Oh My Zsh: ohmyz.sh
Questions? Ask in the VCF Slack.
