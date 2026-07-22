import fs from "fs";

const scratch =
  process.env.SCRATCH ||
  "C:\\Users\\idder\\AppData\\Local\\Temp\\grok-goal-045f02ee4755\\implementer";
const paths = fs
  .readFileSync(`${scratch}/sitemap-urls.txt`, "utf8")
  .trim()
  .split(/\r?\n/);

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function h2s(html) {
  return [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map((m) => strip(m[1]))
    .filter((t) => t.length > 8);
}

const rows = [];
for (const p of paths) {
  const liveUrl =
    p === "/" ? "https://www.nws-homes.com/" : `https://www.nws-homes.com${p}`;
  const localUrl =
    p === "/" ? "http://localhost:3000/" : `http://localhost:3000${p}`;
  const [lr, orr] = await Promise.all([fetch(liveUrl), fetch(localUrl)]);
  const [lt, ot] = await Promise.all([lr.text(), orr.text()]);
  const lb = strip(lt).length;
  const ob = strip(ot).length;
  const ratio = lb ? ob / lb : 1;
  const lh2 = h2s(lt);
  const oh2 = h2s(ot);
  const localBody = strip(ot).toLowerCase();
  const miss = lh2.filter((h) => {
    const words = h
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 4);
    if (!words.length) return false;
    const hits = words.filter((w) => localBody.includes(w)).length;
    return hits / words.length < 0.5;
  });
  rows.push({
    p,
    lb,
    ob,
    ratio: Number(ratio.toFixed(2)),
    liveH2: lh2.length,
    localH2: oh2.length,
    missH2: miss.length,
    missSample: miss.slice(0, 3),
  });
}

rows.sort((a, b) => a.ratio - b.ratio);
console.log(JSON.stringify(rows, null, 2));
fs.writeFileSync(`${scratch}/body-ratio.json`, JSON.stringify(rows, null, 2));

// Flag potential truncated bodies: service pages with ratio < 0.35 and missH2 > 0
const flags = rows.filter(
  (r) =>
    (r.p.startsWith("/services/") && r.p !== "/services/" && r.ratio < 0.4) ||
    (r.missH2 > 0 && r.ratio < 0.5)
);
console.log("\nFLAGS:", flags.length);
for (const f of flags) {
  console.log(
    `FLAG ${f.p} ratio=${f.ratio} missH2=${f.missH2} sample=${JSON.stringify(f.missSample)}`
  );
}
