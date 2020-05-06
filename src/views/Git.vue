<template>
  <div>
    <h1>Git</h1>
    <ul>
      <li>
        Git is a revision control system, a tool to manage your source code
        history.
      </li>
      <li>Git is the tool, GitHub is the service for projects that use Git.</li>
    </ul>
    <h1>Git Command</h1>
    <ul>
      <li>
        This command sets the author name and email address respectively to be
        used with your commits.
        <pre>
  <strong>git config</strong>
  Usage: git config –global user.name “[name]”
  Usage: git config –global user.email “[email address]”
</pre>
      </li>
      <li>
        This command is used to start a new repository.
        <pre>
        <strong>git init</strong>
        Usage: git init [repository name]
        initialized empty Git respository in [repository name]
        </pre>
      </li>
      <li>
        This command is used to obtain a repository from an existing URL.
        <pre>
        <strong>git clone</strong>
        Usage: git clone [url]
        Exp: git clone https://github.com/amitg2018/learning.git
        </pre>
      </li>
      <li>
        This command adds one or more files to the staging area.
        <pre>
        <strong>git add</strong>
        Usage: git add [file]
        Usage: git add .
        </pre>
      </li>
      <li>
        This command records or snapshots the file permanently in the version
        history.
        <pre>
        <strong>git commit</strong>
        Usage: git commit -m “Type in the commit message”
        Usage: git commit -a
        This command commits any files you’ve added with the git add command and also commits any files you’ve changed since then.
        </pre>
      </li>
      <li>
        This command shows the file differences which are not yet staged.
        <pre>
        <strong>git diff</strong>
        Usage: git diff
        Usage: git diff --staged
        This command shows the differences between the files in the staging area and the latest version present.
        Usage: git diff [first branch] [second branch]
        This command shows the differences between the two branches mentioned.
        </pre>
      </li>
      <li>
        <pre>
        <strong>git reset</strong>
        Usage: git reset [file]
This command unstages the file, but it preserves the file contents.
Exp: git reset site.css

Usage: git reset [commit]
This command undoes all the commits after the specified commit and preserves the changes locally.
Exp: git reset e96a76b55e5860a27f195c466c4104821e87ac9a

Usage: git reset --hard [commit]
This command discards all history and goes back to the specified commit.
Exp: git reset e96a76b55e5860a27f195c466c4104821e87ac9a

OR
Usage: git reset --hard
When you need revert merge branch   
        </pre>
      </li>
      <li>
        <pre>
        <strong>git status</strong>
        Usage: git status
This command lists all the files that have to be committed.  
        </pre>
      </li>
      <li>
        <pre>
        <strong>git rm</strong>
        Usage: git rm [filename]
This command deletes the file from your working directory and stages the deletion 
        </pre>
      </li>
      <li>
        <pre>
        <strong>git log</strong>
        Usage: git log
This command is used to list the version history for the current branch.
        </pre>
      </li>
      <li>
        <strong>sudo route flush</strong> - Reconnect VPN if Any problem with
        connect VPN Route.
      </li>
      <li>git pull --rebase origin develop</li>
      <li>Git —version ——— for checking git is installed or not</li>
      <li>
        Git clone “Repo Name” (https://github.com/amitg2018/Testing.git like
        this)
      </li>
      <li>Git status —— Check status of current repo</li>
      <li>Git checkout -b “Name of New Brach which you create”</li>
      <li>Git checkout “branch” ———— call another branch.</li>
      <li>Git add “file name” ——— Add File in branch.</li>
      <li>Git add . —————— Add all files in branch</li>
      <li>Git commit -m “write Msg for Commit ” —————— code Commit</li>
      <li>Git push ———— push your code on branch</li>
      <li>Git push origin “branch name”. ————— Push code on given branch.</li>
      <li>Git pull origin “branch name” ————— pull code from given branch.</li>
      <li>Git branch -- list ———— Check all Branches</li>
      <li>Git branch -d “branch name” ———— Delete Branch if not required.</li>
      <li>Git ls-files ———— Check all files in Repo.</li>
      <li>Git rm “file name” ——— remove file from repo.</li>
      <li>git mv "indexdev.html" "service.html" —————— Rename File name.</li>
      <li>Git log ———— show All commit log.</li>
      <li>
        Git merge “branch name” ———— when you use this comment before you go
        main master ( main server branch) branch then use this command.
      </li>
      <li>Git stash ———— remove all local files changes</li>
      <li>Git stash pop ———— revert remove all local files changes</li>
      <li>Cat “file name” ————— check what modify in file.</li>
      <li>vi “new file with extension” ——— Create new file</li>
      <li>
        Esc + : + w + q ————— Save and Quit after modification and adding
        anything.
      </li>
      <li>i ————— I button press when you write any thing created file.</li>
      <li>Cherry pick</li>
      <li>Rebase</li>
      <li>Conflict</li>
      <li>Merge</li>
      <li>
        http://www.askaswiss.com/2016/01/12-useful-advanced-git-commands.html
      </li>
    </ul>
  </div>
</template>
