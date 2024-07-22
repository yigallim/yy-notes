# Module Path Aliases

This guide demonstrates how to set up and use TypeScript path aliases in a Vite project. Path aliases help simplify imports and make your code cleaner.

#### `vite.config.js`

```javascript
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // other configurations...
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // other configurations...
});
```

#### `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
    // other options...
  },
  "include": ["src"]
}
```
