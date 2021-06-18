<template>
  <div class="p-4 m-4 bg-white">
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
    />
    <a-space>
      <a-button type="primary" @click="visible = !visible">新建</a-button>
      <a-button type="primary" @click="Importvisible = !Importvisible">批量导入</a-button>
    </a-space>

    <Basic-table :dataSource="tableData" :columns="columns" :canResize="false" />
    <new-host-modal
      v-bind="$attrs"
      v-model:visible="visible"
      title="新建主机"
      :bodyStyle="bodyStyle"
      :width="800"
      okText="验证"
    />
    <import-model
      v-bind="$attrs"
      v-model:visible="Importvisible"
      title="批量导入"
      :bodyStyle="bodyStyle"
      :width="800"
      okText="导入"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable } from '/@/components/Table';
  import { hostApi } from '/@/api/project/host';
  import { ref } from 'vue';
  import NewHostModal from './components/NewHostModal.vue';
  import ImportModel from './components/ImportModel.vue';
  const schemas: FormSchema[] = [
    {
      field: 'Catefield',
      component: 'Select',
      label: '主机类别',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择',
        options: [
          {
            label: 'web服务',
            value: 'web服务',
            key: '1',
          },
        ],
        onChange: (e) => {
          console.log(e);
        },
      },
    },
    {
      field: 'Namefield',
      component: 'Input',
      label: '主机别名',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入',
        onChange: (e) => {
          console.log(e);
        },
      },
    },
    {
      field: 'Addressfield',
      component: 'Input',
      label: '连接地址',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入',
        onChange: (e) => {
          console.log(e);
        },
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm, BasicTable, NewHostModal, ImportModel },
    setup() {
      const { createMessage } = useMessage();
      const visible = ref<boolean>(false);
      const Importvisible = ref<boolean>(false);

      const columns = [
        {
          title: '类别',
          dataIndex: 'zone',
          key: 'zone',
        },
        {
          title: '主机名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '连接地址',
          dataIndex: 'hostname',
          key: 'hostname',
        },
        {
          title: '端口',
          dataIndex: 'port',
          key: 'port',
        },
        {
          title: '备注信息',
          dataIndex: 'desc',
          key: 'desc',
        },
      ];
      const tableData = ref([]);
      const initData = async () => {
        const data = await hostApi();
        tableData.value = data.hosts;
      };
      initData();
      return {
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        tableData,
        columns,
        visible,
        Importvisible,
        bodyStyle: { padding: '10px' },
      };
    },
  });
</script>

<style scoped></style>
