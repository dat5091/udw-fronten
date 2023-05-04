import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/qlns",
    children: [
      {
        path: "trang-chu",
        name: "trang-chu",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "nhan-vien",
        children: [
          {
            path: "",
            name: "nhanVien-index",
            component: () => import("@/views/nhanVien/index.vue"),
          },
          {
            path: "them",
            name: "nhanVien-them",
            component: () => import("@/views/nhanVien/themNV.vue"),
          },
          {
            path: "sua/:id",
            name: "nhanVien-sua",
            component: () => import("@/views/nhanVien/suaNV.vue"),
            props: true,
          },
        ],
      },
      {
        path: "chuc-vu",
        children: [
          {
            path: "",
            name: "chucVu-index",
            component: () => import("@/views/chucVu/index.vue"),
          },
          {
            path: "them",
            name: "chucVu-them",
            component: () => import("@/views/chucVu/themCV.vue"),
          },
          {
            path: "sua",
            name: "chucVu-sua",
            component: () => import("@/views/chucVu/suaCV.vue"),
          },
        ],
      },
      {
        path: "luong",
        name: "luong-index",
        component: () => import("@/views/luong/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
