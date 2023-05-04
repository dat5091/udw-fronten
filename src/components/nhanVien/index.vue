<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Nhân viên</title>

    <link href="../../assets/Style/style.css" rel="stylesheet" />
  </head>

  <body>
    <div class="container">
      <h1 class="text-center text-danger" data-wow-duration="1s">
        Quản lý nhân viên
      </h1>
      <div class="d-flex mb-2 center">
        <a
          href=""
          class="btn btn-success me-2"
          style="width: 76.05px; height: 38px"
          >Home</a
        >
        <form method="POST" action="" class="d-flex">
          <input class="form-control me-2" name="key" style="width: 600px" />
          <button class="btn btn-success" type="submit">Search</button>
        </form>
        <a
          href=""
          class="btn btn-success ms-2"
          style="width: 76.05px; height: 38px"
          >Add</a
        >
      </div>
      <table class="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>MSNV</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Nơi sinh</th>
            <th>Địa chỉ</th>
            <th>SDT</th>
            <th>Chức vụ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <ul
        class="pagination"
        style="display: flex; justify-content: center; align-items: center"
      ></ul>
    </div>
  </body>
</template>
