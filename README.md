SimpleDragnDrop
===============

A very simple and small script (930bytes minified and gziped), made to make working with "Drag n Drop" of files in JS a breeze.
demo: lzf.childnodes.com
License: Do whatever you want with it.

Usage: dragNDrop( document.getElementById('____'), "myOverlay", myCallback, "arrayBuffer" );

If you want to use this script in a strictly memm monitored app, then it is highly suggested that is instanciated
as a class, var dragndrop = new parent.dragNDrop(); so you will have access to dragndrop.destroy() which will remove the listeners (and extra objects)
and release memm.



parameters:

1. Parent object of the overlay

2. The overlay (droppable area), if a string is specified then a div will be built and appended to the "1" object, with its id that string.
   If a dom object is specified then that will be used as the overlay.
   If left null the "1" param, will be the overlay

3. Callback that will be run with 2 arguments( fileData and fileName )

4. Method used, ("arrayBuffer", "binary" or "text" )