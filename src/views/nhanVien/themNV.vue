<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Nhân viên</title>
  </head>

  <body>
    <div class="container">
      <h1 class="text-center text-danger" data-wow-duration="1s">
        Add nhân viên
      </h1>

      <form method="POST" action="">
        <div class="row m-2">
          <label class="col-md-2" for="hoten">MSNV:</label>
          <input type="text" class="col-md-10" v-model="NhanVien.msnv" />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="hoten">Tên:</label>
          <input type="text" class="col-md-10" v-model="NhanVien.hoten" />
        </div>
        <div class="row m-2">
          <p class="col-2">Giới tính:</p>
          <div class="col-1">
            <input type="radio"/>
            <label for="nam">Nam</label>
          </div>
          <div class="col-1">
            <input type="radio" id="nu"/>
            <label for="nu">Nữ</label>
          </div>
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="ngaySinh">Ngày sinh:</label>
          <input type="date" class="col-md-10" v-model="NhanVien.ngaySinh" />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="noiSinh">Nơi sinh:</label>
          <input
            type="text"
            class="col-md-10"
            name="noiSinh"
            v-model="NhanVien.noiSinh"
          />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="diaChi">Địa chỉ:</label>
          <input type="text" class="col-md-10" v-model="NhanVien.diaChi" />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="sdt">SDT:</label>
          <input type="text" class="col-md-10" v-model="NhanVien.sdt" />
        </div>
        <div class="row m-2">
          <label for="maCV" class="col-2">Chức vụ:</label>
          <select class="col-2" v-model="NhanVien.maCV">
            <option
              v-for="(cv, index) in this.chucVu"
              :key="index"
              v-bind:value="cv.maCV"
            >
              {{ cv.tenCV }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary m-2 float-end"  @click="addNV">Xác nhận</button>
      </form>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      chucVu: [],
      NhanVien: {
        msnv: "",
        hoten: "",
        gioiTinh: "",
        ngaySinh: "",
        noiSinh: "",
        diaChi: "",
        sdt: "",
        maCV: "",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/api/qlns/chuc-vu").then((res) => {
        this.chucVu = res.data;
      });
    },
    addNV() {
      var gioiTinh = "Nam";
      if(document.getElementById('nu').checked == true){
          gioiTinh = "Nữ"
      }
      let newNhanVien = {
        msnv: this.NhanVien.msnv,
        hoten: this.NhanVien.hoten,
        gioiTinh: gioiTinh,
        ngaySinh: this.NhanVien.ngaySinh,
        noiSinh: this.NhanVien.noiSinh,
        diaChi: this.NhanVien.diaChi,
        sdt: this.NhanVien.sdt,
        maCV: this.NhanVien.maCV,
      };
      console.log(newNhanVien);
      axios
        .post("http://localhost:3000/api/qlns/nhan-vien", newNhanVien)
        .then((response) => {
          console.log(response);
          window.location.href = 'http://localhost:3001/qlns/nhan-vien';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
