<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        number: '1',
        device: 'temperature',
        value: '25',
        date: '2023-12-29'
      },
      {
        number: '2',
        device: 'humidity',
        value: '48',
        date: '2024-01-03'
      },
      {
        number: '3',
        device: 'illumination',
        value: '75',
        date: '2024-01-09'
      }
      ],
      tableLabel: {
        number: 'Number',
        device: 'Device Parameter',
        value: 'Current Value',
        date: 'Update Date'
      }
    }
  }
}
</script>
