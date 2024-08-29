import fs from 'fs';
import path from 'path';

type Metadata = {
  publishDate: string;
}

function parseFrontmatter( fileContent: string ) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatterBlock = match ? match[1] : '';
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const metadata: Partial<Metadata> = {};

  const frontmatterLines = frontmatterBlock.trim().split('\n');
  frontmatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    if (key.trim() === 'publishDate') {
      let value = valueArr.join(': ').trim();
      value = value.replace(/^['"](.*)['"]$/, '$1');
      metadata.publishDate = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: any) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: any) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: any) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBytes() {
  return getMDXData(path.join(process.cwd(), 'content', 'bytes'));
}