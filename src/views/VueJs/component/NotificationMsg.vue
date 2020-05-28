<template>
  <div>
    <div class="notification">
      <h1>{{ error.type }}</h1>
      <p>{{ error.msg }}</p>
    </div>
    <!-- 1. notification Error msg
    2. custom progressbar when 2 point then 2 block, if need 3 points show three block
    3. card block
    4. form filed
    5. Slots -- https://vuejs.org/v2/guide/components-slots.html 
    6. Custom events--https://vuejs.org/v2/guide/components-custom-events.html
    7. Props -- https://vuejs.org/v2/guide/components-props.html
    8. component resigtration - https://vuejs.org/v2/guide/components-registration.html
    9. .prop modifier--- https://vuejs.org/v2/api/#v-bind
    10. Dynamic & Async Components  -- https://vuejs.org/v2/guide/components-dynamic-async.html
    11- PascalCase - MyComponentName
    12 - Kebab-case - my-component-name
    -->
  </div>
</template>
<script>
export default {
  props: {}
};
</script>
