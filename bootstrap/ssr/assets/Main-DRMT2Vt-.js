import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { a as _sfc_main$1 } from "./AppLayout-CY6i5iTz.js";
import { usePage, Head } from "@inertiajs/vue3";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
import "pinia";
import "lodash/debounce.js";
import "axios";
const _sfc_main = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const url = usePage().url;
    const fullUrl = `${window.location.origin}${url}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Prayer Times in All Countries Around the World" }, null, _parent));
      _push(`<meta name="description" content="Discover accurate prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in your location and around the world."><meta name="robots" content="index, follow"><meta property="og:title" content="Prayer Times in All Countries Around the World"><meta property="og:description" content="Discover accurate prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in your location and around the world."><meta property="og:type" content="article"><meta property="og:url"${ssrRenderAttr("content", fullUrl)}><link rel="canonical"${ssrRenderAttr("href", fullUrl)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="px-6 py-12 my-36"${_scopeId}><header class="mb-6 text-center"${_scopeId}><h1 class="text-3xl font-bold dark:text-white"${_scopeId}> Prayer Times in All Countries Around the World </h1><p class="mt-4 text-gray-600 dark:text-gray-400 font-semibold"${_scopeId}> Discover accurate prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in your location and around the world. </p></header><article class="max-w-3xl mx-auto text-gray-800 dark:text-gray-300 leading-relaxed"${_scopeId}><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>The Significance of Prayer in Islam</h2><p${_scopeId}> Muslims worldwide observe five daily prayers, known as <strong${_scopeId}>Salat</strong> or <strong${_scopeId}>Namaz</strong>, as part of their daily worship. These prayers are not only acts of devotion but also a way to maintain a close connection with Allah. </p></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>Understanding the Five Daily Prayers</h2><ul class="list-disc list-inside"${_scopeId}><li${_scopeId}><strong${_scopeId}>Fajr</strong>: The early morning prayer performed at dawn.</li><li${_scopeId}><strong${_scopeId}>Dhuhr</strong>: The midday prayer performed after the sun passes its zenith.</li><li${_scopeId}><strong${_scopeId}>Asr</strong>: The late afternoon prayer, observed in the late part of the day.</li><li${_scopeId}><strong${_scopeId}>Maghrib</strong>: The evening prayer at sunset.</li><li${_scopeId}><strong${_scopeId}>Isha</strong>: The night prayer, observed after twilight disappears.</li></ul></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>Why Prayer Times Vary by Location and Season</h2><p${_scopeId}> Prayer times are based on the position of the sun, so they vary by location and season. For instance, in <em${_scopeId}>[City, Country]</em>, Fajr and Isha timings may vary significantly between summer and winter. Understanding these changes helps Muslims observe each prayer at the proper time. </p></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>How to Find Accurate Prayer Times</h2><p${_scopeId}> Many local mosques post accurate daily prayer times, and websites or mobile apps like <strong${_scopeId}>YourWebsiteName</strong> provide customized schedules based on your location. Finding accurate times is essential for timely and meaningful prayer. </p></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>Typical Prayer Schedule for [City, Country]</h2><ul class="list-disc list-inside"${_scopeId}><li${_scopeId}><strong${_scopeId}>Fajr</strong>: 5:00 AM</li><li${_scopeId}><strong${_scopeId}>Dhuhr</strong>: 12:30 PM</li><li${_scopeId}><strong${_scopeId}>Asr</strong>: 3:45 PM</li><li${_scopeId}><strong${_scopeId}>Maghrib</strong>: 6:20 PM</li><li${_scopeId}><strong${_scopeId}>Isha</strong>: 8:00 PM</li></ul></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>Tips for Maintaining Prayer in a Busy Schedule</h2><p${_scopeId}>Here are a few tips to help you stay consistent with your prayers:</p><ul class="list-disc list-inside"${_scopeId}><li${_scopeId}><strong${_scopeId}>Set reminders</strong>: Use an app or alarm to remind you of each prayer time.</li><li${_scopeId}><strong${_scopeId}>Incorporate prayer into your daily schedule</strong>: This ensures you won’t miss a prayer.</li><li${_scopeId}><strong${_scopeId}>Find prayer spaces</strong>: Many workplaces and public areas now offer designated prayer spaces.</li></ul></section><section class="mb-6"${_scopeId}><h2 class="text-2xl font-semibold mb-2 dark:text-emerald-400"${_scopeId}>Conclusion: The Spiritual Benefits of Observing Prayer Times</h2><p${_scopeId}> Consistently observing prayer times brings a sense of discipline, peace, and spirituality. For Muslims, prayer is a pillar of faith and a way to strengthen their relationship with Allah. </p></section></article></section>`);
          } else {
            return [
              createVNode("section", { class: "px-6 py-12 my-36" }, [
                createVNode("header", { class: "mb-6 text-center" }, [
                  createVNode("h1", { class: "text-3xl font-bold dark:text-white" }, " Prayer Times in All Countries Around the World "),
                  createVNode("p", { class: "mt-4 text-gray-600 dark:text-gray-400 font-semibold" }, " Discover accurate prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in your location and around the world. ")
                ]),
                createVNode("article", { class: "max-w-3xl mx-auto text-gray-800 dark:text-gray-300 leading-relaxed" }, [
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "The Significance of Prayer in Islam"),
                    createVNode("p", null, [
                      createTextVNode(" Muslims worldwide observe five daily prayers, known as "),
                      createVNode("strong", null, "Salat"),
                      createTextVNode(" or "),
                      createVNode("strong", null, "Namaz"),
                      createTextVNode(", as part of their daily worship. These prayers are not only acts of devotion but also a way to maintain a close connection with Allah. ")
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "Understanding the Five Daily Prayers"),
                    createVNode("ul", { class: "list-disc list-inside" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Fajr"),
                        createTextVNode(": The early morning prayer performed at dawn.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Dhuhr"),
                        createTextVNode(": The midday prayer performed after the sun passes its zenith.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Asr"),
                        createTextVNode(": The late afternoon prayer, observed in the late part of the day.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Maghrib"),
                        createTextVNode(": The evening prayer at sunset.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Isha"),
                        createTextVNode(": The night prayer, observed after twilight disappears.")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "Why Prayer Times Vary by Location and Season"),
                    createVNode("p", null, [
                      createTextVNode(" Prayer times are based on the position of the sun, so they vary by location and season. For instance, in "),
                      createVNode("em", null, "[City, Country]"),
                      createTextVNode(", Fajr and Isha timings may vary significantly between summer and winter. Understanding these changes helps Muslims observe each prayer at the proper time. ")
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "How to Find Accurate Prayer Times"),
                    createVNode("p", null, [
                      createTextVNode(" Many local mosques post accurate daily prayer times, and websites or mobile apps like "),
                      createVNode("strong", null, "YourWebsiteName"),
                      createTextVNode(" provide customized schedules based on your location. Finding accurate times is essential for timely and meaningful prayer. ")
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "Typical Prayer Schedule for [City, Country]"),
                    createVNode("ul", { class: "list-disc list-inside" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Fajr"),
                        createTextVNode(": 5:00 AM")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Dhuhr"),
                        createTextVNode(": 12:30 PM")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Asr"),
                        createTextVNode(": 3:45 PM")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Maghrib"),
                        createTextVNode(": 6:20 PM")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Isha"),
                        createTextVNode(": 8:00 PM")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "Tips for Maintaining Prayer in a Busy Schedule"),
                    createVNode("p", null, "Here are a few tips to help you stay consistent with your prayers:"),
                    createVNode("ul", { class: "list-disc list-inside" }, [
                      createVNode("li", null, [
                        createVNode("strong", null, "Set reminders"),
                        createTextVNode(": Use an app or alarm to remind you of each prayer time.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Incorporate prayer into your daily schedule"),
                        createTextVNode(": This ensures you won’t miss a prayer.")
                      ]),
                      createVNode("li", null, [
                        createVNode("strong", null, "Find prayer spaces"),
                        createTextVNode(": Many workplaces and public areas now offer designated prayer spaces.")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "mb-6" }, [
                    createVNode("h2", { class: "text-2xl font-semibold mb-2 dark:text-emerald-400" }, "Conclusion: The Spiritual Benefits of Observing Prayer Times"),
                    createVNode("p", null, " Consistently observing prayer times brings a sense of discipline, peace, and spirituality. For Muslims, prayer is a pillar of faith and a way to strengthen their relationship with Allah. ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
