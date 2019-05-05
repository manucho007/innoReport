export interface Report {
    title: string;
    description: string;
    imagePath?: string;
    tags?: string[];
    status?: boolean;
    category?:string;

}