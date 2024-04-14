## The App Route

The App Route makes routing easier, it simple take the name of the folder (starting by src/app) and introduce the name of the folder as a new page, for example the file insde ``src/app`` is the Home, so when accessing ``localhost:3000`` it will print the content of ``src/app/page.jsx``, I just created the about folder with a page.jsx inside it makes possible to navegate to ``localhost:3000/about`` and see the contact of ``src/app/about/page.jsx``.

Magic.

Example:

```
src/app/blog
src/app/dashboard
src/app/contact
```

### Variables in path (/blog/1)

It's as simple as not having it, you create the folder inside ``blog`` name with the variable that you want, for example I want it to be ``/blog/{id}``, my folder is named ``[id]`` and has a ``page.jsx`` inside of it. 

Magic.

Example:

```
src/app/blog/[id]
```

### Group of pages ()

To create a group of pages without changing the path it's simple, just create a folder with ``(name)``, the brakets are going to be interprated has a group and not as a path and life will goes on.

Magic.

Example:

```
src/app/dashboard/(auth)/login
src/app/dashboard/(auth)/register
```

## Files

### page.tsx

The NextJS will search and render it, it will be always the page

Sample:

```tsx
// src/app/contact/page.jsx
export default function Contact() {
    return (
        <div>
            Contact
        </div>
    )
}
```

### layout.tsx

It's a default layout for that parent to all childrens, for example if I want to have a footer or a header for all my system I can add it inside ``src/app/layout.tsx`` but if I want to have a footer just for dashboard and childrens of it I can create a new file named ``layout.tsx`` inside ``src/app/dashboard`` aside of the ``page.tsx`` and it'll apply to all my childrens from there.

Magic.

The sample:

```tsx
// src/app/blog/layout.tsx
export default function BlogLayout({children}) {
    return (
        <div>
            <h1>Hi this is Blog Layout</h1>
            {children}
        </div>
    )
}
```

### loading.tsx

You can have different loading options for each component/directory, just create a file named ``loading.tsx`` and insert your normal code, for example:

```tsx
// src/app/contact/loading.tsx

import React from 'react'

export default function Loading() {
    return (
        <div>loading</div>
    )
}
```

### error.tsx

### page.module.css

This is a module with all the css for that specific page, example:

```css
/* src/app/contact/page.module.css */

.contact {
    background-color: brown;
}
```

To use it is less magical than the rest, you have to import and call as a property of a file here it is:

```tsx
import React from 'react'
import styles from './page.module.css'

export default function Contact() {
    return (
        <div className={styles.contact}>
            Contact
        </div>
    )
}
```

There is no conflict when using module.css, because when it bundles it creates a new className, for example in the tutorial it doesnt use a class name ``contact`` in the div above, it uses ``page_contact_6Sm1h`` that probably changes each time its made the bundle up.