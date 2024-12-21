import createHeading from './heading';
import Code from './code';
import CodeBlock from './codeblock';
import Hyperlink from '../link';
import Img from '../image';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  a: Hyperlink,
  code: Code,
  pre: CodeBlock,
  img: Img,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
