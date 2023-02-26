import { _ as __nuxt_component_0 } from './nuxt-link-966a4276.mjs';
import { _ as _export_sfc, h as useSupabaseUser, d as useRoute } from './server.mjs';
import { useSSRContext, ref, withAsyncContext, withCtx, createTextVNode, unref, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './job-0505b3cb.mjs';
import { _ as __nuxt_component_0$1 } from './FormJob-899b77cf.mjs';
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
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';

const _sfc_main$1 = {
  __name: "JobDetails",
  __ssrInlineRender: true,
  props: ["job"],
  setup(__props) {
    const user = useSupabaseUser();
    computed(
      () => {
        var _a;
        return (_a = user.value) == null ? void 0 : _a.email;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-sm rounded overflow-hidden shadow-lg mt-8" }, _attrs))} data-v-84cb189c><img class="w-full"${ssrRenderAttr("src", _imports_0)} alt="job" data-v-84cb189c><div class="px-6 py-4" data-v-84cb189c><div class="font-bold text-xl mb-2" data-v-84cb189c>${ssrInterpolate(__props.job.society)}</div><p class="text-gray-700 text-base" data-v-84cb189c>${ssrInterpolate(__props.job.description)}</p></div><div class="px-6 pt-4 pb-2" data-v-84cb189c><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" data-v-84cb189c>#job</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" data-v-84cb189c>#nuxt</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" data-v-84cb189c>#nuxtjob</span></div><div style="${ssrRenderStyle(unref(user) ? null : { display: "none" })}" class="px-6 py-4 pb-2" data-v-84cb189c><button class="job px-3 py-1" data-v-84cb189c>Postuler</button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/JobDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84cb189c"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const user = useSupabaseUser();
    const title = "Update";
    const action = "PATCH";
    const { id } = useRoute().params;
    const idJob = ref({ query: "getById", params: id });
    const job = ([__temp, __restore] = withAsyncContext(() => $fetch(`/api/job/job?query=${idJob.value.query}&params=${idJob.value.params}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_JobDetails = __nuxt_component_1;
      const _component_FormJob = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "job"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Retour \xE0 la liste des jobs`);
          } else {
            return [
              createTextVNode(" Retour \xE0 la liste des jobs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_JobDetails, { job: unref(job) }, null, _parent));
      _push(`<div style="${ssrRenderStyle(unref(user) ? null : { display: "none" })}" data-v-45181a59>`);
      _push(ssrRenderComponent(_component_FormJob, {
        title,
        action
      }, null, _parent));
      _push(`<button class="job" data-v-45181a59>Supprimer le Job</button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/job/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45181a59"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-9fc89357.mjs.map
