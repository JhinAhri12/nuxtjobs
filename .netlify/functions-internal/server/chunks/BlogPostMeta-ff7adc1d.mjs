import { useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "BlogPostMeta",
  __ssrInlineRender: true,
  props: {
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "info"
    }
  },
  setup(__props) {
    const props = __props;
    const formattedDate = computed(() => {
      return new Date(props.date).toDateString();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><span class="text-teal-400">${ssrInterpolate(__props.author)}</span>\xA0 <span class="text-teal-400">${ssrInterpolate(unref(formattedDate))}</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPostMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BlogPostMeta-ff7adc1d.mjs.map
