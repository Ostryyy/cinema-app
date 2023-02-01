export class Movie {
  public title: string;
  public description: string;
  public director: string;
  public imagePath: string;

  constructor(title: string, desc: string, director: string, imagePath: string) {
    this.title = title;
    this.description = desc;
    this.director = director;
    this.imagePath = imagePath;
  }
}
