import Layout from "layouts/MainLayout.vue";
import Page from "pages/IndexPage.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [{ path: "", component: Page }],
  },
];

export default routes;
