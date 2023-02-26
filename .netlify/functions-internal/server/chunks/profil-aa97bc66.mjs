import { _ as __nuxt_component_0 } from './nuxt-link-966a4276.mjs';
import { _ as _export_sfc, h as useSupabaseUser } from './server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-ae26e5a7.mjs';
import { ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './job-0505b3cb.mjs';
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
import './asyncData-b7b62de5.mjs';
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';

const _sfc_main = {
  __name: "profil",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const user = useSupabaseUser();
    const { data: myJobs } = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useFetch(`/api/application/application?email=${(_a = user.value) == null ? void 0 : _a.email}`, "$mOA3XNMbSb");
    }), __temp = await __temp, __restore(), __temp);
    console.log(myJobs);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><h2 class="mb-2 text-2xl font-bold tracking-tight" data-v-aecd3e61>Mon profil</h2><p data-v-aecd3e61>Ma bio :</p><p data-v-aecd3e61>Liste des jobs auquel j&#39;ai postuler :</p><!--[-->`);
      ssrRenderList(unref(myJobs), (myJob) => {
        _push(`<div data-v-aecd3e61><div class="max-w-sm rounded overflow-hidden shadow-lg m-2" data-v-aecd3e61><img class="w-full"${ssrRenderAttr("src", _imports_0)} alt="job" data-v-aecd3e61><div class="px-6 py-4 bg-white" data-v-aecd3e61><div data-v-aecd3e61><h3 class="mb-2 text-2xl font-bold tracking-tight" data-v-aecd3e61>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/job/${myJob.job.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(myJob.job.society)}`);
            } else {
              return [
                createTextVNode(toDisplayString(myJob.job.society), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3></div>`);
        if (myJob.active) {
          _push(`<div data-v-aecd3e61> Job actif</div>`);
        } else {
          _push(`<div class="text-neutral-400" data-v-aecd3e61>Job inactif</div>`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profil.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profil = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aecd3e61"]]);

export { profil as default };
//# sourceMappingURL=profil-aa97bc66.mjs.map
