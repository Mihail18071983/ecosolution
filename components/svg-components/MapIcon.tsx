
interface IProps {
    width: number;
    height: number;
    className?: string;
    stroke?:string

}

const MapIcon = ({height, width, className, stroke}:IProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.29 8.28v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34c.51-.29 1.36-.32 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48c.55-.32 1.01-1.1 1.01-1.74V6.99c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05L9.52 4.02c-.53-.26-1.38-.24-1.89.05L3.3 6.55c-.56.32-1.01 1.1-1.01 1.73ZM8.56 4.5v13M15.73 7.12V20.5"
    />
  </svg>
)
export default MapIcon
