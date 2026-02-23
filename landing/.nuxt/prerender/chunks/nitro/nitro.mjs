import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, createError, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/fpolania/repos/vas/landing/node_modules/h3/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, decodePath, withoutTrailingSlash } from 'file:///Users/fpolania/repos/vas/landing/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Users/fpolania/repos/vas/landing/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/fpolania/repos/vas/landing/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/fpolania/repos/vas/landing/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/fpolania/repos/vas/landing/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/drivers/fs.mjs';
import crypto from 'node:crypto';
import fsDriver from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest } from 'file:///Users/fpolania/repos/vas/landing/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/fpolania/repos/vas/landing/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///Users/fpolania/repos/vas/landing/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/fpolania/repos/vas/landing/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/fpolania/repos/vas/landing/node_modules/radix3/dist/index.mjs';
import { createRouterMatcher } from 'file:///Users/fpolania/repos/vas/landing/node_modules/vue-router/vue-router.node.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/fpolania/repos/vas/landing/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/fpolania/repos/vas/landing/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
function normalizeFsKey (item) {
  const safe = item.replace(/[^\w.-]/g, '_');
  const prefix = safe.slice(0, 20);
  const hash = crypto.createHash('sha256').update(item).digest('hex');
  return `${prefix}-${hash}`
}

