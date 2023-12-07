interface IProps {
    width: number;
    height: number;
    className?: string;
    stroke?:string

}

const InstagramIcon = ({height, width, className, stroke}:IProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.636 7h.012"
    />
  </svg>
)
export default InstagramIcon