<template>
  <a-modal>
    <a-form :model="formModel" :labelCol="{ span: 4 }" :wrapperCol="{ span: 20 }">
      <a-form-item label="主机类别">
        <a-input style="width: 50%" />
        <a-space>
          <a-button type="primary">添加类别</a-button>
          <a-button type="primary">编辑类别</a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="主机名称">
        <a-input style="width: 50%" />
      </a-form-item>
      <a-form-item label="连接地址">
        <a-input style="width: 20%" />
        <a-input style="width: 20%" />
        <a-input style="width: 20%" />
      </a-form-item>
      <a-form-item label="独立密钥">
        <a-upload>
          <a-button> Click to Upload </a-button>
        </a-upload>
      </a-form-item>
      <a-form-item label="备注信息">
        <textarea name=""></textarea>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    components: {},
    setup() {
      const formModel = reactive({});
      return { formModel };
    },
  });
</script>

<style scoped></style>
