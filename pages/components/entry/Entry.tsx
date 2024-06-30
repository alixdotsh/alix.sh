const Entry = ({
  name,
  href,
  year,
  summary,
}: {
  name: string;
  href?: string;
  year?: number;
  summary: string;
}) => {
  return (
    <div>
      <a href={href} className="underline font-bold text-alix2-secondary decoration-alix2-accent2">
        {name}
        {year && ` // ${year}`}
      </a>
      <p className="text-alix2-secondary">{summary}</p>
    </div>
  );
};

export default Entry;
