<template>
  <a-modal>
    <a-alert
      style="width: 60%; margin: 0 auto"
      message="导入或输入的密码仅作首次验证使用，并不会存储密码。"
      closable
      type="info"
      show-icon
    />
    <a-form :labelCol="{ span: 4 }" :wrapper-col="{ span: 10 }" :modal="formModel">
      <a-form-item label="模板下载">
        <a
          href="https://demo.spug.dev/resource/%E4%B8%BB%E6%9C%BA%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx"
          >从主机导入模板.xlsx</a
        >
        <div class="text-gray-500">请下载使用该模板填充数据后导入</div>
      </a-form-item>
      <a-form-item label="默认密码">
        <a-input placeholder="请输入默认机主密码" />
        <div class="text-gray-500">如果excel中密码为空则使用该密码</div>
      </a-form-item>
      <a-form-item label="导入数据">
        <a-upload>
          <a-button> <upload-outlined />点击上传</a-button>
        </a-upload>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
  import { Upload } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { defineComponent, reactive } from 'vue';
  import { Alert } from 'ant-design-vue';
  export default defineComponent({
    components: { [Alert.name]: Alert, [Upload.name]: Upload, UploadOutlined },
    setup() {
      const formModel = reactive({
        cate: '',
        name: '',
        username: '',
        ip: '',
        port: '',
        keylicense: '',
        note: '',
      });
      return { formModel };
    },
  });
</script>

<style scoped></style>
