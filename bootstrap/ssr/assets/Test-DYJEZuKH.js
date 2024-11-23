import { ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Test",
  __ssrInlineRender: true,
  props: {
    city: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Test</h1><p>${ssrInterpolate(__props.city)}</p><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
