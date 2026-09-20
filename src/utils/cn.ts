type ClassValue = string | false | null | undefined;

const FONT_WEIGHTS = new Set([
	'thin',
	'extralight',
	'light',
	'normal',
	'medium',
	'semibold',
	'bold',
	'extrabold',
	'black',
]);

const TEXT_ALIGN = new Set([
	'left',
	'center',
	'right',
	'justify',
	'start',
	'end',
]);

const TEXT_SIZES = new Set([
	'meta',
	'sm',
	'base',
	'h1',
	'h2',
	'h3',
	'h4',
	'xs',
	'lg',
	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl',
	'9xl',
]);

const BORDER_STYLES = new Set([
	'solid',
	'dashed',
	'dotted',
	'double',
	'hidden',
	'none',
]);

const SIDES: Record<string, string> = {
	x: '-x',
	y: '-y',
	t: '-t',
	r: '-r',
	b: '-b',
	l: '-l',
	s: '-s',
	e: '-e',
};

const RULES: [RegExp, string][] = [
	[
		/^(block|inline-block|inline|flow-root|contents|list-item|hidden)$/,
		'display',
	],
	[
		/^(flex|inline-flex|grid|inline-grid|table|inline-table|table-\w+)$/,
		'display',
	],
	[/^(static|fixed|absolute|relative|sticky)$/, 'position'],
	[/^(visible|invisible|collapse)$/, 'visibility'],
	[/^box-(border|content)$/, 'box-sizing'],
	[/^(isolate|isolation-auto)$/, 'isolation'],
	[/^float-/, 'float'],
	[/^clear-/, 'clear'],
	[/^z-/, 'z-index'],
	[/^order-/, 'order'],
	[/^@container/, 'container-type'],

	[/^inset-x-/, 'inset-x'],
	[/^inset-y-/, 'inset-y'],
	[/^-?inset-/, 'inset'],
	[/^top-/, 'top'],
	[/^right-/, 'right'],
	[/^bottom-/, 'bottom'],
	[/^left-/, 'left'],

	[/^min-w-/, 'min-w'],
	[/^max-w-/, 'max-w'],
	[/^w-/, 'w'],
	[/^min-h-/, 'min-h'],
	[/^max-h-/, 'max-h'],
	[/^h-/, 'h'],
	[/^size-/, 'size'],
	[/^aspect-/, 'aspect'],

	[/^px-/, 'px'],
	[/^py-/, 'py'],
	[/^p([trblse])-/, 'p$1'],
	[/^p-/, 'p'],
	[/^mx-/, 'mx'],
	[/^my-/, 'my'],
	[/^m([trblse])-/, 'm$1'],
	[/^m-/, 'm'],
	[/^space-x-/, 'space-x'],
	[/^space-y-/, 'space-y'],
	[/^scroll-m/, 'scroll-m'],
	[/^scroll-p/, 'scroll-p'],

	[/^flex-(row|row-reverse|col|col-reverse)$/, 'flex-direction'],
	[/^flex-(wrap|wrap-reverse|nowrap)$/, 'flex-wrap'],
	[/^flex-/, 'flex'],
	[/^grow/, 'grow'],
	[/^shrink/, 'shrink'],
	[/^basis-/, 'basis'],
	[/^grid-cols-/, 'grid-cols'],
	[/^grid-rows-/, 'grid-rows'],
	[/^grid-flow-/, 'grid-flow'],
	[/^col-span-/, 'col-span'],
	[/^col-start-/, 'col-start'],
	[/^col-end-/, 'col-end'],
	[/^row-span-/, 'row-span'],
	[/^row-start-/, 'row-start'],
	[/^row-end-/, 'row-end'],
	[/^justify-items-/, 'justify-items'],
	[/^justify-self-/, 'justify-self'],
	[/^justify-/, 'justify-content'],
	[/^items-/, 'align-items'],
	[/^content-/, 'align-content'],
	[/^self-/, 'align-self'],
	[/^place-content-/, 'place-content'],
	[/^place-items-/, 'place-items'],
	[/^place-self-/, 'place-self'],
	[/^gap-x-/, 'gap-x'],
	[/^gap-y-/, 'gap-y'],
	[/^gap-/, 'gap'],

	[/^leading-/, 'line-height'],
	[/^tracking-/, 'letter-spacing'],
	[
		/^(underline|overline|line-through|no-underline)$/,
		'text-decoration-line',
	],
	[/^underline-offset-/, 'text-underline-offset'],
	[/^(italic|not-italic)$/, 'font-style'],
	[/^(uppercase|lowercase|capitalize|normal-case)$/, 'text-transform'],
	[/^whitespace-/, 'white-space'],
	[/^break-(normal|words|all|keep)$/, 'word-break'],
	[/^align-/, 'vertical-align'],
	[/^list-(inside|outside)$/, 'list-style-position'],
	[/^list-/, 'list-style-type'],
	[/^indent-/, 'text-indent'],
	[/^truncate$/, 'truncate'],
	[/^(sr-only|not-sr-only)$/, 'sr'],

	[
		/^bg-(no-repeat|repeat|repeat-x|repeat-y|repeat-round|repeat-space)$/,
		'bg-repeat',
	],
	[/^bg-(auto|cover|contain)$/, 'bg-size'],
	[/^bg-(fixed|local|scroll)$/, 'bg-attachment'],
	[/^bg-(clip|origin)-/, 'bg-clip'],
	[/^bg-(none|gradient-|linear-|radial-|conic-)/, 'bg-image'],

	[/^ring-offset-/, 'ring-offset'],
	[/^ring-(inset|\d+|\[)/, 'ring-w'],
	[/^ring-/, 'ring-color'],
	[/^outline-(none|hidden|solid|dashed|dotted|double)$/, 'outline-style'],
	[/^outline-offset-/, 'outline-offset'],
	[/^outline-(\d+|\[)/, 'outline-w'],
	[/^outline-/, 'outline-color'],
	[/^opacity-/, 'opacity'],
	[/^shadow/, 'shadow'],
	[/^cursor-/, 'cursor'],
	[/^pointer-events-/, 'pointer-events'],
	[/^select-/, 'user-select'],
	[/^resize/, 'resize'],
	[/^appearance-/, 'appearance'],
	[/^object-(contain|cover|fill|none|scale-down)$/, 'object-fit'],
	[/^object-/, 'object-position'],
	[/^overflow-x-/, 'overflow-x'],
	[/^overflow-y-/, 'overflow-y'],
	[/^overflow-/, 'overflow'],
	[/^fill-/, 'fill'],
	[/^stroke-(\d+|\[length:)/, 'stroke-w'],
	[/^stroke-/, 'stroke'],

	[/^transition/, 'transition'],
	[/^duration-/, 'duration'],
	[/^ease-/, 'ease'],
	[/^delay-/, 'delay'],
	[/^animate-/, 'animate'],
	[/^origin-/, 'transform-origin'],
	[/^-?translate-x-/, 'translate-x'],
	[/^-?translate-y-/, 'translate-y'],
	[/^-?translate-/, 'translate'],
	[/^-?rotate-/, 'rotate'],
	[/^scale-x-/, 'scale-x'],
	[/^scale-y-/, 'scale-y'],
	[/^scale-/, 'scale'],

	[/^hairline$/, 'border-w'],
];

const OVERRIDES: Record<string, string[]> = {
	p: ['px', 'py', 'pt', 'pr', 'pb', 'pl', 'ps', 'pe'],
	px: ['pl', 'pr', 'ps', 'pe'],
	py: ['pt', 'pb'],
	m: ['mx', 'my', 'mt', 'mr', 'mb', 'ml', 'ms', 'me'],
	mx: ['ml', 'mr', 'ms', 'me'],
	my: ['mt', 'mb'],
	inset: ['inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'],
	'inset-x': ['left', 'right'],
	'inset-y': ['top', 'bottom'],
	gap: ['gap-x', 'gap-y'],
	overflow: ['overflow-x', 'overflow-y'],
	size: ['w', 'h'],
	'border-w': [
		'border-w-x',
		'border-w-y',
		'border-w-t',
		'border-w-r',
		'border-w-b',
		'border-w-l',
	],
	'border-w-x': ['border-w-l', 'border-w-r'],
	'border-w-y': ['border-w-t', 'border-w-b'],
	'border-color': [
		'border-color-x',
		'border-color-y',
		'border-color-t',
		'border-color-r',
		'border-color-b',
		'border-color-l',
	],
	rounded: [
		'rounded-t',
		'rounded-r',
		'rounded-b',
		'rounded-l',
		'rounded-tl',
		'rounded-tr',
		'rounded-br',
		'rounded-bl',
	],
	'rounded-t': ['rounded-tl', 'rounded-tr'],
	'rounded-r': ['rounded-tr', 'rounded-br'],
	'rounded-b': ['rounded-bl', 'rounded-br'],
	'rounded-l': ['rounded-tl', 'rounded-bl'],
};

const COLOR_FN =
	/^(#|rgba?\(|hsla?\(|oklch\(|oklab\(|lab\(|lch\(|color\(|color-mix\()/;
const COLOR_KEYWORDS = new Set([
	'transparent',
	'current',
	'currentColor',
	'inherit',
]);
const LENGTH =
	/^-?[\d.]+(px|rem|em|%|ch|ex|vh|vw|svh|dvh|lvh|svw|dvw|cqi|cqw|cqh|cqb|pt|pc|cm|mm|in|q)?$/;

function looksLikeColor(value: string): boolean {
	return COLOR_FN.test(value) || COLOR_KEYWORDS.has(value);
}

function looksLikeLength(value: string): boolean {
	return LENGTH.test(value) || /^(calc|clamp|min|max)\(/.test(value);
}

function arbitraryGroup(
	value: string,
	colourGroup: string,
	lengthGroup: string
): string | null {
	const inner = value.slice(1, -1).trim();
	if (inner.startsWith('length:') || inner.startsWith('size:'))
		return lengthGroup;
	if (inner.startsWith('color:')) return colourGroup;
	if (looksLikeColor(inner)) return colourGroup;
	if (looksLikeLength(inner)) return lengthGroup;
	return null;
}

function splitVariants(cls: string): { variants: string[]; base: string } {
	const parts: string[] = [];
	let depth = 0;
	let start = 0;

	for (let i = 0; i < cls.length; i++) {
		const c = cls[i];
		if (c === '[' || c === '(') depth++;
		else if (c === ']' || c === ')') depth--;
		else if (c === ':' && depth === 0) {
			parts.push(cls.slice(start, i));
			start = i + 1;
		}
	}
	parts.push(cls.slice(start));

	return { variants: parts.slice(0, -1), base: parts[parts.length - 1] };
}

function borderGroup(base: string): string {
	const rest = base.slice('border-'.length);
	if (base === 'border') return 'border-w';
	if (BORDER_STYLES.has(rest)) return 'border-style';
	if (rest === 'collapse' || rest === 'separate') return 'border-collapse';
	if (rest.startsWith('spacing')) return 'border-spacing';

	const m = /^([xytrbles])(?:-(.*))?$/.exec(rest);
	if (m) {
		const side = SIDES[m[1]];
		const value = m[2];
		if (value === undefined || /^\d+$/.test(value))
			return `border-w${side}`;
		if (value.startsWith('[')) {
			const g = arbitraryGroup(
				value,
				`border-color${side}`,
				`border-w${side}`
			);
			return g ?? `border-arbitrary${side}-${value}`;
		}
		return `border-color${side}`;
	}
	if (/^\d+$/.test(rest)) return 'border-w';
	if (rest.startsWith('[')) {
		const g = arbitraryGroup(rest, 'border-color', 'border-w');
		return g ?? `border-arbitrary-${rest}`;
	}
	return 'border-color';
}

function roundedGroup(base: string): string {
	const rest = base.slice('rounded'.length).replace(/^-/, '');
	const m = /^(tl|tr|br|bl|ss|se|ee|es|t|r|b|l|s|e)(?:-|$)/.exec(rest);
	return m ? `rounded-${m[1]}` : 'rounded';
}

function groupOf(base: string): string | null {
	if (base.startsWith('[') && base.endsWith(']')) {
		const inner = base.slice(1, -1);
		const i = inner.indexOf(':');
		return i > 0 ? `prop:${inner.slice(0, i)}` : null;
	}

	if (base === 'border' || base.startsWith('border-'))
		return borderGroup(base);
	if (base === 'rounded' || base.startsWith('rounded-'))
		return roundedGroup(base);

	if (base.startsWith('font-')) {
		const rest = base.slice(5);
		if (FONT_WEIGHTS.has(rest) || /^\[\d/.test(rest)) return 'font-weight';
		return 'font-family';
	}

	if (base.startsWith('text-')) {
		const rest = base.slice(5);
		if (TEXT_ALIGN.has(rest)) return 'text-align';
		if (TEXT_SIZES.has(rest)) return 'font-size';
		if (rest === 'ellipsis' || rest === 'clip') return 'text-overflow';
		if (/^(wrap|nowrap|balance|pretty)$/.test(rest)) return 'text-wrap';
		if (rest.startsWith('['))
			return arbitraryGroup(rest, 'text-color', 'font-size');
		return 'text-color';
	}

	if (base.startsWith('decoration-')) {
		const rest = base.slice(11);
		if (/^(solid|double|dotted|dashed|wavy)$/.test(rest))
			return 'text-decoration-style';
		if (/^(\d+|auto|from-font|\[length:)/.test(rest))
			return 'text-decoration-thickness';
		return 'text-decoration-color';
	}

	if (base.startsWith('bg-')) {
		for (const [re, g] of RULES) if (re.test(base)) return g;
		const rest = base.slice(3);
		if (rest.startsWith('['))
			return arbitraryGroup(rest, 'bg-color', 'bg-image');
		return 'bg-color';
	}

	for (const [re, g] of RULES) {
		const m = re.exec(base);
		if (m) return g.replace(/\$1/, m[1] ?? '');
	}

	return null;
}

export default function cn(...inputs: ClassValue[]): string {
	const classes = inputs
		.filter(Boolean)
		.join(' ')
		.split(/\s+/)
		.filter(Boolean);

	const out: (string | null)[] = [];
	const seen = new Map<string, number>();

	for (const cls of classes) {
		const { variants, base } = splitVariants(cls);
		const bare = base.replace(/^!/, '').replace(/!$/, '');
		const scope = variants.slice().sort().join(':');
		const group = groupOf(bare) ?? bare;

		for (const g of [group, ...(OVERRIDES[group] ?? [])]) {
			const previous = seen.get(`${scope}|${g}`);
			if (previous !== undefined) {
				out[previous] = null;
				seen.delete(`${scope}|${g}`);
			}
		}

		seen.set(`${scope}|${group}`, out.length);
		out.push(cls);
	}

	return out.filter(Boolean).join(' ');
}
