import {IMovie} from "./movie.ts";

export interface IModal {
    name: string | null;
    data: IMovie | null;
}