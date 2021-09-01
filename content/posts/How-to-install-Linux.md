+++
Title = "How to Install Linux"
Author = "Musa Ahmed"
Date = "2021-08-31T22:13:13-04:00"
LastMod = "2021-08-31T22:13:13-04:00"
Draft = false
Description = "This blog post explains how to install Linux."
FeaturedImage = ""
FeaturedImageDescription = ""
Categories = ["Linux", "Tutorial", "Blog"]
Tags = ["Linux", "Tutorial", "Blog"]
+++

# Guide to Installing Linux (for beginners)

## Introduction

Hello, this guide is for Linux beginners who are looking to try Linux out don't know where to start. Below is a table of contents that outlines all the things we will be covering in this guide.

## Table of Contents

### - So what is Linux anyways?

### - What is a Desktop Environment?

### - Choosing a Distribution

### - So how do I install Linux?

### - How to install programs?

### - Conclusion

## So what is Linux anyways?

Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. [Wikipedia](https://en.wikipedia.org/wiki/Linux)

In simpler terms, Linux is a kernel which many distributions (a.k.a operating systems based off the kernel) are based off of, for example, [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu), [Pop!_OS](https://en.wikipedia.org/wiki/Pop!_OS), [Arch Linux](https://en.wikipedia.org/wiki/Arch_Linux) etc.

## What is a Desktop Environment?

In computing, a desktop environment is an implementation of the desktop metaphor made of a bundle of programs running on top of a computer operating system that share a common graphical user interface, sometimes described as a graphical shell. [Wikipedia](https://en.wikipedia.org/wiki/Desktop_environment)

Simply put, a Desktop Environment dictates how your GUI or Graphical User Interface looks. One of the biggest differences between Linux and Windows is the option to change the Desktop Environment.

Linux has a multitude of Desktop Environment with each of them having their own quirks, advantages, and disadvantages.

Below are some of the most popular Desktop Environments used in Linux Distributions.

- [GNOME](https://en.wikipedia.org/wiki/GNOME)

- [XFCE](https://en.wikipedia.org/wiki/Xfce)

- [LXQT](https://en.wikipedia.org/wiki/LXQt)

- [MATE](https://en.wikipedia.org/wiki/MATE_(software))

- [Cinnamon](https://en.wikipedia.org/wiki/Cinnamon_(desktop_environment))

## Choosing a Distribution

### What is a distribution anyways?

A Linux distribution is an operating system made from a software collection that is based upon the Linux kernel and, often, a package management system. [Wikipedia](https://en.wikipedia.org/wiki/Linux_distribution)

It may come as a surprise to many, but there are **many** distributions made especially for beginners. With Installation process as simple as clicking a few buttons, minimal technological knowledge is actually necessary to install and even use it.

### Here are some of the best Linux Distributions for beginners

#### Ubuntu

This is by far one of the most popular distributions for Linux beginners as it gives all the functionality of Windows and Mac OS with little required by the user. It is an extremely easy-to-use operating system perfect for beginners. Ubuntu uses the GNOME Desktop Environment.

#### Linux Mint

This distribution is a very popular and provides a very user friendly experience. This Distribution is great for older computers as it consumes much less ram compared to Windows and other Linux Distributions. Linux Mint comes in may different Desktop Environments including Cinnamon, XFCE, and MATE.

#### Zorin OS

Although Ubuntu is the most popular, many Linux enthusiasts recommend Zorin OS for anyone coming from Windows. Zorin OS comes with a bunch of useful pre-loaded applications such as Libre Office, a free alternative to Microsoft Office with all the same functionality. Zorin OS has on of the best, if not **the** best looking user interface out of the box. Zorin OS uses the GNOME Desktop Environment, however, they also have a light version of their Operating System called Zorin OS Lite, the latter uses the light-weight XFCE Desktop Environment.

#### Elementary OS

Elementary OS is quite a popular Linux Distribution. It is has little to no bloat pre-installed and it closely resembles Mac OS. With simplicity in mind the developers chose to design the entire operating system around productivity and un-intrusive. This is a great Distribution for begginers because of its easy-to-use user interface and simple process to installing many useful applications. 

#### Peppermint OS

Peppermint OS is a very lightweight and simple to use Distribution and is great for beginners. Peppermint does come with many programs pre-installed. The main focus of this Distribution is to provide its users with a extremely lightweight and simple user interface. With little no to experience using Linux, anyone can install this Distribution and aquire a firm grasp of how it works quite quickly.

#### Summary

All of the aforementioned Distributions are based on Ubuntu, meaning that at their cores they all use the same package manager and for the most part they have the same funtionality. With this in mind it is important to recognize that within these few options they are very similar and when choosing one of them niche and priorities are the most important factor. All of these have their own little tweaks and things that make them special.

## So how do I install Linux?

###  Here is what we need to do:
#### - Finding a USB
#### - Finding an ISO
#### - Flashing the ISO onto the USB
#### - Booting from the USB
#### - Installing Linux
---
### Finding a USB
Based on the size of the ISO we will need a 4-8 GB USB. 4 GB will most likely be fine. This is essential as we need space for all the required files and programs to help us install Linux.

### Finding an ISO
Regardless of which Linux Distribution you have chosen the installion ISO will be neccesary. Google will be your best friend in this matter. The best way to find your ISO will be to google "*Distribution Name* ISO". 

Now download the ISO and store it somewhere you can find it later.

### Flashing the ISO onto the USB
This is a very step and requries a few simple clicks of a mouse. Visit [Balena Etcher](https://www.balena.io/etcher/) and click download. 

Launch the program and plug in your USB, make sure there are no important files on it as the program will format the USB. 

Click "Flash from file" and select your downloaded ISO. 

Click "Select target" and select your USB.

Click "Flash" and wait for 5-10 Minutes.

Once the USB is finished flashing, exit the program and turn off your computer.

### Booting from the USB

**This step is a little more complicated so be sure to pay attention.**

#### Step 1: Enter your bios

This is quite simple if you know what you are doing. If not, google "How to enter bios on *your computers model number and brand*". 

Typically, from a powered off state you turn on the computer and quicly press a specific key; usually this is the Delete key or on of the F* keys. This specific key varies from computer to computer.

#### Step 2: Select the boot or startup tab

Once you have entered the bios there should a tab at the top that reads "Boot" or "Startup". Using the arrows key on your keyboard select the aforementioned tab.

#### Step 3: Make your USB the top Boot priority

At the bottom of your screen you should see controls that tell you how to change your boot priorities. This varies computer to computer. 

Find you USB in the boot priority list and move it too the top.

#### Step 4: Booting from the USB

Navigate to the exit tab, select "Save and Exit" and press enter. Your computer should now restart.

When your computer restarts you should be prompted by a welcome screen of sorts with the name of the Linux Distribution you chose.

### Installing Linux

This process is very simple and needs no guidance. Simply follow the instructions on the installer and install. After doing so turn off your computer and remove the USB. 

Now restart your computer.

After restarting your computer you may notice that there is a new promt that offer multiple boot options. This small program is called [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB); this program allows you to choose which Operating System to boot from.

**Congratulaions!** You have just succesfully installed linux!


## How to install programs?

Linux uses something called a package manager. Essentially this allows you to install many programs through one simple package manager.

There is one caviat though. There are quite a few different package managers in different Linux Distributions. [APT](https://en.wikipedia.org/wiki/APT_%28software%29) is one of the most popular packages managers and is used in a variety of Distribuitons. It is used by all the previously mentioned Linux Distributions above.

#### How to install a program?
Note: commands are inputted into the terminal, the terminal is a desktop app installed on all linux Distributions.

```sudo apt install *program name*```

The above command is an example of how to install a program, of course there is a lot behind this command but as an introduction this is a great example. 

To learn more I would suggest typing ```man apt```. 

```man``` is the in-house guide book installed on all linux Distributions. A large majority of programs have a    ```man ``` page that explains how to use the program and how to use all of its features.

Example: ```man *program name*```

## Conclusion

I hope that this guide has helped you install Linux and I hope that it has helped you get a better grasp of Linux in general. Be sure to check out our other intresting articles!

