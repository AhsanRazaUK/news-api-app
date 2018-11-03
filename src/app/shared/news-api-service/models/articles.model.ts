export class Articles {
    articles: [ArticleItems]
}

export class ArticleItems {
    source: {
        id: string;
        name: string
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;


    private _publishedAt: string = "";

    get publishedAt(): string {
        return this._publishedAt;
    }
    set bar(publishedAtData: Date) {
        this._publishedAt = formateDate(publishedAtData);
    }
    content: string;
}

function formateDate(datetimeString) {

    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var date = new Date(datetimeString)
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var seconds = date.getSeconds();

    return day + "-" + monthNames[monthIndex] + "-" + year + " " + hours + ":" + minutes + ":" + seconds;

}
