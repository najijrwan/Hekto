import Icon from '@components/Icon.jsx'

const SocialLinks = ({ links }) => (

  <ul>

    {links.map(({ iconName, url }, i) => (
      <li key={i}>

        <button
          className="
            size-[20px] rounded-full
            text-white bg-text">
          <Icon
            name={iconName}
            size={13}
            className="m-auto"
            uniqueId={i}
          />
        </button>

      </li>
    ))}

  </ul>

);

export default SocialLinks;