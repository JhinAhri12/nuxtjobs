import { _ as _export_sfc, j as useSupabaseAuthClient } from './server.mjs';
import { useSSRContext, reactive, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  __name: "Signup",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseAuthClient();
    const state = reactive({
      loading: false,
      disabled: false,
      email: void 0,
      success: false,
      error: void 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container mx-auto text-center border rounded border-slate-400 py-4 px-5 my-5",
        style: { "max-width": "800px" }
      }, _attrs))} data-v-7ce4eab5><h1 class="mb-4" data-v-7ce4eab5> Formulaire d&#39;inscription \xE0 Nuxt Jobs </h1>`);
      if (unref(state).success) {
        _push(`<div class="bg-teal-500/50 border border-teal-500 rounded px-3 py-2 mb-4 text-white" data-v-7ce4eab5> Ouvrez votre bo\xEEte e-mail pour vous connecter :) </div>`);
      } else {
        _push(`<div data-v-7ce4eab5><p class="mb-4" data-v-7ce4eab5> Pour vous incrire, ajoutez votre e-mail et vous recevrez un lien magique. </p><input${ssrRenderAttr("value", unref(state).email)} type="text" placeholder="email" class="border" data-v-7ce4eab5>`);
        if (unref(state).error) {
          _push(`<div class="bg-red-500/50 border border-red-500 rounded px-3 py-2 mb-4 text-white" data-v-7ce4eab5>${ssrInterpolate(unref(state).error)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button${ssrIncludeBooleanAttr(unref(state).disabled) ? " disabled" : ""} class="block mx-auto job" data-v-7ce4eab5>${ssrInterpolate(unref(state).loading ? "Loading..." : "Envoi du lien magique")}</button></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Signup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ce4eab5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Signup = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Signup, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { signup as default };
//# sourceMappingURL=signup-79d5f2ed.mjs.map
