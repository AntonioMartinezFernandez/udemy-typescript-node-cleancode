import { parse, UrlWithParsedQuery, UrlWithStringQuery } from 'url';

export class urlLogin {
  static parseUrl(url: string): UrlWithParsedQuery {
    return parse(url, true);
  }
}
