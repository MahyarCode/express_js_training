

export type TProduct<T> = {
    price: number;
    discount: number;
    availability: "AVAILABLE" | "OUT_OF_STOCK" | "UNAVAILABLE";
    stockAvailabilityCount: number;
    product: T
}
