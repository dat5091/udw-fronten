<template>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>Nhân viên</title>

      <link rel="stylesheet" href="../assets/Style/style.css" />
    </head>

    <body>
      <div class="text-danger h1 center mt-5">Quản Lý Nhân Sự</div>
      <div class="p-5 center">
        <div class="border card m-3">
          <img class="card-img-top border border-bottom" src="../assets/img/img2.png" />
          <router-link :to="{
            name: 'nhanVien-index',
          }">
            <span class="btn btn-primary m-4 d-flex justify-content-center">Quản lý nhân viên</span>
          </router-link>
        </div>

        <div class="border card m-3">
          <img
            class="card-img-top border border-bottom"
            src="../assets/img/img1.jpg"
          />
          <router-link :to="{
            name: 'chucVu-index',
          }">
            <span class="btn btn-primary m-4 d-flex justify-content-center">Quản lý chức vụ</span>
          </router-link>
        </div>

        <div class="border card m-3">
          <img
            class="card-img-top border border-bottom"
            src="../assets/img/img3.png"
          />
          <router-link :to="{
            name: 'luong-index',
          }">
            <span class="btn btn-primary m-4 d-flex justify-content-center">Quản lý lương</span>
          </router-link>
        </div>
      </div>
    </body>
</template>
