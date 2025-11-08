import Link from "next/link";

export default function Blog() {
    return (
        <>
            <h1>My blog</h1>
            <Link href="./blog/first">First</Link>
            <Link href="./blog/second">Second</Link>
        </>
    )
}