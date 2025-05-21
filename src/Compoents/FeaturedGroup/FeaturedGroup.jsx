
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import FeaturedGroupCard from './FeaturedGroupCard';
const allGroupPromise=fetch('http://localhost:3000/groups/').then((res)=>res.json())
const FeaturedGroup = () => {
    const allGroupData=use(allGroupPromise)
    const featuredGroupData=allGroupData.slice(0,6);
    console.log(featuredGroupData);
    return (
        <div className='py-24'>
            <h1 className='text-6xl font-bold text-center py-12'>Featured Group</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6'>
                {
                    featuredGroupData.map((featureGroup)=><FeaturedGroupCard
                    key={featureGroup._id}
                    featureGroup={featureGroup}
                    ></FeaturedGroupCard>)
                }
            </div>            
        </div>
    );
};

export default FeaturedGroup;