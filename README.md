# VecJs
A basic javascript library for dynamic vectors (e.g. vec2 &amp; vec3) based on lists.

This library interally deals with a vector (e.g. vec2 & vec3) as a list which can be obtained from `Vec.list`. This is nice for dealing with libraries that use list vectors (including mine :D) without having to do any annoying casting, with u instead being able simply do `Vec.list` to get the internal list. Not only that, but the fact that lists are used interally means that operations can be done on directly and that the class can be a lot more flexible. If you want you can even replace the interal list with a Uint32Array for example to be extra blazing fast in your application (although I wouldn't recommend overoptimization ofc).

The documentation and unit test can be found here: https://randomgamingdev.github.io/EzDok/#v1/%22https://raw.githubusercontent.com/RandomGamingDev/VecJs/main/documentation/documentation.dok%22/0/

To use it you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/VecJs/vec.js in your HTML file (put .min before .js if you want the minified version)! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library
