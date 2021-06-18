<template>
  <a-modal @ok="handleOk">
    <a-form
      ref="form"
      :model="formModel"
      :rules="rules"
      :labelCol="{ span: 4 }"
      :wrapperCol="{ span: 20 }"
    >
      <a-form-item label="主机类别" name="cate">
        <a-select style="width: 30%" v-model:value="formModel.cate">
          <a-select-option value="web服务">web服务</a-select-option>
        </a-select>
        <a-space>
          <a-button type="primary">添加类别</a-button>
          <a-button type="primary">编辑类别</a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="主机名称" name="name">
        <a-input style="width: 50%" v-model:value="formModel.name" />
      </a-form-item>
      <a-form-item label="连接地址" required>
        <a-row>
          <a-col :span="5">
            <a-form-item name="username">
              <a-input addonBefore="ssh" placeholder="用户名" v-model:value="formModel.username" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item name="ip">
              <a-input addonBefore="@" placeholder="主机名/ip" v-model:value="formModel.ip" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item name="port">
              <a-input addonBefore="-p" placeholder="端口" v-model:value="formModel.port" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="独立密钥">
        <a-upload>
          <a-button> <upload-outlined />点击上传</a-button>
        </a-upload>
        <div class="text-gray-500">默认使用全局密钥，如果上传了独立密钥则优先使用该密钥。</div>
      </a-form-item>
      <a-form-item label="备注信息">
        <textarea name="" placeholder="请输入主机备注信息"></textarea>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
  // import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Upload } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { defineComponent, reactive, ref } from 'vue';

  export default defineComponent({
    components: { [Upload.name]: Upload, UploadOutlined },

    setup() {
      const form = ref();
      const formModel = reactive({
        cate: '',
        name: '',
        username: '',
        ip: '',
        port: '',
        keylicense: '',
        note: '',
      });
      const rules = {
        cate: [{ required: true, message: 'Please input catename', trigger: 'blur' }],
        name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
        username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
        ip: [{ required: true, message: 'Please input ip', trigger: 'blur' }],
        port: [{ required: true, message: 'Please input port', trigger: 'blur' }],
      };
      const handleOk = () => {
        console.log(form.value);

        form.value
          .validate()
          .then(() => {
            console.log(formModel);
          })
          .catch((error) => {
            console.log('error', error);
          });
      };
      return { form, formModel, rules, handleOk };
    },
  });
</script>

<style scoped></style>
