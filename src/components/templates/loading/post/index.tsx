// biome-ignore-all lint/suspicious/noArrayIndexKey: fixed-length skeleton, nothing to key on.
import cn from '@/utils/cn';

const bar = 'absolute top-1/2 h-[1em] -translate-y-1/2 rounded-parent';

export default function PostSkeleton() {
	return (
		<div className="h-full">
			<div className="relative mb-x4 h-[1.15em] w-[80%] text-h1">
				<div className={cn(bar, 'w-full bg-border')} />
			</div>
			<div className="relative mb-x6 h-[1.15em] w-[60%] text-h4">
				<div className={cn(bar, 'w-full bg-border')} />
			</div>
			<div className="my-x6 flex h-x7 w-fit items-center gap-x5">
				<div className="aspect-square h-full w-auto rounded-parent bg-border" />
				<div>
					<div className="relative h-[1.75em] w-x8 text-base">
						<div className={cn(bar, 'w-full bg-border')} />
					</div>
					<div className="relative h-[1.75em] w-x8 text-sm">
						<div className={cn(bar, 'w-full bg-border')} />
					</div>
				</div>
			</div>
			<div>
				{[...Array(12)].map((_, i) => {
					const line = i + 1;

					return (
						<div key={i} className="relative h-[1.75em] text-base">
							<div
								className={cn(
									bar,
									line % 5 === 4 ? 'w-[85%]' : 'w-full',
									line % 5 === 0
										? 'bg-transparent'
										: 'bg-border'
								)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
