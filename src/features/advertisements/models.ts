/**
 * Definition of an advertisement model
 */
export default interface Advertisement {
    id: number;
    title: string;
    description: string;
    pictureUrl: string;
    price: number;
    email: string;
    userId: number | null;
}