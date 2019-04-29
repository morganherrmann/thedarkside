# Procedural Graphics  - Final Project

### Inspired by Simulation Theory, by Muse

https://morganherrmann.github.io/thedarkside

TO RUN DEMO SO FAR - Click the link, and load the page. Wait about 5 seconds just to make sure everything is loaded.

Press the "w" key on your keyboard. *Music woohoo*

### PROJECT STATEMENT

For this project, I aimed to create a real-time music video for an existing song, using data such as BPM to drive the motion of the shaders and scenes.

#### GOALS

1) Create a real-time set of shaders that render in time to a music video.
2) Maintain a clear art-direction, using the music video as an artistic inspiration.
3) Incorporate inspiration from the artwork of existing album covers.

#### INSPIRATION BACKGROUND

This project is heavily art-based, relying on executing the visual aesthetic of the band.  MUSE is recognized worldwide for their incredible light shows in live performances, and musical themes surrounding dystopian futures, biological warfare, and computer simulations.  Imagery seen in their music videos involves everything from microscopic visuals, to cyberpunk graphics.

Some of their album covers can be seen below.

![](muse.jpg)

While incorporating some of these designs to pay an homage to previous albums, their newest - "Simulation Theory", seen below-- is the primary artistic inspiration for this project.

![](simulation.jpg)


### Music - Structural Framework
In order to handle the music portion, I implemented the following:

1) Used Howler.js, an API for playing music with typescript, installed as an NPM package.
2) Upon pressing some key, the music is triggered to call its play() method.
3) At the moment the music begins to play, a new Date is created.  The milliseconds since the start are recorded as ELAPSED TIME, and this value is used to determine which scene to render.
4)