const _47Users_47fpolania_47repos_47vas_47landing_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js = defineDriver(
  /**
   * @param {{ base?: string }} opts
   */
  (opts) => {
    const fs = fsDriver({ base: opts.base });
    const lru = lruCache({ max: 1000 });

    return {
      ...fs, // fall back to file system - only the bottom three methods are used in renderer
      async setItem (key, value, opts) {
        await Promise.all([
          fs.setItem?.(normalizeFsKey(key), value, opts),
          lru.setItem?.(key, value, opts),
        ]);
      },
      async hasItem (key, opts) {
        return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
      },
      async getItem (key, opts) {
        return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
      },
    }
  },
);

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('internal:nuxt:prerender', _47Users_47fpolania_47repos_47vas_47landing_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"/Users/fpolania/repos/vas/landing/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"/Users/fpolania/repos/vas/landing/.nuxt/cache/nitro/prerender"}));
storage$1.mount('data', fsDriver({"driver":"fsLite","base":"./.data/kv"}));
storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/fpolania/repos/vas/landing","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/fpolania/repos/vas/landing/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/fpolania/repos/vas/landing/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/fpolania/repos/vas/landing/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "6c17064e-c116-4147-9f30-adb1868fe614",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "name": "English",
          "language": ""
        },
        {
          "code": "es",
          "name": "Español",
          "language": ""
        },
        {
          "code": "fr",
          "name": "Français",
          "language": ""
        },
        {
          "code": "de",
          "name": "Deutsch",
          "language": ""
        },
        {
          "code": "he",
          "name": "עברית",
          "dir": "rtl",
          "language": ""
        },
        {
          "code": "zh-TW",
          "name": "中文（繁）",
          "language": ""
        },
        {
          "code": "tr",
          "name": "Türkçe",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "es": {
          "domain": ""
        },
        "fr": {
          "domain": ""
        },
        "de": {
          "domain": ""
        },
        "he": {
          "domain": ""
        },
        "zh-TW": {
          "domain": ""
        },
        "tr": {
          "domain": ""
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await import('../_/error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

/*!
  * shared v11.2.8
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var nav_home$6 = "Home";
var nav_services$6 = "Services";
var nav_contact$6 = "Contact";
var cta_request_consultation$6 = "Request a Consultation";
var footer_navigate$6 = "Navigate";
var footer_contact$6 = "Contact";
var footer_rights$6 = "All rights reserved.";
var footer_confidential$6 = "Confidential & Professional Business Advisory";
var footer_made_by$6 = "Landing page made by";
var scroll$6 = "Scroll";
var hero_headline$6 = "Enter Venezuela with Confidence. We Handle the Complexity.";
var hero_subheadline$6 = "From company setup and regulatory compliance to local representation and talent sourcing, we provide the on-the-ground expertise international companies need to operate successfully in Venezuela.";
var hero_cta_primary$6 = "Request a Consultation";
var hero_cta_secondary$6 = "Explore Our Services";
var stats_service_areas$6 = "Service Areas";
var stats_local_execution$6 = "Local Execution";
var stats_professional_service$6 = "Professional Service";
var about_label$6 = "About Us";
var about_headline$6 = "Your Trusted Partner in Venezuela";
var about_body$6 = "We provide hands-on business advisory and operational support for foreign and local companies navigating Venezuela's regulatory environment. Our focus is practical execution, compliance, and reliable on-the-ground solutions. From market entry to ongoing operations, we coordinate every step with local authorities and partners.";
var about_quote$6 = "Venezuela is complex. We make it manageable.";
var about_quote_body$6 = "Our approach combines local knowledge with international professional standards — ensuring your business enters and operates with confidence.";
var pillar_local_expertise_label$6 = "Local Expertise";
var pillar_local_expertise_desc$6 = "Deep familiarity with Venezuelan regulations, authorities, and business culture.";
var pillar_international_label$6 = "International Standards";
var pillar_international_desc$6 = "Professional, reliable, and confidential service that global companies expect.";
var pillar_practical_label$6 = "Practical Execution";
var pillar_practical_desc$6 = "Not just advice — we handle the process from start to finish.";
var about_floating_title$6 = "On-the-ground";
var about_floating_sub$6 = "Local execution. International standards.";
var why_us_label$6 = "Why Choose VAS";
var why_us_headline$6 = "Why Companies Choose Us";
var why_us$6 = [
	{
		icon: "🏛️",
		title: "Local Expertise with International Standards",
		description: "We combine deep knowledge of Venezuela's regulatory landscape with international best practices. Our team ensures your operations meet both local requirements and global expectations."
	},
	{
		icon: "🤝",
		title: "Direct Coordination with Authorities",
		description: "We liaise directly with government agencies, registries, and regulatory bodies on your behalf. This ensures faster processing and fewer obstacles in your business setup."
	},
	{
		icon: "✅",
		title: "Reliable Execution and Follow-Through",
		description: "We manage every step from filing to approval, keeping you informed throughout. Our hands-on approach means nothing falls through the cracks."
	},
	{
		icon: "🔒",
		title: "Confidential and Professional Service",
		description: "We handle all engagements with strict confidentiality and professionalism. Your business plans and operations remain secure with us."
	}
];
var services_label$6 = "Our Services";
var services_headline$6 = "End-to-End Business Support in Venezuela";
var services_subheadline$6 = "From initial setup to ongoing operations — we cover every aspect of doing business in Venezuela.";
var services_cta_text$6 = "Need a service not listed here? We handle bespoke requirements.";
var services_cta_button$6 = "Discuss Your Needs";
var services$6 = [
	{
		title: "Market Entry & Company Setup",
		description: "Company incorporation, commercial registry registration, Tax ID (RIF) processing, registration with tax and labor authorities, and support with local bank account opening.",
		icon: "🏢"
	},
	{
		title: "Permits & Regulatory Management",
		description: "Municipal business licenses, industry-specific permits, sanitary registrations, renewals and compliance follow-up to keep your operations fully authorized.",
		icon: "📋"
	},
	{
		title: "Legal Coordination",
		description: "Corporate legal support, contract drafting and review, and labor law coordination through trusted partner firms.",
		icon: "⚖️"
	},
	{
		title: "Local Representation & Back Office",
		description: "Fiscal address services, local legal representative appointment, and official notification handling for your company in Venezuela.",
		icon: "📍"
	},
	{
		title: "Real Estate & Relocation Support",
		description: "Office and commercial space search, warehouse and industrial facilities sourcing, and residential housing for executives relocating to Venezuela.",
		icon: "🏠"
	},
	{
		title: "Talent Search & Hiring Support",
		description: "Local talent sourcing, executive search, and hiring coordination to build your team with qualified Venezuelan professionals.",
		icon: "👥"
	}
];
var how_label$6 = "The Process";
var how_headline$6 = "How It Works";
var how_subheadline$6 = "A simple, structured approach to getting your business operational in Venezuela.";
var how_it_works$6 = [
	{
		step: 1,
		title: "Initial Consultation",
		description: "Contact us to discuss your business needs, timeline, and objectives for entering or operating in Venezuela."
	},
	{
		step: 2,
		title: "Strategy & Planning",
		description: "We assess regulatory requirements, identify necessary permits and registrations, and develop a tailored action plan for your operation."
	},
	{
		step: 3,
		title: "Execution & Coordination",
		description: "We handle filings, registrations, permits, and coordination with local authorities and partners on your behalf."
	},
	{
		step: 4,
		title: "Ongoing Support",
		description: "We provide continued compliance tracking, renewals, local representation, and operational support as your business grows."
	}
];
var cta_headline$6 = "Ready to Operate in Venezuela?";
var cta_body$6 = "Contact us to discuss your business needs and learn how we can help you navigate Venezuela's regulatory environment with confidence.";
var cta_button$6 = "Get in Touch";
var contact_label$6 = "Contact Us";
var contact_headline$6 = "Get in Touch";
var contact_body$6 = "Ready to explore how VAS can help your business enter or operate in Venezuela? Reach out for a confidential consultation.";
var contact_email_label$6 = "Email";
var contact_phone_label$6 = "Phone";
var form_name$6 = "Full Name";
var form_company$6 = "Company";
var form_email$6 = "Email Address";
var form_message$6 = "How can we help?";
var form_name_ph$6 = "John Smith";
var form_company_ph$6 = "Company Name";
var form_email_ph$6 = "john{'@'}company.com";
var form_message_ph$6 = "Tell us about your business needs in Venezuela...";
var form_submit$6 = "Send Message";
var form_submitting$6 = "Sending...";
var form_confidential$6 = "All inquiries are handled with strict confidentiality.";
var form_error$6 = "Something went wrong. Please try again.";
var form_err_name$6 = "Please enter your full name.";
var form_err_company$6 = "Please enter your company name.";
var form_err_email$6 = "Please enter a valid email address.";
var form_err_message$6 = "Please describe your needs (at least 10 characters).";
var modal_title$6 = "Message Sent";
var modal_body$6 = "Thank you for reaching out. We'll review your inquiry and get back to you shortly — all communication is handled with strict confidentiality.";
var modal_done$6 = "Done";
var seo_title$6 = "Venezuela Advisory Services — Market Entry & Business Advisory";
var seo_description$6 = "Helping companies enter and operate in Venezuela. Market entry, regulatory support, permits & licenses, local representation, real estate, and talent sourcing.";
var seo_og_title$6 = "Venezuela Advisory Services";
var seo_og_description$6 = "Your trusted partner for doing business in Venezuela.";
var contact_email$6 = "info{'@'}venezuela-advisory.com";
var contact_phone$6 = "+58 212 5644313 / 5643321";
var company_name$6 = "Venezuela Advisory";
var footer_tagline$6 = "Your Trusted Partner for Business Operations in Venezuela";
const locale_en_46json_f7ad1dff = {
	nav_home: nav_home$6,
	nav_services: nav_services$6,
	nav_contact: nav_contact$6,
	cta_request_consultation: cta_request_consultation$6,
	footer_navigate: footer_navigate$6,
	footer_contact: footer_contact$6,
	footer_rights: footer_rights$6,
	footer_confidential: footer_confidential$6,
	footer_made_by: footer_made_by$6,
	scroll: scroll$6,
	hero_headline: hero_headline$6,
	hero_subheadline: hero_subheadline$6,
	hero_cta_primary: hero_cta_primary$6,
	hero_cta_secondary: hero_cta_secondary$6,
	stats_service_areas: stats_service_areas$6,
	stats_local_execution: stats_local_execution$6,
	stats_professional_service: stats_professional_service$6,
	about_label: about_label$6,
	about_headline: about_headline$6,
	about_body: about_body$6,
	about_quote: about_quote$6,
	about_quote_body: about_quote_body$6,
	pillar_local_expertise_label: pillar_local_expertise_label$6,
	pillar_local_expertise_desc: pillar_local_expertise_desc$6,
	pillar_international_label: pillar_international_label$6,
	pillar_international_desc: pillar_international_desc$6,
	pillar_practical_label: pillar_practical_label$6,
	pillar_practical_desc: pillar_practical_desc$6,
	about_floating_title: about_floating_title$6,
	about_floating_sub: about_floating_sub$6,
	why_us_label: why_us_label$6,
	why_us_headline: why_us_headline$6,
	why_us: why_us$6,
	services_label: services_label$6,
	services_headline: services_headline$6,
	services_subheadline: services_subheadline$6,
	services_cta_text: services_cta_text$6,
	services_cta_button: services_cta_button$6,
	services: services$6,
	how_label: how_label$6,
	how_headline: how_headline$6,
	how_subheadline: how_subheadline$6,
	how_it_works: how_it_works$6,
	cta_headline: cta_headline$6,
	cta_body: cta_body$6,
	cta_button: cta_button$6,
	contact_label: contact_label$6,
	contact_headline: contact_headline$6,
	contact_body: contact_body$6,
	contact_email_label: contact_email_label$6,
	contact_phone_label: contact_phone_label$6,
	form_name: form_name$6,
	form_company: form_company$6,
	form_email: form_email$6,
	form_message: form_message$6,
	form_name_ph: form_name_ph$6,
	form_company_ph: form_company_ph$6,
	form_email_ph: form_email_ph$6,
	form_message_ph: form_message_ph$6,
	form_submit: form_submit$6,
	form_submitting: form_submitting$6,
	form_confidential: form_confidential$6,
	form_error: form_error$6,
	form_err_name: form_err_name$6,
	form_err_company: form_err_company$6,
	form_err_email: form_err_email$6,
	form_err_message: form_err_message$6,
	modal_title: modal_title$6,
	modal_body: modal_body$6,
	modal_done: modal_done$6,
	seo_title: seo_title$6,
	seo_description: seo_description$6,
	seo_og_title: seo_og_title$6,
	seo_og_description: seo_og_description$6,
	contact_email: contact_email$6,
	contact_phone: contact_phone$6,
	company_name: company_name$6,
	footer_tagline: footer_tagline$6
};

var nav_home$5 = "Inicio";
var nav_services$5 = "Servicios";
var nav_contact$5 = "Contacto";
var cta_request_consultation$5 = "Solicitar Consulta";
var footer_navigate$5 = "Navegar";
var footer_contact$5 = "Contacto";
var footer_rights$5 = "Todos los derechos reservados.";
var footer_confidential$5 = "Asesoría Empresarial Confidencial y Profesional";
var footer_made_by$5 = "Página de inicio desarrollada por";
var scroll$5 = "Deslizar";
var hero_headline$5 = "Ingrese a Venezuela con Confianza. Nosotros Manejamos la Complejidad.";
var hero_subheadline$5 = "Desde la constitución de empresas y el cumplimiento regulatorio hasta la representación local y la captación de talento, brindamos la experiencia en terreno que las empresas internacionales necesitan para operar exitosamente en Venezuela.";
var hero_cta_primary$5 = "Solicitar Consulta";
var hero_cta_secondary$5 = "Explorar Nuestros Servicios";
var stats_service_areas$5 = "Áreas de Servicio";
var stats_local_execution$5 = "Ejecución Local";
var stats_professional_service$5 = "Servicio Profesional";
var about_label$5 = "Acerca de Nosotros";
var about_headline$5 = "Su Socio de Confianza en Venezuela";
var about_body$5 = "Ofrecemos asesoría empresarial práctica y apoyo operacional para empresas extranjeras y locales que navegan el entorno regulatorio venezolano. Nuestro enfoque está en la ejecución práctica, el cumplimiento normativo y soluciones confiables en terreno. Desde la entrada al mercado hasta las operaciones continuas, coordinamos cada paso con las autoridades y socios locales.";
var about_quote$5 = "Venezuela es compleja. La hacemos manejable.";
var about_quote_body$5 = "Nuestro enfoque combina conocimiento local con estándares profesionales internacionales, asegurando que su empresa ingrese y opere con confianza.";
var pillar_local_expertise_label$5 = "Experiencia Local";
var pillar_local_expertise_desc$5 = "Profundo conocimiento de las regulaciones, autoridades y cultura empresarial venezolana.";
var pillar_international_label$5 = "Estándares Internacionales";
var pillar_international_desc$5 = "Servicio profesional, confiable y confidencial que las empresas globales esperan.";
var pillar_practical_label$5 = "Ejecución Práctica";
var pillar_practical_desc$5 = "No solo asesoría — manejamos el proceso de principio a fin.";
var about_floating_title$5 = "En terreno";
var about_floating_sub$5 = "Ejecución local. Estándares internacionales.";
var why_us_label$5 = "¿Por Qué Elegir VAS?";
var why_us_headline$5 = "Por Qué las Empresas Nos Eligen";
var why_us$5 = [
	{
		icon: "🏛️",
		title: "Experiencia Local con Estándares Internacionales",
		description: "Combinamos profundo conocimiento del panorama regulatorio venezolano con las mejores prácticas internacionales. Nuestro equipo asegura que sus operaciones cumplan tanto los requisitos locales como las expectativas globales."
	},
	{
		icon: "🤝",
		title: "Coordinación Directa con Autoridades",
		description: "Nos relacionamos directamente con agencias gubernamentales, registros y organismos regulatorios en su nombre. Esto garantiza un procesamiento más rápido y menos obstáculos en la configuración de su empresa."
	},
	{
		icon: "✅",
		title: "Ejecución Confiable y Seguimiento",
		description: "Gestionamos cada paso desde la presentación hasta la aprobación, manteniéndole informado en todo momento. Nuestro enfoque práctico garantiza que nada quede sin resolver."
	},
	{
		icon: "🔒",
		title: "Servicio Confidencial y Profesional",
		description: "Manejamos todos los compromisos con estricta confidencialidad y profesionalismo. Sus planes de negocio y operaciones permanecen seguros con nosotros."
	}
];
var services_label$5 = "Nuestros Servicios";
var services_headline$5 = "Apoyo Empresarial Integral en Venezuela";
var services_subheadline$5 = "Desde la configuración inicial hasta las operaciones continuas — cubrimos todos los aspectos de hacer negocios en Venezuela.";
var services_cta_text$5 = "¿Necesita un servicio no listado aquí? Manejamos requisitos a medida.";
var services_cta_button$5 = "Discuta Sus Necesidades";
var services$5 = [
	{
		title: "Entrada al Mercado y Constitución de Empresa",
		description: "Constitución de empresas, registro mercantil, procesamiento de RIF, registro ante autoridades fiscales y laborales, y apoyo en la apertura de cuentas bancarias locales.",
		icon: "🏢"
	},
	{
		title: "Permisos y Gestión Regulatoria",
		description: "Licencias de actividades municipales, permisos específicos por industria, registros sanitarios, renovaciones y seguimiento de cumplimiento para mantener sus operaciones totalmente autorizadas.",
		icon: "📋"
	},
	{
		title: "Coordinación Legal",
		description: "Apoyo legal corporativo, redacción y revisión de contratos, y coordinación de derecho laboral a través de firmas asociadas de confianza.",
		icon: "⚖️"
	},
	{
		title: "Representación Local y Back Office",
		description: "Servicios de domicilio fiscal, nombramiento de representante legal local y manejo de notificaciones oficiales para su empresa en Venezuela.",
		icon: "📍"
	},
	{
		title: "Bienes Raíces y Apoyo de Reubicación",
		description: "Búsqueda de oficinas y espacios comerciales, aprovisionamiento de almacenes e instalaciones industriales, y vivienda residencial para ejecutivos que se mudan a Venezuela.",
		icon: "🏠"
	},
	{
		title: "Búsqueda de Talento y Apoyo en Contratación",
		description: "Búsqueda de talento local, búsqueda ejecutiva y coordinación de contratación para construir su equipo con profesionales venezolanos calificados.",
		icon: "👥"
	}
];
var how_label$5 = "El Proceso";
var how_headline$5 = "Cómo Funciona";
var how_subheadline$5 = "Un enfoque simple y estructurado para poner en marcha su negocio en Venezuela.";
var how_it_works$5 = [
	{
		step: 1,
		title: "Consulta Inicial",
		description: "Contáctenos para discutir sus necesidades empresariales, cronograma y objetivos para ingresar u operar en Venezuela."
	},
	{
		step: 2,
		title: "Estrategia y Planificación",
		description: "Evaluamos los requisitos regulatorios, identificamos los permisos y registros necesarios, y desarrollamos un plan de acción personalizado para su operación."
	},
	{
		step: 3,
		title: "Ejecución y Coordinación",
		description: "Manejamos presentaciones, registros, permisos y coordinación con autoridades locales y socios en su nombre."
	},
	{
		step: 4,
		title: "Apoyo Continuo",
		description: "Proporcionamos seguimiento continuo de cumplimiento, renovaciones, representación local y apoyo operacional a medida que su negocio crece."
	}
];
var cta_headline$5 = "¿Listo para Operar en Venezuela?";
var cta_body$5 = "Contáctenos para discutir sus necesidades empresariales y conocer cómo podemos ayudarle a navegar el entorno regulatorio venezolano con confianza.";
var cta_button$5 = "Contáctenos";
var contact_label$5 = "Contáctenos";
var contact_headline$5 = "Póngase en Contacto";
var contact_body$5 = "¿Listo para explorar cómo VAS puede ayudar a su empresa a ingresar u operar en Venezuela? Contáctenos para una consulta confidencial.";
var contact_email_label$5 = "Correo Electrónico";
var contact_phone_label$5 = "Teléfono";
var form_name$5 = "Nombre Completo";
var form_company$5 = "Empresa";
var form_email$5 = "Dirección de Correo Electrónico";
var form_message$5 = "¿Cómo podemos ayudarle?";
var form_name_ph$5 = "Juan García";
var form_company_ph$5 = "Nombre de la Empresa";
var form_email_ph$5 = "juan{'@'}empresa.com";
var form_message_ph$5 = "Cuéntenos sobre sus necesidades empresariales en Venezuela...";
var form_submit$5 = "Enviar Mensaje";
var form_submitting$5 = "Enviando...";
var form_confidential$5 = "Todas las consultas se manejan con estricta confidencialidad.";
var form_error$5 = "Algo salió mal. Por favor intente nuevamente.";
var form_err_name$5 = "Por favor ingrese su nombre completo.";
var form_err_company$5 = "Por favor ingrese el nombre de su empresa.";
var form_err_email$5 = "Por favor ingrese una dirección de correo electrónico válida.";
var form_err_message$5 = "Por favor describa sus necesidades (al menos 10 caracteres).";
var modal_title$5 = "Mensaje Enviado";
var modal_body$5 = "Gracias por comunicarse con nosotros. Revisaremos su consulta y le responderemos en breve — toda comunicación es manejada con estricta confidencialidad.";
var modal_done$5 = "Listo";
var seo_title$5 = "Venezuela Advisory Services — Entrada al Mercado y Asesoría Empresarial";
var seo_description$5 = "Ayudamos a empresas a ingresar y operar en Venezuela. Entrada al mercado, apoyo regulatorio, permisos y licencias, representación local, bienes raíces y captación de talento.";
var seo_og_title$5 = "Venezuela Advisory Services";
var seo_og_description$5 = "Su socio de confianza para hacer negocios en Venezuela.";
var contact_email$5 = "info{'@'}venezuela-advisory.com";
var contact_phone$5 = "+58 212 5644313 / 5643321";
var company_name$5 = "Venezuela Advisory";
var footer_tagline$5 = "Su Socio de Confianza para Operaciones Empresariales en Venezuela";
const locale_es_46json_755fd8a8 = {
	nav_home: nav_home$5,
	nav_services: nav_services$5,
	nav_contact: nav_contact$5,
	cta_request_consultation: cta_request_consultation$5,
	footer_navigate: footer_navigate$5,
	footer_contact: footer_contact$5,
	footer_rights: footer_rights$5,
	footer_confidential: footer_confidential$5,
	footer_made_by: footer_made_by$5,
	scroll: scroll$5,
	hero_headline: hero_headline$5,
	hero_subheadline: hero_subheadline$5,
	hero_cta_primary: hero_cta_primary$5,
	hero_cta_secondary: hero_cta_secondary$5,
	stats_service_areas: stats_service_areas$5,
	stats_local_execution: stats_local_execution$5,
	stats_professional_service: stats_professional_service$5,
	about_label: about_label$5,
	about_headline: about_headline$5,
	about_body: about_body$5,
	about_quote: about_quote$5,
	about_quote_body: about_quote_body$5,
	pillar_local_expertise_label: pillar_local_expertise_label$5,
	pillar_local_expertise_desc: pillar_local_expertise_desc$5,
	pillar_international_label: pillar_international_label$5,
	pillar_international_desc: pillar_international_desc$5,
	pillar_practical_label: pillar_practical_label$5,
	pillar_practical_desc: pillar_practical_desc$5,
	about_floating_title: about_floating_title$5,
	about_floating_sub: about_floating_sub$5,
	why_us_label: why_us_label$5,
	why_us_headline: why_us_headline$5,
	why_us: why_us$5,
	services_label: services_label$5,
	services_headline: services_headline$5,
	services_subheadline: services_subheadline$5,
	services_cta_text: services_cta_text$5,
	services_cta_button: services_cta_button$5,
	services: services$5,
	how_label: how_label$5,
	how_headline: how_headline$5,
	how_subheadline: how_subheadline$5,
	how_it_works: how_it_works$5,
	cta_headline: cta_headline$5,
	cta_body: cta_body$5,
	cta_button: cta_button$5,
	contact_label: contact_label$5,
	contact_headline: contact_headline$5,
	contact_body: contact_body$5,
	contact_email_label: contact_email_label$5,
	contact_phone_label: contact_phone_label$5,
	form_name: form_name$5,
	form_company: form_company$5,
	form_email: form_email$5,
	form_message: form_message$5,
	form_name_ph: form_name_ph$5,
	form_company_ph: form_company_ph$5,
	form_email_ph: form_email_ph$5,
	form_message_ph: form_message_ph$5,
	form_submit: form_submit$5,
	form_submitting: form_submitting$5,
	form_confidential: form_confidential$5,
	form_error: form_error$5,
	form_err_name: form_err_name$5,
	form_err_company: form_err_company$5,
	form_err_email: form_err_email$5,
	form_err_message: form_err_message$5,
	modal_title: modal_title$5,
	modal_body: modal_body$5,
	modal_done: modal_done$5,
	seo_title: seo_title$5,
	seo_description: seo_description$5,
	seo_og_title: seo_og_title$5,
	seo_og_description: seo_og_description$5,
	contact_email: contact_email$5,
	contact_phone: contact_phone$5,
	company_name: company_name$5,
	footer_tagline: footer_tagline$5
};

var nav_home$4 = "Accueil";
var nav_services$4 = "Services";
var nav_contact$4 = "Contact";
var cta_request_consultation$4 = "Demander une Consultation";
var footer_navigate$4 = "Navigation";
var footer_contact$4 = "Contact";
var footer_rights$4 = "Tous droits réservés.";
var footer_confidential$4 = "Conseil aux Entreprises Confidentiel et Professionnel";
var footer_made_by$4 = "Page d'accueil réalisée par";
var scroll$4 = "Défiler";
var hero_headline$4 = "Entrez au Venezuela en Toute Confiance. Nous Gérons la Complexité.";
var hero_subheadline$4 = "De la création d'entreprise et la conformité réglementaire à la représentation locale et le recrutement de talents, nous fournissons l'expertise terrain dont les entreprises internationales ont besoin pour opérer avec succès au Venezuela.";
var hero_cta_primary$4 = "Demander une Consultation";
var hero_cta_secondary$4 = "Explorer Nos Services";
var stats_service_areas$4 = "Domaines de Service";
var stats_local_execution$4 = "Exécution Locale";
var stats_professional_service$4 = "Service Professionnel";
var about_label$4 = "À Propos";
var about_headline$4 = "Votre Partenaire de Confiance au Venezuela";
var about_body$4 = "Nous fournissons un conseil aux entreprises pratique et un soutien opérationnel pour les entreprises étrangères et locales naviguant dans l'environnement réglementaire vénézuélien. Notre focus est l'exécution pratique, la conformité et des solutions fiables sur le terrain. De l'entrée sur le marché aux opérations continues, nous coordonnons chaque étape avec les autorités et partenaires locaux.";
var about_quote$4 = "Le Venezuela est complexe. Nous le rendons gérable.";
var about_quote_body$4 = "Notre approche combine la connaissance locale avec les normes professionnelles internationales — garantissant que votre entreprise entre et opère en toute confiance.";
var pillar_local_expertise_label$4 = "Expertise Locale";
var pillar_local_expertise_desc$4 = "Connaissance approfondie des réglementations, autorités et culture d'affaires vénézuéliennes.";
var pillar_international_label$4 = "Standards Internationaux";
var pillar_international_desc$4 = "Service professionnel, fiable et confidentiel que les entreprises mondiales attendent.";
var pillar_practical_label$4 = "Exécution Pratique";
var pillar_practical_desc$4 = "Pas seulement des conseils — nous gérons le processus du début à la fin.";
var about_floating_title$4 = "Sur le terrain";
var about_floating_sub$4 = "Exécution locale. Standards internationaux.";
var why_us_label$4 = "Pourquoi Choisir VAS";
var why_us_headline$4 = "Pourquoi les Entreprises Nous Choisissent";
var why_us$4 = [
	{
		icon: "🏛️",
		title: "Expertise Locale avec Standards Internationaux",
		description: "Nous combinons une connaissance approfondie du paysage réglementaire vénézuélien avec les meilleures pratiques internationales. Notre équipe garantit que vos opérations répondent aux exigences locales et aux attentes mondiales."
	},
	{
		icon: "🤝",
		title: "Coordination Directe avec les Autorités",
		description: "Nous traitons directement avec les agences gouvernementales, les registres et les organismes de réglementation en votre nom. Cela garantit un traitement plus rapide et moins d'obstacles dans la création de votre entreprise."
	},
	{
		icon: "✅",
		title: "Exécution Fiable et Suivi",
		description: "Nous gérons chaque étape du dépôt à l'approbation, vous tenant informé tout au long. Notre approche pratique garantit que rien ne passe à travers les mailles du filet."
	},
	{
		icon: "🔒",
		title: "Service Confidentiel et Professionnel",
		description: "Nous gérons tous les engagements avec une stricte confidentialité et un professionnalisme. Vos plans d'affaires et opérations restent sécurisés avec nous."
	}
];
var services_label$4 = "Nos Services";
var services_headline$4 = "Soutien aux Entreprises de Bout en Bout au Venezuela";
var services_subheadline$4 = "De la configuration initiale aux opérations continues — nous couvrons tous les aspects des affaires au Venezuela.";
var services_cta_text$4 = "Besoin d'un service non répertorié ici ? Nous traitons les exigences sur mesure.";
var services_cta_button$4 = "Discuter de Vos Besoins";
var services$4 = [
	{
		title: "Entrée sur le Marché et Création d'Entreprise",
		description: "Incorporation d'entreprise, enregistrement au registre commercial, traitement du numéro d'identification fiscale (RIF), inscription auprès des autorités fiscales et du travail, et assistance pour l'ouverture de compte bancaire local.",
		icon: "🏢"
	},
	{
		title: "Gestion des Permis et de la Réglementation",
		description: "Licences commerciales municipales, permis spécifiques à l'industrie, enregistrements sanitaires, renouvellements et suivi de conformité pour maintenir vos opérations pleinement autorisées.",
		icon: "📋"
	},
	{
		title: "Coordination Juridique",
		description: "Soutien juridique aux entreprises, rédaction et révision de contrats, et coordination du droit du travail par des cabinets partenaires de confiance.",
		icon: "⚖️"
	},
	{
		title: "Représentation Locale et Back Office",
		description: "Services d'adresse fiscale, nomination de représentant légal local et gestion des notifications officielles pour votre entreprise au Venezuela.",
		icon: "📍"
	},
	{
		title: "Immobilier et Soutien à la Relocalisation",
		description: "Recherche de bureaux et d'espaces commerciaux, approvisionnement en entrepôts et installations industrielles, et logement résidentiel pour les cadres qui s'installent au Venezuela.",
		icon: "🏠"
	},
	{
		title: "Recherche de Talents et Soutien au Recrutement",
		description: "Sourcing de talents locaux, recherche de cadres et coordination du recrutement pour constituer votre équipe avec des professionnels vénézuéliens qualifiés.",
		icon: "👥"
	}
];
var how_label$4 = "Le Processus";
var how_headline$4 = "Comment Ça Fonctionne";
var how_subheadline$4 = "Une approche simple et structurée pour rendre votre entreprise opérationnelle au Venezuela.";
var how_it_works$4 = [
	{
		step: 1,
		title: "Consultation Initiale",
		description: "Contactez-nous pour discuter de vos besoins commerciaux, du calendrier et des objectifs pour entrer ou opérer au Venezuela."
	},
	{
		step: 2,
		title: "Stratégie et Planification",
		description: "Nous évaluons les exigences réglementaires, identifions les permis et enregistrements nécessaires, et développons un plan d'action sur mesure pour votre opération."
	},
	{
		step: 3,
		title: "Exécution et Coordination",
		description: "Nous gérons les dépôts, les enregistrements, les permis et la coordination avec les autorités locales et les partenaires en votre nom."
	},
	{
		step: 4,
		title: "Soutien Continu",
		description: "Nous fournissons un suivi continu de la conformité, des renouvellements, une représentation locale et un soutien opérationnel au fur et à mesure que votre entreprise se développe."
	}
];
var cta_headline$4 = "Prêt à Opérer au Venezuela ?";
var cta_body$4 = "Contactez-nous pour discuter de vos besoins commerciaux et apprendre comment nous pouvons vous aider à naviguer dans l'environnement réglementaire vénézuélien avec confiance.";
var cta_button$4 = "Nous Contacter";
var contact_label$4 = "Contactez-Nous";
var contact_headline$4 = "Prenez Contact";
var contact_body$4 = "Prêt à explorer comment VAS peut aider votre entreprise à entrer ou à opérer au Venezuela ? Contactez-nous pour une consultation confidentielle.";
var contact_email_label$4 = "E-mail";
var contact_phone_label$4 = "Téléphone";
var form_name$4 = "Nom Complet";
var form_company$4 = "Entreprise";
var form_email$4 = "Adresse E-mail";
var form_message$4 = "Comment pouvons-nous vous aider ?";
var form_name_ph$4 = "Jean Dupont";
var form_company_ph$4 = "Nom de l'Entreprise";
var form_email_ph$4 = "jean{'@'}entreprise.com";
var form_message_ph$4 = "Parlez-nous de vos besoins commerciaux au Venezuela...";
var form_submit$4 = "Envoyer le Message";
var form_submitting$4 = "Envoi en cours...";
var form_confidential$4 = "Toutes les demandes sont traitées avec une stricte confidentialité.";
var form_error$4 = "Quelque chose s'est mal passé. Veuillez réessayer.";
var form_err_name$4 = "Veuillez entrer votre nom complet.";
var form_err_company$4 = "Veuillez entrer le nom de votre entreprise.";
var form_err_email$4 = "Veuillez entrer une adresse e-mail valide.";
var form_err_message$4 = "Veuillez décrire vos besoins (au moins 10 caractères).";
var modal_title$4 = "Message Envoyé";
var modal_body$4 = "Merci de nous avoir contactés. Nous examinerons votre demande et vous répondrons sous peu — toute communication est traitée avec une stricte confidentialité.";
var modal_done$4 = "Terminé";
var seo_title$4 = "Venezuela Advisory Services — Entrée sur le Marché et Conseil aux Entreprises";
var seo_description$4 = "Nous aidons les entreprises à entrer et à opérer au Venezuela. Entrée sur le marché, soutien réglementaire, permis et licences, représentation locale, immobilier et recrutement.";
var seo_og_title$4 = "Venezuela Advisory Services";
var seo_og_description$4 = "Votre partenaire de confiance pour faire des affaires au Venezuela.";
var contact_email$4 = "info{'@'}venezuela-advisory.com";
var contact_phone$4 = "+58 212 5644313 / 5643321";
var company_name$4 = "Venezuela Advisory";
var footer_tagline$4 = "Votre Partenaire de Confiance pour les Opérations Commerciales au Venezuela";
const locale_fr_46json_b42475c1 = {
	nav_home: nav_home$4,
	nav_services: nav_services$4,
	nav_contact: nav_contact$4,
	cta_request_consultation: cta_request_consultation$4,
	footer_navigate: footer_navigate$4,
	footer_contact: footer_contact$4,
	footer_rights: footer_rights$4,
	footer_confidential: footer_confidential$4,
	footer_made_by: footer_made_by$4,
	scroll: scroll$4,
	hero_headline: hero_headline$4,
	hero_subheadline: hero_subheadline$4,
	hero_cta_primary: hero_cta_primary$4,
	hero_cta_secondary: hero_cta_secondary$4,
	stats_service_areas: stats_service_areas$4,
	stats_local_execution: stats_local_execution$4,
	stats_professional_service: stats_professional_service$4,
	about_label: about_label$4,
	about_headline: about_headline$4,
	about_body: about_body$4,
	about_quote: about_quote$4,
	about_quote_body: about_quote_body$4,
	pillar_local_expertise_label: pillar_local_expertise_label$4,
	pillar_local_expertise_desc: pillar_local_expertise_desc$4,
	pillar_international_label: pillar_international_label$4,
	pillar_international_desc: pillar_international_desc$4,
	pillar_practical_label: pillar_practical_label$4,
	pillar_practical_desc: pillar_practical_desc$4,
	about_floating_title: about_floating_title$4,
	about_floating_sub: about_floating_sub$4,
	why_us_label: why_us_label$4,
	why_us_headline: why_us_headline$4,
	why_us: why_us$4,
	services_label: services_label$4,
	services_headline: services_headline$4,
	services_subheadline: services_subheadline$4,
	services_cta_text: services_cta_text$4,
	services_cta_button: services_cta_button$4,
	services: services$4,
	how_label: how_label$4,
	how_headline: how_headline$4,
	how_subheadline: how_subheadline$4,
	how_it_works: how_it_works$4,
	cta_headline: cta_headline$4,
	cta_body: cta_body$4,
	cta_button: cta_button$4,
	contact_label: contact_label$4,
	contact_headline: contact_headline$4,
	contact_body: contact_body$4,
	contact_email_label: contact_email_label$4,
	contact_phone_label: contact_phone_label$4,
	form_name: form_name$4,
	form_company: form_company$4,
	form_email: form_email$4,
	form_message: form_message$4,
	form_name_ph: form_name_ph$4,
	form_company_ph: form_company_ph$4,
	form_email_ph: form_email_ph$4,
	form_message_ph: form_message_ph$4,
	form_submit: form_submit$4,
	form_submitting: form_submitting$4,
	form_confidential: form_confidential$4,
	form_error: form_error$4,
	form_err_name: form_err_name$4,
	form_err_company: form_err_company$4,
	form_err_email: form_err_email$4,
	form_err_message: form_err_message$4,
	modal_title: modal_title$4,
	modal_body: modal_body$4,
	modal_done: modal_done$4,
	seo_title: seo_title$4,
	seo_description: seo_description$4,
	seo_og_title: seo_og_title$4,
	seo_og_description: seo_og_description$4,
	contact_email: contact_email$4,
	contact_phone: contact_phone$4,
	company_name: company_name$4,
	footer_tagline: footer_tagline$4
};

var nav_home$3 = "Startseite";
var nav_services$3 = "Dienstleistungen";
var nav_contact$3 = "Kontakt";
var cta_request_consultation$3 = "Beratung Anfragen";
var footer_navigate$3 = "Navigation";
var footer_contact$3 = "Kontakt";
var footer_rights$3 = "Alle Rechte vorbehalten.";
var footer_confidential$3 = "Vertrauliche & Professionelle Unternehmensberatung";
var footer_made_by$3 = "Landingpage erstellt von";
var scroll$3 = "Scrollen";
var hero_headline$3 = "Betreten Sie Venezuela mit Zuversicht. Wir Managen die Komplexität.";
var hero_subheadline$3 = "Von der Unternehmensgründung und regulatorischen Compliance bis hin zu lokaler Vertretung und Talentakquise bieten wir die Vor-Ort-Expertise, die internationale Unternehmen für einen erfolgreichen Betrieb in Venezuela benötigen.";
var hero_cta_primary$3 = "Beratung Anfragen";
var hero_cta_secondary$3 = "Unsere Dienstleistungen Erkunden";
var stats_service_areas$3 = "Servicebereiche";
var stats_local_execution$3 = "Lokale Ausführung";
var stats_professional_service$3 = "Professioneller Service";
var about_label$3 = "Über Uns";
var about_headline$3 = "Ihr Vertrauenspartner in Venezuela";
var about_body$3 = "Wir bieten praxisnahe Unternehmensberatung und operationale Unterstützung für ausländische und lokale Unternehmen, die sich im regulatorischen Umfeld Venezuelas bewegen. Unser Fokus liegt auf praktischer Umsetzung, Compliance und zuverlässigen Vor-Ort-Lösungen. Von der Markteinführung bis zu laufenden Betrieben koordinieren wir jeden Schritt mit lokalen Behörden und Partnern.";
var about_quote$3 = "Venezuela ist komplex. Wir machen es handhabbar.";
var about_quote_body$3 = "Unser Ansatz kombiniert lokales Wissen mit internationalen Berufsstandards — und stellt sicher, dass Ihr Unternehmen mit Zuversicht eintritt und operiert.";
var pillar_local_expertise_label$3 = "Lokale Expertise";
var pillar_local_expertise_desc$3 = "Tiefes Verständnis der venezolanischen Vorschriften, Behörden und Unternehmenskultur.";
var pillar_international_label$3 = "Internationale Standards";
var pillar_international_desc$3 = "Professioneller, zuverlässiger und vertraulicher Service, den globale Unternehmen erwarten.";
var pillar_practical_label$3 = "Praktische Umsetzung";
var pillar_practical_desc$3 = "Nicht nur Beratung — wir managen den Prozess von Anfang bis Ende.";
var about_floating_title$3 = "Vor Ort";
var about_floating_sub$3 = "Lokale Ausführung. Internationale Standards.";
var why_us_label$3 = "Warum VAS Wählen";
var why_us_headline$3 = "Warum Unternehmen Uns Wählen";
var why_us$3 = [
	{
		icon: "🏛️",
		title: "Lokale Expertise mit Internationalen Standards",
		description: "Wir kombinieren tiefes Wissen über die venezolanische Regulierungslandschaft mit internationalen Best Practices. Unser Team stellt sicher, dass Ihre Operationen sowohl lokale Anforderungen als auch globale Erwartungen erfüllen."
	},
	{
		icon: "🤝",
		title: "Direkte Koordination mit Behörden",
		description: "Wir treten direkt mit Regierungsbehörden, Registern und Regulierungsbehörden in Ihrem Namen in Kontakt. Dies gewährleistet eine schnellere Bearbeitung und weniger Hindernisse bei der Unternehmensgründung."
	},
	{
		icon: "✅",
		title: "Zuverlässige Ausführung und Nachverfolgung",
		description: "Wir verwalten jeden Schritt von der Einreichung bis zur Genehmigung und halten Sie während des gesamten Prozesses informiert. Unser praktischer Ansatz stellt sicher, dass nichts durch die Maschen fällt."
	},
	{
		icon: "🔒",
		title: "Vertraulicher und Professioneller Service",
		description: "Wir behandeln alle Engagements mit strikter Vertraulichkeit und Professionalität. Ihre Geschäftspläne und Operationen bleiben bei uns sicher."
	}
];
var services_label$3 = "Unsere Dienstleistungen";
var services_headline$3 = "Umfassende Unternehmensunterstützung in Venezuela";
var services_subheadline$3 = "Von der Ersteinrichtung bis zu laufenden Operationen — wir decken jeden Aspekt der Geschäftstätigkeit in Venezuela ab.";
var services_cta_text$3 = "Benötigen Sie eine hier nicht aufgeführte Dienstleistung? Wir bearbeiten maßgeschneiderte Anforderungen.";
var services_cta_button$3 = "Ihre Bedürfnisse Besprechen";
var services$3 = [
	{
		title: "Markteintritt & Unternehmensgründung",
		description: "Unternehmensinkorporation, Handelsregistereintragung, Steueridentifikationsnummer (RIF) Verarbeitung, Anmeldung bei Steuer- und Arbeitsbehörden sowie Unterstützung bei der Eröffnung eines lokalen Bankkontos.",
		icon: "🏢"
	},
	{
		title: "Genehmigungen & Regulierungsmanagement",
		description: "Kommunale Unternehmenslizenzen, branchenspezifische Genehmigungen, Gesundheitsregistrierungen, Verlängerungen und Compliance-Nachverfolgung, um Ihre Operationen vollständig genehmigt zu halten.",
		icon: "📋"
	},
	{
		title: "Rechtliche Koordination",
		description: "Gesellschaftsrechtliche Unterstützung, Vertragsentwurf und -prüfung sowie Arbeitsrechtskoordination durch vertrauenswürdige Partnerkanzleien.",
		icon: "⚖️"
	},
	{
		title: "Lokale Vertretung & Back Office",
		description: "Fiskaladressdienste, Ernennung lokaler gesetzlicher Vertreter und offizielle Benachrichtigungsbearbeitung für Ihr Unternehmen in Venezuela.",
		icon: "📍"
	},
	{
		title: "Immobilien & Umzugsunterstützung",
		description: "Büro- und Geschäftsraumsuche, Beschaffung von Lager- und Industrieanlagen sowie Wohnraum für Führungskräfte, die nach Venezuela umsiedeln.",
		icon: "🏠"
	},
	{
		title: "Talentsuche & Einstellungsunterstützung",
		description: "Lokale Talentakquise, Executive Search und Einstellungskoordination, um Ihr Team mit qualifizierten venezolanischen Fachleuten aufzubauen.",
		icon: "👥"
	}
];
var how_label$3 = "Der Prozess";
var how_headline$3 = "So Funktioniert Es";
var how_subheadline$3 = "Ein einfacher, strukturierter Ansatz, um Ihr Unternehmen in Venezuela betriebsbereit zu machen.";
var how_it_works$3 = [
	{
		step: 1,
		title: "Erstberatung",
		description: "Kontaktieren Sie uns, um Ihre Geschäftsbedürfnisse, den Zeitplan und die Ziele für den Eintritt in oder Betrieb in Venezuela zu besprechen."
	},
	{
		step: 2,
		title: "Strategie & Planung",
		description: "Wir bewerten regulatorische Anforderungen, identifizieren notwendige Genehmigungen und Registrierungen und entwickeln einen maßgeschneiderten Aktionsplan für Ihre Operation."
	},
	{
		step: 3,
		title: "Ausführung & Koordination",
		description: "Wir übernehmen Einreichungen, Registrierungen, Genehmigungen und Koordination mit lokalen Behörden und Partnern in Ihrem Namen."
	},
	{
		step: 4,
		title: "Laufende Unterstützung",
		description: "Wir bieten kontinuierliche Compliance-Verfolgung, Verlängerungen, lokale Vertretung und operationale Unterstützung, während Ihr Unternehmen wächst."
	}
];
var cta_headline$3 = "Bereit, in Venezuela zu Operieren?";
var cta_body$3 = "Kontaktieren Sie uns, um Ihre Geschäftsbedürfnisse zu besprechen und zu erfahren, wie wir Ihnen helfen können, das regulatorische Umfeld Venezuelas mit Zuversicht zu navigieren.";
var cta_button$3 = "Kontakt Aufnehmen";
var contact_label$3 = "Kontaktieren Sie Uns";
var contact_headline$3 = "Kontakt Aufnehmen";
var contact_body$3 = "Sind Sie bereit zu erkunden, wie VAS Ihrem Unternehmen helfen kann, in Venezuela einzutreten oder zu operieren? Wenden Sie sich an uns für eine vertrauliche Beratung.";
var contact_email_label$3 = "E-Mail";
var contact_phone_label$3 = "Telefon";
var form_name$3 = "Vollständiger Name";
var form_company$3 = "Unternehmen";
var form_email$3 = "E-Mail-Adresse";
var form_message$3 = "Wie können wir helfen?";
var form_name_ph$3 = "Hans Müller";
var form_company_ph$3 = "Unternehmensname";
var form_email_ph$3 = "hans{'@'}unternehmen.com";
var form_message_ph$3 = "Erzählen Sie uns von Ihren Geschäftsbedürfnissen in Venezuela...";
var form_submit$3 = "Nachricht Senden";
var form_submitting$3 = "Senden...";
var form_confidential$3 = "Alle Anfragen werden mit strikter Vertraulichkeit behandelt.";
var form_error$3 = "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.";
var form_err_name$3 = "Bitte geben Sie Ihren vollständigen Namen ein.";
var form_err_company$3 = "Bitte geben Sie Ihren Unternehmensnamen ein.";
var form_err_email$3 = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
var form_err_message$3 = "Bitte beschreiben Sie Ihre Bedürfnisse (mindestens 10 Zeichen).";
var modal_title$3 = "Nachricht Gesendet";
var modal_body$3 = "Vielen Dank für Ihre Kontaktaufnahme. Wir werden Ihre Anfrage prüfen und uns in Kürze bei Ihnen melden — jede Kommunikation wird mit strikter Vertraulichkeit behandelt.";
var modal_done$3 = "Fertig";
var seo_title$3 = "Venezuela Advisory Services — Markteintritt & Unternehmensberatung";
var seo_description$3 = "Wir helfen Unternehmen, in Venezuela einzutreten und zu operieren. Markteintritt, regulatorische Unterstützung, Genehmigungen & Lizenzen, lokale Vertretung, Immobilien und Talentakquise.";
var seo_og_title$3 = "Venezuela Advisory Services";
var seo_og_description$3 = "Ihr vertrauenswürdiger Partner für Geschäfte in Venezuela.";
var contact_email$3 = "info{'@'}venezuela-advisory.com";
var contact_phone$3 = "+58 212 5644313 / 5643321";
var company_name$3 = "Venezuela Advisory";
var footer_tagline$3 = "Ihr Vertrauenspartner für Geschäftsbetrieb in Venezuela";
const locale_de_46json_56947012 = {
	nav_home: nav_home$3,
	nav_services: nav_services$3,
	nav_contact: nav_contact$3,
	cta_request_consultation: cta_request_consultation$3,
	footer_navigate: footer_navigate$3,
	footer_contact: footer_contact$3,
	footer_rights: footer_rights$3,
	footer_confidential: footer_confidential$3,
	footer_made_by: footer_made_by$3,
	scroll: scroll$3,
	hero_headline: hero_headline$3,
	hero_subheadline: hero_subheadline$3,
	hero_cta_primary: hero_cta_primary$3,
	hero_cta_secondary: hero_cta_secondary$3,
	stats_service_areas: stats_service_areas$3,
	stats_local_execution: stats_local_execution$3,
	stats_professional_service: stats_professional_service$3,
	about_label: about_label$3,
	about_headline: about_headline$3,
	about_body: about_body$3,
	about_quote: about_quote$3,
	about_quote_body: about_quote_body$3,
	pillar_local_expertise_label: pillar_local_expertise_label$3,
	pillar_local_expertise_desc: pillar_local_expertise_desc$3,
	pillar_international_label: pillar_international_label$3,
	pillar_international_desc: pillar_international_desc$3,
	pillar_practical_label: pillar_practical_label$3,
	pillar_practical_desc: pillar_practical_desc$3,
	about_floating_title: about_floating_title$3,
	about_floating_sub: about_floating_sub$3,
	why_us_label: why_us_label$3,
	why_us_headline: why_us_headline$3,
	why_us: why_us$3,
	services_label: services_label$3,
	services_headline: services_headline$3,
	services_subheadline: services_subheadline$3,
	services_cta_text: services_cta_text$3,
	services_cta_button: services_cta_button$3,
	services: services$3,
	how_label: how_label$3,
	how_headline: how_headline$3,
	how_subheadline: how_subheadline$3,
	how_it_works: how_it_works$3,
	cta_headline: cta_headline$3,
	cta_body: cta_body$3,
	cta_button: cta_button$3,
	contact_label: contact_label$3,
	contact_headline: contact_headline$3,
	contact_body: contact_body$3,
	contact_email_label: contact_email_label$3,
	contact_phone_label: contact_phone_label$3,
	form_name: form_name$3,
	form_company: form_company$3,
	form_email: form_email$3,
	form_message: form_message$3,
	form_name_ph: form_name_ph$3,
	form_company_ph: form_company_ph$3,
	form_email_ph: form_email_ph$3,
	form_message_ph: form_message_ph$3,
	form_submit: form_submit$3,
	form_submitting: form_submitting$3,
	form_confidential: form_confidential$3,
	form_error: form_error$3,
	form_err_name: form_err_name$3,
	form_err_company: form_err_company$3,
	form_err_email: form_err_email$3,
	form_err_message: form_err_message$3,
	modal_title: modal_title$3,
	modal_body: modal_body$3,
	modal_done: modal_done$3,
	seo_title: seo_title$3,
	seo_description: seo_description$3,
	seo_og_title: seo_og_title$3,
	seo_og_description: seo_og_description$3,
	contact_email: contact_email$3,
	contact_phone: contact_phone$3,
	company_name: company_name$3,
	footer_tagline: footer_tagline$3
};

var nav_home$2 = "בית";
var nav_services$2 = "שירותים";
var nav_contact$2 = "צור קשר";
var cta_request_consultation$2 = "בקש ייעוץ";
var footer_navigate$2 = "ניווט";
var footer_contact$2 = "צור קשר";
var footer_rights$2 = "כל הזכויות שמורות.";
var footer_confidential$2 = "ייעוץ עסקי סודי ומקצועי";
var footer_made_by$2 = "דף הנחיתה נוצר על ידי";
var scroll$2 = "גלול";
var hero_headline$2 = "היכנסו לוונצואלה בביטחון. אנו מטפלים במורכבות.";
var hero_subheadline$2 = "מהקמת חברה ועמידה ברגולציה ועד ייצוג מקומי וגיוס כישרונות, אנו מספקים את המומחיות המקומית שחברות בינלאומיות זקוקות לה כדי לפעול בהצלחה בוונצואלה.";
var hero_cta_primary$2 = "בקש ייעוץ";
var hero_cta_secondary$2 = "חקור את שירותינו";
var stats_service_areas$2 = "תחומי שירות";
var stats_local_execution$2 = "ביצוע מקומי";
var stats_professional_service$2 = "שירות מקצועי";
var about_label$2 = "אודותינו";
var about_headline$2 = "השותף המהימן שלך בוונצואלה";
var about_body$2 = "אנו מספקים ייעוץ עסקי מעשי ותמיכה תפעולית לחברות זרות ומקומיות המנווטות בסביבה הרגולטורית של וונצואלה. המיקוד שלנו הוא ביצוע מעשי, עמידה בתקנות ופתרונות אמינים בשטח. מכניסה לשוק ועד פעילות שוטפת, אנו מתאמים כל שלב עם הרשויות והשותפים המקומיים.";
var about_quote$2 = "וונצואלה מורכבת. אנו הופכים אותה לניתנת לניהול.";
var about_quote_body$2 = "הגישה שלנו משלבת ידע מקומי עם תקנים מקצועיים בינלאומיים — ומבטיחה שהעסק שלך ייכנס ויפעל בביטחון.";
var pillar_local_expertise_label$2 = "מומחיות מקומית";
var pillar_local_expertise_desc$2 = "היכרות עמוקה עם הרגולציות, הרשויות ותרבות העסקים הוונצואלית.";
var pillar_international_label$2 = "סטנדרטים בינלאומיים";
var pillar_international_desc$2 = "שירות מקצועי, אמין וסודי שחברות גלובליות מצפות לו.";
var pillar_practical_label$2 = "ביצוע מעשי";
var pillar_practical_desc$2 = "לא רק ייעוץ — אנו מנהלים את התהליך מתחילה ועד סוף.";
var about_floating_title$2 = "בשטח";
var about_floating_sub$2 = "ביצוע מקומי. סטנדרטים בינלאומיים.";
var why_us_label$2 = "למה לבחור ב-VAS";
var why_us_headline$2 = "למה חברות בוחרות בנו";
var why_us$2 = [
	{
		icon: "🏛️",
		title: "מומחיות מקומית עם סטנדרטים בינלאומיים",
		description: "אנו משלבים ידע עמוק של הנוף הרגולטורי בוונצואלה עם שיטות עבודה מומלצות בינלאומיות. הצוות שלנו מבטיח שהפעילות שלך עומדת הן בדרישות המקומיות והן בציפיות הגלובליות."
	},
	{
		icon: "🤝",
		title: "תיאום ישיר עם הרשויות",
		description: "אנו מתקשרים ישירות עם גופים ממשלתיים, מרשמים וגופים רגולטוריים בשמך. הדבר מבטיח עיבוד מהיר יותר ופחות מכשולים בהקמת העסק שלך."
	},
	{
		icon: "✅",
		title: "ביצוע אמין ומעקב",
		description: "אנו מנהלים כל שלב מהגשה ועד אישור, ומשאירים אותך מעודכן לאורך כל הדרך. הגישה המעשית שלנו מבטיחה שלא מתפספס דבר."
	},
	{
		icon: "🔒",
		title: "שירות סודי ומקצועי",
		description: "אנו מטפלים בכל המעורבויות בסודיות קפדנית ומקצועיות. תוכניות העסק והפעילות שלך נשארות מאובטחות אצלנו."
	}
];
var services_label$2 = "השירותים שלנו";
var services_headline$2 = "תמיכה עסקית מקצה לקצה בוונצואלה";
var services_subheadline$2 = "מהגדרה ראשונית ועד פעילות שוטפת — אנו מכסים כל היבט של עשיית עסקים בוונצואלה.";
var services_cta_text$2 = "צריכים שירות שאינו מפורט כאן? אנו מטפלים בדרישות מותאמות אישית.";
var services_cta_button$2 = "דונו בצרכים שלכם";
var services$2 = [
	{
		title: "כניסה לשוק והקמת חברה",
		description: "התאגדות חברה, רישום בלשכת המסחר, עיבוד מספר זהות מס (RIF), רישום אצל רשויות המס והעבודה, ותמיכה בפתיחת חשבון בנק מקומי.",
		icon: "🏢"
	},
	{
		title: "ניהול היתרים ורגולציה",
		description: "רישיונות עסק עירוניים, היתרים ספציפיים לתעשייה, רישומים סניטריים, חידושים ומעקב עמידה בתקנות לשמירת הפעילות שלך מורשית לחלוטין.",
		icon: "📋"
	},
	{
		title: "תיאום משפטי",
		description: "תמיכה משפטית תאגידית, עריכת חוזים וסקירתם, ותיאום דיני עבודה דרך משרדי שותפים מהימנים.",
		icon: "⚖️"
	},
	{
		title: "ייצוג מקומי ותפעול שוטף",
		description: "שירותי כתובת פיסקלית, מינוי נציג משפטי מקומי, וטיפול בהודעות רשמיות עבור החברה שלך בוונצואלה.",
		icon: "📍"
	},
	{
		title: "נדל\"ן ותמיכה במעבר",
		description: "חיפוש משרדים ושטחי מסחר, הספקת מחסנים ומתקני תעשייה, ודיור למגורים למנהלים המתפנים לוונצואלה.",
		icon: "🏠"
	},
	{
		title: "חיפוש כישרונות ותמיכה בגיוס",
		description: "איתור כישרונות מקומיים, חיפוש מנהלים ותיאום גיוס לבניית הצוות שלך עם מקצוענים ונצואלים מוסמכים.",
		icon: "👥"
	}
];
var how_label$2 = "התהליך";
var how_headline$2 = "כיצד זה עובד";
var how_subheadline$2 = "גישה פשוטה ומובנית להפעלת העסק שלך בוונצואלה.";
var how_it_works$2 = [
	{
		step: 1,
		title: "ייעוץ ראשוני",
		description: "צרו איתנו קשר לדיון בצרכי העסק שלכם, לוחות הזמנים והיעדים לכניסה לוונצואלה או פעילות בה."
	},
	{
		step: 2,
		title: "אסטרטגיה ותכנון",
		description: "אנו מעריכים דרישות רגולטוריות, מזהים היתרים ורישומים נדרשים, ומפתחים תוכנית פעולה מותאמת לפעילות שלך."
	},
	{
		step: 3,
		title: "ביצוע ותיאום",
		description: "אנו מטפלים בהגשות, רישומים, היתרים ותיאום עם רשויות מקומיות ושותפים בשמך."
	},
	{
		step: 4,
		title: "תמיכה שוטפת",
		description: "אנו מספקים מעקב עמידה בתקנות, חידושים, ייצוג מקומי ותמיכה תפעולית בעת שהעסק שלך גדל."
	}
];
var cta_headline$2 = "מוכנים לפעול בוונצואלה?";
var cta_body$2 = "צרו איתנו קשר לדיון בצרכי העסק שלכם וללמוד כיצד אנו יכולים לעזור לכם לנווט בסביבה הרגולטורית של וונצואלה בביטחון.";
var cta_button$2 = "צרו קשר";
var contact_label$2 = "צרו קשר";
var contact_headline$2 = "צרו קשר";
var contact_body$2 = "מוכנים לחקור כיצד VAS יכולה לעזור לעסק שלכם להיכנס לוונצואלה או לפעול בה? פנו אלינו לייעוץ סודי.";
var contact_email_label$2 = "דוא\"ל";
var contact_phone_label$2 = "טלפון";
var form_name$2 = "שם מלא";
var form_company$2 = "חברה";
var form_email$2 = "כתובת דוא\"ל";
var form_message$2 = "כיצד נוכל לעזור?";
var form_name_ph$2 = "ישראל ישראלי";
var form_company_ph$2 = "שם החברה";
var form_email_ph$2 = "israel{'@'}company.com";
var form_message_ph$2 = "ספרו לנו על צרכי העסק שלכם בוונצואלה...";
var form_submit$2 = "שלח הודעה";
var form_submitting$2 = "שולח...";
var form_confidential$2 = "כל הפניות מטופלות בסודיות קפדנית.";
var form_error$2 = "משהו השתבש. אנא נסו שוב.";
var form_err_name$2 = "אנא הכניסו את שמכם המלא.";
var form_err_company$2 = "אנא הכניסו את שם החברה שלכם.";
var form_err_email$2 = "אנא הכניסו כתובת דוא\"ל תקינה.";
var form_err_message$2 = "אנא תארו את הצרכים שלכם (לפחות 10 תווים).";
var modal_title$2 = "ההודעה נשלחה";
var modal_body$2 = "תודה שפנית אלינו. נסקור את פנייתך ונחזור אליך בקרוב — כל תקשורת מטופלת בסודיות קפדנית.";
var modal_done$2 = "סיום";
var seo_title$2 = "Venezuela Advisory Services — כניסה לשוק וייעוץ עסקי";
var seo_description$2 = "עוזרים לחברות להיכנס לוונצואלה ולפעול בה. כניסה לשוק, תמיכה רגולטורית, היתרים ורישיונות, ייצוג מקומי, נדל\"ן וגיוס כישרונות.";
var seo_og_title$2 = "Venezuela Advisory Services";
var seo_og_description$2 = "השותף המהימן שלך לעשיית עסקים בוונצואלה.";
var contact_email$2 = "info{'@'}venezuela-advisory.com";
var contact_phone$2 = "+58 212 5644313 / 5643321";
var company_name$2 = "Venezuela Advisory";
var footer_tagline$2 = "השותף המהימן שלך לפעילות עסקית בוונצואלה";
const locale_he_46json_669c5187 = {
	nav_home: nav_home$2,
	nav_services: nav_services$2,
	nav_contact: nav_contact$2,
	cta_request_consultation: cta_request_consultation$2,
	footer_navigate: footer_navigate$2,
	footer_contact: footer_contact$2,
	footer_rights: footer_rights$2,
	footer_confidential: footer_confidential$2,
	footer_made_by: footer_made_by$2,
	scroll: scroll$2,
	hero_headline: hero_headline$2,
	hero_subheadline: hero_subheadline$2,
	hero_cta_primary: hero_cta_primary$2,
	hero_cta_secondary: hero_cta_secondary$2,
	stats_service_areas: stats_service_areas$2,
	stats_local_execution: stats_local_execution$2,
	stats_professional_service: stats_professional_service$2,
	about_label: about_label$2,
	about_headline: about_headline$2,
	about_body: about_body$2,
	about_quote: about_quote$2,
	about_quote_body: about_quote_body$2,
	pillar_local_expertise_label: pillar_local_expertise_label$2,
	pillar_local_expertise_desc: pillar_local_expertise_desc$2,
	pillar_international_label: pillar_international_label$2,
	pillar_international_desc: pillar_international_desc$2,
	pillar_practical_label: pillar_practical_label$2,
	pillar_practical_desc: pillar_practical_desc$2,
	about_floating_title: about_floating_title$2,
	about_floating_sub: about_floating_sub$2,
	why_us_label: why_us_label$2,
	why_us_headline: why_us_headline$2,
	why_us: why_us$2,
	services_label: services_label$2,
	services_headline: services_headline$2,
	services_subheadline: services_subheadline$2,
	services_cta_text: services_cta_text$2,
	services_cta_button: services_cta_button$2,
	services: services$2,
	how_label: how_label$2,
	how_headline: how_headline$2,
	how_subheadline: how_subheadline$2,
	how_it_works: how_it_works$2,
	cta_headline: cta_headline$2,
	cta_body: cta_body$2,
	cta_button: cta_button$2,
	contact_label: contact_label$2,
	contact_headline: contact_headline$2,
	contact_body: contact_body$2,
	contact_email_label: contact_email_label$2,
	contact_phone_label: contact_phone_label$2,
	form_name: form_name$2,
	form_company: form_company$2,
	form_email: form_email$2,
	form_message: form_message$2,
	form_name_ph: form_name_ph$2,
	form_company_ph: form_company_ph$2,
	form_email_ph: form_email_ph$2,
	form_message_ph: form_message_ph$2,
	form_submit: form_submit$2,
	form_submitting: form_submitting$2,
	form_confidential: form_confidential$2,
	form_error: form_error$2,
	form_err_name: form_err_name$2,
	form_err_company: form_err_company$2,
	form_err_email: form_err_email$2,
	form_err_message: form_err_message$2,
	modal_title: modal_title$2,
	modal_body: modal_body$2,
	modal_done: modal_done$2,
	seo_title: seo_title$2,
	seo_description: seo_description$2,
	seo_og_title: seo_og_title$2,
	seo_og_description: seo_og_description$2,
	contact_email: contact_email$2,
	contact_phone: contact_phone$2,
	company_name: company_name$2,
	footer_tagline: footer_tagline$2
};

var nav_home$1 = "首頁";
var nav_services$1 = "服務";
var nav_contact$1 = "聯絡我們";
var cta_request_consultation$1 = "申請諮詢";
var footer_navigate$1 = "導航";
var footer_contact$1 = "聯絡";
var footer_rights$1 = "版權所有。";
var footer_confidential$1 = "機密且專業的商業諮詢";
var footer_made_by$1 = "登陸頁由以下製作";
var scroll$1 = "滾動";
var hero_headline$1 = "自信進入委內瑞拉市場。由我們處理複雜事務。";
var hero_subheadline$1 = "從公司設立和法規遵循到本地代理和人才引進，我們提供國際企業在委內瑞拉成功運營所需的本地專業知識。";
var hero_cta_primary$1 = "申請諮詢";
var hero_cta_secondary$1 = "探索我們的服務";
var stats_service_areas$1 = "服務領域";
var stats_local_execution$1 = "本地執行";
var stats_professional_service$1 = "專業服務";
var about_label$1 = "關於我們";
var about_headline$1 = "您在委內瑞拉的可信合作夥伴";
var about_body$1 = "我們為在委內瑞拉監管環境中運作的外資及本地企業提供實務商業諮詢及營運支援。我們專注於實際執行、法規遵循和可靠的本地解決方案。從市場進入到持續運營，我們與本地主管機關和合作夥伴協調每一個步驟。";
var about_quote$1 = "委內瑞拉複雜多變。我們讓它變得可以掌控。";
var about_quote_body$1 = "我們的方法結合本地知識與國際專業標準——確保您的業務能夠自信地進入並運營。";
var pillar_local_expertise_label$1 = "本地專業知識";
var pillar_local_expertise_desc$1 = "深入了解委內瑞拉的法規、主管機關和商業文化。";
var pillar_international_label$1 = "國際標準";
var pillar_international_desc$1 = "全球企業期望的專業、可靠且保密的服務。";
var pillar_practical_label$1 = "實務執行";
var pillar_practical_desc$1 = "不僅是建議——我們從頭到尾管理整個流程。";
var about_floating_title$1 = "深入現場";
var about_floating_sub$1 = "本地執行。國際標準。";
var why_us_label$1 = "為什麼選擇VAS";
var why_us_headline$1 = "企業選擇我們的原因";
var why_us$1 = [
	{
		icon: "🏛️",
		title: "具備國際標準的本地專業知識",
		description: "我們將委內瑞拉監管環境的深度知識與國際最佳實踐相結合。我們的團隊確保您的業務同時符合本地要求和全球期望。"
	},
	{
		icon: "🤝",
		title: "直接與主管機關協調",
		description: "我們代表您直接與政府機關、登記處和監管機構聯繫。這確保了更快速的處理和在業務設立中更少的障礙。"
	},
	{
		icon: "✅",
		title: "可靠的執行和跟進",
		description: "我們管理從申報到批准的每一個步驟，全程讓您保持知情。我們的實務方法確保沒有任何事情被遺漏。"
	},
	{
		icon: "🔒",
		title: "保密且專業的服務",
		description: "我們以嚴格的保密性和專業性處理所有業務。您的商業計劃和業務在我們這裡保持安全。"
	}
];
var services_label$1 = "我們的服務";
var services_headline$1 = "委內瑞拉端到端商業支援";
var services_subheadline$1 = "從初始設置到持續運營——我們涵蓋在委內瑞拉做生意的各個方面。";
var services_cta_text$1 = "需要此處未列出的服務？我們處理客製化需求。";
var services_cta_button$1 = "討論您的需求";
var services$1 = [
	{
		title: "市場進入與公司設立",
		description: "公司設立、商業登記、稅務識別號碼（RIF）處理、向稅務和勞工主管機關登記，以及本地銀行帳戶開設協助。",
		icon: "🏢"
	},
	{
		title: "許可證與法規管理",
		description: "市政商業執照、特定行業許可證、衛生登記、更新和法規遵循跟進，以保持您的業務完全獲得授權。",
		icon: "📋"
	},
	{
		title: "法律協調",
		description: "公司法律支援、合約起草和審查，以及通過可信合作律師事務所進行勞動法協調。",
		icon: "⚖️"
	},
	{
		title: "本地代理與後台辦公",
		description: "財政地址服務、本地法定代理人任命，以及您在委內瑞拉公司的官方通知處理。",
		icon: "📍"
	},
	{
		title: "房地產與遷移支援",
		description: "辦公室和商業空間搜索、倉庫和工業設施採購，以及遷至委內瑞拉高管的住宅住房。",
		icon: "🏠"
	},
	{
		title: "人才搜索與招聘支援",
		description: "本地人才招募、高管搜尋和招聘協調，以具備資格的委內瑞拉專業人才組建您的團隊。",
		icon: "👥"
	}
];
var how_label$1 = "流程說明";
var how_headline$1 = "運作方式";
var how_subheadline$1 = "讓您的業務在委內瑞拉正式運營的簡單結構化方法。";
var how_it_works$1 = [
	{
		step: 1,
		title: "初步諮詢",
		description: "聯繫我們，討論您的業務需求、時間表和在委內瑞拉進入或運營的目標。"
	},
	{
		step: 2,
		title: "策略與規劃",
		description: "我們評估監管要求，識別必要的許可證和登記，並為您的業務制定量身定制的行動計劃。"
	},
	{
		step: 3,
		title: "執行與協調",
		description: "我們代表您處理申報、登記、許可證以及與本地主管機關和合作夥伴的協調。"
	},
	{
		step: 4,
		title: "持續支援",
		description: "隨著您的業務增長，我們提供持續的法規遵循跟蹤、更新、本地代理和運營支援。"
	}
];
var cta_headline$1 = "準備好在委內瑞拉運營了嗎？";
var cta_body$1 = "聯繫我們討論您的業務需求，了解我們如何幫助您自信地駕馭委內瑞拉的監管環境。";
var cta_button$1 = "立即聯繫";
var contact_label$1 = "聯絡我們";
var contact_headline$1 = "取得聯繫";
var contact_body$1 = "準備好探索VAS如何幫助您的業務進入或在委內瑞拉運營了嗎？聯繫我們進行機密諮詢。";
var contact_email_label$1 = "電子郵件";
var contact_phone_label$1 = "電話";
var form_name$1 = "全名";
var form_company$1 = "公司";
var form_email$1 = "電子郵件地址";
var form_message$1 = "我們如何能為您提供協助？";
var form_name_ph$1 = "王大明";
var form_company_ph$1 = "公司名稱";
var form_email_ph$1 = "wang{'@'}company.com";
var form_message_ph$1 = "請告訴我們您在委內瑞拉的業務需求...";
var form_submit$1 = "發送訊息";
var form_submitting$1 = "發送中...";
var form_confidential$1 = "所有查詢均以嚴格保密方式處理。";
var form_error$1 = "出現問題，請再試一次。";
var form_err_name$1 = "請輸入您的全名。";
var form_err_company$1 = "請輸入您的公司名稱。";
var form_err_email$1 = "請輸入有效的電子郵件地址。";
var form_err_message$1 = "請描述您的需求（至少10個字元）。";
var modal_title$1 = "訊息已發送";
var modal_body$1 = "感謝您的聯繫。我們將審查您的詢問並儘快回覆您——所有通訊均以嚴格保密方式處理。";
var modal_done$1 = "完成";
var seo_title$1 = "Venezuela Advisory Services — 市場進入與商業諮詢";
var seo_description$1 = "協助企業進入並在委內瑞拉運營。市場進入、監管支援、許可證與執照、本地代理、房地產和人才招募。";
var seo_og_title$1 = "Venezuela Advisory Services";
var seo_og_description$1 = "您在委內瑞拉做生意的可信合作夥伴。";
var contact_email$1 = "info{'@'}venezuela-advisory.com";
var contact_phone$1 = "+58 212 5644313 / 5643321";
var company_name$1 = "Venezuela Advisory";
var footer_tagline$1 = "您在委內瑞拉業務運營的可信合作夥伴";
const locale_zh_45TW_46json_9d6a2e18 = {
	nav_home: nav_home$1,
	nav_services: nav_services$1,
	nav_contact: nav_contact$1,
	cta_request_consultation: cta_request_consultation$1,
	footer_navigate: footer_navigate$1,
	footer_contact: footer_contact$1,
	footer_rights: footer_rights$1,
	footer_confidential: footer_confidential$1,
	footer_made_by: footer_made_by$1,
	scroll: scroll$1,
	hero_headline: hero_headline$1,
	hero_subheadline: hero_subheadline$1,
	hero_cta_primary: hero_cta_primary$1,
	hero_cta_secondary: hero_cta_secondary$1,
	stats_service_areas: stats_service_areas$1,
	stats_local_execution: stats_local_execution$1,
	stats_professional_service: stats_professional_service$1,
	about_label: about_label$1,
	about_headline: about_headline$1,
	about_body: about_body$1,
	about_quote: about_quote$1,
	about_quote_body: about_quote_body$1,
	pillar_local_expertise_label: pillar_local_expertise_label$1,
	pillar_local_expertise_desc: pillar_local_expertise_desc$1,
	pillar_international_label: pillar_international_label$1,
	pillar_international_desc: pillar_international_desc$1,
	pillar_practical_label: pillar_practical_label$1,
	pillar_practical_desc: pillar_practical_desc$1,
	about_floating_title: about_floating_title$1,
	about_floating_sub: about_floating_sub$1,
	why_us_label: why_us_label$1,
	why_us_headline: why_us_headline$1,
	why_us: why_us$1,
	services_label: services_label$1,
	services_headline: services_headline$1,
	services_subheadline: services_subheadline$1,
	services_cta_text: services_cta_text$1,
	services_cta_button: services_cta_button$1,
	services: services$1,
	how_label: how_label$1,
	how_headline: how_headline$1,
	how_subheadline: how_subheadline$1,
	how_it_works: how_it_works$1,
	cta_headline: cta_headline$1,
	cta_body: cta_body$1,
	cta_button: cta_button$1,
	contact_label: contact_label$1,
	contact_headline: contact_headline$1,
	contact_body: contact_body$1,
	contact_email_label: contact_email_label$1,
	contact_phone_label: contact_phone_label$1,
	form_name: form_name$1,
	form_company: form_company$1,
	form_email: form_email$1,
	form_message: form_message$1,
	form_name_ph: form_name_ph$1,
	form_company_ph: form_company_ph$1,
	form_email_ph: form_email_ph$1,
	form_message_ph: form_message_ph$1,
	form_submit: form_submit$1,
	form_submitting: form_submitting$1,
	form_confidential: form_confidential$1,
	form_error: form_error$1,
	form_err_name: form_err_name$1,
	form_err_company: form_err_company$1,
	form_err_email: form_err_email$1,
	form_err_message: form_err_message$1,
	modal_title: modal_title$1,
	modal_body: modal_body$1,
	modal_done: modal_done$1,
	seo_title: seo_title$1,
	seo_description: seo_description$1,
	seo_og_title: seo_og_title$1,
	seo_og_description: seo_og_description$1,
	contact_email: contact_email$1,
	contact_phone: contact_phone$1,
	company_name: company_name$1,
	footer_tagline: footer_tagline$1
};

var nav_home = "Ana Sayfa";
var nav_services = "Hizmetler";
var nav_contact = "İletişim";
var cta_request_consultation = "Danışma Talep Et";
var footer_navigate = "Gezinme";
var footer_contact = "İletişim";
var footer_rights = "Tüm hakları saklıdır.";
var footer_confidential = "Gizli ve Profesyonel İş Danışmanlığı";
var footer_made_by = "Açılış sayfası yapıldı";
var scroll = "Kaydır";
var hero_headline = "Venezuela'ya Güvenle Girin. Karmaşıklığı Biz Yönetiriz.";
var hero_subheadline = "Şirket kuruluşu ve mevzuat uyumundan yerel temsilcilik ve yetenek istihdamına kadar, uluslararası şirketlerin Venezuela'da başarıyla faaliyet göstermesi için ihtiyaç duydukları yerinde uzmanlığı sunuyoruz.";
var hero_cta_primary = "Danışma Talep Et";
var hero_cta_secondary = "Hizmetlerimizi Keşfedin";
var stats_service_areas = "Hizmet Alanları";
var stats_local_execution = "Yerel Uygulama";
var stats_professional_service = "Profesyonel Hizmet";
var about_label = "Hakkımızda";
var about_headline = "Venezuela'da Güvenilir Ortağınız";
var about_body = "Venezuela'nın düzenleyici ortamında faaliyet gösteren yabancı ve yerel şirketler için uygulamalı iş danışmanlığı ve operasyonel destek sunuyoruz. Odak noktamız pratik uygulama, uyumluluk ve güvenilir yerinde çözümlerdir. Piyasaya girişten süregelen operasyonlara kadar her adımı yerel makamlar ve ortaklarla koordine ediyoruz.";
var about_quote = "Venezuela karmaşıktır. Biz onu yönetilebilir kılıyoruz.";
var about_quote_body = "Yaklaşımımız yerel bilgiyi uluslararası profesyonel standartlarla birleştirir — işletmenizin güvenle girmesini ve faaliyet göstermesini sağlar.";
var pillar_local_expertise_label = "Yerel Uzmanlık";
var pillar_local_expertise_desc = "Venezuela'nın düzenlemeleri, makamları ve iş kültürüne derin aşinalık.";
var pillar_international_label = "Uluslararası Standartlar";
var pillar_international_desc = "Küresel şirketlerin beklediği profesyonel, güvenilir ve gizli hizmet.";
var pillar_practical_label = "Pratik Uygulama";
var pillar_practical_desc = "Sadece tavsiye değil — süreci başından sonuna kadar biz yönetiyoruz.";
var about_floating_title = "Yerinde";
var about_floating_sub = "Yerel uygulama. Uluslararası standartlar.";
var why_us_label = "Neden VAS";
var why_us_headline = "Şirketler Neden Bizi Tercih Ediyor";
var why_us = [
	{
		icon: "🏛️",
		title: "Uluslararası Standartlara Sahip Yerel Uzmanlık",
		description: "Venezuela'nın düzenleyici ortamına derin bilgiyi uluslararası en iyi uygulamalarla birleştiriyoruz. Ekibimiz operasyonlarınızın hem yerel gereksinimleri hem de küresel beklentileri karşılamasını sağlar."
	},
	{
		icon: "🤝",
		title: "Makamlarla Doğrudan Koordinasyon",
		description: "Sizin adınıza devlet kurumları, siciller ve düzenleyici kurumlarla doğrudan iletişim kuruyoruz. Bu, iş kurulum sürecinde daha hızlı işlem ve daha az engel sağlar."
	},
	{
		icon: "✅",
		title: "Güvenilir Uygulama ve Takip",
		description: "Başvurudan onaya kadar her adımı yönetiyor, sizi süreç boyunca bilgilendiriyoruz. Uygulamalı yaklaşımımız hiçbir şeyin gözden kaçmamasını sağlar."
	},
	{
		icon: "🔒",
		title: "Gizli ve Profesyonel Hizmet",
		description: "Tüm görevlendirmeleri sıkı gizlilik ve profesyonellikle yürütüyoruz. İş planlarınız ve operasyonlarınız bizimle güvende kalır."
	}
];
var services_label = "Hizmetlerimiz";
var services_headline = "Venezuela'da Uçtan Uca İş Desteği";
var services_subheadline = "İlk kurulumdan süregelen operasyonlara kadar — Venezuela'da iş yapmanın her yönünü kapsıyoruz.";
var services_cta_text = "Burada listelenmeyen bir hizmete mi ihtiyacınız var? Özel gereksinimleri biz karşılıyoruz.";
var services_cta_button = "İhtiyaçlarınızı Görüşün";
var services = [
	{
		title: "Piyasaya Giriş ve Şirket Kuruluşu",
		description: "Şirket tescili, ticaret sicili kaydı, Vergi Kimlik Numarası (RIF) işlemleri, vergi ve işgücü makamlarına kayıt ve yerel banka hesabı açılmasında destek.",
		icon: "🏢"
	},
	{
		title: "İzinler ve Düzenleyici Yönetim",
		description: "Belediye işletme lisansları, sektöre özel izinler, sağlık kayıtları, yenilemeler ve operasyonlarınızı tamamen yetkilendirilmiş tutmak için uyumluluk takibi.",
		icon: "📋"
	},
	{
		title: "Hukuki Koordinasyon",
		description: "Güvenilir ortak firmalar aracılığıyla kurumsal hukuki destek, sözleşme taslağı hazırlama ve inceleme ve iş hukuku koordinasyonu.",
		icon: "⚖️"
	},
	{
		title: "Yerel Temsil ve Arka Ofis",
		description: "Vergi adresi hizmetleri, yerel yasal temsilci atanması ve Venezuela'daki şirketiniz için resmi bildirim yönetimi.",
		icon: "📍"
	},
	{
		title: "Gayrimenkul ve Taşınma Desteği",
		description: "Ofis ve ticari alan arayışı, depo ve endüstriyel tesis tedariki ve Venezuela'ya taşınan yöneticiler için konut.",
		icon: "🏠"
	},
	{
		title: "Yetenek Arayışı ve İşe Alım Desteği",
		description: "Nitelikli Venezuelalı profesyonellerle ekibinizi oluşturmak için yerel yetenek tedariki, yönetici arayışı ve işe alım koordinasyonu.",
		icon: "👥"
	}
];
var how_label = "Süreç";
var how_headline = "Nasıl Çalışır";
var how_subheadline = "Venezuela'da işletmenizi faaliyete geçirmek için basit, yapılandırılmış bir yaklaşım.";
var how_it_works = [
	{
		step: 1,
		title: "İlk Danışma",
		description: "Venezuela'ya giriş veya orada faaliyet gösterme konusundaki iş ihtiyaçlarınızı, zaman çizelgenizi ve hedeflerinizi görüşmek için bizimle iletişime geçin."
	},
	{
		step: 2,
		title: "Strateji ve Planlama",
		description: "Düzenleyici gereksinimleri değerlendiriyor, gerekli izin ve kayıtları belirliyor ve operasyonunuz için özel bir eylem planı geliştiriyoruz."
	},
	{
		step: 3,
		title: "Uygulama ve Koordinasyon",
		description: "Başvurular, kayıtlar, izinler ve yerel makamlar ve ortaklarla koordinasyonu sizin adınıza yürütüyoruz."
	},
	{
		step: 4,
		title: "Süregelen Destek",
		description: "İşletmeniz büyüdükçe sürekli uyumluluk takibi, yenilemeler, yerel temsil ve operasyonel destek sağlıyoruz."
	}
];
var cta_headline = "Venezuela'da Faaliyet Göstermeye Hazır mısınız?";
var cta_body = "İş ihtiyaçlarınızı görüşmek ve Venezuela'nın düzenleyici ortamında güvenle nasıl yol alabileceğinizi öğrenmek için bizimle iletişime geçin.";
var cta_button = "İletişime Geçin";
var contact_label = "İletişim";
var contact_headline = "İletişime Geçin";
var contact_body = "VAS'ın işletmenizin Venezuela'ya girmesine veya orada faaliyet göstermesine nasıl yardımcı olabileceğini keşfetmeye hazır mısınız? Gizli bir danışma için bize ulaşın.";
var contact_email_label = "E-posta";
var contact_phone_label = "Telefon";
var form_name = "Ad Soyad";
var form_company = "Şirket";
var form_email = "E-posta Adresi";
var form_message = "Nasıl yardımcı olabiliriz?";
var form_name_ph = "Ahmet Yılmaz";
var form_company_ph = "Şirket Adı";
var form_email_ph = "ahmet{'@'}sirket.com";
var form_message_ph = "Venezuela'daki iş ihtiyaçlarınızı bize anlatın...";
var form_submit = "Mesaj Gönder";
var form_submitting = "Gönderiliyor...";
var form_confidential = "Tüm sorgular sıkı gizlilikle işlenir.";
var form_error = "Bir şeyler ters gitti. Lütfen tekrar deneyin.";
var form_err_name = "Lütfen adınızı ve soyadınızı girin.";
var form_err_company = "Lütfen şirket adınızı girin.";
var form_err_email = "Lütfen geçerli bir e-posta adresi girin.";
var form_err_message = "Lütfen ihtiyaçlarınızı açıklayın (en az 10 karakter).";
var modal_title = "Mesaj Gönderildi";
var modal_body = "Bize ulaştığınız için teşekkür ederiz. Talebinizi inceleyip kısa süre içinde size geri döneceğiz — tüm iletişim sıkı gizlilikle yürütülmektedir.";
var modal_done = "Tamam";
var seo_title = "Venezuela Danışmanlık Hizmetleri — Piyasaya Giriş ve İş Danışmanlığı";
var seo_description = "Şirketlerin Venezuela'ya girmesine ve orada faaliyet göstermesine yardımcı oluyoruz. Piyasaya giriş, düzenleyici destek, izinler ve lisanslar, yerel temsil, gayrimenkul ve yetenek tedariki.";
var seo_og_title = "Venezuela Danışmanlık Hizmetleri";
var seo_og_description = "Venezuela'da iş yapmak için güvenilir ortağınız.";
var contact_email = "info{'@'}venezuela-advisory.com";
var contact_phone = "+58 212 5644313 / 5643321";
var company_name = "Venezuela Advisory";
var footer_tagline = "Venezuela'da İş Operasyonları için Güvenilir Ortağınız";
const locale_tr_46json_99232a3d = {
	nav_home: nav_home,
	nav_services: nav_services,
	nav_contact: nav_contact,
	cta_request_consultation: cta_request_consultation,
	footer_navigate: footer_navigate,
	footer_contact: footer_contact,
	footer_rights: footer_rights,
	footer_confidential: footer_confidential,
	footer_made_by: footer_made_by,
	scroll: scroll,
	hero_headline: hero_headline,
	hero_subheadline: hero_subheadline,
	hero_cta_primary: hero_cta_primary,
	hero_cta_secondary: hero_cta_secondary,
	stats_service_areas: stats_service_areas,
	stats_local_execution: stats_local_execution,
	stats_professional_service: stats_professional_service,
	about_label: about_label,
	about_headline: about_headline,
	about_body: about_body,
	about_quote: about_quote,
	about_quote_body: about_quote_body,
	pillar_local_expertise_label: pillar_local_expertise_label,
	pillar_local_expertise_desc: pillar_local_expertise_desc,
	pillar_international_label: pillar_international_label,
	pillar_international_desc: pillar_international_desc,
	pillar_practical_label: pillar_practical_label,
	pillar_practical_desc: pillar_practical_desc,
	about_floating_title: about_floating_title,
	about_floating_sub: about_floating_sub,
	why_us_label: why_us_label,
	why_us_headline: why_us_headline,
	why_us: why_us,
	services_label: services_label,
	services_headline: services_headline,
	services_subheadline: services_subheadline,
	services_cta_text: services_cta_text,
	services_cta_button: services_cta_button,
	services: services,
	how_label: how_label,
	how_headline: how_headline,
	how_subheadline: how_subheadline,
	how_it_works: how_it_works,
	cta_headline: cta_headline,
	cta_body: cta_body,
	cta_button: cta_button,
	contact_label: contact_label,
	contact_headline: contact_headline,
	contact_body: contact_body,
	contact_email_label: contact_email_label,
	contact_phone_label: contact_phone_label,
	form_name: form_name,
	form_company: form_company,
	form_email: form_email,
	form_message: form_message,
	form_name_ph: form_name_ph,
	form_company_ph: form_company_ph,
	form_email_ph: form_email_ph,
	form_message_ph: form_message_ph,
	form_submit: form_submit,
	form_submitting: form_submitting,
	form_confidential: form_confidential,
	form_error: form_error,
	form_err_name: form_err_name,
	form_err_company: form_err_company,
	form_err_email: form_err_email,
	form_err_message: form_err_message,
	modal_title: modal_title,
	modal_body: modal_body,
	modal_done: modal_done,
	seo_title: seo_title,
	seo_description: seo_description,
	seo_og_title: seo_og_title,
	seo_og_description: seo_og_description,
	contact_email: contact_email,
	contact_phone: contact_phone,
	company_name: company_name,
	footer_tagline: footer_tagline
};

// @ts-nocheck
const localeCodes =  [
  "en",
  "es",
  "fr",
  "de",
  "he",
  "zh-TW",
  "tr"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_f7ad1dff",
      load: () => Promise.resolve(locale_en_46json_f7ad1dff),
      cache: true
    }
  ],
  es: [
    {
      key: "locale_es_46json_755fd8a8",
      load: () => Promise.resolve(locale_es_46json_755fd8a8),
      cache: true
    }
  ],
  fr: [
    {
      key: "locale_fr_46json_b42475c1",
      load: () => Promise.resolve(locale_fr_46json_b42475c1),
      cache: true
    }
  ],
  de: [
    {
      key: "locale_de_46json_56947012",
      load: () => Promise.resolve(locale_de_46json_56947012),
      cache: true
    }
  ],
  he: [
    {
      key: "locale_he_46json_669c5187",
      load: () => Promise.resolve(locale_he_46json_669c5187),
      cache: true
    }
  ],
  "zh-TW": [
    {
      key: "locale_zh_45TW_46json_9d6a2e18",
      load: () => Promise.resolve(locale_zh_45TW_46json_9d6a2e18),
      cache: true
    }
  ],
  tr: [
    {
      key: "locale_tr_46json_99232a3d",
      load: () => Promise.resolve(locale_tr_46json_99232a3d),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    name: "English",
    language: undefined
  },
  {
    code: "es",
    name: "Español",
    language: undefined
  },
  {
    code: "fr",
    name: "Français",
    language: undefined
  },
  {
    code: "de",
    name: "Deutsch",
    language: undefined
  },
  {
    code: "he",
    name: "עברית",
    dir: "rtl",
    language: undefined
  },
  {
    code: "zh-TW",
    name: "中文（繁）",
    language: undefined
  },
  {
    code: "tr",
    name: "Türkçe",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"rel":"icon","type":"image/svg+xml","href":"/logo-icon.svg"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {};
const i18nPathToPath = {};

const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return withLeadingSlash(joinURL("", match.path));
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _c_PqpbvaEYXIMS0Aa_lsHbxqRFGBARq3xeIPg1FNs = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "no_prefix" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = !event.context.nuxtI18n ? await initializeI18nContext(event) : useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/9PYTRecF") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const plugins = [
  _c_PqpbvaEYXIMS0Aa_lsHbxqRFGBARq3xeIPg1FNs
];

const assets = {
  "/logo-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"32a-yZUGt3CILMhG3Ibh65Omd2hs76c\"",
    "mtime": "2026-02-23T14:09:38.626Z",
    "size": 810,
    "path": "../../.output/public/logo-icon.svg"
  },
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f1b8-uFEaA7vShJUPrntKo/9J9NR8O0c\"",
    "mtime": "2026-02-23T14:09:38.580Z",
    "size": 61880,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f1b8-uFEaA7vShJUPrntKo/9J9NR8O0c\"",
    "mtime": "2026-02-23T14:09:38.580Z",
    "size": 61880,
    "path": "../../.output/public/404.html"
  },
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"45-ctZZMb2pa/kSPDxqrieEpEAB1O8\"",
    "mtime": "2026-02-23T14:09:38.590Z",
    "size": 69,
    "path": "../../.output/public/_payload.json"
  },
  "/logo-primary.svg": {
    "type": "image/svg+xml",
    "etag": "\"2844-ks3uKL3+L5v3Rc0y+LC89vPQAPk\"",
    "mtime": "2026-02-23T14:09:38.626Z",
    "size": 10308,
    "path": "../../.output/public/logo-primary.svg"
  },
  "/novanet-logo-2025.svg": {
    "type": "image/svg+xml",
    "etag": "\"ac6-E0mRmFrvG/ldEVX0mV4wly5GpKM\"",
    "mtime": "2026-02-23T14:09:38.626Z",
    "size": 2758,
    "path": "../../.output/public/novanet-logo-2025.svg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"4f-XVT1LqTc3J8L4gGHyo6dMHSJcoI\"",
    "mtime": "2026-02-23T14:09:38.626Z",
    "size": 79,
    "path": "../../.output/public/robots.txt"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1640b-Y+4GCfz9zaTWl6yA8ieOY86UeRA\"",
    "mtime": "2026-02-23T14:09:38.583Z",
    "size": 91147,
    "path": "../../.output/public/index.html"
  },
  "/_fonts/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi-q4zBeV1IkB.woff2": {
    "type": "font/woff2",
    "etag": "\"5f5c-V2g2UZSv08cs68dXB2poD+l713M\"",
    "mtime": "2026-02-23T14:09:38.619Z",
    "size": 24412,
    "path": "../../.output/public/_fonts/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi-q4zBeV1IkB.woff2"
  },
  "/_fonts/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi-k2WqQjY0kt.woff2": {
    "type": "font/woff2",
    "etag": "\"2cd0-dXnty02OFl44obzDVntnflxXF9g\"",
    "mtime": "2026-02-23T14:09:38.619Z",
    "size": 11472,
    "path": "../../.output/public/_fonts/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi-k2WqQjY0kt.woff2"
  },
  "/_fonts/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi-rYj8wLpElt.woff2": {
    "type": "font/woff2",
    "etag": "\"11b04-UcIO5QT4yJV29GMJwzsgA5dNOok\"",
    "mtime": "2026-02-23T14:09:38.619Z",
    "size": 72452,
    "path": "../../.output/public/_fonts/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi-rYj8wLpElt.woff2"
  },
  "/_fonts/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi-jJK1UGOcIn.woff2": {
    "type": "font/woff2",
    "etag": "\"56d0-0rCf1XkiG94FdDh4lvFF3xo14zw\"",
    "mtime": "2026-02-23T14:09:38.619Z",
    "size": 22224,
    "path": "../../.output/public/_fonts/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi-jJK1UGOcIn.woff2"
  },
  "/_fonts/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ-ARwkHo0cPP.woff2": {
    "type": "font/woff2",
    "etag": "\"53f4-xH5kk8S517jMUd3AoIf6iXe2mD8\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 21492,
    "path": "../../.output/public/_fonts/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ-ARwkHo0cPP.woff2"
  },
  "/_fonts/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ-209xZCjqgx.woff2": {
    "type": "font/woff2",
    "etag": "\"5e08-GgYJoVx4K95to3MuCZ/UqPjvotI\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 24072,
    "path": "../../.output/public/_fonts/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ-209xZCjqgx.woff2"
  },
  "/_fonts/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ-H6Cn7UXXW4.woff2": {
    "type": "font/woff2",
    "etag": "\"297c-xQzg/9K7JnQi6KX/KSly177MT6Y\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 10620,
    "path": "../../.output/public/_fonts/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ-H6Cn7UXXW4.woff2"
  },
  "/_fonts/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA-MFc2eeBED5.woff2": {
    "type": "font/woff2",
    "etag": "\"9100-ZJdHfxS3JRUh43ACOvnZy8hg7gs\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 37120,
    "path": "../../.output/public/_fonts/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA-MFc2eeBED5.woff2"
  },
  "/_fonts/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ-bD8JI5cQ43.woff2": {
    "type": "font/woff2",
    "etag": "\"10a80-wz+Iv3fkQfHOyTWB9c05VA7SEjI\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 68224,
    "path": "../../.output/public/_fonts/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ-bD8JI5cQ43.woff2"
  },
  "/_fonts/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y-faOZacC1kw.woff2": {
    "type": "font/woff2",
    "etag": "\"8ab4-tnEd7LoNVxtTjKAd6KbnCuTSGa8\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 35508,
    "path": "../../.output/public/_fonts/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y-faOZacC1kw.woff2"
  },
  "/_fonts/fonts.gstatic-16dGDHNppr.woff": {
    "type": "font/woff",
    "etag": "\"13648-/9erHNpyOA36nsqGIOHcXUuDY7A\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 79432,
    "path": "../../.output/public/_fonts/fonts.gstatic-16dGDHNppr.woff"
  },
  "/_fonts/fonts.gstatic-2FfwDva7qD.woff": {
    "type": "font/woff",
    "etag": "\"70a4-WI9vXZEyLs38ZTHN1ENtMmzcNWo\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 28836,
    "path": "../../.output/public/_fonts/fonts.gstatic-2FfwDva7qD.woff"
  },
  "/_fonts/fonts.gstatic-7r8RWIwQJp.woff": {
    "type": "font/woff",
    "etag": "\"66f0-/W+o0nTTmr68/ZP8SbJceslivrc\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 26352,
    "path": "../../.output/public/_fonts/fonts.gstatic-7r8RWIwQJp.woff"
  },
  "/_fonts/fonts.gstatic-8MKMoLFruQ.woff": {
    "type": "font/woff",
    "etag": "\"145e8-vBykSn2WL6Ijts6rf1XvbeVS7Yo\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 83432,
    "path": "../../.output/public/_fonts/fonts.gstatic-8MKMoLFruQ.woff"
  },
  "/_fonts/fonts.gstatic-6erMrHsSEJ.woff": {
    "type": "font/woff",
    "etag": "\"14880-x19YSilMpFWD44a5f11guoDsLog\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 84096,
    "path": "../../.output/public/_fonts/fonts.gstatic-6erMrHsSEJ.woff"
  },
  "/logo-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"2878-RTVSuo8KCJw0Y4NVOKo/01SimwY\"",
    "mtime": "2026-02-23T14:09:38.626Z",
    "size": 10360,
    "path": "../../.output/public/logo-white.svg"
  },
  "/_fonts/fonts.gstatic-97f5vJwqPy.woff": {
    "type": "font/woff",
    "etag": "\"15b70-B+PrrN9ZOhwhV3JRGW9UuII+qPM\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 88944,
    "path": "../../.output/public/_fonts/fonts.gstatic-97f5vJwqPy.woff"
  },
  "/_fonts/fonts.gstatic-BJgkGhKPE5.woff": {
    "type": "font/woff",
    "etag": "\"6674-cVi1T0Hk9pBXgMyVoZ4yzD7edZs\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 26228,
    "path": "../../.output/public/_fonts/fonts.gstatic-BJgkGhKPE5.woff"
  },
  "/_fonts/fonts.gstatic-GH2lQzPU4s.woff": {
    "type": "font/woff",
    "etag": "\"722c-vMB9peTjlF53Q6DMcU+D+PLzAOM\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 29228,
    "path": "../../.output/public/_fonts/fonts.gstatic-GH2lQzPU4s.woff"
  },
  "/_fonts/fonts.gstatic-BXaT12VRKk.woff": {
    "type": "font/woff",
    "etag": "\"716c-1eaxVCI12amlnavBx+hkzIdJOc8\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 29036,
    "path": "../../.output/public/_fonts/fonts.gstatic-BXaT12VRKk.woff"
  },
  "/_fonts/fonts.gstatic-KUvySlGRPe.woff": {
    "type": "font/woff",
    "etag": "\"15df8-BIRuqGH9KvkavGdpWNjwdQbMrOQ\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 89592,
    "path": "../../.output/public/_fonts/fonts.gstatic-KUvySlGRPe.woff"
  },
  "/_fonts/fonts.gstatic-LE7oQl7YuS.woff": {
    "type": "font/woff",
    "etag": "\"6878-oqTS5Do1LsI9Ls9egVRzDNqMbls\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 26744,
    "path": "../../.output/public/_fonts/fonts.gstatic-LE7oQl7YuS.woff"
  },
  "/_fonts/fonts.gstatic-H8Wlf3ayNf.woff": {
    "type": "font/woff",
    "etag": "\"14c04-5hRzZa3VCMnF+7YSW4TY3f6DqD4\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 84996,
    "path": "../../.output/public/_fonts/fonts.gstatic-H8Wlf3ayNf.woff"
  },
  "/_fonts/fonts.gstatic-N7Qqw7z1V4.woff": {
    "type": "font/woff",
    "etag": "\"6758-G0pPLC9/0THc91OpCXydaYzJdQ4\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 26456,
    "path": "../../.output/public/_fonts/fonts.gstatic-N7Qqw7z1V4.woff"
  },
  "/_fonts/fonts.gstatic-Qx0SKeFpPB.woff": {
    "type": "font/woff",
    "etag": "\"157cc-LX4F/aXvXPpgoi7mEmwrrrHsqNk\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 88012,
    "path": "../../.output/public/_fonts/fonts.gstatic-Qx0SKeFpPB.woff"
  },
  "/_fonts/fonts.gstatic-Ryq6I4AYA1.woff": {
    "type": "font/woff",
    "etag": "\"1546c-8Mfgd8ZLGPlTAdm5hCp9zF8AyWY\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 87148,
    "path": "../../.output/public/_fonts/fonts.gstatic-Ryq6I4AYA1.woff"
  },
  "/_fonts/fonts.gstatic-TlWjzuvDsl.woff": {
    "type": "font/woff",
    "etag": "\"6784-1Jk6N0zlhGn8OE/zux1/PLNFv60\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 26500,
    "path": "../../.output/public/_fonts/fonts.gstatic-TlWjzuvDsl.woff"
  },
  "/_fonts/fonts.gstatic-RoGM4YARwS.woff": {
    "type": "font/woff",
    "etag": "\"146d0-KuEc78a5qhLn+dtxuH240DP3RCs\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 83664,
    "path": "../../.output/public/_fonts/fonts.gstatic-RoGM4YARwS.woff"
  },
  "/_fonts/fonts.gstatic-Wm06SQkM5q.woff": {
    "type": "font/woff",
    "etag": "\"6d3c-jFapN7Sa0emcbUnCsYeQ9EluYxA\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 27964,
    "path": "../../.output/public/_fonts/fonts.gstatic-Wm06SQkM5q.woff"
  },
  "/_fonts/fonts.gstatic-UJQejDvfSA.woff": {
    "type": "font/woff",
    "etag": "\"148a0-dpu0aLYBDE7RkHzBVMPIYB373yE\"",
    "mtime": "2026-02-23T14:09:38.620Z",
    "size": 84128,
    "path": "../../.output/public/_fonts/fonts.gstatic-UJQejDvfSA.woff"
  },
  "/_fonts/fonts.gstatic-WISircT3Ay.woff": {
    "type": "font/woff",
    "etag": "\"15700-nwlcbsN89M0M9FGntSCUt2n3TF8\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 87808,
    "path": "../../.output/public/_fonts/fonts.gstatic-WISircT3Ay.woff"
  },
  "/_fonts/fonts.gstatic-ZZcUJ0dZGQ.woff": {
    "type": "font/woff",
    "etag": "\"6624-cP6GGZz5xXEL7klrCxuAPSe3ET0\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 26148,
    "path": "../../.output/public/_fonts/fonts.gstatic-ZZcUJ0dZGQ.woff"
  },
  "/_fonts/fonts.gstatic-dGwnB1HMC9.woff": {
    "type": "font/woff",
    "etag": "\"67e4-nRA4cJbxHC+jZObYEGHmUAEWd0o\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 26596,
    "path": "../../.output/public/_fonts/fonts.gstatic-dGwnB1HMC9.woff"
  },
  "/_fonts/fonts.gstatic-mceRWd7pQS.woff": {
    "type": "font/woff",
    "etag": "\"71f8-2fFfFHRfKPEoHjZ66OvTfD27cms\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 29176,
    "path": "../../.output/public/_fonts/fonts.gstatic-mceRWd7pQS.woff"
  },
  "/_fonts/fonts.gstatic-ebZ1FQWfN4.woff": {
    "type": "font/woff",
    "etag": "\"1564c-A8X0hQ/KKCj6f1BRmbdwM4MqQ80\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 87628,
    "path": "../../.output/public/_fonts/fonts.gstatic-ebZ1FQWfN4.woff"
  },
  "/_fonts/fonts.gstatic-mysXohBMaI.woff": {
    "type": "font/woff",
    "etag": "\"66f8-9CtnN9/piyuufBiPg/5HPRwykXs\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 26360,
    "path": "../../.output/public/_fonts/fonts.gstatic-mysXohBMaI.woff"
  },
  "/_fonts/fonts.gstatic-nflEkjPURb.woff": {
    "type": "font/woff",
    "etag": "\"14e88-zJsY/8PoyyFYkP/VdLD208nJITs\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 85640,
    "path": "../../.output/public/_fonts/fonts.gstatic-nflEkjPURb.woff"
  },
  "/_fonts/fonts.gstatic-nkEEPPqN9q.woff": {
    "type": "font/woff",
    "etag": "\"7128-MBRKSbKAEId5j12DZFa61zxXocA\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 28968,
    "path": "../../.output/public/_fonts/fonts.gstatic-nkEEPPqN9q.woff"
  },
  "/_fonts/fonts.gstatic-oQCn0fU805.woff": {
    "type": "font/woff",
    "etag": "\"6c60-Oue5wWbqzm9URqMuSxSmWFQ4UVI\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 27744,
    "path": "../../.output/public/_fonts/fonts.gstatic-oQCn0fU805.woff"
  },
  "/_fonts/fonts.gstatic-o6hISS2BTh.woff": {
    "type": "font/woff",
    "etag": "\"15288-4uFjfXXwOHqsHlM21IA03ysNm0Q\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 86664,
    "path": "../../.output/public/_fonts/fonts.gstatic-o6hISS2BTh.woff"
  },
  "/_fonts/fonts.gstatic-opsx5Kv7wD.woff": {
    "type": "font/woff",
    "etag": "\"6d1c-pISFsv1j/9WuFKUKiWVmOCdnOpM\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 27932,
    "path": "../../.output/public/_fonts/fonts.gstatic-opsx5Kv7wD.woff"
  },
  "/_fonts/fonts.gstatic-onL5mVShO5.woff": {
    "type": "font/woff",
    "etag": "\"143c8-qwUxkwsWCH3tTOhNBwgqfvuyYgk\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 82888,
    "path": "../../.output/public/_fonts/fonts.gstatic-onL5mVShO5.woff"
  },
  "/_fonts/fonts.gstatic-pttu3oBz9D.woff": {
    "type": "font/woff",
    "etag": "\"1449c-N5lm2LzTEPHQ+5RqQN5QuAUt6wI\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 83100,
    "path": "../../.output/public/_fonts/fonts.gstatic-pttu3oBz9D.woff"
  },
  "/_fonts/fonts.gstatic-xdqXBwHrHB.woff": {
    "type": "font/woff",
    "etag": "\"622c-vnxkejyXl30NRamyjGZAOKO/thM\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 25132,
    "path": "../../.output/public/_fonts/fonts.gstatic-xdqXBwHrHB.woff"
  },
  "/_fonts/fonts.gstatic-znLZtURMV2.woff": {
    "type": "font/woff",
    "etag": "\"7260-/edtZoxCe+EkANUTdT5ShgOdGTk\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 29280,
    "path": "../../.output/public/_fonts/fonts.gstatic-znLZtURMV2.woff"
  },
  "/_fonts/fonts.gstatic-unwaJy3gx7.woff": {
    "type": "font/woff",
    "etag": "\"15ffc-38NPG6mADc6cL29CeJqFf5zHf5E\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 90108,
    "path": "../../.output/public/_fonts/fonts.gstatic-unwaJy3gx7.woff"
  },
  "/_fonts/rP2Wp2ywxg089UriCZaSExd86J3t9jz86MvyyKK58UfivUw4aw-i8X0uYCzXR.woff2": {
    "type": "font/woff2",
    "etag": "\"507c-4CIrHltPBTsNTfIBkCofp5rGZmk\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 20604,
    "path": "../../.output/public/_fonts/rP2Wp2ywxg089UriCZaSExd86J3t9jz86MvyyKK58UfivUw4aw-i8X0uYCzXR.woff2"
  },
  "/_fonts/rP2Wp2ywxg089UriCZaSExd86J3t9jz86MvyyKy58UfivUw-1ve8raB7pN.woff2": {
    "type": "font/woff2",
    "etag": "\"9b7c-J1g8XN0DIoPuhLPQOQJ4Rd19jio\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 39804,
    "path": "../../.output/public/_fonts/rP2Wp2ywxg089UriCZaSExd86J3t9jz86MvyyKy58UfivUw-1ve8raB7pN.woff2"
  },
  "/_fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg-kYnTIvQrln.woff2": {
    "type": "font/woff2",
    "etag": "\"9074-eAz1m3cRzuDbKR8GkiymaxK2Xc8\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 36980,
    "path": "../../.output/public/_fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg-kYnTIvQrln.woff2"
  },
  "/_fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0-yOgYBk2o26.woff2": {
    "type": "font/woff2",
    "etag": "\"4710-nJvFkh7mlst/gnY3cmhDXkIljbk\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 18192,
    "path": "../../.output/public/_fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0-yOgYBk2o26.woff2"
  },
  "/_nuxt/2c67MqsA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d82-niWA5HwvK1XJOCXNR/zDZ3l1hSg\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 11650,
    "path": "../../.output/public/_nuxt/2c67MqsA.js"
  },
  "/_nuxt/Bi6WkWGI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ad2-XnXHvfyarZOvX4W2+XroeV70WKI\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 10962,
    "path": "../../.output/public/_nuxt/Bi6WkWGI.js"
  },
  "/_nuxt/BsW3zyG7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"260a-pryIv/UIcIIXZlSGHNKIDxVDt/c\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 9738,
    "path": "../../.output/public/_nuxt/BsW3zyG7.js"
  },
  "/_nuxt/C1hR_IOh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"287a-knBq6wFrX6fgIXK9HjJEyqD6XmY\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 10362,
    "path": "../../.output/public/_nuxt/C1hR_IOh.js"
  },
  "/_nuxt/C8OhqYHM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2305-T/l9c+xa5quJz6MNlOUHekFQfHs\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 8965,
    "path": "../../.output/public/_nuxt/C8OhqYHM.js"
  },
  "/_nuxt/C_mEOCup.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cd1-0TvID1feW9O7j52QuhKaA5DItB4\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 11473,
    "path": "../../.output/public/_nuxt/C_mEOCup.js"
  },
  "/_nuxt/CaR8jeRX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bc0-jQE6n0VvoV+kuB/Bjk0/RkWEcTM\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 11200,
    "path": "../../.output/public/_nuxt/CaR8jeRX.js"
  },
  "/_nuxt/D-c4Z_uD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ae9-g1Obxm3e77kinrb9t4xRnwOELWs\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 27369,
    "path": "../../.output/public/_nuxt/D-c4Z_uD.js"
  },
  "/_nuxt/Fo18GW6K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fff-+KjWGaragC3Yq799M3vb9loVvWM\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 12287,
    "path": "../../.output/public/_nuxt/Fo18GW6K.js"
  },
  "/_nuxt/D9vxBXc4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d2a-95mCNAcBmZv2G10GcCz1R1UzLYs\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 3370,
    "path": "../../.output/public/_nuxt/D9vxBXc4.js"
  },
  "/_nuxt/error-404.DL_4WIao.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dca-KnjyV0UbpsrliiJzZx69defY74k\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 3530,
    "path": "../../.output/public/_nuxt/error-404.DL_4WIao.css"
  },
  "/_fonts/fonts.gstatic-r1qDKebDht.woff": {
    "type": "font/woff",
    "etag": "\"152ac-prDvrHFM+7Zb4w8TB2vrwcp9nq4\"",
    "mtime": "2026-02-23T14:09:38.621Z",
    "size": 86700,
    "path": "../../.output/public/_fonts/fonts.gstatic-r1qDKebDht.woff"
  },
  "/_nuxt/Dgmq4rCB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3def5-zh5RsMuig8Gu9d6csxPcmr7N4QU\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 253685,
    "path": "../../.output/public/_nuxt/Dgmq4rCB.js"
  },
  "/_i18n/CZaf67sj/en/messages.json": {
    "type": "application/json",
    "etag": "\"1dc8-4Mx2ZvssAYBsIvgCP8QQOBVbo4Y\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 7624,
    "path": "../../.output/public/_i18n/CZaf67sj/en/messages.json"
  },
  "/_nuxt/error-500.I1Dtv2V5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75a-vEGyJqldBVJrnMfcLsrGaHcxYl0\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 1882,
    "path": "../../.output/public/_nuxt/error-500.I1Dtv2V5.css"
  },
  "/_nuxt/index.evSRprPJ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ae-m1xAAlb2RE6zsvb1rrdP/to/o8I\"",
    "mtime": "2026-02-23T14:09:38.624Z",
    "size": 686,
    "path": "../../.output/public/_nuxt/index.evSRprPJ.css"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-0PiztJqIEh70TMAamG6nsBBsqjg\"",
    "mtime": "2026-02-23T14:09:38.617Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_i18n/CZaf67sj/de/messages.json": {
    "type": "application/json",
    "etag": "\"221f-Y8PwcUEwOWNiDbZCEPXCZdulYu0\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 8735,
    "path": "../../.output/public/_i18n/CZaf67sj/de/messages.json"
  },
  "/_i18n/CZaf67sj/es/messages.json": {
    "type": "application/json",
    "etag": "\"210e-4ULKd4kg+NDf4AgE5z9urlLHVmg\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 8462,
    "path": "../../.output/public/_i18n/CZaf67sj/es/messages.json"
  },
  "/_i18n/CZaf67sj/fr/messages.json": {
    "type": "application/json",
    "etag": "\"22d0-40ryIetoJSNYcSzGoKCO5NdjLPc\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 8912,
    "path": "../../.output/public/_i18n/CZaf67sj/fr/messages.json"
  },
  "/_i18n/CZaf67sj/he/messages.json": {
    "type": "application/json",
    "etag": "\"2552-JFW1ZZdJNCW2VXkCPxR0HS2b16A\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 9554,
    "path": "../../.output/public/_i18n/CZaf67sj/he/messages.json"
  },
  "/_i18n/CZaf67sj/tr/messages.json": {
    "type": "application/json",
    "etag": "\"2020-HvV19SS4K/gQYPqHD5wKJ0cZ2EM\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 8224,
    "path": "../../.output/public/_i18n/CZaf67sj/tr/messages.json"
  },
  "/_nuxt/builds/meta/bf9125cc-1e80-4c41-bf84-644224efa410.json": {
    "type": "application/json",
    "etag": "\"5b-aMFDHgENn832i+8KsEcRD8t2pRM\"",
    "mtime": "2026-02-23T14:09:38.616Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/builds/meta/bf9125cc-1e80-4c41-bf84-644224efa410.json"
  },
  "/_nuxt/builds/meta/dev.json": {
    "type": "application/json",
    "etag": "\"37-FBJUFRjdDCya+PfyGM5nmNIn+nE\"",
    "mtime": "2026-02-23T14:09:38.616Z",
    "size": 55,
    "path": "../../.output/public/_nuxt/builds/meta/dev.json"
  },
  "/_i18n/CZaf67sj/zh-TW/messages.json": {
    "type": "application/json",
    "etag": "\"1b5b-ALV6EEhbc9j9YkftpkzuAcwsgOk\"",
    "mtime": "2026-02-23T14:09:38.591Z",
    "size": 7003,
    "path": "../../.output/public/_i18n/CZaf67sj/zh-TW/messages.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _s8j6zg = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _SxA8c9 = defineEventHandler(() => {});

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
const _getMessagesCached = cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: 60 * 60 * 24,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessagesCached;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: 60 * 60 * 24,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: 60 * 60 * 24,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: 60 * 60 * 24,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
const _messagesHandlerCached = defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: 10,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _J4U144 = _messagesHandlerCached;

const _lazy_NpQxav = () => import('../_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _s8j6zg, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _J4U144, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_NpQxav, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { appRootTag as a, appRootAttrs as b, buildAssetsURL as c, useStorage as d, appId as e, defineRenderHandler as f, appTeleportTag as g, appTeleportAttrs as h, appHead as i, getRouteRules as j, useNitroApp as k, baseURL as l, closePrerenderer as m, localFetch as n, publicAssetsURL as p, useRuntimeConfig as u };
//# sourceMappingURL=nitro.mjs.map
