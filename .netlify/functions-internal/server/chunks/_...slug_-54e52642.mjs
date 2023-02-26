import { useSSRContext, withAsyncContext, mergeProps, withCtx, unref, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
import { _ as __nuxt_component_1 } from './BlogPostMeta-ff7adc1d.mjs';
import _sfc_main$2 from './ContentDoc-96499437.mjs';
import { u as useAsyncData } from './asyncData-b7b62de5.mjs';
import { q as queryContent } from './query-3daa377a.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'cookie-es';
import 'ohash';
import 'unenv/runtime/npm/cross-fetch';
import 'events';
import 'unenv/runtime/npm/debug';
import 'util';
import 'crypto';
import 'url';
import 'bufferutil';
import 'buffer';
import 'utf-8-validate';
import 'http';
import 'https';
import 'typedarray-to-buffer';
import 'yaeti';
import 'defu';
import './netlify.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'scule';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import './composables-583e67d3.mjs';
import './ContentRenderer-3a169184.mjs';
import './ContentRendererMarkdown-67fe9dd3.mjs';
import 'property-information';
import './ContentQuery-d917a800.mjs';
import './utils-28cfcfd1.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-2767a77b><div class="hero-body" data-v-2767a77b><div class="container" data-v-2767a77b><h1 class="title" data-v-2767a77b>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
  ssrRenderSlot(_ctx.$slots, "subtitle", {}, null, _push, _parent);
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2767a77b"]]);
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: blogPost } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({ _path: path }).findOne();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHero = __nuxt_component_0;
      const _component_BlogPostMeta = __nuxt_component_1;
      const _component_ContentDoc = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-5" }, _attrs))} data-v-73ba624d>`);
      _push(ssrRenderComponent(_component_TheHero, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="titleArticle" data-v-73ba624d${_scopeId}>${ssrInterpolate(unref(blogPost).title)}</span>`);
          } else {
            return [
              createVNode("span", { class: "titleArticle" }, toDisplayString(unref(blogPost).title), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BlogPostMeta, {
              author: unref(blogPost).author,
              date: unref(blogPost).dates.published
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BlogPostMeta, {
                author: unref(blogPost).author,
                date: unref(blogPost).dates.published
              }, null, 8, ["author", "date"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="" data-v-73ba624d><section class="grid grid-rows-4 grid-flow-col gap-4" data-v-73ba624d><div class="" data-v-73ba624d><section class="" data-v-73ba624d><div class="" data-v-73ba624d><div class="contentArticle" data-v-73ba624d>`);
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div></div></section></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73ba624d"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-54e52642.mjs.map
