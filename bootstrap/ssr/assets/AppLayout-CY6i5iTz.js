import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, mergeProps } from "vue";
import { Combobox, ComboboxInput, ComboboxButton, TransitionRoot, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
import { defineStore } from "pinia";
import debounce from "lodash/debounce.js";
import axios from "axios";
import { router } from "@inertiajs/vue3";
const useCityStore = defineStore("cityStore", () => {
  const cityName = ref("");
  const query = ref("");
  const filteredCities = ref([]);
  const noResults = ref(false);
  const fetchCities = debounce(async (searchQuery) => {
    if (!searchQuery) {
      filteredCities.value = [];
      noResults.value = false;
      return;
    }
    try {
      const response = await axios.get("https://api.thecompaniesapi.com/v2/locations/cities", {
        params: { search: searchQuery }
      });
      filteredCities.value = response.data.cities.map((city) => ({
        id: city.id,
        name: city.name
      }));
      noResults.value = filteredCities.value.length === 0;
    } catch (error) {
      console.error("Error fetching cities:", error);
      noResults.value = true;
    }
  }, 300);
  const onInputChange = (event) => {
    query.value = event.target.value;
    cityName.value = query.value;
    fetchCities(query.value);
  };
  return { cityName, query, filteredCities, noResults, onInputChange };
});
const _sfc_main$2 = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const cityStore = useCityStore();
    ref(null);
    const setSelected = (selectedCity) => {
      cityStore.cityName = (selectedCity == null ? void 0 : selectedCity.name) || "";
    };
    const onSearch = () => {
      const city = cityStore.cityName.trim();
      if (!city) {
        return;
      }
      router.get(route("prayer.show", { city }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}><div class="my-10 w-full sm:w-1/2 lg:w-1/3 mx-auto container">`);
      _push(ssrRenderComponent(unref(Combobox), {
        modelValue: unref(cityStore).cityName,
        "onUpdate:modelValue": [($event) => unref(cityStore).cityName = $event, setSelected]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative mt-1"${_scopeId}><div class="relative w-full cursor-default overflow-hidden rounded-lg bg-gray-900 border border-emerald-500 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ComboboxInput), {
              class: "w-full border-none py-3 pl-4 pr-12 text-base leading-5 text-gray-100 bg-gray-900 focus:ring-0",
              modelValue: unref(cityStore).cityName,
              "onUpdate:modelValue": ($event) => unref(cityStore).cityName = $event,
              onInput: unref(cityStore).onInputChange,
              placeholder: "Find prayer times for a city..."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxButton), { class: "absolute inset-y-0 right-10 flex items-center pr-3" }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="text-emerald-500 hover:text-emerald-300 px-2 py-1 focus:outline-none"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M12.9 14.32a7 7 0 1 1 1.42-1.42l4.39 4.39a1 1 0 0 1-1.42 1.42l-4.39-4.39ZM14 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z" clip-rule="evenodd"${_scopeId}></path></svg></button></div></div>`);
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              onAfterLeave: ($event) => _ctx.query = ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(cityStore).filteredCities.length > 0) {
                    _push3(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(cityStore).filteredCities.length === 0 && unref(cityStore).query !== "") {
                            _push4(`<div class="relative cursor-default select-none px-4 py-2 text-gray-400"${_scopeId3}> No cities found. </div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(cityStore).filteredCities.slice(0, 4), (city) => {
                            _push4(ssrRenderComponent(unref(ComboboxOption), {
                              key: city.id,
                              value: city
                            }, {
                              default: withCtx(({ selected, active }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<li class="${ssrRenderClass([{ "bg-emerald-600 text-white": active, "text-gray-100": !active }, "relative cursor-default select-none py-2 pl-10 pr-4"])}"${_scopeId4}><span class="${ssrRenderClass([{ "font-medium": selected, "font-normal": !selected }, "block truncate"])}"${_scopeId4}>${ssrInterpolate(city.name)}</span>`);
                                  if (selected) {
                                    _push5(`<span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(unref(CheckIcon), {
                                      class: "h-5 w-5 text-emerald-400",
                                      "aria-hidden": "true"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</li>`);
                                } else {
                                  return [
                                    createVNode("li", {
                                      class: ["relative cursor-default select-none py-2 pl-10 pr-4", { "bg-emerald-600 text-white": active, "text-gray-100": !active }]
                                    }, [
                                      createVNode("span", {
                                        class: ["block truncate", { "font-medium": selected, "font-normal": !selected }]
                                      }, toDisplayString(city.name), 3),
                                      selected ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "absolute inset-y-0 left-0 flex items-center pl-3"
                                      }, [
                                        createVNode(unref(CheckIcon), {
                                          class: "h-5 w-5 text-emerald-400",
                                          "aria-hidden": "true"
                                        })
                                      ])) : createCommentVNode("", true)
                                    ], 2)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            unref(cityStore).filteredCities.length === 0 && unref(cityStore).query !== "" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "relative cursor-default select-none px-4 py-2 text-gray-400"
                            }, " No cities found. ")) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(cityStore).filteredCities.slice(0, 4), (city) => {
                              return openBlock(), createBlock(unref(ComboboxOption), {
                                key: city.id,
                                value: city
                              }, {
                                default: withCtx(({ selected, active }) => [
                                  createVNode("li", {
                                    class: ["relative cursor-default select-none py-2 pl-10 pr-4", { "bg-emerald-600 text-white": active, "text-gray-100": !active }]
                                  }, [
                                    createVNode("span", {
                                      class: ["block truncate", { "font-medium": selected, "font-normal": !selected }]
                                    }, toDisplayString(city.name), 3),
                                    selected ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "absolute inset-y-0 left-0 flex items-center pl-3"
                                    }, [
                                      createVNode(unref(CheckIcon), {
                                        class: "h-5 w-5 text-emerald-400",
                                        "aria-hidden": "true"
                                      })
                                    ])) : createCommentVNode("", true)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(cityStore).filteredCities.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                      key: 0,
                      class: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                    }, {
                      default: withCtx(() => [
                        unref(cityStore).filteredCities.length === 0 && unref(cityStore).query !== "" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative cursor-default select-none px-4 py-2 text-gray-400"
                        }, " No cities found. ")) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(cityStore).filteredCities.slice(0, 4), (city) => {
                          return openBlock(), createBlock(unref(ComboboxOption), {
                            key: city.id,
                            value: city
                          }, {
                            default: withCtx(({ selected, active }) => [
                              createVNode("li", {
                                class: ["relative cursor-default select-none py-2 pl-10 pr-4", { "bg-emerald-600 text-white": active, "text-gray-100": !active }]
                              }, [
                                createVNode("span", {
                                  class: ["block truncate", { "font-medium": selected, "font-normal": !selected }]
                                }, toDisplayString(city.name), 3),
                                selected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "absolute inset-y-0 left-0 flex items-center pl-3"
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5 text-emerald-400",
                                    "aria-hidden": "true"
                                  })
                                ])) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative mt-1" }, [
                createVNode("div", { class: "relative w-full cursor-default overflow-hidden rounded-lg bg-gray-900 border border-emerald-500 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(unref(ComboboxInput), {
                      class: "w-full border-none py-3 pl-4 pr-12 text-base leading-5 text-gray-100 bg-gray-900 focus:ring-0",
                      modelValue: unref(cityStore).cityName,
                      "onUpdate:modelValue": ($event) => unref(cityStore).cityName = $event,
                      onInput: unref(cityStore).onInputChange,
                      placeholder: "Find prayer times for a city..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                    createVNode(unref(ComboboxButton), { class: "absolute inset-y-0 right-10 flex items-center pr-3" }),
                    createVNode("button", {
                      type: "button",
                      class: "text-emerald-500 hover:text-emerald-300 px-2 py-1 focus:outline-none",
                      onClick: onSearch
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M12.9 14.32a7 7 0 1 1 1.42-1.42l4.39 4.39a1 1 0 0 1-1.42 1.42l-4.39-4.39ZM14 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z",
                          "clip-rule": "evenodd"
                        })
                      ]))
                    ])
                  ])
                ]),
                createVNode(unref(TransitionRoot), {
                  leave: "transition ease-in duration-100",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  onAfterLeave: ($event) => _ctx.query = ""
                }, {
                  default: withCtx(() => [
                    unref(cityStore).filteredCities.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                      key: 0,
                      class: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                    }, {
                      default: withCtx(() => [
                        unref(cityStore).filteredCities.length === 0 && unref(cityStore).query !== "" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative cursor-default select-none px-4 py-2 text-gray-400"
                        }, " No cities found. ")) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(cityStore).filteredCities.slice(0, 4), (city) => {
                          return openBlock(), createBlock(unref(ComboboxOption), {
                            key: city.id,
                            value: city
                          }, {
                            default: withCtx(({ selected, active }) => [
                              createVNode("li", {
                                class: ["relative cursor-default select-none py-2 pl-10 pr-4", { "bg-emerald-600 text-white": active, "text-gray-100": !active }]
                              }, [
                                createVNode("span", {
                                  class: ["block truncate", { "font-medium": selected, "font-normal": !selected }]
                                }, toDisplayString(city.name), 3),
                                selected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "absolute inset-y-0 left-0 flex items-center pl-3"
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5 text-emerald-400",
                                    "aria-hidden": "true"
                                  })
                                ])) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["onAfterLeave"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Search.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-gray-600 dark:text-gray-400 py-6" }, _attrs))}><div class="container mx-auto px-4 text-center"><p class="text-sm text-gray-500 dark:text-gray-400 mt-4"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Prayer Times. All rights reserved. </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _export_sfc as _,
  _sfc_main as a
};
