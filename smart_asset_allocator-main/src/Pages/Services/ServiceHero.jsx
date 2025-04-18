export default function ServiceHero({ title, subtitle, tagline }) {
  return (
    <div className="mb-10 text-center px-4">
      <h1 className="font-palanquin text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
        {title}
        <span className="block sm:inline m-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {subtitle}
        </span>
        {tagline && (
          <div className="mt-3 text-sm sm:text-base md:text-lg italic text-blue-600">
            {tagline}
          </div>
        )}
      </h1>
    </div>
  );
}
