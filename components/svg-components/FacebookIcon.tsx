interface IProps {
    width: number;
    height: number;
    className?: string;
    stroke?:string

}

const FacebookIcon = ({height, width, className, stroke}:IProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
    />
  </svg>
)
export default FacebookIcon