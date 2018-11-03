export class NewsApiSource {
    sources:[NewsApiSourceItems]
}

export class NewsApiSourceItems{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string
}
