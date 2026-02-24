import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getQuery as getQuery$1, readBody, getRouterParam, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getResponseStatusText } from 'file:///Users/fpolania/repos/vas/landing/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/fpolania/repos/vas/landing/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/fpolania/repos/vas/landing/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withTrailingSlash, decodePath, withoutTrailingSlash } from 'file:///Users/fpolania/repos/vas/landing/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///Users/fpolania/repos/vas/landing/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/fpolania/repos/vas/landing/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/fpolania/repos/vas/landing/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/fpolania/repos/vas/landing/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/fpolania/repos/vas/landing/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/fpolania/repos/vas/landing/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/fpolania/repos/vas/landing/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/fpolania/repos/vas/landing/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file:///Users/fpolania/repos/vas/landing/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/fpolania/repos/vas/landing/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/fpolania/repos/vas/landing/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/fpolania/repos/vas/landing/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/fpolania/repos/vas/landing/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/fpolania/repos/vas/landing/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/fpolania/repos/vas/landing/node_modules/source-map/source-map.js';
import { createRouterMatcher } from 'file:///Users/fpolania/repos/vas/landing/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/fpolania/repos/vas/landing/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/fpolania/repos/vas/landing/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///Users/fpolania/repos/vas/landing/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/fpolania/repos/vas/landing/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///Users/fpolania/repos/vas/landing/node_modules/unhead/dist/utils.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/fpolania/repos/vas/landing/node_modules/ipx/dist/index.mjs';
import { isAbsolute } from 'file:///Users/fpolania/repos/vas/landing/node_modules/@nuxt/image/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/fpolania/repos/vas/landing/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/fpolania/repos/vas/landing","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/fpolania/repos/vas/landing/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/fpolania/repos/vas/landing/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/fpolania/repos/vas/landing/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/fpolania/repos/vas/landing/.data/kv"}));

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
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/": {
        "prerender": true
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
      "//_payload.json": {
        "prerender": true
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
      "detectBrowserLanguage": false,
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
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/fpolania/repos/vas/landing/public"
      ]
    },
    "http": {
      "domains": []
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

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
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
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
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
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
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
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
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
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
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
	},
	{
		title: "Investment Advisory for Existing Projects in Venezuela",
		description: "Independent advisory services for capital deployment into active Venezuelan projects. We assist with due diligence, regulatory analysis, structuring, and local coordination to mitigate operational and compliance risks.",
		icon: "📊"
	},
	{
		title: "Ongoing Operations & Compliance Support",
		description: "Post-incorporation support including regulatory follow-ups, renewals, local coordination, and ongoing advisory to ensure continuity and stability of operations.",
		icon: "🔄"
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
	},
	{
		title: "Asesoría de Inversión para Proyectos Existentes en Venezuela",
		description: "Servicios de asesoría independiente para el despliegue de capital en proyectos venezolanos activos. Asistimos con debida diligencia, análisis regulatorio, estructuración y coordinación local para mitigar riesgos operacionales y de cumplimiento.",
		icon: "📊"
	},
	{
		title: "Soporte Operativo y de Cumplimiento Continuo",
		description: "Apoyo post-incorporación que incluye seguimientos regulatorios, renovaciones, coordinación local y asesoría continua para garantizar la continuidad y estabilidad de las operaciones.",
		icon: "🔄"
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
	},
	{
		title: "Conseil en Investissement pour Projets Existants au Venezuela",
		description: "Services de conseil indépendants pour le déploiement de capital dans des projets vénézuéliens actifs. Nous assistons avec la due diligence, l'analyse réglementaire, la structuration et la coordination locale pour atténuer les risques opérationnels et de conformité.",
		icon: "📊"
	},
	{
		title: "Soutien Opérationnel et de Conformité Continu",
		description: "Soutien post-incorporation incluant les suivis réglementaires, les renouvellements, la coordination locale et le conseil continu pour assurer la continuité et la stabilité des opérations.",
		icon: "🔄"
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
	},
	{
		title: "Investitionsberatung für Bestehende Projekte in Venezuela",
		description: "Unabhängige Beratungsdienstleistungen für die Kapitalbereitstellung in aktive venezolanische Projekte. Wir unterstützen bei Due Diligence, regulatorischer Analyse, Strukturierung und lokaler Koordination zur Minderung operationeller und Compliance-Risiken.",
		icon: "📊"
	},
	{
		title: "Laufende Betriebs- und Compliance-Unterstützung",
		description: "Post-Inkorporations-Unterstützung einschließlich regulatorischer Nachverfolgungen, Verlängerungen, lokaler Koordination und laufender Beratung zur Gewährleistung der Kontinuität und Stabilität des Betriebs.",
		icon: "🔄"
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
	},
	{
		title: "ייעוץ השקעות לפרויקטים קיימים בוונצואלה",
		description: "שירותי ייעוץ עצמאיים לפריסת הון בפרויקטים ונצואלים פעילים. אנו מסייעים בבדיקת נאותות, ניתוח רגולטורי, מבנה ותיאום מקומי לצמצום סיכונים תפעוליים וסיכוני ציות.",
		icon: "📊"
	},
	{
		title: "תמיכה תפעולית ועמידה בתקנות שוטפת",
		description: "תמיכה לאחר התאגדות הכוללת מעקבים רגולטוריים, חידושים, תיאום מקומי וייעוץ שוטף להבטחת רציפות ויציבות הפעילות.",
		icon: "🔄"
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
	},
	{
		title: "現有委內瑞拉項目的投資諮詢",
		description: "為在委內瑞拉活躍項目中部署資本提供獨立諮詢服務。我們協助進行盡職調查、監管分析、結構設計和本地協調，以降低運營和合規風險。",
		icon: "📊"
	},
	{
		title: "持續運營與合規支援",
		description: "提供設立後支援，包括監管跟進、更新、本地協調和持續諮詢，以確保運營的連續性和穩定性。",
		icon: "🔄"
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
	},
	{
		title: "Venezuela'daki Mevcut Projeler için Yatırım Danışmanlığı",
		description: "Aktif Venezuelalı projelere sermaye dağıtımı için bağımsız danışmanlık hizmetleri. Operasyonel ve uyumluluk risklerini azaltmak amacıyla durum tespiti, düzenleyici analiz, yapılandırma ve yerel koordinasyonda yardım sağlıyoruz.",
		icon: "📊"
	},
	{
		title: "Süregelen Operasyonel ve Uyumluluk Desteği",
		description: "Operasyonların sürekliliğini ve istikrarını sağlamak amacıyla düzenleyici takipler, yenilemeler, yerel koordinasyon ve süregelen danışmanlık dahil kuruluş sonrası destek.",
		icon: "🔄"
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

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
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
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
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
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/xclzPP8F") && !isExistingNuxtRoute(path)) {
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

const rootDir = "/Users/fpolania/repos/vas/landing";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _JOQi6EE4o9rmfQNwoH1vj6NiNa_f69m5DNXyWK8zoZk = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _c_PqpbvaEYXIMS0Aa_lsHbxqRFGBARq3xeIPg1FNs,
_JOQi6EE4o9rmfQNwoH1vj6NiNa_f69m5DNXyWK8zoZk
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"359cc-+bmixqgi+KxdlOcoiYHG/pVrdLQ\"",
    "mtime": "2026-02-24T18:56:08.484Z",
    "size": 219596,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"8345b-+iSN/0veuwv+3CYdHj8W4sCNmj4\"",
    "mtime": "2026-02-24T18:56:08.484Z",
    "size": 537691,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000}};

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

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file:///Users/fpolania/repos/vas/landing/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///Users/fpolania/repos/vas/landing/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	// TODO: remove for v4
	islandHead.link ||= [];
	islandHead.style ||= [];
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
async function getIslandContext(event) {
	// TODO: Strict validation for url
	let url = event.path || "";
	const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	// TODO: Validate context
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const ctx = {
		url: "/",
		...context,
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
	return ctx;
}

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
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
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
  maxAge: -1 ,
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
  maxAge: -1 ,
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
  maxAge: -1 ,
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
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _J4U144 = _messagesHandler ;

const _kBHZXQ = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_NpQxav = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _s8j6zg, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_NpQxav, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _J4U144, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _kBHZXQ, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_NpQxav, lazy: true, middleware: false, method: undefined },
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
    debug: destr(true),
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

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"version": "",
	"status": 500,
	"statusText": "Server error",
	"description": "This page is temporarily unavailable."
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script></head><body class=\"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black\"><div class=\"-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight\"></div><div class=\"max-w-520px text-center\"><h1 class=\"font-medium mb-8 sm:text-10xl text-8xl\">" + escapeHtml(messages.status) + "</h1><p class=\"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"]) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? stringify(opts.data, opts.ssrContext["~payloadReducers"]) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const renderer = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && ((routeOptions.isr || routeOptions.cache));
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	if (_PAYLOAD_EXTRACTION && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	if (ssrContext["~preloadManifest"] && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			fetchpriority: "low",
			crossorigin: "anonymous",
			href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`)
		}] }, {
			...headEntryOptions,
			tagPriority: "low"
		});
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		// TODO: add priorities based on Capo
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_EXTRACTION ? renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  : renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
