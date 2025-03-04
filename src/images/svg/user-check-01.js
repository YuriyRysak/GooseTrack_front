import Svg, { Path } from 'react-native-svg';

const AddAvatarIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 18L18 20L22 16"
        stroke="#84828A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21V21"
        stroke="#84828A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 12C12.4853 12 14.5 9.98528 14.5 7.5C14.5 5.01472 12.4853 3 10 3C7.51472 3 5.5 5.01472 5.5 7.5C5.5 9.98528 7.51472 12 10 12Z"
        stroke="#84828A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AddAvatarIcon;
