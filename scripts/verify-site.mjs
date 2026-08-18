import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, normalize } from "node:path";

const siteRoot = join(process.cwd(), "site");
const htmlFiles = readdirSync(siteRoot).filter((file) => file.endsWith(".html"));
const failures = [];

for (const file of htmlFiles) {
  const body = readFileSync(join(siteRoot, file), "utf8");
  for (const required of ["<title>", "meta name=\"description\"", "<main", "<footer"]) {
    if (!body.includes(required)) failures.push(`${file}: missing ${required}`);
  }
  const links = [...body.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const link of links) {
    if (!link || link.startsWith("http") || link.startsWith("#") || link.startsWith("mailto:")) continue;
    const localPath = normalize(join(siteRoot, link));
    if (!localPath.startsWith(siteRoot) || !existsSync(localPath)) {
      failures.push(`${file}: unresolved local asset or link ${link}`);
    }
  }
}

for (const required of ["robots.txt", "sitemap.xml", "assets/style.css", "assets/app.js"]) {
  if (!existsSync(join(siteRoot, required))) failures.push(`site: missing ${required}`);
}

if (failures.length) {
  console.error(JSON.stringify({ status: "failed", failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "passed", htmlFiles, verifiedAssets: 4 }, null, 2));
