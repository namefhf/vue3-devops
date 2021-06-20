<template>
  <div class="p-4 m-4 bg-white">
    <a-form labelAlign="left">
      <a-form-item label="执行主机">
        <a-tag color="#108ee9" closable>111</a-tag>
      </a-form-item>
      <a-button><PlusOutlined />从主机列表中选择</a-button>
      <div class="my-10px">执行命令:</div>
      <div class="w-500px h-200px overflow-scroll"><CodeEditor v-model:value="value" /></div>
      <a-form-item>
        <a-button><PlusOutlined />从执行模板中选择</a-button>
      </a-form-item>
      <a-button type="primary"><ThunderboltOutlined />开始执行</a-button>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { ThunderboltOutlined } from '@ant-design/icons-vue';
  import { CodeEditor } from '/@/components/CodeEditor';
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  import { Tag } from 'ant-design-vue';
  export default defineComponent({
    components: {
      [Tag.name]: Tag,
      PlusOutlined,
      CodeEditor,
      ThunderboltOutlined,
    },
    setup() {
      const value = ref(111);
      return { value };
    },
  });
</script>

<style scoped></style>
