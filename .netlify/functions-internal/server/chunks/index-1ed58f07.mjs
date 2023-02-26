import { _ as __nuxt_component_0$1 } from './nuxt-link-966a4276.mjs';
import { _ as __nuxt_component_1 } from './BlogPostMeta-ff7adc1d.mjs';
import { _ as _export_sfc } from './server.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { u as useAsyncData } from './asyncData-b7b62de5.mjs';
import { q as queryContent } from './query-3daa377a.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
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
import './utils-28cfcfd1.mjs';

const _sfc_main$1 = {
  __name: "BlogPostList",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: blogPostList } = useAsyncData("blogPostList", () => {
      return queryContent("/blog").find();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_BlogPostMeta = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3 gap-4" }, _attrs))} data-v-09d74d80><!--[-->`);
      ssrRenderList(unref(blogPostList), (blogPost) => {
        _push(`<div class="bg-white p-5" data-v-09d74d80>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: blogPost._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="" data-v-09d74d80${_scopeId}>${ssrInterpolate(blogPost.title)}</h3>`);
              _push2(ssrRenderComponent(_component_BlogPostMeta, {
                author: blogPost.author,
                date: blogPost.dates.published
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("h3", { class: "" }, toDisplayString(blogPost.title), 1),
                createVNode(_component_BlogPostMeta, {
                  author: blogPost.author,
                  date: blogPost.dates.published
                }, null, 8, ["author", "date"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09d74d80"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BlogPostList = __nuxt_component_0;
  _push(ssrRenderComponent(_component_BlogPostList, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1ed58f07.mjs.map
