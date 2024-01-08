import avatarImg from '../assets/placeholder.jpg'

// interface AvatarProps {
//   src: string | null | undefined;
// }

const Avatar: React.FC = () => {
  return ( 
    <img
      className="rounded-full" 
      height="30" 
      width="30" 
      alt="Avatar" 
      src={avatarImg}
    />
   );
}
 
export default Avatar;