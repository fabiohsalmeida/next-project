### Link

This creates a nav link that can redirect you through the whole site, for example the one bellow is going to send you to home:

```tsx
export default function Navbar() {
    return (
        <div>
            <Link href="/">Go to home</Link>
        </div>
    )
}
```