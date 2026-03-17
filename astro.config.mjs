import { defineConfig } from 'astro/config';

const [owner = 'example', repo = 'portfolio'] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: isGithubActions ? `https://${owner}.github.io/${repo}/` : 'https://example.com',
  base: isGithubActions ? `/${repo}/` : '/',
});
