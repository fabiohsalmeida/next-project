## SSR vs CSR

By default it uses the SSR, to use CSR you need to apply it on the page.

### Server Side Rendering

It means it will render everything in the server side, it also means it's safier since no other informations than the required ones are being passed to the client side.

### Client Side Rendering

It means it will render everything of this component in the client side, it means it will be faster since everything will be loaded in there, removing the requirement to have a good connection with the server.

Another situation is when you have to interact with the user, for example a button, it will show this error:

```
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function onClick} children=...>
                  ^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

In those situations you will have to change it to use client:

```tsx
// this
"use client"

import Link from 'next/link';
import React from 'react';

const linkList = [...]

export default function Navbar() {
    return (
        <div>
            <Link key={1} href="/">Go to home</Link>
            <div>
                {linkList.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <button onClick={() => console.log("logged out")}>Logout</button>
        </div>
    )
}
```

### To activate the Client Side Rendering

To active the CSR its simple, just add the ``"use client"`` inside the component you want to be rendered as CSR and it's all set. That way you can manage the components that you want to have more speed, and components that you don't require the speed.

```tsx
"use client"
import React from 'react'

export default function Footer() {
    console.log("CSR example");

    return (
        <div>
            <div>©Outsider Developer. All rights reserved.</div>
            <div></div>
        </div>
    );
}
```