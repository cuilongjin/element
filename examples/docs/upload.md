## Upload

### 基础用法

:::demo 通过调用 `open` 方法触发上传
```html
<el-button type="text" @click="handleUploadBtn">点击上传</el-button>

<com-upload
  ref="uploadFile"
  :accept="fileAccept"
  :http-request="handleUpload"
  :limit="1"
/>
<script>
  export default {
    data() {
      return {
        fileAccept: 'image/jpeg,image/jpg,image/png'
      }
    },
    methods: {
      handleUploadBtn() {
        this.$refs.uploadFile.open()
      },
      handleUpload(options) {
        console.log(options)
        this.$refs.uploadFile.clearFiles()
      }
    }
  }
</script>
```
:::

### 方法
| 方法名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| open     | 打开上传 |      |
