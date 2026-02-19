import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, reactive, openBlock, createBlock, createVNode, withModifiers, withDirectives, vModelText, computed, resolveDynamicComponent, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useSeoMeta } from './v3-BZTb8WBQ.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './server.mjs';
import 'vue-router';

const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navLinks = [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" }
    ];
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$c;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-300", unref(scrolled) ? "bg-primary-900 shadow-lg" : "bg-transparent"]
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16 sm:h-20"><a href="#home" class="flex-shrink-0" aria-label="VAS Home"><img${ssrRenderAttr("src", unref(scrolled) ? "/logo-white.svg" : "/logo-white.svg")} alt="Venezuela Advisory Services" class="h-8 sm:h-10 w-auto"></a><nav class="hidden md:flex items-center gap-8" aria-label="Main navigation"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
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
            _push2(` Request a Consultation `);
          } else {
            return [
              createTextVNode(" Request a Consultation ")
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
      ssrRenderList(navLinks, (link) => {
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
            _push2(` Request a Consultation `);
          } else {
            return [
              createTextVNode(" Request a Consultation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></header>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const company_name = "Venezuela Advisory";
const tagline = "Your Trusted Partner in Venezuela";
const hero_headline = "Enter Venezuela with Confidence. We Handle the Complexity.";
const hero_subheadline = "From company setup and regulatory compliance to local representation and talent sourcing, we provide the on-the-ground expertise international companies need to operate successfully in Venezuela.";
const hero_cta_primary = "Request a Consultation";
const hero_cta_secondary = "Explore Our Services";
const about_headline = "Your Trusted Partner in Venezuela";
const about_body = "We provide hands-on business advisory and operational support for foreign and local companies navigating Venezuela's regulatory environment. Our focus is practical execution, compliance, and reliable on-the-ground solutions. From market entry to ongoing operations, we coordinate every step with local authorities and partners.";
const why_us = [{ "icon": "\u{1F3DB}\uFE0F", "title": "Local Expertise with International Standards", "description": "We combine deep knowledge of Venezuela's regulatory landscape with international best practices. Our team ensures your operations meet both local requirements and global expectations." }, { "icon": "\u{1F91D}", "title": "Direct Coordination with Authorities", "description": "We liaise directly with government agencies, registries, and regulatory bodies on your behalf. This ensures faster processing and fewer obstacles in your business setup." }, { "icon": "\u2705", "title": "Reliable Execution and Follow-Through", "description": "We manage every step from filing to approval, keeping you informed throughout. Our hands-on approach means nothing falls through the cracks." }, { "icon": "\u{1F512}", "title": "Confidential and Professional Service", "description": "We handle all engagements with strict confidentiality and professionalism. Your business plans and operations remain secure with us." }];
const services = [{ "title": "Market Entry & Company Setup", "description": "Company incorporation, commercial registry registration, Tax ID (RIF) processing, registration with tax and labor authorities, and support with local bank account opening.", "icon": "\u{1F3E2}" }, { "title": "Permits & Regulatory Management", "description": "Municipal business licenses, industry-specific permits, sanitary registrations, renewals and compliance follow-up to keep your operations fully authorized.", "icon": "\u{1F4CB}" }, { "title": "Legal Coordination", "description": "Corporate legal support, contract drafting and review, and labor law coordination through trusted partner firms.", "icon": "\u2696\uFE0F" }, { "title": "Local Representation & Back Office", "description": "Fiscal address services, local legal representative appointment, and official notification handling for your company in Venezuela.", "icon": "\u{1F4CD}" }, { "title": "Real Estate & Relocation Support", "description": "Office and commercial space search, warehouse and industrial facilities sourcing, and residential housing for executives relocating to Venezuela.", "icon": "\u{1F3E0}" }, { "title": "Talent Search & Hiring Support", "description": "Local talent sourcing, executive search, and hiring coordination to build your team with qualified Venezuelan professionals.", "icon": "\u{1F465}" }];
const how_it_works = [{ "step": 1, "title": "Initial Consultation", "description": "Contact us to discuss your business needs, timeline, and objectives for entering or operating in Venezuela." }, { "step": 2, "title": "Strategy & Planning", "description": "We assess regulatory requirements, identify necessary permits and registrations, and develop a tailored action plan for your operation." }, { "step": 3, "title": "Execution & Coordination", "description": "We handle filings, registrations, permits, and coordination with local authorities and partners on your behalf." }, { "step": 4, "title": "Ongoing Support", "description": "We provide continued compliance tracking, renewals, local representation, and operational support as your business grows." }];
const cta_headline = "Ready to Operate in Venezuela?";
const cta_body = "Contact us to discuss your business needs and learn how we can help you navigate Venezuela's regulatory environment with confidence.";
const cta_button = "Get in Touch";
const contact_email = "info@venezuelaadvisory.com";
const contact_phone = "+58 212 5644313 / 5643321";
const brand_voice = "Professional, reliable, direct, and service-oriented with a focus on practical execution and compliance";
const industry = "Business Advisory & Consulting \u2013 Market Entry and Operations in Venezuela";
const footer_tagline = "Your Trusted Partner for Business Operations in Venezuela";
const nav_links = [{ "label": "Home", "href": "#home" }, { "label": "Services", "href": "#services" }, { "label": "Contact", "href": "#contact" }];
const vasContent = {
  company_name,
  tagline,
  hero_headline,
  hero_subheadline,
  hero_cta_primary,
  hero_cta_secondary,
  about_headline,
  about_body,
  why_us,
  services,
  how_it_works,
  cta_headline,
  cta_body,
  cta_button,
  contact_email,
  contact_phone,
  brand_voice,
  industry,
  footer_tagline,
  nav_links
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    const stats = [
      { value: "6", label: "Service Areas" },
      { value: "100%", label: "Local Execution" },
      { value: "Confidential", label: "Professional Service" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$c;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "relative min-h-screen bg-primary-900 flex items-center overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 opacity-5" aria-hidden="true"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"></rect></svg></div><div class="absolute top-0 left-0 right-0 h-1 bg-accent-500" aria-hidden="true"></div><div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"><div class="max-w-3xl"><div class="inline-flex items-center gap-2 bg-accent-500/20 text-accent-400 text-sm font-sans font-medium px-4 py-2 rounded-full mb-8 border border-accent-500/30"><span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span> Business Advisory \u2014 Venezuela </div><h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">${ssrInterpolate(unref(content).hero_headline)}</h1><p class="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">${ssrInterpolate(unref(content).hero_subheadline)}</p><div class="flex flex-col sm:flex-row gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "primary",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(content).hero_cta_primary)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(content).hero_cta_primary), 1)
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
            _push2(`${ssrInterpolate(unref(content).hero_cta_secondary)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(content).hero_cta_secondary), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-16 flex flex-wrap gap-8"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="flex flex-col"><span class="font-display font-bold text-2xl text-accent-400">${ssrInterpolate(stat.value)}</span><span class="text-white/50 text-sm mt-1">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30" aria-hidden="true"><span class="text-xs font-sans">Scroll</span><svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    const pillars = [
      {
        icon: "\u{1F3DB}\uFE0F",
        label: "Local Expertise",
        description: "Deep familiarity with Venezuelan regulations, authorities, and business culture."
      },
      {
        icon: "\u{1F310}",
        label: "International Standards",
        description: "Professional, reliable, and confidential service that global companies expect."
      },
      {
        icon: "\u2699\uFE0F",
        label: "Practical Execution",
        description: "Not just advice \u2014 we handle the process from start to finish."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-4"> About Us </p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6">${ssrInterpolate(unref(content).about_headline)}</h2><p class="text-neutral-600 text-lg leading-relaxed mb-8">${ssrInterpolate(unref(content).about_body)}</p><div class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(pillars, (pillar) => {
        _push(`<div class="flex items-start gap-4"><div class="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center mt-0.5"><span class="text-lg">${ssrInterpolate(pillar.icon)}</span></div><div><h4 class="font-display font-semibold text-primary-900 text-base">${ssrInterpolate(pillar.label)}</h4><p class="text-neutral-600 text-sm mt-1">${ssrInterpolate(pillar.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="relative"><div class="bg-primary-900 rounded-card p-10 text-white relative overflow-hidden"><div class="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-bl-full" aria-hidden="true"></div><blockquote class="relative z-10"><div class="text-accent-400 text-5xl font-display font-bold leading-none mb-4">&quot;</div><p class="text-white/90 text-xl font-display font-semibold leading-relaxed mb-8"> Venezuela is complex.<br>We make it manageable. </p><div class="border-t border-white/10 pt-6"><p class="text-white/60 text-sm"> Our approach combines local knowledge with international professional standards \u2014 ensuring your business enters and operates with confidence. </p></div></blockquote></div><div class="absolute -bottom-6 -left-6 bg-accent-500 text-white rounded-card p-5 shadow-xl max-w-[180px]"><p class="font-display font-bold text-2xl">On-the-ground</p><p class="text-white/80 text-xs mt-1">Local execution. International standards.</p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AboutSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "WhyUsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "why-us",
        class: "section-padding bg-primary-900"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3"> Why Choose VAS </p><h2 class="font-display font-bold text-4xl text-white leading-tight max-w-2xl mx-auto"> Why Companies Choose Us </h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(unref(content).why_us, (item, index) => {
        _push(`<div class="bg-white/5 border border-white/10 rounded-card p-8 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-200 group"><div class="text-3xl mb-4">${ssrInterpolate(item.icon)}</div><div class="text-accent-400 font-display font-bold text-4xl mb-4 opacity-30 leading-none"> 0${ssrInterpolate(index + 1)}</div><h3 class="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-400 transition-colors duration-200">${ssrInterpolate(item.title)}</h3><p class="text-white/60 text-sm leading-relaxed">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/WhyUsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BaseCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    service: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$7;
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ServiceCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceCard = _sfc_main$6;
      const _component_BaseButton = _sfc_main$c;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3"> Our Services </p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight max-w-2xl mx-auto"> End-to-End Business Support in Venezuela </h2><p class="text-neutral-600 text-lg mt-4 max-w-2xl mx-auto"> From initial setup to ongoing operations \u2014 we cover every aspect of doing business in Venezuela. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(content).services, (service) => {
        _push(ssrRenderComponent(_component_ServiceCard, {
          key: service.title,
          service
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="text-center mt-12"><p class="text-neutral-600 mb-4">Need a service not listed here? We handle bespoke requirements.</p>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "outline",
        size: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Discuss Your Needs `);
          } else {
            return [
              createTextVNode(" Discuss Your Needs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServicesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "section-padding bg-primary-700"
      }, _attrs))}><div class="container-max"><div class="text-center mb-16"><p class="font-display font-semibold text-accent-400 text-sm uppercase tracking-widest mb-3"> The Process </p><h2 class="font-display font-bold text-4xl text-white leading-tight"> How It Works </h2><p class="text-white/60 text-lg mt-4 max-w-xl mx-auto"> A simple, structured approach to getting your business operational in Venezuela. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"><!--[-->`);
      ssrRenderList(unref(content).how_it_works, (step) => {
        _push(`<div class="relative flex flex-col items-center text-center"><div class="relative z-10 w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-lg ring-4 ring-primary-700"><span class="font-display font-bold text-2xl text-white">${ssrInterpolate(step.step)}</span></div><h3 class="font-display font-bold text-2xl text-white mb-3">${ssrInterpolate(step.title)}</h3><p class="text-white/60 text-base leading-relaxed max-w-xs">${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HowItWorksSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$c;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bg-accent-500" }, _attrs))}><div class="container-max text-center"><h2 class="font-display font-bold text-4xl sm:text-5xl text-primary-900 leading-tight mb-6">${ssrInterpolate(unref(content).cta_headline)}</h2><p class="text-primary-900/70 text-xl mb-10 max-w-xl mx-auto">${ssrInterpolate(unref(content).cta_body)}</p>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        href: "#contact",
        variant: "navy",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(content).cta_button)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(content).cta_button), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CtaSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    const submitted = ref(false);
    const form = reactive({
      name: "",
      company: "",
      email: "",
      message: ""
    });
    function handleSubmit() {
      const subject = encodeURIComponent(`Consultation Request from ${form.company}`);
      const body = encodeURIComponent(
        `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}

Message:
${form.message}`
      );
      (void 0).location.href = `mailto:${content.contact_email}?subject=${subject}&body=${body}`;
      submitted.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$7;
      const _component_BaseButton = _sfc_main$c;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "section-padding bg-neutral-50"
      }, _attrs))}><div class="container-max"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3"> Contact Us </p><h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6"> Get in Touch </h2><p class="text-neutral-600 text-lg leading-relaxed mb-10"> Ready to explore how VAS can help your business enter or operate in Venezuela? Reach out for a confidential consultation. </p><div class="flex flex-col gap-6"><a${ssrRenderAttr("href", `mailto:${unref(content).contact_email}`)} class="flex items-center gap-4 group"><div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-200"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">Email</p><p class="text-primary-900 font-semibold group-hover:text-accent-500 transition-colors duration-200">${ssrInterpolate(unref(content).contact_email)}</p></div></a><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">Phone</p><p class="text-primary-900 font-semibold">${ssrInterpolate(unref(content).contact_phone)}</p></div></div></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        variant: "elevated",
        padding: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col gap-5"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><div class="flex flex-col gap-1.5"${_scopeId}><label for="name" class="text-sm font-medium text-primary-900"${_scopeId}>Full Name *</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="John Smith" class="w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"${_scopeId}></div><div class="flex flex-col gap-1.5"${_scopeId}><label for="company" class="text-sm font-medium text-primary-900"${_scopeId}>Company *</label><input id="company"${ssrRenderAttr("value", unref(form).company)} type="text" required placeholder="Company Name" class="w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"${_scopeId}></div></div><div class="flex flex-col gap-1.5"${_scopeId}><label for="email" class="text-sm font-medium text-primary-900"${_scopeId}>Email Address *</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="john@company.com" class="w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"${_scopeId}></div><div class="flex flex-col gap-1.5"${_scopeId}><label for="message" class="text-sm font-medium text-primary-900"${_scopeId}>How can we help? *</label><textarea id="message" required rows="4" placeholder="Tell us about your business needs in Venezuela..." class="w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all resize-none"${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              variant: "primary",
              size: "lg",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(submitted)) {
                    _push3(`<span${_scopeId2}>Send Message</span>`);
                  } else {
                    _push3(`<span${_scopeId2}>Message Sent!</span>`);
                  }
                } else {
                  return [
                    !unref(submitted) ? (openBlock(), createBlock("span", { key: 0 }, "Send Message")) : (openBlock(), createBlock("span", { key: 1 }, "Message Sent!"))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xs text-neutral-500 text-center"${_scopeId}> All inquiries are handled with strict confidentiality. </p></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "flex flex-col gap-5"
              }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                  createVNode("div", { class: "flex flex-col gap-1.5" }, [
                    createVNode("label", {
                      for: "name",
                      class: "text-sm font-medium text-primary-900"
                    }, "Full Name *"),
                    withDirectives(createVNode("input", {
                      id: "name",
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      type: "text",
                      required: "",
                      placeholder: "John Smith",
                      class: "w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).name]
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col gap-1.5" }, [
                    createVNode("label", {
                      for: "company",
                      class: "text-sm font-medium text-primary-900"
                    }, "Company *"),
                    withDirectives(createVNode("input", {
                      id: "company",
                      "onUpdate:modelValue": ($event) => unref(form).company = $event,
                      type: "text",
                      required: "",
                      placeholder: "Company Name",
                      class: "w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).company]
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-1.5" }, [
                  createVNode("label", {
                    for: "email",
                    class: "text-sm font-medium text-primary-900"
                  }, "Email Address *"),
                  withDirectives(createVNode("input", {
                    id: "email",
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    required: "",
                    placeholder: "john@company.com",
                    class: "w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).email]
                  ])
                ]),
                createVNode("div", { class: "flex flex-col gap-1.5" }, [
                  createVNode("label", {
                    for: "message",
                    class: "text-sm font-medium text-primary-900"
                  }, "How can we help? *"),
                  withDirectives(createVNode("textarea", {
                    id: "message",
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    required: "",
                    rows: "4",
                    placeholder: "Tell us about your business needs in Venezuela...",
                    class: "w-full px-4 py-3 rounded-card border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all resize-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).message]
                  ])
                ]),
                createVNode(_component_BaseButton, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    !unref(submitted) ? (openBlock(), createBlock("span", { key: 0 }, "Send Message")) : (openBlock(), createBlock("span", { key: 1 }, "Message Sent!"))
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-xs text-neutral-500 text-center" }, " All inquiries are handled with strict confidentiality. ")
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo-white.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const content = vasContent;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary-900 text-white" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-3 gap-12"><div class="md:col-span-1"><img${ssrRenderAttr("src", _imports_0)} alt="Venezuela Advisory Services" class="h-10 w-auto mb-4"><p class="text-white/60 text-sm leading-relaxed max-w-xs">${ssrInterpolate(unref(content).footer_tagline)}</p></div><div><h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4"> Navigate </h4><nav class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(content).nav_links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-white/70 hover:text-white text-sm transition-colors duration-200">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav></div><div><h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4"> Contact </h4><div class="flex flex-col gap-3"><a${ssrRenderAttr("href", `mailto:${unref(content).contact_email}`)} class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"><span>\u{1F4E7}</span> ${ssrInterpolate(unref(content).contact_email)}</a><a${ssrRenderAttr("href", `tel:${unref(content).contact_phone.split("/")[0].trim().replace(/\s/g, "")}`)} class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"><span>\u{1F4DE}</span> ${ssrInterpolate(unref(content).contact_phone)}</a></div></div></div><div class="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-white/40 text-xs"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Venezuela Advisory Services. All rights reserved. </p><p class="text-white/30 text-xs"> Confidential &amp; Professional Business Advisory </p></div></div></footer>`);
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
    useSeoMeta({
      title: "Venezuela Advisory Services \u2014 Market Entry & Business Advisory",
      ogTitle: "Venezuela Advisory Services",
      description: "Helping companies enter and operate in Venezuela. Market entry, regulatory support, permits & licenses, local representation, real estate, and talent sourcing.",
      ogDescription: "Your trusted partner for doing business in Venezuela.",
      ogImage: "/og-image.png",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$b;
      const _component_HeroSection = _sfc_main$a;
      const _component_AboutSection = _sfc_main$9;
      const _component_WhyUsSection = _sfc_main$8;
      const _component_ServicesSection = _sfc_main$5;
      const _component_HowItWorksSection = _sfc_main$4;
      const _component_CtaSection = _sfc_main$3;
      const _component_ContactSection = _sfc_main$2;
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
//# sourceMappingURL=index-BzoXmvVs.mjs.map
