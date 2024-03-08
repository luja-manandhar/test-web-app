export interface ProductDetailInterface {
    id: number,
    title: string,
    shortDesc: string,
    images: string[],
    fullDesc: {
        title: string,
        mainImage: string,
        detailParagraphs: string[]
        featuresList: ProductFeatureInterface[],
    },
    price: number,
    stock: number
}

export interface ProductFeatureInterface {
    id: number,
    title: string,
    desc: string,
    image: string
}