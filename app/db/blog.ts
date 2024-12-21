import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  summary: string;
  description: string;
  publishDate: string;
  opengraph_image?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontmatterLines = frontmatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontmatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
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

export function getPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}
