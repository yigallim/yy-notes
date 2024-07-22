# Initializing a React Project

This page demonstrates some methods to download the NPM packages for starting a ReactJS project. Other frameworks such as Next.js and Bun are also included.

## 1. Using Create React App ❌

Personally not recommended, unable to cope with many modern packages such as TailwindCSS. Only recommended for beginner to learn.

### Steps:

1. **Install CRA globally (optional):**

   ```bash
   npm install -g create-react-app
   ```

2. **Create a new React project:**

   ```bash
   npx create-react-app my-app
   ```

3. **Navigate to the project directory:**

   ```bash
   cd my-app
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

## 2. Using Vite ⭐️

Always my first choice for starting a ReactJS project. Hot reloading is fast, and configurations can be easily done.

### Steps:

1. **Create a new Vite project:**

   ```bash
   npm init vite@latest my-vite-app --template react
   ```

2. **Navigate to the project directory:**

   ```bash
   cd my-vite-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

## 3. Using Next.js ✅

Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.

### Steps:

1. **Create a new Next.js project:**

   ```bash
   npx create-next-app my-next-app
   ```

2. **Navigate to the project directory:**

   ```bash
   cd my-next-app
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## 4. Using Bun ✅

Bun is a modern JavaScript runtime like Node.js. Its performance is blazingly fast, but it might still have issues such as high memory consumption and incompatibility. It will be my new first choice once those issues are resolved.

### Steps:

1. **Install Bun:**

   ```bash
   curl https://bun.sh/install | bash
   ```

2. **Create a new React project using Bun:**

   ```bash
   bun create react my-bun-app
   ```

3. **Navigate to the project directory:**

   ```bash
   cd my-bun-app
   ```

4. **Start the development server:**

   ```bash
   bun run dev
   ```
