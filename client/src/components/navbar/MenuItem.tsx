interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  return (
    <div className="p-1">

      <div
        onClick={onClick}
        className="
        p-2 
        rounded-md 
        hover:bg-neutral-100 
        transition
      "
      >
        {label}
      </div>
    </div>
  );
}

export default MenuItem;