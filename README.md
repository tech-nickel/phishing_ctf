# phishing_ctf
This project is build on [Harlowe](https://twine2.neocities.org) and [Twine](https://twinery.org/cookbook/) and utilizes [Tweego](https://www.motoslave.net/tweego/) to make management of sourcecode easier.

# For players
The project can be compiled with the help of [Tweego](https://www.motoslave.net/tweego/).

1. Download [Tweego](https://www.motoslave.net/tweego/).
2. Replace `[Tweego folder]/storyformats/harlowe-3/format.js` with [format.js](./format.js).
3. Add the location of the Tweego binary to the path variable. 
4. Open the project on the command line.
5. Compile the project with `tweego -o ./out/story.html ./src`.
6. Open `./out/story.html` with your browser of choice.

Alternativly you can opt to skip step 3. and compile the project with `/path/to/tweegobinary/ -o ./out/story.html ./src`.

# For developers

## Requirements

- [Tweego](https://www.motoslave.net/tweego/).
- Browser of choice.

## Compiling

1. Open project directory on command line.
2. Run `tweego -o ./out/story.html ./src`.
3. Open `./out/story.html` with browser of choice.

## Project structure

This project consists of diffrent areas.

Initial [Twine](https://twinery.org/cookbook/) commands are stored in `Storydata.twee` and `Storytitle.twee`.

### Start Screen

```Welcome.twee```

First thing to be displayed when opening `story.html`.
Gives a brief introduction to the game and lets the user choose a name, stored in `$username`.
Also initialises and stores some static variables.

### Footer 

```footer.twee```

Navigation element, so players can switch between different applications (Mail, Terminal, Browser).
Can be toggled on/off with the boolean `$showFooter`.

### Desktop

```Desktop.twee```

Central part of the game, simulating a desktop, offering access to other parts of the game. 
The passage tag is `[[Desktop]]`.

### Mail

```email/```

Used to simulate a mailbox.
The passage tag is `[[Email Postfach]]`.
The actual mails are stored in `email/Emailtext.twee` and consist of 5 variables.

- $titleX
- $senderX
- $receiverX 
- $textX
- $sourceX

The `X` denotes the number of the mail and the order of the numbers determine the order of display in the mailbox.
The mails need to be in order, otherwise errors might occure.

Passages utilized only in mails should also be in the `email/` directory.

### Terminal

### Browser

### Additional Features 

Google Icon Libary [Link](https://fonts.google.com/icons?icon.platform=web)
Usage:
```
<span class="material-symbols-outlined">icon_name</span>
```
