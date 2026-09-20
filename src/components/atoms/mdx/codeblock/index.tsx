// biome-ignore-all lint/security/noDangerouslySetInnerHtml: sugar-high returns pre-escaped HTML.
import { highlight } from 'sugar-high';

export default function CodeBlock({ children }: { children: string }) {
	const code = typeof children === 'string' ? children : String(children);

	const html = highlight(code.trim());

	return (
		<pre className="code-block">
			<code dangerouslySetInnerHTML={{ __html: html }} />
		</pre>
	);
}
