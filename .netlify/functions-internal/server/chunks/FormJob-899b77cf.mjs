import { d as useRoute } from './server.mjs';
import { useSSRContext, unref } from 'vue';
import { ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FormJob",
  __ssrInlineRender: true,
  props: ["title", "action"],
  setup(__props) {
    const form = __props;
    let society = "";
    let description = "";
    useRoute().params ? useRoute().params : "";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->${ssrInterpolate(form.title)} <div><form${ssrRenderAttr("method", form.action)} action=""><label for="society">Societ\xE9 :</label><input type="text" id="society" name="society"${ssrRenderAttr("value", unref(society))} class="border rounded m-2"><br><label for="description">Description : </label><br><br><textarea id="description" name="description" class="border rounded mb-2 p-2">${ssrInterpolate(unref(description))}</textarea><br><button type="submit" class="border rounded p-2 m-1">Envoyer</button></form></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormJob.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=FormJob-899b77cf.mjs.map
