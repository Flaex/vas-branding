import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, reactive, openBlock, createBlock, createVNode, withModifiers, withDirectives, vModelText, createCommentVNode, isRef, resolveDynamicComponent, renderSlot, useSSRContext } from 'file:///Users/fpolania/VAS/landing/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport } from 'file:///Users/fpolania/VAS/landing/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { f as useI18n, g as useSeoMeta, _ as _export_sfc } from './server.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/h3/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/ufo/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/destr/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/hookable/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/fpolania/VAS/landing/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/klona/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/defu/dist/defu.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/scule/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unctx/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/radix3/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/vue-router/vue-router.node.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/fpolania/VAS/landing/node_modules/pathe/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unhead/dist/server.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/devalue/index.js';
import 'file:///Users/fpolania/VAS/landing/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/fpolania/VAS/landing/node_modules/unhead/dist/utils.mjs';

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    href: {},
    type: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      const base = "inline-flex items-center justify-center font-display font-semibold rounded-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
      const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
      };
      const variants = {
        primary: "bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-500 shadow-md hover:shadow-lg",
        navy: "bg-primary-900 text-white hover:bg-primary-700 focus:ring-primary-900 shadow-md hover:shadow-lg",
        ghost: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-900 focus:ring-white",
        outline: "bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-900"
      };
      return [base, sizes[props.size], variants[props.variant]].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? "a" : "button"), mergeProps({
        href: __props.href,
        type: __props.href ? void 0 : __props.type,
        class: unref(classes)
      }, _ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseButton.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo-white.svg");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const navLinks = computed(() => [
      { label: t("nav_home"), href: "#home" },
      { label: t("nav_services"), href: "#services" },
      { label: t("nav_contact"), href: "#contact" }
    ]);
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-300", unref(scrolled) ? "bg-primary-900 shadow-lg" : "bg-transparent"]
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between py-5 sm:py-7"><a href="#home" class="flex-shrink-0" aria-label="VAS Home"><img${ssrRenderAttr("src", _imports_0)} alt="Venezuela Advisory Services" class="h-[50px] sm:h-[62px] w-auto"></a><nav class="hidden md:flex items-center gap-8" aria-label="Main navigation"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-white/80 hover:text-white font-sans font-medium text-sm transition-colors duration-200">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "primary",
        size: "sm",
        class: "hidden sm:inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("cta_request_consultation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("cta_request_consultation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="md:hidden text-white p-2" aria-label="Toggle menu">`);
      if (!unref(mobileOpen)) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div></div><div class="md:hidden pb-4 border-t border-white/10 mt-2" style="${ssrRenderStyle(unref(mobileOpen) ? null : { display: "none" })}"><nav class="flex flex-col gap-1 pt-4" aria-label="Mobile navigation"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-white/80 hover:text-white font-sans text-base py-2 transition-colors duration-200">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "primary",
        size: "sm",
        class: "mt-3 w-full",
        onClick: ($event) => mobileOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("cta_request_consultation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("cta_request_consultation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></header>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const stats = computed(() => [
      { value: "6", label: t("stats_service_areas") },
      { value: "100%", label: t("stats_local_execution") },
      { value: "Confidential", label: t("stats_professional_service") }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "relative min-h-screen bg-primary-900 flex items-center overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 opacity-5" aria-hidden="true"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div><div class="absolute top-0 left-0 right-0 h-1 bg-accent-500" aria-hidden="true"></div><div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"><div class="max-w-3xl"><div class="inline-flex items-center gap-2 bg-accent-500/20 text-accent-400 text-sm font-sans font-medium px-4 py-2 rounded-full mb-8 border border-accent-500/30"><span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span> Business Advisory \u2014 Venezuela </div><h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">${ssrInterpolate(unref(t)("hero_headline"))}</h1><p class="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">${ssrInterpolate(unref(t)("hero_subheadline"))}</p><div class="flex flex-col sm:flex-row gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "primary",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero_cta_primary"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero_cta_primary")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#services",
        variant: "ghost",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero_cta_secondary"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero_cta_secondary")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-16 flex flex-wrap gap-8"><!--[-->`);
      ssrRenderList(unref(stats), (stat) => {
        _push(`<div class="flex flex-col"><span class="font-display font-bold text-4xl text-accent-400">${ssrInterpolate(stat.value)}</span><span class="text-white/50 text-lg mt-1">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30" aria-hidden="true"><span class="text-xs font-sans">${ssrInterpolate(unref(t)("scroll"))}</span><svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const pillars = computed(() => [
      {
        icon: "\u{1F3DB}\uFE0F",
        label: t("pillar_local_expertise_label"),
        description: t("pillar_local_expertise_desc")
      },
      {
        icon: "\u{1F310}",
        label: t("pillar_international_label"),
        description: t("pillar_international_desc")
      },
      {
        icon: "\u2699\uFE0F",
        label: t("pillar_practical_label"),
        description: t("pillar_practical_desc")
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-4">${ssrInterpolate(unref(t)("about_label"))}</p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6">${ssrInterpolate(unref(t)("about_headline"))}</h2><p class="text-neutral-600 text-lg leading-relaxed mb-8">${ssrInterpolate(unref(t)("about_body"))}</p><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(unref(pillars), (pillar) => {
        _push(`<div class="flex items-start gap-4"><div class="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center mt-0.5"><span class="text-lg">${ssrInterpolate(pillar.icon)}</span></div><div><h4 class="font-display font-semibold text-primary-900 text-base">${ssrInterpolate(pillar.label)}</h4><p class="text-neutral-600 text-sm mt-1">${ssrInterpolate(pillar.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="relative pb-8"><div class="bg-primary-900 rounded-card p-10 pb-24 text-white relative overflow-hidden"><div class="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-bl-full" aria-hidden="true"></div><blockquote class="relative z-10"><div class="text-accent-400 text-5xl font-display font-bold leading-none mb-4">&quot;</div><p class="text-white/90 text-2xl font-display font-semibold mb-8">${ssrInterpolate(unref(t)("about_quote"))}</p><div class="border-t border-white/10 pt-6"><p class="text-white/60 text-sm">${ssrInterpolate(unref(t)("about_quote_body"))}</p></div></blockquote></div><div class="absolute -bottom-6 left-6 bg-accent-500 text-white rounded-card p-5 shadow-xl max-w-[360px]"><p class="font-display font-bold text-2xl">${ssrInterpolate(unref(t)("about_floating_title"))}</p><p class="text-white/80 text-xs mt-1">${ssrInterpolate(unref(t)("about_floating_sub"))}</p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "WhyUsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    const whyUs = computed(
      () => tm("why_us").map((item) => ({
        icon: rt(item.icon),
        title: rt(item.title),
        description: rt(item.description)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "why-us",
        class: "section-padding bg-primary-900"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("why_us_label"))}</p><h2 class="font-display font-bold text-4xl text-white leading-tight max-w-2xl mx-auto">${ssrInterpolate(unref(t)("why_us_headline"))}</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(unref(whyUs), (item, index) => {
        _push(`<div class="bg-white/5 border border-white/10 rounded-card p-8 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-200 group"><div class="text-3xl mb-4">${ssrInterpolate(item.icon)}</div><div class="text-white font-display font-bold text-4xl mb-4 opacity-60 leading-none"> 0${ssrInterpolate(index + 1)}</div><h3 class="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-400 transition-colors duration-200">${ssrInterpolate(item.title)}</h3><p class="text-white/60 text-sm leading-relaxed">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/WhyUsSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    padding: { default: "md" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      const base = "rounded-card bg-white";
      const variants = {
        default: "shadow-sm",
        elevated: "shadow-lg hover:shadow-xl transition-shadow duration-200",
        bordered: "border border-neutral-100"
      };
      const paddings = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      };
      return [base, variants[props.variant], paddings[props.padding]].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    service: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$9;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        variant: "elevated",
        padding: "lg",
        class: "flex flex-col gap-4 group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-4xl"${_scopeId}>${ssrInterpolate(__props.service.icon)}</div><h3 class="font-display font-bold text-xl text-primary-900 group-hover:text-accent-500 transition-colors duration-200"${_scopeId}>${ssrInterpolate(__props.service.title)}</h3><p class="text-neutral-600 leading-relaxed text-sm"${_scopeId}>${ssrInterpolate(__props.service.description)}</p>`);
          } else {
            return [
              createVNode("div", { class: "text-4xl" }, toDisplayString(__props.service.icon), 1),
              createVNode("h3", { class: "font-display font-bold text-xl text-primary-900 group-hover:text-accent-500 transition-colors duration-200" }, toDisplayString(__props.service.title), 1),
              createVNode("p", { class: "text-neutral-600 leading-relaxed text-sm" }, toDisplayString(__props.service.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ServiceCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    const services = computed(
      () => tm("services").map((item) => ({
        icon: rt(item.icon),
        title: rt(item.title),
        description: rt(item.description)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceCard = _sfc_main$8;
      const _component_BaseButton = _sfc_main$e;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("services_label"))}</p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight max-w-2xl mx-auto">${ssrInterpolate(unref(t)("services_headline"))}</h2><p class="text-neutral-600 text-lg mt-4 max-w-2xl mx-auto">${ssrInterpolate(unref(t)("services_subheadline"))}</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(services), (service) => {
        _push(ssrRenderComponent(_component_ServiceCard, {
          key: service.title,
          service
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="text-center mt-12"><p class="text-neutral-600 text-2xl mb-4">${ssrInterpolate(unref(t)("services_cta_text"))}</p>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "outline",
        size: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services_cta_button"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services_cta_button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm, rt } = useI18n();
    const howItWorks = computed(
      () => tm("how_it_works").map((item) => ({
        step: rt(item.step),
        title: rt(item.title),
        description: rt(item.description)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "section-padding bg-primary-700"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-400 text-sm uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("how_label"))}</p><h2 class="font-display font-bold text-4xl text-white leading-tight">${ssrInterpolate(unref(t)("how_headline"))}</h2><p class="text-white/60 text-lg mt-4 max-w-xl mx-auto">${ssrInterpolate(unref(t)("how_subheadline"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"><!--[-->`);
      ssrRenderList(unref(howItWorks), (step) => {
        _push(`<div class="relative flex flex-col items-center text-center"><div class="relative z-10 w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-lg ring-4 ring-primary-700"><span class="font-display font-bold text-2xl text-white">${ssrInterpolate(step.step)}</span></div><h3 class="font-display font-bold text-2xl text-white mb-3">${ssrInterpolate(step.title)}</h3><p class="text-white/60 text-base leading-relaxed max-w-xs">${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HowItWorksSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bg-accent-500" }, _attrs))}><div class="container-max text-center"><h2 class="font-display font-bold text-4xl sm:text-5xl text-primary-900 leading-tight mb-6">${ssrInterpolate(unref(t)("cta_headline"))}</h2><p class="text-primary-900/70 text-xl mb-10 max-w-xl mx-auto">${ssrInterpolate(unref(t)("cta_body"))}</p>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "navy",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("cta_button"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("cta_button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CtaSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SuccessModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.modelValue) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-v-7fa5344b><div class="absolute inset-0 bg-primary-900/70 backdrop-blur-sm" aria-hidden="true" data-v-7fa5344b></div><div class="relative bg-white rounded-card shadow-2xl max-w-md w-full p-10 flex flex-col items-center text-center" data-v-7fa5344b><div class="absolute top-0 left-0 right-0 h-1 bg-accent-500 rounded-t-card" aria-hidden="true" data-v-7fa5344b></div><div class="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6" data-v-7fa5344b><svg class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7fa5344b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-7fa5344b></path></svg></div><h3 id="modal-title" class="font-display font-bold text-2xl text-primary-900 mb-3" data-v-7fa5344b>${ssrInterpolate(unref(t)("modal_title"))}</h3><p class="text-neutral-600 text-base leading-relaxed mb-8" data-v-7fa5344b>${ssrInterpolate(unref(t)("modal_body"))}</p>`);
          _push2(ssrRenderComponent(_component_BaseButton, {
            variant: "primary",
            size: "md",
            class: "w-full",
            onClick: ($event) => _ctx.$emit("update:modelValue", false)
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(unref(t)("modal_done"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("modal_done")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SuccessModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7fa5344b"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const submitting = ref(false);
    const submitError = ref(false);
    const showModal = ref(false);
    const form = reactive({
      name: "",
      company: "",
      email: "",
      message: ""
    });
    const touched = reactive({
      name: false,
      company: false,
      email: false,
      message: false
    });
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validate() {
      const e = {};
      if (!form.name.trim() || form.name.trim().length < 2)
        e.name = t("form_err_name");
      if (!form.company.trim() || form.company.trim().length < 2)
        e.company = t("form_err_company");
      if (!form.email.trim() || !EMAIL_RE.test(form.email))
        e.email = t("form_err_email");
      if (!form.message.trim() || form.message.trim().length < 10)
        e.message = t("form_err_message");
      return e;
    }
    const errors = computed(() => {
      const all = validate();
      const visible = {};
      for (const key of Object.keys(all)) {
        if (touched[key]) visible[key] = all[key];
      }
      return visible;
    });
    function touch(field) {
      touched[field] = true;
    }
    function inputClass(hasError) {
      const base = "w-full px-4 py-3 rounded-card border text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
      return hasError ? `${base} border-red-400 focus:ring-red-400` : `${base} border-neutral-200 focus:ring-primary-900`;
    }
    async function handleSubmit() {
      for (const key of Object.keys(touched)) touched[key] = true;
      const allErrors = validate();
      if (Object.keys(allErrors).length > 0) return;
      submitting.value = true;
      submitError.value = false;
      const body = new URLSearchParams({
        "form-name": "contact",
        name: form.name,
        company: form.company,
        email: form.email,
        message: form.message
      });
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString()
        });
        if (res.ok) {
          showModal.value = true;
          Object.assign(form, { name: "", company: "", email: "", message: "" });
          Object.assign(touched, { name: false, company: false, email: false, message: false });
        } else {
          submitError.value = true;
        }
      } catch {
        submitError.value = true;
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$9;
      const _component_BaseButton = _sfc_main$e;
      const _component_SuccessModal = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">${ssrInterpolate(unref(t)("contact_label"))}</p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6">${ssrInterpolate(unref(t)("contact_headline"))}</h2><p class="text-neutral-600 text-lg leading-relaxed mb-10">${ssrInterpolate(unref(t)("contact_body"))}</p><div class="flex flex-col gap-6"><a${ssrRenderAttr("href", `mailto:${unref(t)("contact_email")}`)} class="flex items-center gap-4 group"><div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-200"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">${ssrInterpolate(unref(t)("contact_email_label"))}</p><p class="text-primary-900 font-semibold group-hover:text-accent-500 transition-colors duration-200">${ssrInterpolate(unref(t)("contact_email"))}</p></div></a><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">${ssrInterpolate(unref(t)("contact_phone_label"))}</p><p class="text-primary-900 font-semibold">${ssrInterpolate(unref(t)("contact_phone"))}</p></div></div></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        variant: "elevated",
        padding: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="flex flex-col gap-5" novalidate${_scopeId}><input type="hidden" name="form-name" value="contact"${_scopeId}><p class="hidden"${_scopeId}><label${_scopeId}>Don&#39;t fill this out: <input name="bot-field"${_scopeId}></label></p><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><div class="flex flex-col gap-1.5"${_scopeId}><label for="name" class="text-sm font-medium text-primary-900"${_scopeId}>${ssrInterpolate(unref(t)("form_name"))} *</label><input id="name"${ssrRenderAttr("value", unref(form).name)} name="name" type="text"${ssrRenderAttr("placeholder", unref(t)("form_name_ph"))} class="${ssrRenderClass(inputClass(unref(errors).name))}"${_scopeId}>`);
            if (unref(errors).name) {
              _push2(`<p class="text-xs text-red-500 mt-0.5"${_scopeId}>${ssrInterpolate(unref(errors).name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col gap-1.5"${_scopeId}><label for="company" class="text-sm font-medium text-primary-900"${_scopeId}>${ssrInterpolate(unref(t)("form_company"))} *</label><input id="company"${ssrRenderAttr("value", unref(form).company)} name="company" type="text"${ssrRenderAttr("placeholder", unref(t)("form_company_ph"))} class="${ssrRenderClass(inputClass(unref(errors).company))}"${_scopeId}>`);
            if (unref(errors).company) {
              _push2(`<p class="text-xs text-red-500 mt-0.5"${_scopeId}>${ssrInterpolate(unref(errors).company)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex flex-col gap-1.5"${_scopeId}><label for="email" class="text-sm font-medium text-primary-900"${_scopeId}>${ssrInterpolate(unref(t)("form_email"))} *</label><input id="email"${ssrRenderAttr("value", unref(form).email)} name="email" type="email"${ssrRenderAttr("placeholder", unref(t)("form_email_ph"))} class="${ssrRenderClass(inputClass(unref(errors).email))}"${_scopeId}>`);
            if (unref(errors).email) {
              _push2(`<p class="text-xs text-red-500 mt-0.5"${_scopeId}>${ssrInterpolate(unref(errors).email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col gap-1.5"${_scopeId}><label for="message" class="text-sm font-medium text-primary-900"${_scopeId}>${ssrInterpolate(unref(t)("form_message"))} *</label><textarea id="message" name="message" rows="4"${ssrRenderAttr("placeholder", unref(t)("form_message_ph"))} class="${ssrRenderClass([inputClass(unref(errors).message), "resize-none"])}"${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea>`);
            if (unref(errors).message) {
              _push2(`<p class="text-xs text-red-500 mt-0.5"${_scopeId}>${ssrInterpolate(unref(errors).message)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(submitError)) {
              _push2(`<p class="text-sm text-red-500 text-center"${_scopeId}>${ssrInterpolate(unref(t)("form_error"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              variant: "primary",
              size: "lg",
              class: "w-full",
              disabled: unref(submitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(submitting)) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(unref(t)("form_submitting"))}</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(unref(t)("form_submit"))}</span>`);
                  }
                } else {
                  return [
                    unref(submitting) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("form_submitting")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("form_submit")), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xs text-neutral-500 text-center"${_scopeId}>${ssrInterpolate(unref(t)("form_confidential"))}</p></form>`);
          } else {
            return [
              createVNode("form", {
                name: "contact",
                method: "POST",
                "data-netlify": "true",
                "netlify-honeypot": "bot-field",
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "flex flex-col gap-5",
                novalidate: ""
              }, [
                createVNode("input", {
                  type: "hidden",
                  name: "form-name",
                  value: "contact"
                }),
                createVNode("p", { class: "hidden" }, [
                  createVNode("label", null, [
                    createTextVNode("Don't fill this out: "),
                    createVNode("input", { name: "bot-field" })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                  createVNode("div", { class: "flex flex-col gap-1.5" }, [
                    createVNode("label", {
                      for: "name",
                      class: "text-sm font-medium text-primary-900"
                    }, toDisplayString(unref(t)("form_name")) + " *", 1),
                    withDirectives(createVNode("input", {
                      id: "name",
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      name: "name",
                      type: "text",
                      placeholder: unref(t)("form_name_ph"),
                      class: inputClass(unref(errors).name),
                      onBlur: ($event) => touch("name")
                    }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                      [vModelText, unref(form).name]
                    ]),
                    unref(errors).name ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-xs text-red-500 mt-0.5"
                    }, toDisplayString(unref(errors).name), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex flex-col gap-1.5" }, [
                    createVNode("label", {
                      for: "company",
                      class: "text-sm font-medium text-primary-900"
                    }, toDisplayString(unref(t)("form_company")) + " *", 1),
                    withDirectives(createVNode("input", {
                      id: "company",
                      "onUpdate:modelValue": ($event) => unref(form).company = $event,
                      name: "company",
                      type: "text",
                      placeholder: unref(t)("form_company_ph"),
                      class: inputClass(unref(errors).company),
                      onBlur: ($event) => touch("company")
                    }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                      [vModelText, unref(form).company]
                    ]),
                    unref(errors).company ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-xs text-red-500 mt-0.5"
                    }, toDisplayString(unref(errors).company), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-1.5" }, [
                  createVNode("label", {
                    for: "email",
                    class: "text-sm font-medium text-primary-900"
                  }, toDisplayString(unref(t)("form_email")) + " *", 1),
                  withDirectives(createVNode("input", {
                    id: "email",
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    name: "email",
                    type: "email",
                    placeholder: unref(t)("form_email_ph"),
                    class: inputClass(unref(errors).email),
                    onBlur: ($event) => touch("email")
                  }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                    [vModelText, unref(form).email]
                  ]),
                  unref(errors).email ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs text-red-500 mt-0.5"
                  }, toDisplayString(unref(errors).email), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex flex-col gap-1.5" }, [
                  createVNode("label", {
                    for: "message",
                    class: "text-sm font-medium text-primary-900"
                  }, toDisplayString(unref(t)("form_message")) + " *", 1),
                  withDirectives(createVNode("textarea", {
                    id: "message",
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    name: "message",
                    rows: "4",
                    placeholder: unref(t)("form_message_ph"),
                    class: [inputClass(unref(errors).message), "resize-none"],
                    onBlur: ($event) => touch("message")
                  }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                    [vModelText, unref(form).message]
                  ]),
                  unref(errors).message ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs text-red-500 mt-0.5"
                  }, toDisplayString(unref(errors).message), 1)) : createCommentVNode("", true)
                ]),
                unref(submitError) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-sm text-red-500 text-center"
                }, toDisplayString(unref(t)("form_error")), 1)) : createCommentVNode("", true),
                createVNode(_component_BaseButton, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "w-full",
                  disabled: unref(submitting)
                }, {
                  default: withCtx(() => [
                    unref(submitting) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("form_submitting")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("form_submit")), 1))
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode("p", { class: "text-xs text-neutral-500 text-center" }, toDisplayString(unref(t)("form_confidential")), 1)
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_SuccessModal, {
        modelValue: unref(showModal),
        "onUpdate:modelValue": ($event) => isRef(showModal) ? showModal.value = $event : null
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSelector",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale } = useI18n();
    const isOpen = ref(false);
    const selectorRef = ref(null);
    const currentLocaleName = computed(() => {
      var _a;
      const current = locales.value.find((l) => l.code === locale.value);
      return (_a = current == null ? void 0 : current.name) != null ? _a : locale.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "selectorRef",
        ref: selectorRef,
        class: "relative"
      }, _attrs))} data-v-9baa3363><button class="flex items-center gap-2 text-white/70 hover:text-white text-xs transition-colors duration-200 py-1.5 px-3 rounded bg-primary-700 hover:bg-primary-500 border border-white/10"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-haspopup="listbox" data-v-9baa3363><svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9baa3363><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-9baa3363></path></svg><span data-v-9baa3363>${ssrInterpolate(unref(currentLocaleName))}</span><svg class="${ssrRenderClass([{ "rotate-180": unref(isOpen) }, "w-3 h-3 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9baa3363><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9baa3363></path></svg></button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute bottom-full mb-2 right-0 bg-primary-700 border border-white/20 rounded-card shadow-xl py-1 min-w-[160px] z-50" role="listbox" data-v-9baa3363><!--[-->`);
        ssrRenderList(unref(locales), (loc) => {
          _push(`<button class="${ssrRenderClass([loc.code === unref(locale) ? "text-accent-400 bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5", "w-full text-left px-4 py-2 text-sm transition-colors duration-150"])}" role="option"${ssrRenderAttr("aria-selected", loc.code === unref(locale))} data-v-9baa3363>${ssrInterpolate(loc.name)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/LanguageSelector.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9baa3363"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const navLinks = computed(() => [
      { label: t("nav_home"), href: "#home" },
      { label: t("nav_services"), href: "#services" },
      { label: t("nav_contact"), href: "#contact" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LanguageSelector = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary-900 text-white" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-3 gap-12"><div class="md:col-span-1"><img${ssrRenderAttr("src", _imports_0)} alt="Venezuela Advisory Services" class="h-[62px] w-auto mb-4"><p class="text-white/60 text-sm leading-relaxed max-w-xs">${ssrInterpolate(unref(t)("footer_tagline"))}</p></div><div><h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4">${ssrInterpolate(unref(t)("footer_navigate"))}</h4><nav class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-white/70 hover:text-white text-sm transition-colors duration-200">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav></div><div><h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4">${ssrInterpolate(unref(t)("footer_contact"))}</h4><div class="flex flex-col gap-3"><a${ssrRenderAttr("href", `mailto:${unref(t)("contact_email")}`)} class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"><span>\u{1F4E7}</span> ${ssrInterpolate(unref(t)("contact_email"))}</a><a${ssrRenderAttr("href", `tel:${unref(t)("contact_phone").split("/")[0].trim().replace(/\s/g, "")}`)} class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"><span>\u{1F4DE}</span> ${ssrInterpolate(unref(t)("contact_phone"))}</a></div></div></div><div class="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-white/40 text-xs"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Venezuela Advisory Services. ${ssrInterpolate(unref(t)("footer_rights"))}</p><div class="flex items-center gap-4"><p class="text-white/30 text-xs">${ssrInterpolate(unref(t)("footer_confidential"))}</p>`);
      _push(ssrRenderComponent(_component_LanguageSelector, null, null, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo_title"),
      description: () => t("seo_description"),
      ogTitle: () => t("seo_og_title"),
      ogDescription: () => t("seo_og_description"),
      ogImage: "/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$d;
      const _component_HeroSection = _sfc_main$c;
      const _component_AboutSection = _sfc_main$b;
      const _component_WhyUsSection = _sfc_main$a;
      const _component_ServicesSection = _sfc_main$7;
      const _component_HowItWorksSection = _sfc_main$6;
      const _component_CtaSection = _sfc_main$5;
      const _component_ContactSection = _sfc_main$3;
      const _component_AppFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_WhyUsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Q-qbSMcd.mjs.map
