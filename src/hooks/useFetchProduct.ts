import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export type ProductDetail =  {
  id: number
  title: string
  price: number
  thumbnail: string
  image: string
  quantity: number,
  category: string,
  brand: string,
  description: string,
  images: string[],
  discountPercentage: number,
  rating: number
}

export default function useFetchProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductDetail>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                const result = await response.json()
                setProduct(result)
                setIsLoading(false)
                /* eslint-disable */
            } catch (err: any) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProduct()
    }, [])

  return { product, isLoading, error }
}
