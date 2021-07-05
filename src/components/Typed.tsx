import { h, ref, PropType, defineComponent, onMounted } from "vue";
import type { TypedOptions } from "typed.js";
import Typed from "typed.js";
import "./Typed.css";

export default defineComponent({
  name: "Typed",
  props: {
    options: {
      type: Object as PropType<TypedOptions>,
      required: true,
    },
  },

  setup(props, context) {
    const typedElement = ref<Element>();

    const initTypedJS = () => {
      return new Typed(
        typedElement.value!.querySelector(".typing")!,
        props.options
      );
    };

    onMounted(initTypedJS);

    return () => {
      return h(
        "div",
        {
          ref: typedElement,
          class: "typed-element",
        },
        context.slots.default!()
      );
    };
  },
});
