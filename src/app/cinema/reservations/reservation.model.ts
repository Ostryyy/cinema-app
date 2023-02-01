import { User } from "src/app/auth/user.model";
import { Movie } from "../movies/movie.model";

export class Reservation {
    user!: User;
    movie!: Movie;
}
