import { InvalidUrl } from '../errors/InvalidUrl';
import { parse, UrlWithParsedQuery } from 'url';

export class parseUrl {
  static parseUrl(url: string): UrlWithParsedQuery {
    const parsedURL = parse(url, true);
    if (!parsedURL.hostname) {
      throw new InvalidUrl(url);
    }
    return parsedURL;
  }
}
