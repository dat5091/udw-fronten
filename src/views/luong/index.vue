<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Lương</title>

    <link rel="stylesheet" href="../../assets/Style/style.css" />
  </head>

  <body>
    <div class="container">
      <h1 class="text-center text-danger" data-wow-duration="1s">
        Quản lý lương
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
        <form method="POST" action="" class="d-flex">
          <input class="form-control me-2" name="key" style="width: 600px" />
          <button class="btn btn-success ml-1" type="submit">Tìm kiếm</button>
        </form>
      </div>
      <table class="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>MSNV</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Chức vụ</th>
            <th>Lương</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="nv in this.nhanVien">
            <td>{{ nv.msnv }}</td>
            <td>{{ nv.hoten }}</td>
            <td>{{ nv.gioiTinh }}</td>
            <template v-for="cv in this.chucVu">
              <td v-if="cv.maCV == nv.maCV">{{ cv.tenCV }}</td>
            </template>
            <template v-for="cv in this.chucVu">
              <td v-if="cv.maCV == nv.maCV">{{ formatNumber(cv.heSoLuong*1490000)+' Vnd' }}</td>
            </template>
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
      nhanVien: [],
    };
  },
  mounted() {
    this.getDataCV();
    this.getDataNV();
  },
  methods: {
    getDataCV() {
      axios.get("http://localhost:3000/api/qlns/chuc-vu").then((res) => {
        this.chucVu = res.data;
        console.log(this.chucVu);
      });
    },
    getDataNV() {
      axios.get("http://localhost:3000/api/qlns/nhan-vien").then((res) => {
        this.nhanVien = res.data;
        console.log(this.nhanVien);
      });
    },
    formatNumber(number){
        return number.toLocaleString();
    }
  },
};
</script>
