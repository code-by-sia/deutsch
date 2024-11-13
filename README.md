### deutsch Test Questions

A static web app for practicing TUV questions in English

## Installation Guide

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Avoiding Permission Issues

To avoid permission problems, follow these steps:

1. **Set Up npm**:
   - Run these commands in your terminal to configure npm to use a folder in your home directory for global packages:
     ```bash
     mkdir ~/.npm-global
     npm config set prefix '~/.npm-global'
     ```

2. **Update Your PATH**:
   - Add this folder to your system PATH. Open your shell configuration file (like `.bashrc`, `.zshrc`, or `.bash_profile`) and add this line:
     ```bash
     export PATH=$HOME/.npm-global/bin:$PATH
     ```
   - Then, reload your shell configuration with:
     ```bash
     source ~/.bashrc  # or source ~/.zshrc or source ~/.bash_profile
     ```

### Fixing Permission Issues

If you run into permission issues, you can fix them by running:
```bash
sudo chown -R $(whoami) ~/.npm
