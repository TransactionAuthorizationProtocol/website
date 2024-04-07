import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
  prettyUrls: false,
});

site.use(jsx());
site.use(mdx());
site.use(
  tailwindcss({
    options: {
      plugins: [typography],
    },
  })
);
site.use(postcss());

export default site;
