import AvatarIcon from "../../shared/ui/icons/AvatarIcon";
import SearchIcon from "../../shared/ui/icons/SearchIcon";
import ItubeIcon from "../../shared/ui/icons/youtubeicon";
import VideoCart from "../../shared/ui/content/VideoCart";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 mt-3">
        <div>
          <ItubeIcon />
        </div>
        <div className="items-center hidden sm:flex">
          <input
            placeholder="Введите запрос ..."
            className=" w-[clamp(50px,35vw,500px)] p-1 bg-transparent border-2 border-black-500/75 rounded-l-full px-3 py-1"
            type="text"
          />
          <button className="flex items-center rounded-r-full bg-[#f8f8f8] p-1">
            <SearchIcon />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="block sm:hidden ">
            <SearchIcon />
          </button>
          <AvatarIcon />
        </div>
      </div>

      
    </>
  );
};
export default Header;
