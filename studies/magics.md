## The App Route

The App Route makes routing easier, it simple take the name of the folder (starting by src/app) and introduce the name of the folder as a new page, for example the file insde ``src/app`` is the Home, so when accessing ``localhost:3000`` it will print the content of ``src/app/page.jsx``, I just created the about folder with a page.jsx inside it makes possible to navegate to ``localhost:3000/about`` and see the contact of ``src/app/about/page.jsx``.

Magic.

### Variables in path (/blog/1)

It's as simple as not having it, you create the folder inside ``blog`` name with the variable that you want, for example I want it to be ``/blog/{id}``, my folder is named ``[id]`` and has a ``page.jsx`` inside of it. 

Magic.

### Group of pages ()

To create a group of pages without changing the path it's simple, just create a folder with ``(name)``, the brakets are going to be interprated has a group and not as a path and life will goes on.

Magic.