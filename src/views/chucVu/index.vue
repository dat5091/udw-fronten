<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Chức vụ</title>

    <link rel="stylesheet" href="../../assets/Style/style.css" />
  </head>

  <body>
    <div class="container">
      <h1 class="text-center text-danger" data-wow-duration="1s">
        Quản lý chức vụ
      </h1>
      <div class="d-flex mb-2 center">
        <span
          class="btn btn-success mr-1"
          @click="
            $router.push({
              name: 'trang-chu',
            })
          "
        >
        Trang chủ
        </span>
        <form
          method="POST"
          action=""
          class="d-flex"
        >
          <input class="form-control me-2" name="key" style="width: 600px" />
          <button class="btn btn-success ml-1" type="submit">Tìm kiếm</button>
        </form>
        <router-link
          :to="{
            name: 'chucVu-them',
          }"
        >
          <span class="btn btn-primary m-4">Thêm</span>
        </router-link>
      </div>
      <table class="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>Mã chức vụ</th>
            <th>Tên chức vụ</th>
            <th>Hệ số lương</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cv, index) in this.chucVu">
            <td>{{ cv.maCV }}</td>
            <td>{{ cv.tenCV }}</td>
            <td>{{ cv.heSoLuong }}</td>
            <td>
              <span
                class="btn btn-primary m-1"
                @click="
                  $router.push({
                    name: 'nhanVien-sua',
                    params: { id: cv._id },
                  })
                "
              >
                Sửa
              </span>
              <span class="btn btn-primary m-1" @click="deleteNV(cv._id)"
                >Xóa</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <ul
        class="pagination"
        style="display: flex; justify-content: center; align-items: center"
      ></ul>
    </div>
  </body>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      chucVu: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/api/qlns/chuc-vu").then((res) => {
        this.chucVu = res.data;
        console.log(this.chucVu);
      });
    },
    deleteNV(id) {
      axios
        .delete(`http://localhost:3000/api/qlns/nhan-vien/${id}`)
        .then(() => {
          window.location.href = "http://localhost:3001/qlns/nhan-vien";
        });
    },
  },
};
</script>
