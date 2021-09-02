+++
Title = "Github Pages With Hugo"
Date = "2021-09-02T03:08:08-04:00"
Draft = false
Post = true
Description = "This is a guide on how to use the Hugo static site generator with Github's free hosting solution, Github Pages."
FeaturedImage = "/images/posts/github-pages.png"
FeaturedImageDescription = "Github Pages"
Tags = ["Github", "Web Hosting", "Hugo", "Website"]
Categories = ["Hugo", "Tutorial"]
+++


### This is not finished

# How to host Hugo site on Github

### Pre-requisites

- Github Account

- Git (terminal utility)

- How to change Directories in the terminal


## Make a repo with the following name [username].github.io

Please note that [username] indicates your own personal username.

## Get your Hugo files in order and place it in a folder designated for this project

Make all neccesary changes you need to make to your content, config etc.

## Clone the aformentioned repository to your local machine

Example: ```git clone https://github.com/[username]/[username].github.io.git```

Please note that [username] indicates your own personal username.

#### While in the clone directory enter this in the terminal:

```git pull origin main```
make sure that there are results and no errors

## Enter the Directory of your hugo site

Note: Make sure your site is operational with command ```hugo server```

Enter this in the terminal:

```hugo -d ../[directory that contains the cloned repo]```

This command essentially converts the hugo styled website files (content folder, config etc.)
to a more general html file that works exactly like it would if your were running it with Hugo.

## Re-enter the cloned repo

When you are here enter the follwing commands in the terminal:

```git status```
This should return quite a few red coloured file name, this means that they are new
and are not offically apart of the repo.

```git add --all```
This tell Git to commit (upload) all of the files in this folder to the repo

```git commit -m "Initial commit"```
This offically adds all of the selected files to the commit list which
will we now upload to the repo

```git push origin main```
This is the final step. This tells Git to upload all of the files we had previously
selected to the repo.






# Extra

When you do a pull request on a branch, you can continue to work on another branch and make another pull request on this other branch.

Before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

$ git pull
Create the branch on your local machine and switch in this branch :

$ git checkout -b [name_of_your_new_branch]
Push the branch on github :

$ git push origin [name_of_your_new_branch]
When you want to commit something in your branch, be sure to be in your branch. Add -u parameter to set-upstream.

You can see all the branches created by using :

$ git branch -a

