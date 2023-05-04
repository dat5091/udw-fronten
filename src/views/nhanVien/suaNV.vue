<template>
  <!DOCTYPE html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Edit Nhân viên</title>
  </head>
  <body>
    <div class="container">
      <h1 class="text-center text-danger" data-wow-duration="1s">
        Sửa nhân viên
      </h1>

      <form method="POST" action="">
        <div class="row m-2">
          <label class="col-md-2" for="msnv">MSNV:</label>
          <input
            type="text"
            class="col-md-10"
            id="msnv"
            v-bind:value="this.nhanVien.msnv"
          />
        </div>

        <div class="row m-2">
          <label class="col-md-2" for="hoten">Tên:</label>
          <input
            type="text"
            id="hoten"
            class="col-md-10"
            name="hoten"
            v-bind:value="this.nhanVien.hoten"
          />
        </div>

        <template v-if="this.nhanVien.gioiTinh == 'Nam'">
          <div class="row m-2">
            <p class="col-2">Giới tính:</p>
            <div class="col-1">
              <input
                type="radio"
                id="nam"
                name="gioiTinh"
                value="Nam"
                checked
              />
              <label for="nam">Nam</label>
            </div>
            <div class="col-1">
              <input type="radio" id="nu" name="gioiTinh" value="Nữ" />
              <label for="nu">Nữ</label>
            </div>
          </div>
        </template>
        <template v-if="this.nhanVien.gioiTinh == 'Nữ'">
          <div class="row m-2">
            <p class="col-2">Giới tính:</p>
            <div class="col-1">
              <input
                type="radio"
                id="nam"
                name="gioiTinh"
                value="Nam"
              />
              <label for="nam">Nam</label>
            </div>
            <div class="col-1">
              <input type="radio" id="nu" name="gioiTinh" value="Nữ" checked/>
              <label for="nu">Nữ</label>
            </div>
          </div>
        </template>

        <div class="row m-2">
          <label class="col-md-2" for="ngaySinh">Ngày sinh:</label>
          <input
            type="text"
            id="ngaySinh"
            class="col-md-10"
            v-bind:value="this.nhanVien.ngaySinh"
          />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="noiSinh">Nơi sinh:</label>
          <input
            type="text"
            id="noiSinh"
            class="col-md-10"
            name="noiSinh"
            v-bind:value="this.nhanVien.noiSinh"
          />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="diaChi">Địa chỉ:</label>
          <input
            type="text"
            id="diaChi"
            class="col-md-10"
            name="diaChi"
            v-bind:value="this.nhanVien.diaChi"
          />
        </div>
        <div class="row m-2">
          <label class="col-md-2" for="sdt">SDT:</label>
          <input
            type="text"
            id="sdt"
            class="col-md-10"
            name="sdt"
            v-bind:value="this.nhanVien.sdt"
          />
        </div>
        <div class="row m-2">
          <label for="maCV" class="col-2">Chức vụ:</label>
          <select class="col-2" id="maCV">
            <option
              v-for="(cv, index) in this.chucVu"
              :key="index"
              v-bind:value="cv.maCV"
            >
              {{ cv.tenCV }}
            </option>
          </select>
        </div>

        <div class="btn btn-primary m-2 float-end" @click="updateNV">
          Xác nhận
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nhanVien: [],
      chucVu: [],
    };
  },
  props: {
    id: { type: String, required: true },
  },
  mounted() {
    this.getData(), this.getDataCV();
  },
  methods: {
    getData() {
      axios
        .get(`http://localhost:3000/api/qlns/nhan-vien/${this.id}`)
        .then((res) => {
          this.nhanVien = res.data;
          console.log(this.nhanVien);
        });
    },
    getDataCV() {
      axios.get("http://localhost:3000/api/qlns/chuc-vu").then((res) => {
        this.chucVu = res.data;
        console.log(this.chucVu);
      });
    },
    updateNV() {
      var gioiTinh = "Nam";
      if(document.getElementById('nu').checked == true){
          gioiTinh = "Nữ"
      }
      let updateNhanVien = {
        msnv: document.getElementById('msnv').value,
        hoten: document.getElementById('hoten').value,
        gioiTinh: gioiTinh,
        ngaySinh: document.getElementById('ngaySinh').value,
        noiSinh: document.getElementById('noiSinh').value,
        diaChi: document.getElementById('diaChi').value,
        sdt: document.getElementById('sdt').value,
        maCV: document.getElementById('maCV').value,
      };
      console.log(updateNhanVien);
      axios
        .put(`http://localhost:3000/api/qlns/nhan-vien/${this.id}`, updateNhanVien)
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
