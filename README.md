# phishing_ctf
Project build on [Harlowe](https://twine2.neocities.org) and [Twine](https://twinery.org/cookbook/)

# add. features
Google Icon Libary [Link](https://fonts.google.com/icons?icon.platform=web)
The tag is already added, you can use icons with
```
<span class="material-symbols-outlined">icon_name</span>
```

# Structure
- Desktop.twee is the base file. Some static variables are initialised in welcome.twee
- From there different passages can be activated using the buttons in the footer
  - Email.twee with the "Email Postfach" passage    
    - which in itself is structured in left, center and right column
    - the right column has currently 2 hooks in it, one receive and one send template
    - from the Email passage, one can activate the passages 
      - "more Infos"
      - "phising Link"
      - ...
  - terminal.twee with the "Terminal" passage
    - which has its initialisation variables in terminal_init
  - (Browser.twee, not yet implemented)
  - ...
- ...