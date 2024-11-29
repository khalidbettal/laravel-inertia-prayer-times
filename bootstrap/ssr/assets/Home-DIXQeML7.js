import { ref, useSSRContext, mergeProps, computed, unref, onMounted, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { router, Head, usePage } from "@inertiajs/vue3";
import { _ as _export_sfc, a as _sfc_main$4 } from "./AppLayout-CY6i5iTz.js";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
import "pinia";
import "lodash/debounce.js";
import "axios";
function useTimeFormat() {
  function formatTimeToAmPm(time) {
    const [hour, minute] = time.split(":");
    const date = /* @__PURE__ */ new Date();
    date.setHours(hour, minute);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }).format(date);
  }
  return { formatTimeToAmPm };
}
function useLanguageToggle() {
  const isArabic = ref(false);
  function toggleLanguage() {
    isArabic.value = !isArabic.value;
  }
  function getArabicPrayerName(englishName) {
    const arabicNames = {
      "Fajr": "الفجر",
      "Dhuhr": "الظهر",
      "Asr": "العصر",
      "Maghrib": "المغرب",
      "Isha": "العشاء"
    };
    return arabicNames[englishName] || englishName;
  }
  return { isArabic, toggleLanguage, getArabicPrayerName };
}
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-emerald-400 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong",
    disabled: ""
  }, _attrs))}><span class="sm:text-2xl">Please wait...</span></button>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Spinner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "PrayerTime",
  __ssrInlineRender: true,
  props: {
    prayerTimes: Object,
    date: String,
    country: String,
    city: String,
    error: String
  },
  setup(__props) {
    const props = __props;
    const mainPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const { formatTimeToAmPm } = useTimeFormat();
    const { isArabic, toggleLanguage, getArabicPrayerName } = useLanguageToggle();
    const filteredPrayerTimes = computed(() => {
      return mainPrayers.filter((prayer) => prayer in props.prayerTimes);
    });
    const isLoading = ref(false);
    router.on("start", () => isLoading.value = true);
    router.on("finish", () => isLoading.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prayer-time-container dark:bg-gray-800 dark:border-emerald-400" }, _attrs))}>`);
      if (isLoading.value) {
        _push(`<section class="text-center py-6" aria-live="polite">`);
        _push(ssrRenderComponent(Spinner, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error) {
        _push(`<section class="error dark:text-red-300 text-center sm:text-2xl" aria-live="assertive"><p>XX: ${ssrInterpolate(props.error)}</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section style="${ssrRenderStyle(!props.error && !isLoading.value ? null : { display: "none" })}"><button class="px-4 py-2 rounded bg-emerald-500 text-white mb-4" aria-label="Switch Language"> Switch to ${ssrInterpolate(unref(isArabic) ? "English" : "Arabic")}</button><h1 class="title dark:text-white">Prayer Times for ${ssrInterpolate(__props.city)}</h1><h2 class="date dark:text-emerald-300 font-bold">${ssrInterpolate(__props.country)}</h2><h3 class="date dark:text-emerald-300 font-bold">${ssrInterpolate(__props.date)}</h3><div class="prayer-times-list"><!--[-->`);
      ssrRenderList(filteredPrayerTimes.value, (prayer, index) => {
        _push(`<div class="prayer-item dark:bg-gray-700 dark:hover:bg-indigo-900"><h4 class="prayer-name dark:text-emerald-400">${ssrInterpolate(unref(isArabic) ? unref(getArabicPrayerName)(prayer) : prayer)}</h4><p class="prayer-time dark:text-white">${ssrInterpolate(unref(formatTimeToAmPm)(__props.prayerTimes[prayer]))}</p></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrayerTime.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MetaTags",
  __ssrInlineRender: true,
  props: {
    city: String,
    country: String,
    date: String,
    parayertimes: Object,
    fullUrl: String
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": `Prayer Times in ${props.city}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": props.city,
          "addressCountry": props.country
        },
        "description": `Daily prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha in ${props.city}, ${props.country}.`,
        "url": props.fullUrl
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: `Prayer Times for ${__props.city} - ${__props.country}`
      }, null, _parent));
      _push(`<meta name="description"${ssrRenderAttr("content", `Find daily prayer times in ${__props.city}, ${__props.country} for ${__props.date}. Fajr: ${__props.parayertimes["Fajr"]}, Dhuhr: ${__props.parayertimes["Dhuhr"]}, Asr: ${__props.parayertimes["Asr"]}, Maghrib: ${__props.parayertimes["Maghrib"]}, Isha: ${__props.parayertimes["Isha"]}. Azan times for prayer in ${__props.city}, ${__props.country}.`)}><link rel="canonical"${ssrRenderAttr("href", __props.fullUrl)}><meta name="robots" content="index, follow"><meta property="og:title"${ssrRenderAttr("content", `Prayer Times for ${__props.city} - ${__props.country}`)}><meta property="og:description"${ssrRenderAttr("content", `Daily prayer times in ${__props.city}, ${__props.country} for ${__props.date}. Fajr: ${__props.parayertimes["Fajr"]}, Dhuhr: ${__props.parayertimes["Dhuhr"]}, Asr: ${__props.parayertimes["Asr"]}, Maghrib: ${__props.parayertimes["Maghrib"]}, Isha: ${__props.parayertimes["Isha"]}.`)}><meta property="og:type" content="website"><meta property="og:url"${ssrRenderAttr("content", __props.fullUrl)}><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MetaTags.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    prayerTimes: Object,
    date: String,
    country: String,
    city: String,
    error: String
  },
  setup(__props) {
    const url = usePage().url;
    const fullUrl = `${window.location.origin}${url}`;
    console.log(fullUrl);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        city: __props.city,
        country: __props.country,
        date: __props.date,
        parayertimes: __props.prayerTimes,
        fullUrl
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              country: __props.country,
              date: __props.date,
              city: __props.city,
              prayerTimes: __props.prayerTimes,
              error: __props.error
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                country: __props.country,
                date: __props.date,
                city: __props.city,
                prayerTimes: __props.prayerTimes,
                error: __props.error
              }, null, 8, ["country", "date", "city", "prayerTimes", "error"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
