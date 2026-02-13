# Gitton TO-DO

## Meta (design, ideas, etc.)

[x] Decide on framework <-- Golang([Wails](https://wails.io/)) and React
[ ] Design the main screen for the app window
[ ] Watch [this video](https://www.youtube.com/watch?v=RxHJdapz2p0), afterwards create business logic tasks based on what's needed to make a version control system like Git (described in the video)

## Business Logic

[x] Parse .als files into XML
[x] Parse .als files into YAML
[x] Make it so when you save a .als file it detects it
[x] Make it so when you do `gitton init` it in a directory containing a `Ableton Project Info` directory **and** an `*.als` file, it creates a `.gitton` directory
    - [x] If the above condition is not met, then the program must tell the user `"Gitton must be initialized in an Ableton Project folder."`

## GUI

[ ] Add Tailwind
