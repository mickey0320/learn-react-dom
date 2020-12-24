import { pathToRegexp } from "path-to-regexp";

function compilePath(path, options) {
  const { end } = options;
  const keys = [];
  const regexp = pathToRegexp(path, keys, end);

  return { keys, regexp };
}

function matchPath(pathname, options) {
  const { exact = false, path } = options;
  const { keys, regexp } = compilePath(path, { end: exact });
  const match = regexp.exec(pathname);
  if (!match) {
    return null;
  }
  const [url, ...values] = match;
  const isExact = pathname === url;
  if (exact && !isExact) {
    return null;
  }
  //   const params = {};
  //   keys.forEach((key, i) => {
  //     params[key] = values[i];
  //   });
  const params = keys.reduce((memo, key, index) => {
    memo[key.name] = values[index];

    return memo;
  }, {});

  return {
    path,
    url,
    params,
    isExact,
  };
}

export default matchPath;
