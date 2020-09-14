<template>
  <div id="main">
    <div id="header">
      <div class="left">数据填报系统</div>
      <div class="right">
        <a-avatar class="photo" style="backgroundColor:#87d068" icon="user" />
        <span>{{user.用户名称}}</span>
        <a-button type="link" @click="loginOut">注销</a-button>
      </div>
    </div>
    <div id="content">

      <div class="downLoad">
        <div class="title">
          模板列表
        </div>
        <ul>
          <li v-for="(item,index) in file" :key="index">
            <span>{{item.name}}.xlsx</span>
            <span>
              <a-button type="link" class="btnDown">
                <a :href="'../download/files/'+item.name+'.xlsx'" :download="item.name+'.xlsx'">模板下载</a>
              </a-button>
            </span>
          </li>
        </ul>
      </div>

      <div class="upload">
        <div class="box">
          <a-upload-dragger name="file" :action="uploadUrl" :accept="'.xlsx'" :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
              上传文件
            </p>
          </a-upload-dragger>
          <a-button class="btnUpload" type="primary" :disabled="fileList.length === 0" :loading="uploading" style="margin-top: 16px" @click="handleUpload">
            上传
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Menu } from 'ant-design-vue';
import TopBar from "@/components/TopBar.vue";

export default {
  components: {
    TopBar,
  },
  mounted: function () {
  },
  computed: {
    ...mapState({
      menu: state => state.menu,
      user: state => state.currentUser
    })
  },
  data() {
    return {
      fileList: [],
      uploading: false,
      uploadUrl: '',
      file: [
        { name: "案例库信息" },
        { name: "场地场所信息" },
        { name: "法律法规库" },
        { name: "风险特征库" },
        { name: "个体工商户基本信息" },
        { name: "行政处罚行为" },
        { name: "行政检查行为" },
        { name: "行政强制行为" },
        { name: "行政相对人（特定自然人）" },
        { name: "行政相对人（组织）-法人类型为社会团体法人" },
        { name: "监管对象信息要素表" },
        { name: "其他行为" },
        { name: "企业基本信息" },
        { name: "双随机一公开数据的年度计划抽查的监管对象信息" },
        { name: "双随机一公开数据的年度计划数据" },
        { name: "双随机一公开数据的专项计划抽查的监管对象信息" },
        { name: "双随机一公开数据的专项计划数据" },
        { name: "特定产品（化妆品）信息" },
        { name: "特定产品（食品）信息" },
        { name: "特定产品（药品）信息" },
        { name: "特定产品（医疗器械）信息" },
        { name: "特定产品（婴幼儿配方奶粉、保健食品、特殊医学用途配方食品）信息" },
        { name: "特种设备基础信息" },
        { name: "预案库信息" },
        { name: "执法人员信息" },
      ]
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append('file', file);
      });

      this.axios.post("/user/upload/" + this.user.所属机构编号, formData).then(res => {
        
        if (res.data.code == "200") {
          this.fileList=[];
          this.$message.success(`上传成功`);
        } else {
          this.$message.error(`上传失败`);
        }

      })




      // this.$message.success(`上传成功`);
    },
    loginOut() {
      this.$router.push('/');
    },
  }
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 10%;
  background: #ffffff;
  box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  .left {
    width: 80%;
    margin-left: 50px;
    font-size: 26px;
    font-family: PingFang SC Bold, PingFang SC Bold-Bold;
    font-weight: 700;
    color: #5797ff;
  }
  .right {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
}
#main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 1% 0;
  display: flex;
  flex-direction: column;
  background-color: #f0f1f5;
}

#content {
  flex: 1;
  padding-top: 1%;
  display: flex;
  height: 88%;
  .downLoad {
    height: 100%;
    width: 40%;
    flex-direction: column;
    background-color: #ffffff;
    .title {
      width: 100%;
      font-size: 20px;
      font-family: PingFang SC Bold, PingFang SC Bold-Bold;
      font-weight: 700;
      color: #1890ff;
      text-align: center;
      margin-top: 5%;
    }
    ul,
    li {
      list-style: none;
    }
    ul {
      height: 80%;
      overflow-y: scroll;
      margin-top: 5%;
    }
    li {
      width: 100%;
      > span:nth-child(1) {
        width: 80%;
        display: inline-block;
      }
      > span:nth-child(2) {
        display: inline-block;
        width: 20%;
      }
      // border: 1px solid red;
    }
  }
  .upload {
    height: 100%;
    width: 60%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 50%;
      height: 40%;
      .btnUpload {
        text-align: center;
      }
     
    }
  }
}
</style>