export class Quotes {
  public showDetails: boolean;
  constructor(
    public  id: number,
    public quote: string,
    public authorName: string,
    public submittedBy: string,
    public submissionDate: Date,
    public upvote: number,
    public downvote: number
  ){
    this.showDetails=false;
  }
}
