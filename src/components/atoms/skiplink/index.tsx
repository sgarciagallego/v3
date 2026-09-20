export default function SkipLink() {
	return (
		<a
			href="#skip-to-content"
			className="hairline absolute top-x5 left-x5 inline-block not-focus-visible:h-px not-focus-visible:w-px not-focus-visible:overflow-hidden not-focus-visible:whitespace-nowrap rounded-parent border-border bg-layer px-x6 py-x5 text-tone-100 underline decoration-underline underline-offset-[var(--spacing-x3)] [text-decoration-thickness:var(--spacing-x1)] not-focus-visible:[clip-path:inset(50%)] not-focus-visible:[clip:rect(0_0_0_0)] focus-visible:outline-none"
		>
			Skip to content
		</a>
	);
}
