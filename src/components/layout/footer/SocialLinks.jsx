const SocialLinks = ({ links, size = 13 }) => (
  <ul className="flex gap-2">
    {links.map(({ icon: Icon, url }, i) => (
      <li key={url}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            size-[20px] rounded-full
            flex items-center justify-center
            bg-text text-white
          "
        >
          <Icon size={size} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
