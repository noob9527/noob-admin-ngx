import { environment } from '../../environments/environment';

export function getUrl(resourceUrl: string) {
  if (!resourceUrl) throw Error('resourceUrl should not be empty');
  if (/^https?/.test(resourceUrl)) {
    return resourceUrl;
  } else {
    const slash = resourceUrl[0] === '/' ? '' : '/';
    return environment.baseUrl + slash + resourceUrl;
  }
}
