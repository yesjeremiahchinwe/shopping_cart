import { useState, useEffect } from "react";

export type Product = {
    id: number
    title: string
    price: number
    thumbnail: string
    image: string
    quantity: number
  }

export default function useFetchProducts() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://dummyjson.com/products")
                const result = await response.json()
                setProducts(result.products)
                /* eslint-disable */
            } catch (err: any) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])


  return { products, isLoading, error }
}

