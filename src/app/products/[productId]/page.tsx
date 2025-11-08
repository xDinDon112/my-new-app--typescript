import Link from "next/link";

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    return (
        <>
            <h1>Details about product {productId}</h1>
            <Link href="./3/reviews/1">Kuku</Link>
        </>
    )

}