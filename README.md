
React application built with:
[Next.JS](https://nextjs.org/) |  [Tailwind CSS](https://tailwindcss.com/) | [TypeScript](https://www.typescriptlang.org/) and [Zustand](https://github.com/pmndrs/zustand)

---

## Getting Started ⭐️

For development, please run the following commands:

```bash
# This will create an env file with all the things needed for local development (rewrites paths, etc.)
cp .template.env .env.development.local
```

\*Requieres [Node](https://nodejs.org/en/) installed.

```bash
npm install
# then:
npm run dev
# or
yarn dev
```

Your changes will be reflected (live reload) at the following URL: http://localhost:3000

---

## Development 🚀
The application is an Next.JS app, using [TailwindCSS](https://tailwindcss.com) as a CSS class utility framework. To keep it simple, most of the layuot is keep in the `src/pages/index.tsx` file with the exception of some componentes that can be found in the `src/components` folder.

While working in the layout, we really recommend going through https://tailwindcss.com/docs/editor-setup for a better support of TailwindCSS & Intelisense


### Example of an element with TailwindCSS classes

If we want a blue link with some margins, we can do it like this:

```jsx
<a href="#" className="ml-2 text-blue-500">
```

Where `ml-2` (8px) is the margin-left class, and `text-blue-500` is the color class.

> NOTE: For text, background and borders colors, we recommend using the `-500` value. [See colors scheme](https://tailwindcss.com/docs/customizing-colors)


### Dark & Light theme
We're providing two themes: `dark` and `light`. To build a dark theme, we can use the `dark` prefix. [See more information](https://tailwindcss.com/docs/dark-mode).

```jsx
<div class="bg-white dark:bg-slate-800 rounded-lg">
// ...
</div>
```

On the light theme, the element will use the white background and the `dark:bg-slate-800` class will be applied on the Dark Theme.

If you only need one team, remove the toggle from the `src/components/layout/Header.tsx` file, it wil default to the `dark theme`. If you need to default to the `light theme`, edit the `src/pages/_document.tsx` file and edit the `<Html className='dark'>` to `light`.

### State management
Currently we don't need to manage a lot of application state but we do have [Zustand](https://github.com/pmndrs/zustand) as state management library if needed.


---

## Build for production 🏗

### Self hosted

You can serve the applications a Server-Side render with `npm start`. This will build the Production Ready application.


### Github Pages

If you want to generate static files to serve as Static Site on Github Pages for example you should run `npm run static`. This will generate an `/out` folder with all the static files.

*NOTE:*: You'll need to edit `next.config.js`, uncomment add replace the default `project-template` name with your repository name for `assetPrefix & basePath`, this configuration is needed to correctly render and set paths in Github Pages.

There's already an github workflow that will deploy to your repo's GH Pages, check `./github/workflows/gh-pages.deploy.yml`file.
