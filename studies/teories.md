## SSR vs CSR

By default it uses the SSR, to use CSR you need to apply it on the page.

### Server Side Rendering

It means it will render everything in the server side, it also means it's safier since no other informations than the required ones are being passed to the client side.

### Client Side Rendering

It means it will render everything of this component in the client side, it means it will be faster since everything will be loaded in there, removing the requirement to have a good connection with the server.

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