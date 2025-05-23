import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import FeaturedGroupCard from "./FeaturedGroupCard";
import { Bounce } from "react-awesome-reveal";
const allGroupPromise = fetch(
  "https://assignment-10-server-cyan-one.vercel.app/groups/"
).then((res) => res.json());
const FeaturedGroup = () => {
  const allGroupData = use(allGroupPromise);
  const featuredGroupData = allGroupData.slice(0, 6);
  // console.log(featuredGroupData);
  return (
    <div className="py-24">
      <Bounce duration={3000}>
      <h1 className="text-4xl lg:text-6xl font-bold text-pink-600 text-center py-12">
        Featured Group
      </h1>
</Bounce>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
        {featuredGroupData.map((featureGroup) => (
          <FeaturedGroupCard
            key={featureGroup._id}
            featureGroup={featureGroup}
          ></FeaturedGroupCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;
