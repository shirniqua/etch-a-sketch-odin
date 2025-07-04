# etch-a-sketch-odin
Etch-a-Sketch project provided by the Odin project. The grids are created using javascript and the girds are made to appear with flexbox css.

Project Status
18th June, 2025
Completed steps 1 - 4 and the extra credit step 1. I learnt a hard lesson on the difference between .querySelector() and .querSelectorAll() as well as a very disgusting lesson in attaching EventListeners. Who knew you had to attach eventListeners to every iteration of the tile on creation for it to work or to call it in a function.... me, now. It's fun so far. I'll work on the second extra credit step later

24th June, 2025
I did some research on rgb to hsl conversion. This was because I realised that when i adjusted the opacity, it basically affected the brightness or saturation of the color and I was initially using rgb values. Much to my annoyance/ignorance, I really thought that the opacity would be adjusted easily in using javascript... IT'S NOT! I went on the longest rabbit hole of my life. I eventually found the conversion formula for rgb to hsl and then the import code to make the adjustment easier to do. The link below was very helpful and I'll definitely revisit it.

https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion - akinuri

25th June, 2025
Yeah, colortils is not a library. The other libraries can be imported with either npm or the browser cdn script . The browser version requires you to put all external scripts as type="module". I'd have to reformat my code and i'm not sure if i actually want to do that. 

27th June, 2025
So I misread the instructions lmaooooooo. The solution was actually the exact thing I did earlier. It makes sense to either darken or change the opacity. I was attempting to darken but my colors were random so there was no actual way to measure/view the darkening of the colors to black since the colors were changing each time. So i'll remove the extra code for converting the RGB to HSL and vice versa as well as the darkening code.

2nd July, 2025
I made the changes and it finally works.