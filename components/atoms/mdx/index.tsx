import createHeading from './heading';
import Code from './code'
import CodeBlock from './codeblock';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Hyperlink from '../link';

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  a: Hyperlink,
  code: Code,
  pre: CodeBlock,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}