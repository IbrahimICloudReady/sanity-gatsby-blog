export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "636b700d3975742697277750",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-twf9fq5a",
                  apiId: "228d0873-fcad-4798-a95e-693dba8700d1",
                },
                {
                  buildHookId: "636b700e3254222328eca433",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-n25zhdsz",
                  apiId: "85241061-73b4-449f-a4a2-5653544f72e2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/IbrahimICloudReady/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-n25zhdsz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
