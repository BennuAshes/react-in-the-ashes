# Summary
Exploring ReactJS with JSPM and ES2015/16 - now with Flux and Material-UI

# Installation
npm install  
cd www  
npm install -g jspm  
npm install -g gulp  
jspm install  
gulp

# Explanation

#### ES2015/16
It's the future of Web Development.  Class support and modules with import help clean things up without the need for any special syntax or libraries (beyond a potentional shim, or something like JSPM transpiling for you).

#### JSPM
I like JSPM a lot. It helps avoid having to hack in packages that aren't on bower and allows the use of ES2015/16 transpiling without any additional effort or includes. The client side just /works/. However, I looked at WebPack and it seemed to do a lot. When this project was started, it seemed like too much with too much complication, but it seems to be very popular and may be the focus in a future project. It seems like WebPack, if used properly, can completely avoid the need for gulp. I'm not sure if that includes the backend (mainly for live reload), and I wanted to focus on ReactJS so I went with what I knew worked quickly and easily.

#### Flux
Flux isn't a framework but is more of a data flow paradigm. It avoids two-way data binding and as a result allows fluid debugging if implemented correctly. This is in theory, and have yet to see a large scale application use it. Facebook doesn't seem to have any complaints though!

#### Material-UI
Allows a rapid expression of ideas with minimal effort on tedious css design, structure, and debugging. There are other solutions but they didn't seem as fleshed out or as simple to use as the particular library being used here, although the concept of the React Native seems useful.


# TODO
* FEATURE: Explore PostgreSQL for backend hooked to an abstraction layer like http://bookshelfjs.org/
* My Flux naming is a little confusing - really the Store is per "entity", so would like to EnergyStore to ResourceStore which contains "energy"

# Resources
* https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux
* https://madebymany.com/blog/beyond-the-to-do-app-writing-complex-applications-using-flux-react-js
* http://blog.andrewray.me/flux-for-stupid-people/
