import Image from "next/image";
import Introduction from "@/components/introduction";
import ProfilePic from "../public/profile-pic.jpg";

function Home() {
  return (
    <div className="customContainer">
      <div>
        <Introduction />
      </div>
      <div>
        <Image
          src={ProfilePic}
          alt="myPic"
          width={500}
          height={500}
          className="customImage"
        ></Image>
      </div>
    </div>
  );
}
export default Home;
