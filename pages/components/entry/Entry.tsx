const Entry = ({ name, href, year, summary }: { name: string, href?: string, year?: number, summary: string }) => {
	return (
		<div>
			<a href={href} className="underline decoration-rose-500">{name}{year && ` // ${year}`}</a>
    	<p className="text-neutral-400">{summary}</p>
		</div>
	)
}

export default Entry