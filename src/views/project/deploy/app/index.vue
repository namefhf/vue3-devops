<template>
  <div class="p-4 m-4 bg-white">
    <a-button type="primary" class="mb-4">新建</a-button>

    <a-table :columns="columns" :dataSource="dataSource">
      <template #expandedRowRender="">
        <p> 111 </p>
      </template>

      <template #action="">
        <a-button type="link">新建发布</a-button>
        <a-divider type="vertical" />
        <a-button type="link">克隆发布</a-button>
        <a-divider type="vertical" />
        <a-button type="link">编辑</a-button>
        <a-divider type="vertical" />
        <a-button type="link">删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { appApi, appModel } from '/@/api/project/deploy';
  export default defineComponent({
    setup() {
      const dataSource = ref<appModel[]>([]);
      const initData = async () => {
        const data = await appApi();
        dataSource.value = data;
      };
      initData();
      const columns = [
        {
          title: '应用名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '标识符',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '描述信息',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' },
        },
      ];
      return { columns, dataSource };
    },
  });
</script>

<style scoped></style>
