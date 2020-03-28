export class Quotes {
  public upvotes: number;
  public downvotes: number;
  constructor(
    public  id: number,
    public quote: string,
    public submittedBy: string,
    public authorName: string,
  ){}
}
