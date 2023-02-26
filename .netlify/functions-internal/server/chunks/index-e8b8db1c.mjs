import { _ as __nuxt_component_0$1 } from './nuxt-link-966a4276.mjs';
import { useSSRContext, ref, withAsyncContext, unref, withCtx, createTextVNode, mergeProps } from 'vue';
import { _ as _export_sfc, h as useSupabaseUser } from './server.mjs';
import { u as useFetch } from './fetch-ae26e5a7.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white w-max p-6 m-3 border border-gray-200 rounded-lg shadow" }, _attrs))} data-v-19da1a12><h1 data-v-19da1a12>Filtres :</h1><input class="border-gray-300 sm:text-sm" type="text" placeholder="Ville" data-v-19da1a12> <button class="rounded" data-v-19da1a12>Rechercher</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-19da1a12"]]);
const _sfc_main$1 = {
  __name: "JobList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const sort = ref({ query: "nothing" });
    const { data: count } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/job/countJobs/`, "$ZO2C5a5WDm")), __temp = await __temp, __restore(), __temp);
    const { data: jobs, pending, refresh, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(() => `/api/job/job?query=${sort.value.query}`, "$kEY3oDclMD")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><span data-v-c4aff78e>Nombre de jobs : ${ssrInterpolate(unref(count)._count._all)}</span> \xA0\xA0 <button class="rounded job" data-v-c4aff78e>Trier </button><!--[-->`);
      ssrRenderList(unref(jobs), (job) => {
        _push(`<div class="m-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-v-c4aff78e><h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-v-c4aff78e>${ssrInterpolate(job.society)}</h2><h3 data-v-c4aff78e>Job Nuxt</h3><span class="text-neutral-400" data-v-c4aff78e>${ssrInterpolate(job.description)}</span><br data-v-c4aff78e><br data-v-c4aff78e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/job/${job.id}`,
          class: "job"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Voir le job`);
            } else {
              return [
                createTextVNode("Voir le job")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JobList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c4aff78e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_JobList = __nuxt_component_0;
      const _component_Filter = __nuxt_component_1;
      _push(`<!--[--><h1 data-v-5b6b06c9><b data-v-5b6b06c9>Le site de r\xE9f\xE9rence pour trouver ton job sur Nuxt</b></h1><button class="rounded" data-v-5b6b06c9>Je me lance </button><div class="grid grid-cols-3 gap-4" data-v-5b6b06c9><div class="col-span-2" data-v-5b6b06c9>`);
      _push(ssrRenderComponent(_component_JobList, null, null, _parent));
      _push(`</div><div data-v-5b6b06c9>`);
      _push(ssrRenderComponent(_component_Filter, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b6b06c9"]]);

export { index as default };
//# sourceMappingURL=index-e8b8db1c.mjs.map
