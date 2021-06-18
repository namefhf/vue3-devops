<template>
  <div class="p-4 m-4 bg-white">
    <a-form labelAlign="left">
      <a-form-item label="执行主机">
        <a-tag color="#108ee9" closable>111</a-tag>
      </a-form-item>
      <a-button><PlusOutlined />从主机列表中选择</a-button>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { defineComponent } from 'vue';
  import { Tag } from 'ant-design-vue';
  export default defineComponent({
    components: {
      [Tag.name]: Tag,
      PlusOutlined,
    },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
