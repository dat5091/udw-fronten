<template>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Nhân viên</title>
</head>

<body>
<div class="container">
    <h1 class="text-center text-danger" data-wow-duration="1s">Add chức vụ</h1>

    <form method="" action="">
        <div class="row m-2">
            <label class="col-md-2" for="maCV">Mã chức vụ:</label>
            <input type="text" id="maCV" class="col-md-10" v-model="ChucVu.maCV">
        </div>

        <div class="row m-2">
            <label class="col-md-2" for="tenCV">Tên chức vụ:</label>
            <input type="text" id="tenCV" class="col-md-10" v-model="ChucVu.tenCV">
        </div>

        <div class="row m-2">
            <label class="col-md-2" for="heSoLuong">Hệ số lương:</label>
            <input type="text" id="heSoLuong" class="col-md-10" v-model="ChucVu.heSoLuong">
        </div>
        <button class="btn btn-primary m-2 float-end" @click="addCV">Submit</button>
    </form>
</div>
</body>
</template>

<script>
import axios from "axios";

export default {
    name: 'themCV',
    data() {
        return {
            ChucVu: {
                maCV: '',
                tenCV: '',
                heSoLuong: ''
            }
        }
    },
    methods: {
        addCV() {
            let newChucVu = {
                "maCV": this.ChucVu.maCV,
                "tenCV": this.ChucVu.tenCV,
                "heSoLuong": this.ChucVu.heSoLuong
            }
            console.log(newChucVu);
            axios.post('http://localhost:3000/api/qlns/chuc-vu', newChucVu)
            .then((response) => {
                console.log(response);
                window.location.href = 'http://localhost:3001/qlns/chuc-vu';
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>