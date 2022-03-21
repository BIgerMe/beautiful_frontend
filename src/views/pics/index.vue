<template>
  <div>
    <pagination
      v-show="listQuery.total > 0"
      :total="listQuery.total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pageSize"
      @pagination="getList"
      style="margin-bottom: 20px"
    />
    <el-row :gutter="2">
      <el-col :span="2" v-for="item in data">
        <img :src="item.path"  style="width: 120px;height: 120px">
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {getAttachment} from '@/api/qiniu'
  import Pagination from '@/components/Pagination'

  export default {
    name: "pics",
    components: { Pagination },
    data(){
      return {
        data : null,
        listQuery:{
          page:1,
          pageSize:60,
          total:0
        }
      }
    },
    mounted() {
      this.getList()
    },
    methods:{
      async getList(){
        const {data} = await getAttachment(this.listQuery)
        this.data = data.data
        this.listQuery.total = data.total
      }
    }
  }
</script>
<style scoped>

</style>