<template>
  <div>
    <el-row :gutter="10">
      <el-col :lg="24" style="margin-bottom: 10px">
        <el-button type="primary" plain round icon="el-icon-plus">
          <router-link :to="{ name: 'shopping_goods_add'}">新增商品</router-link>
        </el-button>
      </el-col>
      <el-col :lg="24">
        <el-card class="md-light-card">
          <el-table :data="goods">
            <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
            <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
            <el-table-column prop="cover" label="封面图片"></el-table-column>
            <el-table-column prop="price" label="一口价"></el-table-column>
            <el-table-column prop="origin_price" label="原单价"></el-table-column>
            <el-table-column prop="category" label="所属分类"></el-table-column>
            <el-table-column prop="storage" label="库存"></el-table-column>
            <el-table-column label="是否上架">
              <template slot-scope="{row}">
                <el-tag v-if="row.shelf===1" type="success">上架</el-tag>
                <el-tag v-else type="danger">下架</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {goodsLists} from '@/api/shopping_admin'
  export default {
    name: 'shopping_goods',
    data() {
      return {
        goods:null,

      }
    },
    computed: {
      ...mapGetters({
        device: 'settings/device',
      }),
    },
    components:{  },
    mounted() {

    },
    beforeDestroy() {},
    methods: {

    },
  }
</script>

<style lang="scss" scoped>

</style>
