# Fetching Data
## From APIs
### Using SWR
It's highly recommended by the React team to use SWR, and it's really easy to use it:

```tsx
"use client"

import React, {useEffect, useState} from 'react'
import styles from './page.module.css'
// import
import useSWR from 'swr'

export default function Dashboard() {
    // just those two lines
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    console.log(data)

    return (
        <div className={styles.container}>
            Dashboard
        </div>
    )
}
```

### Using useEffect
Another way to do is using useEffect:

```jsx
"use client"

import React, {useEffect, useState} from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                cache: "no-store"
            });

            if(!res.ok) {
                setError(true);
            }

            const data = await res.json();

            setData(data);
            setIsLoading(false);
        };

        getData();
    }, []);

    console.log(data)

    return (
        <div className={styles.container}>
            Dashboard
        </div>
    )
}
```

## Fetch from local file

Let's suppose that you have a json file inside your project like this:

```js
// created a file named data.js to wrap the json

export const items = {
    applications: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
    ],
    illustrations: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
    ],
    websites: [
      {
        id: 1,
        title: "Creative Portfolio",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      {
        id: 2,
        title: "Minimal Single Product",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
      },
      {
        id: 3,
        title: "Strong Together Charity",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image:
          "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
      }
    ],
  };
```

To fetch it is pretty simple, inside the class you want to use it simple make like this:

```jsx
import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
// the import, in this case the data.js was inside the portfolio/category folder
import { items } from "./data.js"
import { notFound } from 'next/navigation'

// Here
const getData = (category) => {
    // category works like a ID in this scenario, it will search like a map if there's a item with that name inside
    const data = items[category]

    return data ? data : notFound();
}

export default function PortfolioCategory({params}) {
    ...
}
```