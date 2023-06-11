const Entry = ({ name, href, year, summary }: { name: string, href?: string, year?: number, summary: string }) => {
	return (
		<div>
			<a href={href} className="underline text-alix-50 decoration-alix-300">{name}{year && ` // ${year}`}</a>
    	<p className="text-alix-200">{summary}</p>
		</div>
	)
}

export default Entry