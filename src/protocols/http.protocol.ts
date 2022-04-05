import { parse, UrlWithParsedQuery } from 'url';

export class parseUrl {
  static parseUrl(url: string): UrlWithParsedQuery {
    return parse(url, true);
  }
}
