# Procedural Graphics  - Final Project

### Inspired by Simulation Theory, by Muse

https://morganherrmann.github.io/thedarkside

TO RUN DEMO SO FAR - Click the link, and load the page. Wait about 5 seconds just to make sure everything is loaded.

NOTE: You will likely need an updated GeForce Graphics card to run this project in the browser!

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
4) I went through the specific piece of music, and mapped out specific time intervals for each scene/shader in seconds.
5) The elapsed time is actually passed to the shaders, replacing u_Time.

CHALLENGES : Getting the music and elapsed time to line up without delay took quite some time.  Timing with javascript/typescript is especially difficult because of the asynchronous nature of the language.

### Shader Timing

The Basics : If you play through the demo, you will notice that the graphics move perfectly on the beat of the music.  I achieved this by computing various cubic, sin, cosine, etc, functions whose periods were equal to the elapsed time of a single beat.  

In this case, the music is approximately 100 BPM, so each beat is approximately 0.6 seconds.
For example, solving sin(ax +b) for a period of 0.6 seconds gives us a coefficient of a multiple of 5.23.  I applied this concept across various functions to achieve the pulsating imagery.


## DRAWING TECHNIQUES USED

### RAY MARCHING
Several scenes in this project, primarily album cover recreations, were recreated with 2D raymarching and use of toolbox functions to determine intersection and smoothing between objects.
The intended goal was to have 2D, animated renditions that channeled existing album covers. 
All shapes were drawn with ray marching and were hand placed.

![](origin.jpg) ![](gif2.gif)

![](uprising.jpg) ![](gif1.gif)

### GLOW EFFECTS

Several scenes involve a glow effect. I achieved this as follows.

#### 1) Basic metaballs
Uses a predetermined count of objects, each with a location moving on a path.  For each computed metaball location, the glow was computed based on a pixels distance from each of the metaball positions.  The glow was proportional to the distance from the metaballs, summing up the total glow for an exponential fall-off.
![](gif3.gif) ![](gif7.gif)

![](dark2.PNG)

#### 2) Rings of glowing points
Similar to the metaballs, where each metaball lies on a somewhat circular path.  Then, each ring must also be computed- this forms the outer loop (so this is a bit slower to render). I also created an offset distance so that the points could be close to create strips, or farther away to create rings.

![](gif4.gif)

#### 3) Neon Dark Side
The closest to the albums visuals, and computes the exponential falloff from a sin/cos curves of the fragment coordinates.  Used purple and blue for primary colors, which causes the resulting glow.

![](gif5.gif)

### USE OF OBJ SHADERS and CAMERA MOVEMENT

1) My project is able to parse vertex and normal data from OBJ files and use them in scenery.
2) I created a stylized cartoon / comic shader based on the normals of the object file that was imported.
3) The motions shown are actually a blend of vertex shading and moving the camera itself along a mathematical path.
![](gif8.gif)
![](dark.PNG)

#### CITED SHADERS
There were 2 shaders I'm citing from shadertoy that I either used as a groundwork or modified for this project.
1) Digital Clock - https://www.shadertoy.com/view/MdfGzf
![](clock2.PNG) ![](clock.PNG)
I used this red, analog clock as a basis for my metronome/countdown at the start. Instead of computing the elapsed time, I simply hard set the starting time with 2 digits only, and set the value to decrement every 0.6 seconds (the period of a beat in this song). That's how we get the 4...3...2...1! I also set the colors to pulsate with matching purple and blue as opposed to red.

2) Disco Tunnel - https://www.shadertoy.com/view/XstfzB
![](tunnel2.PNG) ![](tunnel.PNG)

The original tunnel presented was extremely sharp, fast moving, and super twisty, with a rainbow color palette.  Using this as a basis, I altered the color palette to time with the music, modified the curves to time with the song, and made the overall appearance hazier, and slowed down the movement.


