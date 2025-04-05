import { MDXRemote } from 'next-mdx-remote/rsc';
import Img from '../image';
import Hyperlink from '../link';
import Code from './code';
import CodeBlock from './codeblock';
import createHeading from './heading';

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  a: Hyperlink,
  code: Code,
  pre: (props: any) => <CodeBlock>{props.children.props.children}</CodeBlock>,
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
